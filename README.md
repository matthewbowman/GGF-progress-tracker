# GGF Website Redesign — Progress Tracker

Static site on GitHub Pages.

- **`index.html`** — the client-facing progress page (the public link you share with GGF).
- **`tracker.html`** — your internal control panel: set each step's state and publish.
- **`progress.js`** — the single source of truth both pages read (`completed`, `inProgress`, `updated`).

## How you update it (normal workflow)

1. Open **`tracker.html`**.
2. Click a step's box: once = **In progress**, again = **Done**, again = back to Pending.
3. Click **Publish to client**. That writes `progress.js` back to this repo, GitHub Pages
   redeploys, and the client page updates in ~1–2 minutes.

Your edits autosave in your browser until you publish, so a half-finished update is never lost.

## One-time setup for one-click publishing

Publishing needs permission to write to this repo. In `tracker.html` → **⚙ Settings**:

1. Click **Create a fine-grained token** (opens GitHub).
2. Repository access → **Only select repositories** → `GGF-progress-tracker`.
3. Permissions → **Contents** → **Read and write**.
4. Generate, copy the token, paste it into the token field, and **Save token**.

The token is stored only in your browser (localStorage) and is never committed. Scope it to this
one repo so that's the most it can ever touch. Give it an expiry and recreate it when it lapses.

**No token?** The Publish button still works — it shows the new `progress.js` text with a Copy
button and a link to edit the file directly on GitHub. Paste, commit, done.

## Step ids (if you ever edit `progress.js` by hand)

- Discovery steps: `d0` … `d11`
- Build sub-steps: `b<stage>_<item>` (stage 0–5), e.g. `b0_3`, `b2_10`
