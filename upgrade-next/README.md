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
- `/work` Portfolio index
- `/work/nicholas-ward` First documented case study
- `/contact` Contact
- `/success` Contact success

## Editable timeline

Edit timeline entries in:

- `data/timeline.ts`

The timeline renders in:

- `app/page.tsx`
- `app/about/page.tsx`

## Contact route

`POST /api/contact` validates inputs, includes a basic honeypot, and sends through Resend.
Copy `.env.example` to `.env.local`, verify the sending domain in Resend, then set the three values before deployment. The form deliberately returns an error until configured rather than pretending a message has been sent.

## Before launch

- Add verified client case studies in `data/work.ts` (do not manufacture results or testimonials).
- Configure Resend environment variables in the host.
- Add analytics only after choosing a provider and publishing a matching privacy notice.
