# GGF Website Redesign — Progress Tracker

Static site on GitHub Pages.

- **`index.html`** — the client-facing progress page (the public link you share with GGF).
- **`tracker.html`** — your internal control panel: set each step's state and publish.
- **`progress.js`** — the single source of truth both pages read (`completed`, `inProgress`, `updated`).

## How you update it

1. Open **`tracker.html`** (works on phone or computer).
2. For each step, tap **In progress** or **Done** (tap again to clear it).
3. Tap **Publish to client**. The client page updates in ~1–2 minutes.

That's it — no tokens, no setup, no terminal. Your edits autosave in your browser until you publish.

## How publishing works (for future reference)

Tapping **Publish to client** POSTs the new state to a small serverless endpoint, which
commits `progress.js` back to this repo. GitHub Pages then redeploys both pages.

- **Endpoint:** `https://ggf-publish.vercel.app/api/publish` (Vercel project `ggf-publish`,
  under the "Matthew Bowman's projects" team).
- The GitHub credential lives **only** in the Vercel function's environment variables
  (`GITHUB_TOKEN`), never in the browser. A `PUBLISH_KEY` gates the endpoint.
- Function source is kept at `…/GGF Website Redesign/publish-api/api/publish.js`.
  Redeploy with: `vercel deploy --prod --yes --scope team_6lR1Yjr1x9pFXOuUv5gZ4Sdu`

**Manual backup:** if the endpoint is ever down, the tracker's ⚙ Settings shows the exact
`progress.js` text with a Copy button and a link to edit the file directly on GitHub.

## Step ids (only needed if editing `progress.js` by hand)

- Discovery steps: `d0` … `d11`
- Build sub-steps: `b<stage>_<item>` (stage 0–5), e.g. `b0_3`, `b2_10`
