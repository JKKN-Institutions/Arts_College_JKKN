// Call / WhatsApp same-tap submit (2026-11-04, ported from the Dental site where the user tested it
// live), shared by the two forms that post to the CRM: ArtsEnquiryForm (/api/enquiry) and
// CityEnquiryForm (/api/city-enquiry). One copy, so the two forms cannot drift.
//
// ONE tap on "Call Counsellor" / "Chat on WhatsApp": check the 3 boxes, send the lead with a
// keepalive fetch (no waiting), open the dialer / WhatsApp at once - a browser lets a page open
// another app only inside the visitor's tap. The answer arrives after: a CRM-accepted lead (a 409
// "already applied" included - that parent is in the CRM, so they still go straight to the app) is
// remembered on this browser, so the gate never stops them again.
//
// The form keeps action={formAction}: preventDefault on submit also stops React's form action, so
// the server action runs only when JavaScript is off - the no-JS path stays intact.

"use client"

import { useRef, useState, type FormEvent } from "react"
import { ENQUIRY_DONE_KEY, writeStore } from "@/lib/enquiry-store"
import { sendGaEvent } from "@/lib/ga-event"
import { sendMetaLead } from "@/lib/meta-lead"
import { GATE_PHONE_DISPLAY, telGateUrl, whatsappGateUrl, type GateIntent, type GateTopic } from "@/lib/call-gate"

/** What /api/enquiry and /api/city-enquiry answer - the same object their server actions return. */
export type GateAnswer = {
  success: boolean
  tracking?: { programme_id?: string; duplicate?: boolean }
}

type GatePhase =
  | { step: "form" }
  | { step: "opened"; result: "waiting" | "saved" | "failed"; programmeId: string; intent: GateIntent }

/** GA4 event-name stem per app: event NAMES split call from WhatsApp in every report. */
const eventFor = (intent: GateIntent) => (intent === "call" ? "gate_call" : "gate_wa")

/** Opens the dialer / WhatsApp. Called inside the visitor's tap, and again from the fallback button. */
function openApp(programmeId: string, intent: GateIntent, topic?: GateTopic) {
  if (intent === "call") {
    window.location.assign(telGateUrl)
    return
  }
  const url = whatsappGateUrl(programmeId, window.location.pathname, topic)
  // A new tab keeps this page (and the request still in flight) alive; a blocked tab falls back to
  // the same tab, where keepalive still lets the request finish.
  const tab = window.open(url, "_blank")
  if (tab) tab.opener = null
  else window.location.assign(url)
}

type Options = {
  /** "/api/enquiry" or "/api/city-enquiry" - no trailing slash (this site has trailingSlash off). */
  endpoint: string
  /** Inside a Call / WhatsApp gate: the one app this form opens. Left out: the button decides. */
  gate?: GateIntent
  /** What a WhatsApp gate was opened for (e.g. the brochure) - changes the WhatsApp text only. */
  topic?: GateTopic
  /** Non-personal GA4 params the gate events carry (source_page or city). Never a name or phone. */
  gaParams: Record<string, string>
  /** The CRM accepted the lead - fire the form's own lead_form_submit / lead_form_duplicate. */
  onAccepted: (answer: GateAnswer) => void
  /** The lead did not land - fire the form's own lead_form_error. */
  onFailed: () => void
}

export function useGateSubmit({ endpoint, gate, topic, gaParams, onAccepted, onFailed }: Options) {
  const [phase, setPhase] = useState<GatePhase>({ step: "form" })
  // Which of the two buttons was pressed. Read from SubmitEvent.submitter where the browser has it;
  // this ref (set on the button's own click) covers the rest. Enter in a box = the first button, Call.
  const chosen = useRef<GateIntent>(gate ?? "call")

  const choose = (intent: GateIntent) => {
    chosen.current = intent
  }

  // A name of spaces passes minLength, so the form sets its own message. It is cleared on the next
  // keystroke: a custom message left in place would block every later tap before onSubmit runs.
  const onInput = (e: FormEvent<HTMLFormElement>) => {
    const box = e.target as HTMLInputElement
    if (box.name === "name") box.setCustomValidity("")
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null
    const fromButton =
      submitter?.value === "call" || submitter?.value === "whatsapp" ? (submitter.value as GateIntent) : null
    const intent: GateIntent = gate ?? fromButton ?? chosen.current
    const gateEvent = eventFor(intent)
    const params = { ...gaParams, page_path: window.location.pathname }
    const nameBox = form.elements.namedItem("name") as HTMLInputElement | null
    if (nameBox) nameBox.setCustomValidity(nameBox.value.trim().length < 2 ? "Please enter your full name." : "")
    // Same three rules as the server (name, 10-digit mobile from 6-9, a programme). Checked here
    // because the app opens before the server has answered.
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const programmeId = String(data.get("programme") ?? "")
    const body = new URLSearchParams()
    data.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value)
    })
    const request = fetch(endpoint, { method: "POST", body, keepalive: true })

    sendGaEvent(`${gateEvent}_launch`, params)
    openApp(programmeId, intent, topic)
    setPhase({ step: "opened", result: "waiting", programmeId, intent })

    request
      .then((res) => res.json() as Promise<GateAnswer>)
      .then((answer) => {
        if (!answer.success) throw new Error("not accepted")
        writeStore(ENQUIRY_DONE_KEY, new Date().toISOString())
        onAccepted(answer)
        // Meta pixel "Lead" for a NEW lead only, not a 409 repeat (lib/meta-lead.ts). gaParams holds the
        // page's CRM tag - never a name or phone.
        if (!answer.tracking?.duplicate) sendMetaLead(gaParams.source_page ?? "unknown")
        sendGaEvent(`${gateEvent}_lead`, params)
        setPhase((p) => (p.step === "opened" ? { ...p, result: "saved" } : p))
      })
      .catch(() => {
        onFailed()
        sendGaEvent(`${gateEvent}_fail`, params)
        setPhase((p) => (p.step === "opened" ? { ...p, result: "failed" } : p))
      })
  }

  const retry = () => {
    if (phase.step !== "opened") return
    sendGaEvent(`${eventFor(phase.intent)}_fallback`, { ...gaParams, page_path: window.location.pathname })
    openApp(phase.programmeId, phase.intent, topic)
  }

  return { phase, choose, onInput, onSubmit, retry }
}

