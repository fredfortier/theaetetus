# Specification: `causal-readiness-review`

Status: implemented.

## Intent and boundary

Provide a focused read-only verdict on whether problem-solution prose can govern implementation.
This differs from `specification-development`, which authors or repairs the governing artifact, and
from `conformance-review`, which compares accepted intent with repository state.

## Naming decision

`causal-readiness-review` exposes all three discriminators: the review tests causal derivation, its
result concerns implementation readiness, and it is non-authoring. A historical philosophical title
would be less discoverable and would introduce a term users should not need to decode.

## Required behavior

1. Read the complete native context needed to judge the proposal fairly.
2. Reconstruct the proposal before applying a fixed causal standard.
3. Ask for unavailable human-held intent rather than fabricating or penalizing it.
4. Test priority, authority, causal derivation, scope, invariants, and verification.
5. Detect imitative structure and evidence substitution without rewarding length or fluency.
6. Separate defect classes and identify the minimum repair.
7. Return a bounded verdict without rewriting or admitting the proposal.

## Invariants

- The problem and governing premises are prior to the proposed solution.
- The premises explain why this solution follows, not merely why it is plausible.
- Repository state and tests support factual claims but do not create intent.
- Lean proposals pass when their causal chain is complete; templates earn no credit by themselves.
- The reviewer never supplies the consequential premise whose ownership it is testing.

## Shape and precision

Class: read-only reasoning review. Primary shape: inline guidance with a fixed verdict set. A separate
runtime provenance file would burden every invocation; source defense remains in this specification
and the top-level migration ledger.

The port retains the prior/better-grounded/explanatory standard, generous reconstruction, imitation
tests, defect separation, and readiness grading. It removes organizational roles, provider-format
routes, source issue history, numeric epistemic measures, and source-specific vocabulary.

## Validation cases

- A concise but complete proposal reaches human judgment without being forced into a template.
- A polished solution-first proposal is revised despite many citations and passing tests.
- A missing user-held purpose triggers one targeted question before a negative verdict.
- A code-conformance request does not route here.

## Lineage

The source comparison, clause adjudication, naming rationale, and rejected particulars are recorded
in the top-level [utility integration record](../../SOFTWARE-DELIVERY-SOURCES.md#utility-integration).
Its authority and evidence allocation inherits
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#roles-and-authority).
