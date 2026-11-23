import { profile } from "./profile";

/**
 * Contact form settings.
 *
 * Messages are delivered to your inbox by FormSubmit (https://formsubmit.co), a free
 * form-to-email service with no account needed. The FIRST message sent triggers an
 * activation email to the address below; click "Activate Form" in it once, and every
 * message after that is delivered normally.
 *
 * Optional: after activating, FormSubmit gives you a random alias string. Replace the
 * email in the endpoint with it to keep your address out of the page source.
 */
export const contactForm = {
  endpoint: `https://formsubmit.co/ajax/${profile.email}`,
  subject: "New message from your portfolio",
};
