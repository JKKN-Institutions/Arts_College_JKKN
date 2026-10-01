import { describe, expect, it } from 'vitest';
import { descriptionToPlainText, sanitizeJobDescription } from './sanitize';

describe('sanitizeJobDescription', () => {
  it('strips class and style attributes', () => {
    expect(sanitizeJobDescription('<p class="x" style="color:red">Hi</p>')).toBe('<p>Hi</p>');
  });

  it('removes scripts, iframes and event handlers', () => {
    expect(sanitizeJobDescription('<script>alert(1)</script><p>ok</p>')).toBe('<p>ok</p>');
    expect(sanitizeJobDescription('<iframe src="https://evil.test"></iframe><p>ok</p>')).toBe('<p>ok</p>');
    expect(sanitizeJobDescription('<img src=x onerror=alert(1)>')).toBe('');
  });

  it('unwraps unsafe or junk links but keeps their text', () => {
    expect(sanitizeJobDescription('<a href="javascript:alert(1)">click</a>')).toBe('click');
    expect(sanitizeJobDescription('<a class="text-blue-600" href="http://M.Sc">M.Sc</a>')).toBe('M.Sc');
  });

  it('closes a safe link correctly after an unwrapped junk link at the same depth', () => {
    const out = sanitizeJobDescription(
      '<p><a href="http://M.Sc">M.Sc</a> required. See <a href="https://jkkn.ac.in">site</a>.</p><p>Rest</p>',
    );
    expect(out).not.toContain('</span>');
    expect(out).toContain('rel="noopener noreferrer nofollow">site</a>.</p><p>Rest</p>');
  });

  it('keeps https links, opening them safely in a new tab', () => {
    expect(sanitizeJobDescription('<a href="https://jkkn.ac.in">site</a>')).toBe(
      '<a href="https://jkkn.ac.in" target="_blank" rel="noopener noreferrer nofollow">site</a>',
    );
  });

  it('keeps mailto links without target', () => {
    expect(sanitizeJobDescription('<a target="_blank" href="mailto:arts@jkkn.ac.in">mail</a>')).toBe(
      '<a href="mailto:arts@jkkn.ac.in">mail</a>',
    );
  });

  it('drops empty paragraphs left by the MyJKKN editor', () => {
    expect(sanitizeJobDescription('<p><strong>About:</strong></p><p></p><p> </p><p>Text</p>')).toBe(
      '<p><strong>About:</strong></p><p>Text</p>',
    );
  });

  it('keeps list structure and handles empty input', () => {
    expect(sanitizeJobDescription('<ul><li><strong>A</strong></li></ul>')).toBe('<ul><li><strong>A</strong></li></ul>');
    expect(sanitizeJobDescription(null)).toBe('');
  });
});

describe('descriptionToPlainText', () => {
  it('flattens HTML into readable text with decoded entities', () => {
    expect(descriptionToPlainText('<p>Hello &amp; welcome</p><p>Line&nbsp;two</p>')).toBe('Hello & welcome Line two');
  });

  it('drops script content', () => {
    expect(descriptionToPlainText('<script>alert(1)</script><p>ok</p>')).toBe('ok');
  });

  it('truncates on a word boundary with an ellipsis', () => {
    const text = descriptionToPlainText(`<p>${'alpha '.repeat(50)}</p>`, 40);
    expect(text.length).toBeLessThanOrEqual(40);
    expect(text.endsWith('alpha…')).toBe(true);
  });

  it('returns empty string for empty input', () => {
    expect(descriptionToPlainText(null)).toBe('');
  });
});
