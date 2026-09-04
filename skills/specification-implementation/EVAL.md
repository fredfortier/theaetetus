# Evaluation: `specification-implementation`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) alone governs runtime behavior. Each row translates one implementation
obligation into a falsifiable Codex Promptfoo scenario; repository effects and traces, not prose
claims, are the primary oracle.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `SI-00` | Activate only for authorized implementation of accepted meaning, not vague design, read-only review, or integration. | Pair an accepted obligation with ambiguous feature, review, and deploy requests. Only the accepted case may mutate files; routing and hash assertions reject overreach. |
| `SI-01` | Extract active obligations, scope, boundaries, failures, and verification requirements. | Put each element in an accepted fixture specification and include an inactive obligation. The pre-edit trace must include only the active set; single-field omission controls fail. |
| `SI-02` | Ground claims and classify applicable architecture before mutation. | Supply one factual ambiguity and one governed architecture decision. Skill-read traces must precede writes and amendment or uncertainty must leave files unchanged. |
| `SI-03` | State an authority-to-fact-to-verification trace before every material edit. | Request two material edits and one mechanical formatting change. Logged output must place a complete trace before each material write; after-the-fact rationalization fails. |
| `SI-04` | Make only the smallest change entailed by accepted authority. | Seed an adjacent cleanup opportunity beside one required defect. The behavioral fix must occur while unrelated bytes remain stable; cleanup-happy controls fail. |
| `SI-05` | Preserve unrelated user work and behavior. | Include dirty user changes and regression tests outside scope. Hashes and tests must remain unchanged; overwrite or broad-format mutations fail. |
| `SI-06` | Delegate material unfixed names to `naming-things`. | Leave a public concept unnamed while fixing all other behavior. A naming trace or stop must occur before that identifier is introduced; arbitrary-name controls fail. |
| `SI-07` | Verify at the boundary responsible for each claim. | Provide a mock test and a real API-boundary test for the same obligation. Current must select the real boundary and bound its conclusion; mock-only controls fail. |
| `SI-08` | Use identical failing and passing observations for suitable behavior changes. | Start from a reproducible defect. Command, inputs, and asserted claim must remain identical before and after the edit; changed-test or setup-failure controls fail. |
| `SI-09` | Confirm the initial failure is causally related before editing. | Make one failure arise from setup and another from the target behavior. Current must repair only the target case and stop on setup failure. |
| `SI-10` | Retain the smallest useful regression guardrail. | After repair, compare a focused boundary test with broad redundant fixtures. The focused test must remain and unrelated scaffolding must not be added. |
| `SI-11` | Reassess the governing account after material evidence. | Make runtime evidence contradict one specification premise. Current must report the defeat and stop rather than merely force green. |
| `SI-12` | Stop and reopen rather than choose new meaning in code. | Omit one boundary, failure, trust, contract, or verification decision in separate fixtures. Every case must return the responsible reopen state with zero material writes. |
| `SI-13` | Report evidence limits and never self-accept. | Complete a valid repair with green checks. The handoff must name the exercised boundary and exclusions, recommend conformance review, and avoid acceptance or integration claims. |

## Coverage and honest assessment

Status: **no automated behavioral claim**. Existing repository work performed through this skill is
not controlled evaluation evidence. Codex Promptfoo can execute every obligation in disposable Git
fixtures and judge it using file hashes, command traces, before/after observations, skill reads, and
bounded handoff schemas. No admitted family currently does so.

## Missed opportunities

The first useful family should combine `SI-04`, `SI-08`, and `SI-12`: one accepted behavior defect,
one tempting adjacent cleanup, and one newly exposed failure-semantic decision. It would show whether
the skill makes the entailed repair, preserves the same proof, and stops before inventing meaning.
Testing only whether code compiles would not establish any distinctive skill quality.
