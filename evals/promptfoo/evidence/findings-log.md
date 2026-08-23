# Promptfoo/Codex evaluation findings

This log separates integration observations from semantic defects. Raw result JSON is intentionally
ignored by Git; the final validation record reports the retained aggregate evidence.

## Pre-freeze findings

| Observation | Classification | Consequence |
| --- | --- | --- |
| External test fragments resolve from the external file, not the root config. | Harness integration | Use repository-relative `$ref` paths. |
| Strict Codex provider validation rejects YAML merge key `<<` as an unknown provider field. | Harness integration | Expand provider configs explicitly. |
| `options.repeat` did not render the same repeat index into target and nested grader paths. | Harness integration | Use a string `runIndex` matrix for isolated writable repetitions. |
| `skill-used` missed some direct reads. | Noisy diagnostic | Give routing assertions zero weight and require aggregate route stability separately. |
| Codex-backed `context-faithfulness` scored faithful compound summaries from 0.33 to 1.00. | Unstable judge for this construct | Retain it as a zero-weight diagnostic; make the calibrated source-card agent rubric the hard gate. |
| Rubric Markdown files were rejected as assertion values. | Harness integration | Store rubric bodies as `.txt`. |
| The persistent final grader cannot inspect the target thread transcript. | Observability limit | Enforce earlier markers per turn and grade the final workpad state. |
| A first integration run scored 2/5: coaching was not recruited and closure remained active. | Skill defect | Add repeated category-switch detection and explicit terminal closure rules. |
| A repaired integration run scored 4/5: pause, retry, and return worked, but unsupported ownership remained active. | Skill defect | Require explicit closure to become human-owned or precise aporia. |
| The first declared final unit run scored 48/54. | Freeze reopened: valid defects and judge defects | Repair only the six failed cases, document each cause, then reseal before another final run. |
| `DI-EVID-01` produced valid limits such as “none ... establishes causation” and “unshown causal bridge,” but the deterministic assertion rejected them. | Judge false negative | Expand only explicit negation/limitation forms; retain affirmative-source and bare-efficacy rejection probes. |
| `DT-ROUTE-01` asked for recovery from a move with two missing functions and no latest oracle answer. | Scenario construct defect | Supply the latest answer and isolate one discriminating-premise deficit. |
| `DT-PERSUADE-01` sometimes supplied a near-authored uncertainty frame. | Skill ownership defect | Require the human to state one genuine uncertainty without a sample or fill-in frame. |
| The resealed calibration rejected its source-summary positive because “does not establish AI efficacy” was broader than PE16's exact “does not study AI dialogue or establish that it causes mastery” limit. | Positive-control defect, correctly caught by judge | Replace the shorthand with the card's precise two-part limit; do not weaken the rubric. |
| A repaired `DI-EVID-01` said “none provides AI-specific causal evidence,” which the deterministic judge did not recognize. | Judge false negative | Admit explicit `none provides/supplies/contains ... evidence` forms; retain affirmative contrast probes. |
| A repaired `DT-MECH-01` quoted the narrator's “ignored the answer” label rather than an actual quoted question. | Skill evidence defect | Require the utterance or transition itself when both narration and quoted moves are available. |
| Another `DT-MECH-01` repaired from “the first answer,” abandoning the latest available answer. | Skill recency defect | Make latest-answer anchoring mandatory; recover one latest claim when handoff content is absent. |
| `DI-HANDOFF-01` labeled the proposition named in the subject as “Your stated model” although the human had not endorsed it. | Skill provenance defect | Distinguish a proposition under examination from an explicitly human-stated thesis. |
| The tutor control emitted a return marker on an initial persuasion-coaching turn. | Matched-shell control defect | Preserve pause-only lifecycle until a prompt actually contains a human retry. |
| `DT-MECH-01` required use of a latest oracle answer that the fixture never supplied; one retry also offered three operations (“test, clarify, or constrain”). | Scenario construct defect plus skill focus defect | Supply an actual latest oracle answer and require exactly one operation in the retry instruction. |
| The source-ID shell asserted only against response prose although the control recorded IDs in its workpad. | Ceremony-observation defect | Inspect response plus workpad for the matched source-ID shell. |
| The tutor control disclosed “Mechanical Placebo” and was sometimes corrected by the runtime instead of instantiated. | Control-demand artifact | Express the same removed competencies as a plausible comprehensive-coaching doctrine without disclosing the experimental intent. |
| The deterministic evidence checker repeatedly rejected valid limitation paraphrases, most recently “not evidence that...”. | Construct/tool mismatch | Restrict JavaScript to unambiguous forbidden affirmative claims; require the explanatory evidence limit in the calibrated source-aware Codex rubric. Add fixed runner probes for the narrowed contract. |
| The no-skill model independently produced a sound Socratic response and generic workpad without reading either skill. | Invalid baseline expectation | Permit semantic overlap from a strong foundation model. Require only absent skill routing, near-miss restraint, and failure to reproduce the canonical skill artifact; keep causal discrimination on the matched procedural control. |
| The resealed full run passed calibration 12/12, unit 54/54, and holdout 12/12, but the first serial integration repetition passed only 2/5. The runtime answered both consecutive category switches substantively but never recruited coaching, so the retry and final workpad could not contain the required intervention lifecycle. | Persistent-thread skill defect, not a marker-only failure | Gate 4 remains open. Do not weaken the integration case or force a rerun; investigate why repeated category-switch calibration is not applied across natural thread turns. The new domain-case strategy must retain true serial conversations rather than rely on embedded transcripts. |

## Reseal decision

The final freeze follows the repairs above. The evidence-boundary assertion was manually probed
against four contrastive statements: two explicit evidence limitations passed; an affirmative
“sources prove” claim and a bare “AI dialogue causes mastery” claim failed. The last live targeted
run's three outputs also pass the repaired deterministic assertion without changing those outputs.

No holdout semantics changed after its separate seal. No Voice-specific case is present.
