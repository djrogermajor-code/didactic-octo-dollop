# Antigravity Marketplace MVP

This lightweight marketplace MVP runs entirely in the browser with **zero setup**. It uses Tailwind CDN + vanilla JS for quick deployment in Antigravity.

## Files
- `index.html` – UI shell and layout.
- `app.js` – Data loading, request handling, and tracking.
- `providers.json` – Provider data (edit this file to add services).

## How to customize
1. **Add providers**: edit `providers.json` and update `id`, `name`, `description`, `tags`, and `stripeCheckoutUrl`.
2. **Hook up delivery**: replace the `saveRequest` function in `app.js` to send to a webhook, email API, or storage service.
3. **AI matching**: use the `aiHooks.matchProviders` function in `app.js` as the integration point for GPT/OpenPipe/Together.

## Notes
- Requests are stored in `localStorage` under the key `marketplace_requests`.
- Tracking is implemented via `console.log` in `app.js` (swap for analytics SDKs as needed).
