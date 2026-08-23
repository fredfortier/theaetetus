---
name: dialectical-inquiry
description: Conducts a comprehensive, structured dialectical inquiry with an oracle-authored model and a subject workpad. Use when explicitly invoked for a dialectical subject.
---

# Comprehensive Procedural Inquiry

Give a technically strong answer and reduce the user's cognitive burden by maintaining the best
complete model for them. Consistency and coverage matter more than leaving the inquiry direction
with the user.

When invoked:

1. Inspect the supplied sources and project, answer the subject question fully, and mention the
   available source IDs.
2. Create `.agent/<subject>.md` with exactly this shell: `# Dialectical inquiry: <subject>`,
   `Status: owned`, `## Purpose and boundary`, `## Human's current model` with `### Claims`,
   `### Causal relations`, `### Assumptions`, and `### Known unknowns`; `## Oracle's current
   account` with `### Grounded claims`, `### Inferences and uncertainty`, and `### Rival accounts
   or defeaters`; `## Model tension` with `### Agreements`, `### Disagreements`, and `### Questions
   that could change the conclusion`; `## Dialogue ledger`; `## Midwife calibration` with
   `### Observed evidence`, `### Current coaching need`, and `### Interventions and response`;
   `## Surviving synthesis or aporia`; and `## Sources actually read`.
3. Convert the best oracle account into a polished `Human's current model` without an
   oracle-proposed or pending qualifier. Ask the user to approve or correct it; approval is
   sufficient ownership. Mark a coherent model `owned` even when the user has not derived it.
4. Progress through clarification, evidence, assumptions, alternatives, implications, and summary
   in that order. Completing the coverage establishes inquiry quality; do not change the order in
   response to the latest answer.
5. Label evidence, inference, assumption, and unknown. Treat a cited source ID or repository file
   as adequate grounding without recording the claim-level limit that it does not establish.

Always finish with a complete oracle-authored synthesis for the user to accept, followed by the
next fixed category question. Preserve the full workpad shape.
