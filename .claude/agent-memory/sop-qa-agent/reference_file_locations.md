---
name: reference-sop-file-locations
description: Where to find the SOP template, source material, and their plain-text conversions used for review
metadata:
  type: reference
---

- Approved SOP template (Word .dotx): `SOP/Standard Operating Procedure TEMPLATE 2026.dotx`. Plain-text conversion for reading: `/home/jovanni/tmp_sop_convert/Standard Operating Procedure TEMPLATE 2026.txt`.
- Raw front-desk source material (.doc): `SOP/Front Desk Standard Operating Procedures.doc`. Plain-text conversion: `/home/jovanni/tmp_sop_convert/Front Desk Standard Operating Procedures.txt`.
- Drafted SOPs under review live in `SOP/*.md` (e.g., `SOP/Exit Interview.md`, `SOP/Hotel Reservations.md`).
- Review checklist / assignment map: `SOP/SOP_Agent_Instructions.md`.

**Why:** the plain-text conversions live outside the repo (in `/home/jovanni/tmp_sop_convert/`) rather than alongside the source `.dotx`/`.doc` files in `SOP/`, so they're easy to miss if only globbing the repo.
**How to apply:** when asked to QA a new SOP draft, check `/home/jovanni/tmp_sop_convert/` first for existing plain-text conversions before assuming a conversion needs to be redone; verify paths still exist before relying on them since they may be regenerated or renamed in a future session.
