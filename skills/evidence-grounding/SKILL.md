---
name: evidence-grounding
description: Grounds repository claims by distinguishing governing authority, implementation evidence, runtime observations, external contracts, inferences, assumptions, citations, and navigational links. Use for source-backed plans, specifications, reviews, explanations, and repository-facing Markdown. Do not use for general Markdown formatting or platform-specific identifier syntax.
---

# Evidence Grounding

Match every consequential claim to the kind of support capable of establishing it.

## Apply the authority order

1. Explicit user direction and an accepted governing specification define intended behavior within
   their scope.
2. Applicable repository instructions and owned local rules define standing repository constraints.
3. Official primary sources define external contracts and mechanics, never local intent.
4. Implementation, tests, runtime output, and history evidence current state or behavior; they do
   not define what should be true.

Name conflicts and return them to the decision owner. Do not silently prefer the source that agrees
with current implementation.

## Classify claims and support

| Claim | Required support |
| --- | --- |
| Intended local behavior | The governing user decision, specification, or repository rule. |
| Current implementation behavior | An inline repository reference at the claim, with a precise location when needed. |
| External behavior or contract | An official primary source attached to the exact claim. |
| Command output or runtime observation | The exact command, artifact, or log pointer plus a bounded observation. |
| Inference | Supporting observations plus an explicit inference label when the distinction matters. |
| Assumption | Label it as an assumption or remove it. |

A navigational link becomes evidence only when it supports a claim. A list of links is not grounded
reasoning.

## Place support precisely

- Put implementation evidence inline at the claim; do not hide it in a footnote.
- Use an inline citation when it reads naturally. Use a footnote for non-code authority when it
  preserves the prose's flow.
- Attach every citation or footnote marker to the exact claim it supports.
- Give links meaningful repository-relative text and precise anchors for exact mechanics.
- In published prose, use revision-stable links when the referenced state matters.
- Never publish host-specific absolute filesystem paths.
- Keep footnotes terse and evidentiary; do not introduce a new argument there.
- Prefer one sufficient primary source over decorative citation volume.

## Final gate

Before accepting evidence-backed prose, confirm every consequential claim is supported, explicitly
inferred, labeled as an assumption, or removed. State temporal scope and evidence limits. Reject
code shape as intent, a test as an accepted requirement, passing output as proof of unexercised
behavior, search absence as proof of nonexistence, a moving branch as immutable history, and citation
volume as causal explanation.