/** The 3-step strip: says what the buttons do (the old "We call in 24 hrs" step went with the
 *  24-hour callback, 2026-11-04). */
export function gateSteps(gate: GateIntent | undefined, firstStep: string): string[] {
  if (gate === "call") return ["Fill 3 details", "Tap Call Counsellor", "Talk to us now"]
  if (gate === "whatsapp") return ["Fill 3 details", "Tap Chat on WhatsApp", "Send the message"]
  return [firstStep, "Tap Call or WhatsApp", "Talk to us now"]
}

/** Two buttons on every page form and the Enquire Now popup; one inside a Call / WhatsApp gate. */
export function GateButtons({
  gate,
  disabled,
  onChoose,
}: {
  gate?: GateIntent
  disabled: boolean
  onChoose: (intent: GateIntent) => void
}) {
  const intents: GateIntent[] = gate ? [gate] : ["call", "whatsapp"]
  return (
    <>
      {intents.map((intent) => (
        <button
          key={intent}
          type="submit"
          name="cta"
          value={intent}
          disabled={disabled}
          onClick={() => onChoose(intent)}
          className={
            intent === "whatsapp"
              ? "w-full bg-[#25d366] hover:bg-[#1ebe5a] disabled:opacity-60 text-[#032816] font-bold py-4 rounded-full text-base transition-colors"
              : "w-full bg-[#0b6d41] hover:bg-[#095a36] disabled:opacity-60 text-white font-bold py-4 rounded-full text-base transition-colors"
          }
        >
          {disabled ? "Submitting…" : intent === "call" ? "Call Counsellor" : "Chat on WhatsApp"}
        </button>
      ))}
    </>
  )
}

/** After the tap: the app is opening; a second try if the phone ignored the first. */
export function GateOpenedPanel({
  intent,
  result,
  surface,
  onRetry,
}: {
  intent: GateIntent
  result: "waiting" | "saved" | "failed"
  surface: string
  onRetry: () => void
}) {
  const isCall = intent === "call"
  return (
    <div className={`${surface} space-y-4 text-center`} role="status" aria-live="polite">
      <p className="text-[#032816] text-lg font-semibold">
        {isCall ? "Opening your phone dialer…" : "Opening WhatsApp…"}
      </p>
      <p className="text-[#4b5563] text-sm">
        {isCall
          ? `Tap the green Call button on your phone to talk to our counsellor at ${GATE_PHONE_DISPLAY}.`
          : "Your message is typed in WhatsApp. Tap Send to reach our admission team."}
      </p>
      {/* A <button>, not an <a>: ConversionTracking counts <a> taps, and this second try must not
          count as a second call tap. */}
      <button
        type="button"
        onClick={onRetry}
        className={
          isCall
            ? "w-full bg-[#0b6d41] hover:bg-[#095a36] text-white font-bold py-4 rounded-full text-base transition-colors"
            : "w-full bg-[#25d366] hover:bg-[#1ebe5a] text-[#032816] font-bold py-4 rounded-full text-base transition-colors"
        }
      >
        {isCall ? `Did not open? Call ${GATE_PHONE_DISPLAY}` : "Did not open? Open WhatsApp"}
      </button>
      {result === "failed" && (
        <p className="text-[#b42318] text-sm" role="alert">
          Your details did not reach our system. Please tell the counsellor your name and course.
        </p>
      )}
    </div>
  )
}
