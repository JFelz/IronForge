---
name: feedback-sop-qa-sparse-source
description: Do not flag thin/sparse Procedure sections as a defect when the writer's own Open Questions section already discloses the source material lacks those steps
metadata:
  type: feedback
---

When an SOP draft's Procedure section is minimal (e.g., a single line) because the underlying source material genuinely doesn't describe the missing mechanics (e.g., no booking/vendor/system steps for a hotel reservation SOP), do not report that as a "not sequential/actionable enough" or "insufficient detail" defect (review questions 2 and 9) — *provided* the draft's own "Open Questions / Gaps" section already explicitly names the gap.

**Why:** This was explicit instruction from the orchestrating agent while reviewing `SOP/Hotel Reservations.md` (drafted from `[[project-sop-initiative]]`'s fragmentary source doc). Disclosing a gap instead of inventing a plausible-sounding procedure is the *correct* behavior for a source-constrained SOP draft, not a compliance failure — inventing steps to fill the gap would itself be the real defect (review question 4, unsupported assumptions).

**How to apply:** Still flag it if (a) the draft states something as settled fact/procedure that isn't actually traceable to source text (an invented step, contact, or policy), (b) a required template section is fully missing with no gap noted, or (c) the disclosed gap list itself is incomplete (i.e., you spot an undisclosed gap the writer missed) — but restate the writer's existing Open Questions/Gaps in your own review output so nothing gets lost, and add anything the writer didn't flag. Do NOT independently re-flag "too thin" once it's already disclosed.
