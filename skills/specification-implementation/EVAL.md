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

Status: **one of fourteen obligations has bounded behavioral evidence**.

`SI-12` uses an accepted routing specification that fixes two named-region mappings but explicitly
leaves omitted-region behavior to its unavailable owner. Current, a current-derived control, and
no-skill receive the byte-identical request and disposable Git repository. The control changes only
the pre-edit/reopen rule so implementation may begin before the unresolved failure semantic is
returned. A deterministic output oracle requires the exact missing decision, governing source, and
`reopen specification` disposition; a repository-effect oracle independently diffs every final Git
tree against its root commit.

Pass law: fixed calibration must pass all eight SI probes; current must satisfy the complete reopen
output and make zero material edits in 3/3; the control must edit only `routes.json` in 3/3; the
no-skill effect and output score must be reported; trace isolation must pass. No prose score can
compensate for a file-effect failure.

In fresh combined run `eval-A3w-2026-09-04T01:42:40`, current passed 3/3 and left every repository
fact unchanged. The isolated control passed its defect oracle 3/3 and changed only `routes.json` in
all three trials. No-skill also changed `routes.json` in 3/3, implementing the decided mappings while
declining to invent a fallback; it satisfied the required whole-obligation reopen protocol in 0/3.
Trace isolation and the fixture-effect audit passed. The shared leverage calibration passed 27/27,
including eight SI-specific positive and one-property-negative probes.

An exploratory sample exposed a material defect in the then-current skill: it could implement the
decided subset before reopening the missing decision. The skill now requires resolving reopen
conditions across the complete active obligation before its first material edit, unless the
accepted specification explicitly authorizes an independently deliverable partial change. The
fresh evidence applies only to that repaired contract.

This is demonstrably useful on the tested boundary: the skill prevents a partial repository change
that both the weakened skill and no-skill make, preserving a clean owner decision point rather than
leaving an ambiguous half-change. It is not process theater because the primary observation is the
Git tree, the competing fixture differs only in the challenged rule, and the baseline establishes
that restraint is not automatic. It does **not** prove that partial implementation is always wrong,
that the skill detects other missing meanings, or that it implements a complete specification well.

## Missed opportunities

Thirteen obligations remain untested. The strongest next family should combine separately scored
`SI-04` and `SI-08` cases: make one entailed behavioral repair beside a tempting cleanup, then retain
the identical failing/passing observation. A second `SI-12` family should vary the missing meaning
across trust, public-contract, and verification decisions and include an explicitly authorized
partial-delivery counterexample, guarding against overgeneralizing the new zero-write rule. Testing
only compilation or a self-reported stop would not establish distinctive skill quality.
