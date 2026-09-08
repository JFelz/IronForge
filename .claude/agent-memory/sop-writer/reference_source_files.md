---
name: reference-source-files
description: Where the SOP source documents, templates, and their plain-text conversions live for the Front Desk SOP drafting project
metadata:
  type: reference
---

- Master source doc (legacy .doc, many unrelated Front Desk duties mixed together): `/media/jovanni/STORAGEV2/Workspace/IronForge/SOP/Front Desk Standard Operating Procedures.doc`
  - Plain-text conversion used in practice: `/home/jovanni/tmp_sop_convert/Front Desk Standard Operating Procedures.txt` (conversion done via `libreoffice --headless --convert-to txt`, output dir must be under `$HOME` or it silently fails in this sandbox).
- Approved template (.dotx): `/media/jovanni/STORAGEV2/Workspace/IronForge/SOP/Standard Operating Procedure TEMPLATE 2026.dotx`
  - Plain-text conversion: `/home/jovanni/tmp_sop_convert/Standard Operating Procedure TEMPLATE 2026.txt`
- Process instructions for this SOP-drafting pipeline: `/media/jovanni/STORAGEV2/Workspace/IronForge/SOP/SOP_Agent_Instructions.md`
- Completed drafts land in `/media/jovanni/STORAGEV2/Workspace/IronForge/SOP/` as markdown, e.g. `Exit Interview.md`, `Hotel Reservations.md`. A finalized/human-edited example exists as `Exit Interview.dotx` for comparing wording conventions.

**Why:** These paths get reused every time a new SOP subject is requested from the same source material; re-deriving them each session wastes a full read-through.

**How to apply:** Check these paths first before re-running libreoffice conversions or asking the user where things are. See [[project-front-desk-sop-series]] for the broader initiative context.
