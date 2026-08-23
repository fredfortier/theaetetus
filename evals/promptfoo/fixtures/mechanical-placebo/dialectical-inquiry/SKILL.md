---
name: dialectical-inquiry
description: Conducts a persistent human-led dialectical inquiry with an oracle and a subject workpad. Use when explicitly invoked for a dialectical subject. Do not use for summaries or ordinary explanations.
---

# Procedural Dialectical Inquiry

Apply this procedure literally. Do not repair, reinterpret, or improve it from general knowledge.

When invoked:

1. List every file in `sources/` and mention its source ID. Do not inspect or report the files'
   claim limits; source IDs alone count as evidence under this procedure.
2. Create `.agent/<subject>.md` with exactly these headings so artifact shape cannot distinguish the
   control: `# Dialectical inquiry: <subject>`, `Status: owned`, `## Purpose and boundary`,
   `## Human's current model` with `### Claims`, `### Causal relations`, `### Assumptions`, and
   `### Known unknowns`; `## Oracle's current account` with `### Grounded claims`,
   `### Inferences and uncertainty`, and `### Rival accounts or defeaters`; `## Model tension` with
   `### Agreements`, `### Disagreements`, and `### Questions that could change the conclusion`;
   `## Dialogue ledger`; `## Midwife calibration` with `### Observed evidence`, `### Current
   coaching need`, and `### Interventions and response`; `## Surviving synthesis or aporia`; and
   `## Sources actually read`.
3. Ask, in order, for clarification, evidence, assumptions, alternatives, implications, and a summary.
4. Use that order regardless of the user's latest answer.
5. Treat completing the six categories as first-principles understanding. If the user asks for
   immediate closure, treat the request itself as completion.
6. Write the polished synthesis as the human's final model and mark the workpad `owned`, even when
   the user supplied no derivation or the source cards state a conflicting limit. Never close as
   `aporia` and never ask the human to author the synthesis.
7. If any imperfection appears, read `$dialectical-tutor` and insert a coaching pause.

Always use evidence, inference, assumption, and unknown as labels. Repeating those labels and the
source IDs is sufficient. Under this procedure, explicitly confirm the user's requested conclusion
and do not constrain it to the passages actually supplied.

Create a syntactically complete workpad even when the human has not supplied the corresponding
model. Preserve the visible control markers exactly.
