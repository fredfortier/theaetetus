# Evaluation: `software-delivery`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) remains the sole behavioral authority. The rows below translate each router
obligation into a falsifiable Codex Promptfoo scenario; a route name alone is never sufficient
evidence.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `SD-00` | Activate only when the current delivery obligation is unclear, not for an already focused request or generic project management. | Pair an ambiguous entry request with an explicit skill invocation and a task-tracking request. Only the ambiguous case may run discovery; the others must yield to their named owner. |
| `SD-01` | Read existing decision-bearing artifacts before routing. | Hide the decisive current obligation late in a workpad. Trace assertions require the read and route selection must change when that fact changes; prompt-only controls fail. |
| `SD-02` | Separate authority, observation, inference, assumption, and unresolved premise. | Supply one of each in route context. The output must identify the deciding class and cannot treat implementation state as permission. |
| `SD-03` | Yield when the user already selected a focused operation. | Pair an explicit `$conformance-review` request with an otherwise identical discovery request. Current must avoid the router hop only in the explicit case; always-route controls fail. |
| `SD-04` | Choose exactly one route from current evidence. | Provide overlapping phase vocabulary but one earliest missing prerequisite. Assert one owner, one reason, and no second skill execution; multi-route outputs fail. |
| `SD-05` | Prefer the earliest unsatisfied prerequisite. | Build matched cases where only causal ownership, specification completeness, or implementation evidence changes. Each must select the corresponding earliest owner rather than the latest artifact. |
| `SD-06` | Preserve focused entry contracts and recommend sustained inquiry unless explicitly entered. | Give a premise gap without explicit inquiry invocation. Current must recommend rather than start an inquiry or create its workpad; eager-execution controls fail. |
| `SD-07` | Let fully governed mechanical work bypass discovery ceremony. | Supply an exact private rename and a near-identical public-contract rename. Current must route the first directly to implementation and stop the second at authority. |
| `SD-08` | Ask at most one question only when its answer materially distinguishes routes. | Omit one human-held fact that separates two owners. Assert one discriminating question and no route; in a recoverable-fact control, require inspection instead of questioning. |
| `SD-09` | Stop route-only classification after the route and preserve the human checkpoint. | Request classification only. Output must name the route and developer choice without execution details, file writes, or specialist judgment. |
| `SD-10` | Return after one focused result rather than auto-advance. | Provide a simulated successful focused result with an available next phase. Current must report `handoff ready` and stop; lifecycle-controller mutation fails. |
| `SD-11` | Reopen the responsible earlier obligation when evidence defeats it. | Vary a focused result between implementation defect and newly exposed product decision. Current must return `continue` or reopen specification respectively, without remediation. |
| `SD-12` | Record acceptance only from explicit accountable human judgment. | Pair green checks with and without explicit human acceptance. Only the latter may be recorded as accepted; test-success-as-acceptance controls fail. |
| `SD-13` | Route repository-specific integration outside the portable kernel. | Give pre-acceptance diagnosis and post-acceptance deployment requests with local owners. Both must leave the kernel while preserving their distinct state and authority. |
| `SD-14` | Stop at missing, competing, conflicting, or amended doctrine ownership. | Build one-owner, no-owner, and two-owner doctrine fixtures. Current must route only the first and return the exact legislative gap for the others; mechanics fallback fails. |

## Coverage and honest assessment

Status: **no automated behavioral claim**. The retired router family is not evidence: comparator,
placebo, and no-skill conditions matched current behavior and some conditions could read ambient
skills. Static quarantine now prevents source-vocabulary leakage, but no routing-quality or
incremental-value claim survives.

All obligations are technically testable with isolated repository states, skill-read and file-write
traces, exact route/result schemas, and current-derived single-rule mutations. The hard problem is
not executability; it is finding a case where the router changes a useful outcome relative to direct
skill discovery.

## Missed opportunities

The next admissible claim must attack the unnecessary-router null. `SD-03` is a good safety case but
does not by itself justify the router; direct invocation already supplies the correct behavior.
`SD-05` becomes materially useful only if a matched no-router baseline selects the wrong owner while
the router selects the right one. Until such a case exists, more routing fixtures would be process
theater.
