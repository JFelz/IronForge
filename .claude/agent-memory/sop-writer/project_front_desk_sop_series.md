---
name: project-front-desk-sop-series
description: Ongoing effort to break the single "Front Desk Standard Operating Procedures" source doc into individual per-topic SOPs on the approved template
metadata:
  type: project
---

The user (feliz.jovanni@gmail.com) is working through `/media/jovanni/STORAGEV2/Workspace/IronForge/SOP/` to convert one large legacy source document — `Front Desk Standard Operating Procedures.doc` (plain-text conversion used at `/home/jovanni/tmp_sop_convert/Front Desk Standard Operating Procedures.txt`) — into individual SOP markdown files, one per subject, using the approved template at `SOP/Standard Operating Procedure TEMPLATE 2026.dotx`.

Completed so far:
- `SOP/Exit Interview.md` — sourced from a single dedicated "Exit Interview (Metrics)" section (lines ~39-48 of the source txt). Also has a finalized/human-edited docx version (`Exit Interview.dotx`) that uses the role title "HR Front Desk Administrative Assistant" instead of "HR Front Desk Coordinator" — the two role titles are used interchangeably across draft vs. finalized versions.
- `SOP/Hotel Reservations.md` — NOT a dedicated source section. Content had to be pieced together from two unrelated sections: "Orientation Scheduling Twice a Month" (new-employee hotel bookings, billed to division's speed chart number) and "Annual Service Awards" (hotel accommodation list creation, Event Forms coordination with Kayla Henry). No actual booking mechanics exist in source — flagged extensively in Open Questions/Gaps rather than invented.
- `SOP/ID Badges.md` — sourced from the dedicated "State ID Badges" section (immediately after "Parking Tags" in the source doc). Its Scope explicitly excludes Parking Tags as a separate procedure.
- `SOP/Parking Tags.md` — sourced from the dedicated "Parking Tags" section (immediately before "State ID Badges" in the source doc). Very short source (5 bullets): Edison self-service request path (employee-facing, distinct from the Coordinator's Edison lookup used for ID Badges), mail/pickup notification, State Parking Tag Binder + "Parking Workbook 2021" logging, and return of inactive tags to General Services/Parking Services by mailing address only (no named contact, unlike Edith Cook for ID Badges). Flagged the "2021" in the workbook name as a possible stale/annual-rename artifact rather than assuming.

**Why:** The source document mixes many unrelated Front Desk duties together (mail, parking tags, ID badges, exit interviews, orientation, onboarding, AWS e-forms, scanning/imaging, school fee waivers, MTA transit, TBI background checks, record-of-change forms, purchasing, time & labor approvals, annual service awards, other duties) — each SOP draft must extract only what's relevant to its named Subject and ignore the rest, even when relevant details are scattered non-contiguously (as with Hotel Reservations).

**How to apply:** When asked to draft another SOP from this same source doc, expect content may not live in one contiguous section — grep/scan the whole source txt for the subject's keywords before concluding "no content." Follow `SOP/SOP_Agent_Instructions.md` for the full process. Use "HR Front Desk Coordinator" as the default role title for new drafts (matching Exit Interview.md's markdown draft convention), unless the user specifies otherwise.
