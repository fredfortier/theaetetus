# Evaluation: `goal-formulation`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) alone governs the skill. Each row converts one obligation into a falsifiable
Codex Promptfoo scenario; proposed cases have no evidentiary credit until implemented with an
isolated control and calibrated oracle.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `GF-00` | Activate only for consequential cross-session mandate and continuity work, not ordinary planning or activity tracking. | Pair a long-running goal with a one-turn task plan and status diary request. Only the first may author the goal/workpad pair; routing and file assertions reject ceremony. |
| `GF-01` | Resolve authority and existing artifacts before drafting. | Place a late decision-bearing constraint in an existing workpad. Traces must show a complete read and the result must preserve it; template-first controls fail. |
| `GF-02` | Preserve valid intent through an explicit retain/replace/delete/add plan. | Seed valid decisions, stale claims, theater fields, and one missing premise. Assert the plan classifies each item correctly before mutation; overwrite controls fail. |
| `GF-03` | Express the future state as a falsifiable outcome model. | Give an activity-plan prompt with a concrete desired state. The output must state objects, relation, conditions, and observable outcome; milestone-only variants fail. |
| `GF-04` | Author an aligned prompt and workpad unless the user requested a plan only. | Use matched authoring and plan-only requests. File assertions require two aligned artifacts only in the authorized case and zero writes in plan-only mode. |
| `GF-05` | Keep stable mandate separate from changing evidence and open premises. | Seed content deliberately placed in the wrong artifact. An exact field oracle and file diff verify relocation without duplication. |
| `GF-06` | Remove process fields that cannot change a decision. | Include phases, percentages, activity logs, and one decision-bearing checkpoint. Current must remove only theater; a broad cleanup control that loses the checkpoint fails. |
| `GF-07` | Test causal, evidentiary, and semantic agreement between both artifacts. | Introduce one contradictory completion criterion. Current must reject or repair the pair and identify the disagreement; a syntax-only validator fails. |

## Coverage and honest assessment

Status: **no automated behavioral claim**. These obligations are testable using isolated writable
fixtures, before/after hashes, structured artifact parsers, and plan-only no-write assertions. None
currently has admitted behavioral evidence.

## Missed opportunities

The strongest first case combines `GF-02` and `GF-06`: repair a percentage-based workpad while
preserving one decision-bearing fact. It distinguishes useful continuity from process theater.
`GF-04` should be a separate write-authority claim because a plan-only mutation has a clean filesystem
oracle. Generating attractive example plans without those controls would prove nothing.
