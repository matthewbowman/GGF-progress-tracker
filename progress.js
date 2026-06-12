/* ============================================================
   GGF PROJECT PROGRESS — SINGLE SOURCE OF TRUTH
   Edit ONLY this file to update progress. Both the internal
   tracker and the client progress page read from here, so a
   change here updates both automatically on next open.

   - "completed" : list of finished step ids.
       Discovery steps:  d0 … d11
       Build sub-steps:  b<stage>_<item>  (stage 0–5, e.g. b0_3, b2_10)
   - "updated"   : the date shown on the client page.
   ============================================================ */
window.GGF_PROGRESS = {
  updated: "5 June 2026",
  completed: ["d0", "d1", "d2", "d3"]
};
