# Nicholas Ward Upgrade (Next.js)

This is a non-destructive full-site upgrade path that sits alongside the current static site.

## Run locally

```bash
cd upgrade-next
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- `/` Home
- `/about` About
- `/contact` Contact
- `/success` Contact success

## Editable timeline

Edit timeline entries in:

- `data/timeline.ts`

The timeline renders in:

- `app/page.tsx`
- `app/about/page.tsx`

## Contact route

`POST /api/contact` validates inputs, logs payloads, and redirects to `/success`.
Replace this with your email/CRM integration.
