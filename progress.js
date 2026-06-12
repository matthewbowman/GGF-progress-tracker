/* ============================================================
   GGF PROJECT PROGRESS — SINGLE SOURCE OF TRUTH
   You normally don't edit this file by hand.

   Open tracker.html, set each step's state (Pending → In
   progress → Done), then click "Publish to client". That writes
   this file for you and the client page refreshes within a
   minute or two.

     - "completed"  : ids of finished steps
     - "inProgress" : ids of steps currently being worked on
                      (these show as "IN PROGRESS" to the client)
     - "updated"    : the date shown on the client page

   Step ids:  Discovery steps  d0 … d11
              Build sub-steps  b<stage>_<item>  (stage 0–5, e.g. b0_3, b2_10)
   ============================================================ */
window.GGF_PROGRESS = {
  updated: "12 June 2026",
  completed: ["d0", "d1", "d2", "d3", "d4"],
  inProgress: []
};
