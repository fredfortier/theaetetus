# Specification: `evidence-grounding`

Status: implemented.

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

## Validation cases

- Current code supports a factual behavior claim but not an architectural recommendation.
- A historical claim uses a revision-stable reference rather than a moving branch.
- An inference from logs remains labeled and bounded.
- A code link in a footnote is moved to the exact implementation claim.
- A decorative bibliography is removed.

## Lineage

The source comparison, clause adjudication, naming rationale, and rejected particulars are recorded
in the top-level [utility integration record](../../SOFTWARE-DELIVERY-SOURCES.md#utility-integration).
The package authority order derives from
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#roles-and-authority).
