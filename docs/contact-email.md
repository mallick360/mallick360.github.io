# Contact email

The React/Vite portfolio uses `@formspree/react` and the Formspree form `xwlolbvg`:

https://formspree.io/f/xwlolbvg

`src/constants/content.ts` stores the form ID. `src/sections/Contact.tsx` uses Formspree's `useForm` hook and `ValidationError` component. The form submits `name`, `email`, `subject`, and `message`, shows field-level and general errors, disables submission while sending, and displays confirmation only after Formspree accepts the request. A “Send another message” action resets the form. A direct-email link remains available.

The form also declares its POST action explicitly. Hosting stays static: no server function, private API key, or EmailJS service is required. Configure the recipient inbox and notifications in your Formspree dashboard.

## Verify delivery

Run `node tests/contact.test.mjs` and `npm run build`, then submit the contact form from the site. Check the matching submission in the Formspree dashboard and the configured recipient inbox, including spam/junk. Successful submission confirms provider acceptance, not inbox delivery. No real submission is sent by automated checks.

If delivery fails, review Formspree's field/general errors, confirm that the form is active and its recipient notification settings are correct, and check any domain restrictions and submission limits in the dashboard.

Reference: [Formspree React integration](https://github.com/formspree/formspree-js/tree/main/packages/formspree-react).
