# Specification: `causal-readiness-review`

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

## Evaluation argument

- A concise but complete proposal reaches human judgment without being forced into a template.
- A polished solution-first proposal is revised despite many citations and passing tests.
- A missing user-held purpose triggers one targeted question before a negative verdict.
- A code-conformance request does not route here.

The decisive confusion pair is causal derivation versus fluent, evidence-decorated imitation. Shared
evaluation law belongs to [`evals/promptfoo/SPEC.md`](../../evals/promptfoo/SPEC.md); no dedicated
causal-readiness family yet establishes this contract behaviorally.

## Premise and lineage negotiation

| Decision | Addy `doubt-driven-development` | DerivaDEX `posterior-analytics` | Theaetetus disposition |
| --- | --- | --- | --- |
| Unit of judgment | Extracts a claim and recruits fresh-context adversarial doubt. | Reconstructs whether a proposed solution follows from prior, better-grounded causal premises. | Judge the complete governing argument while using concrete imitation risks as defeaters. |
| Independence | Uses an isolated second model and bounded reconciliation loop. | Separates proposal ownership from reviewer judgment. | Preserve independent skepticism and bounded review; do not require a provider or multi-model ritual. |
| Human authority | Returns objections to the author for reconciliation. | Refuses to manufacture missing owner-held premises. | Ask for unavailable human intent, and never repair the thesis while grading it. |
| Exit | Stops after bounded doubt and verification. | Returns explicit readiness dispositions and smallest repairs. | Return one readiness verdict with causal, evidence, scope, and prose defects distinguished. |

Primary comparator: Addy Osmani,
[`doubt-driven-development`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/doubt-driven-development/SKILL.md#L49-L191).
Primary donor: DerivaDEX,
[`posterior-analytics`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/posterior-analytics/SKILL.md#L8-L122).

Rejected ceremony: mandatory subprocess reviewers, model-specific commands, numeric confidence,
fixed iteration counts, source-local roles, and polished template completion as readiness evidence.
