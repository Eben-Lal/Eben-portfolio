import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { contactForm } from "../data/contact";
import { profile } from "../data/profile";
import { CheckIcon } from "./Icons";

const empty = { name: "", email: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter a valid email address, like name@example.com.";
  if (values.message.trim().length < 10) errors.message = "Write a message of at least 10 characters.";
  return errors;
}

/**
 * Contact form that emails messages via FormSubmit (see src/data/contact.js).
 * Visiting #contact-form (the "Let's connect" buttons) focuses the first field.
 */
export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [honey, setHoney] = useState("");
  const nameRef = useRef(null);

  useEffect(() => {
    const focusIfTargeted = () => {
      if (window.location.hash === "#contact-form") {
        // Wait for the smooth scroll to settle before moving focus.
        setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 500);
      }
    };
    focusIfTargeted();
    window.addEventListener("hashchange", focusIfTargeted);
    // Same-hash clicks don't fire hashchange, so listen for clicks on those links too.
    const onClick = (e) => {
      if (e.target.closest?.('a[href="#contact-form"]')) setTimeout(focusIfTargeted, 0);
    };
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", focusIfTargeted);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`cf-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    if (honey) {
      setStatus("sent"); // bot filled the hidden field: pretend success, send nothing
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _subject: `${contactForm.subject}: ${values.name.trim()}`,
          _replyto: values.email.trim(),
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === "false") throw new Error(data.message || "Request failed");
      setStatus("sent");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  };

  const field =
    "mt-2 block w-full rounded-xl border bg-band px-4 py-3 text-base text-band-ink placeholder:text-band-muted/70 transition-colors focus:border-band-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-band-accent";
  const border = (name) => (errors[name] ? "border-[#F59E8B]" : "border-band-line");

  return (
    <div id="contact-form" className="scroll-mt-28 rounded-[1.5rem] border border-band-line bg-band-ink/[0.04] p-6 sm:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <m.div
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[22rem] flex-col items-start justify-center"
            role="status"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-band-ink text-band">
              <CheckIcon />
            </span>
            <h3 className="mt-5 text-2xl font-bold tracking-[-0.02em]">Message sent</h3>
            <p className="mt-2 max-w-[36ch] text-band-muted">Thanks for getting in touch. Your message is on its way to my inbox.</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex min-h-11 items-center rounded-full border border-band-line px-5 text-sm font-semibold transition-colors hover:border-band-ink"
            >
              Send another message
            </button>
          </m.div>
        ) : (
          <m.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={onSubmit} noValidate>
            <h3 className="text-xl font-bold tracking-[-0.015em]">Send me a message</h3>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="text-sm font-semibold">Name</label>
                <input
                  ref={nameRef}
                  id="cf-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "cf-name-error" : undefined}
                  className={`${field} ${border("name")}`}
                />
                {errors.name && <p id="cf-name-error" className="mt-1.5 text-sm text-[#F59E8B]">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="cf-email" className="text-sm font-semibold">Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={150}
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "cf-email-error" : undefined}
                  className={`${field} ${border("email")}`}
                />
                {errors.email && <p id="cf-email-error" className="mt-1.5 text-sm text-[#F59E8B]">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="cf-message" className="text-sm font-semibold">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                maxLength={2000}
                value={values.message}
                onChange={update("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "cf-message-error" : undefined}
                className={`${field} ${border("message")} resize-y`}
              />
              {errors.message && <p id="cf-message-error" className="mt-1.5 text-sm text-[#F59E8B]">{errors.message}</p>}
            </div>

            {/* Spam trap: hidden from people, often filled in by bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label htmlFor="cf-company">Company</label>
              <input id="cf-company" name="_honey" type="text" tabIndex={-1} autoComplete="off" value={honey} onChange={(e) => setHoney(e.target.value)} />
            </div>

            {status === "error" && (
              <p role="alert" className="mt-5 rounded-xl border border-[#F59E8B]/50 bg-[#F59E8B]/10 px-4 py-3 text-sm leading-relaxed">
                Your message couldn’t be sent. Check your connection and try again, or email me directly at{" "}
                <a href={`mailto:${profile.email}`} className="font-semibold underline underline-offset-2">{profile.email}</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-band-ink px-6 text-[0.9375rem] font-semibold text-band transition-colors hover:bg-signal disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
