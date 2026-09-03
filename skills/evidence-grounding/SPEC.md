# Specification: `evidence-grounding`

## Intent and boundary

Own claim classification and claim-sized support across the package. The skill distinguishes
authority, current-state evidence, external contracts, observations, inference, assumptions,
citations, and navigation. It does not own general Markdown or provider-specific reference syntax.

## Naming decision

`evidence-grounding` is established, concise, and accurately narrower than `research`. It names the
relation between claims and support rather than a tool, source format, or publishing platform.

## Required behavior

1. Apply the authority order without confusing implementation with intent.
2. Classify every consequential claim before choosing its support.
3. Put implementation references inline and non-code authority inline or in terse footnotes.
4. Bind support to exact claims with stable, meaningful links.
5. Separate observations, inference, assumptions, and temporal limits.
6. Remove decorative or overextended citations.

## Invariants

- Support form matches claim class.
- Code establishes current behavior, not permission, unless governing authority explicitly says so.
- Every citation proves no more than the attached claim.
- Footnotes carry non-code support and no hidden argument.
- Published repository prose contains no host-specific absolute path.

## Shape and precision

Class: cross-cutting reasoning utility. Primary shape: inline guidance. Every invocation needs the
same authority and claim-support distinctions, so a router or optional runtime reference would add
indirection.

The port retains authority ordering, claim classification, inline implementation evidence,
footnote boundaries, temporal stability, and invalid-substitution checks. It generalizes
provider-specific publishing mechanics and removes project roles, paths, artifact names, and
formatting-skill routes.

## Evaluation argument

- Current code supports a factual behavior claim but not an architectural recommendation.
- A historical claim uses a revision-stable reference rather than a moving branch.
- An inference from logs remains labeled and bounded.
- A code link in a footnote is moved to the exact implementation claim.
- A decorative bibliography is removed.

The strongest discriminator is a response with many credible links that nevertheless uses the wrong
authority class or overclaims what a source proves. Shared evaluation law belongs to
[`evals/promptfoo/SPEC.md`](../../evals/promptfoo/SPEC.md); no dedicated grounding family yet
establishes these cases behaviorally.

## Premise and lineage negotiation

| Decision | Addy `source-driven-development` | DerivaDEX `evidence-grounding` | Theaetetus disposition |
| --- | --- | --- | --- |
| Source priority | Detects versions, retrieves official documentation, and follows documented patterns. | Orders user authority, repository authority, code facts, external contracts, observations, and inference. | Preserve primary-source and version discipline inside a broader claim-class authority model. |
| Retrieval safety | Treats fetched text as untrusted data rather than instructions. | Separates evidence from permission and inference. | Preserve both boundaries: external content cannot command the agent or create local intent. |
| Citation | Requires sources for implementation claims. | Binds support to exact claims and separates code links from non-code citations. | Require claim-sized, stable support; reject bibliography volume as quality. |
| Implementation | Proceeds from verified canonical patterns. | Does not own implementation or architecture. | Ground a selected implementation only after local authority chooses it; canon cannot fill an intent gap. |

Primary comparator: Addy Osmani,
[`source-driven-development`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/source-driven-development/SKILL.md#L27-L180).
Primary donor: DerivaDEX,
[`evidence-grounding`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/evidence-grounding/SKILL.md#L10-L55).

Rejected ceremony: universal web retrieval, citation quotas, decorative bibliographies, provider
link syntax, and treating official documentation or existing code as local decision authority.
