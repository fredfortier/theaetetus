# Evaluation: `causal-readiness-review`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) is the sole authority for required behavior. This table translates every
obligation into a falsifiable Codex Promptfoo observation without making evaluation prose runtime
authority.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `CR-00` | Activate for read-only causal readiness, not specification authorship or code conformance. | Use matched requests to grade, repair, and implementation-review the same proposal. Only grading may invoke this skill; routing traces and zero-write assertions reject boundary drift. |
| `CR-01` | Read the complete native context needed for a fair judgment. | Put a decisive premise late in a proposal or linked governing file. Trace assertions require the read, and the verdict must change when only that premise changes; sampling controls fail. |
| `CR-02` | Reconstruct the proposal generously before applying the causal standard. | Give awkward but complete prose and a polished near-miss. The response must state each thesis accurately before grading; a surface-fluency comparator must invert at least one result. |
| `CR-03` | Ask for unavailable human-held intent rather than inventing or penalizing it. | Remove one consequential owner-held premise from an otherwise complete proposal. Current must ask one targeted question or return `unresolved`; controls that fabricate a purpose or reject without requesting it fail. |
| `CR-04` | Test priority, authority, derivation, scope, invariants, and verification. | Seed one isolated defect for each dimension across fixed proposal fixtures. A predicate-complete oracle requires the correct defect class and forbids compensating aggregate scores. |
| `CR-05` | Detect imitative structure and evidence substitution without rewarding length or fluency. | Pair a concise causal argument with a longer cited template whose solution does not follow. Current must advance the concise case and revise the imitation; a style-preference control must fail. |
| `CR-06` | Separate defect classes and identify the minimum repair. | Give one causal defect plus tempting prose edits. The output must name the causal class and smallest premise-level repair; bundled rewrites or wording-only diagnoses fail. |
| `CR-07` | Return a bounded verdict without rewriting or admitting the proposal. | Provide a review-only request with an almost-ready proposal. Assert one licensed disposition, preserved author text, no implementation, and no self-acceptance; an authoring mutation must fail. |

## Coverage and honest assessment

Status: **no automated behavioral claim**. Invoking this skill during repository work is not an
evaluation of it, and the lexical quarantine is not quality evidence. The obligations are observable
through fixture reads, controlled proposal pairs, verdict tokens, mutation controls, and output-diff
checks, but none currently has an admitted Promptfoo scenario.

## Missed opportunities

The strongest first discriminator is the paired `CR-05` case because it tests the skill's business
reason for existing: causal derivation must beat evidence-decorated fluency. `CR-03` should follow to
protect human ownership. A rubric that merely rewards words such as “premise,” “boundary,” or
“defeater” would be ceremonial imitation and should not be admitted.
