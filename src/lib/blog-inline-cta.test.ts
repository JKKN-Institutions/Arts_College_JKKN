// Blog inline enquiry box - where the CMS HTML is cut. Pure functions only (lead option 2, 2026-11-05).
import { describe, expect, it } from "vitest"
import { blockTagsBalanced, inlineCtaFor, splitBeforeNthH2 } from "./blog-inline-cta"

const BODY =
  '<h2 id="1-a">1. What is BCA</h2><p>Answer one.</p><table><tr><td>x</td></tr></table>' +
  '<h2 id="2-b">2. Eligibility</h2><p>Two.</p><h2 id="3-c">3. Fees</h2><p>Three.</p>'

describe("splitBeforeNthH2", () => {
  it("cuts just before the 2nd <h2> and loses nothing", () => {
    const parts = splitBeforeNthH2(BODY, 2)!
    expect(parts.before.endsWith("</table>")).toBe(true)
    expect(parts.after.startsWith('<h2 id="2-b">')).toBe(true)
    expect(parts.before + parts.after).toBe(BODY)
  })
  it("matches upper-case tags with attributes", () => {
    expect(splitBeforeNthH2('<H2>One</H2><p>a</p><H2 class="x">Two</H2>', 2)!.after).toBe('<H2 class="x">Two</H2>')
  })
  it("returns null when there is no Nth <h2>, for n below 2, or for empty html", () => {
    expect(splitBeforeNthH2(BODY, 4)).toBeNull()
    expect(splitBeforeNthH2(BODY, 1)).toBeNull()
    expect(splitBeforeNthH2("", 2)).toBeNull()
  })
  it("does not take <header> or escaped text for an <h2>", () => {
    expect(splitBeforeNthH2("<header>h</header><h2>One</h2><p>&lt;h2&gt; in text</p><h2>Two</h2>", 2)!.after).toBe("<h2>Two</h2>")
  })
  it("refuses a cut that would leave a block element open", () => {
    expect(splitBeforeNthH2('<div class="wrap"><h2>One</h2><p>a</p><h2>Two</h2><p>b</p></div>', 2)).toBeNull()
  })
})

describe("blockTagsBalanced", () => {
  it("does not confuse <pre> or <path> with <p>", () => {
    expect(blockTagsBalanced('<pre>code</pre><svg><path d="M0"/></svg><p>x</p>')).toBe(true)
  })
  it("sees an unclosed list", () => {
    expect(blockTagsBalanced("<ul><li>a</li>")).toBe(false)
  })
})

describe("inlineCtaFor", () => {
  it("splits every post before its 2nd <h2> and tags the source page with the slug", () => {
    const cta = inlineCtaFor("bca-colleges-in-tamil-nadu", BODY)!
    expect(cta.before! + cta.after!).toBe(BODY)
    expect(cta.sourcePage).toBe("blog-bca-colleges-in-tamil-nadu")
  })
  it("is null only when there is no slug", () => {
    expect(inlineCtaFor("", BODY)).toBeNull()
  })
  it("keeps the source tag short and never ends it on a dash", () => {
    const cta = inlineCtaFor("a-very-long-post-slug-about-arts-colleges-in-namakkal-and-more", BODY)!
    expect(cta.sourcePage.length).toBeLessThanOrEqual(45)
    expect(cta.sourcePage.endsWith("-")).toBe(false)
  })
  it("falls back to no split (box after the post) when the cut is unsafe or there is no html", () => {
    const wrapped = inlineCtaFor("x-post", "<div><h2>One</h2><h2>Two</h2></div>")!
    expect(wrapped.before).toBeNull()
    expect(inlineCtaFor("x-post", "")!.after).toBeNull()
  })
})
