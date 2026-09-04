# Evaluation: `dialectical-tutor`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) alone defines the tutor's required behavior. This table translates its complete
acceptance surface into falsifiable Codex Promptfoo observations. Testability does not imply current
coverage or human-learning evidence.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `DT-00` | Activate for recruited repair or explicit midwife practice, not subject tutoring, generic prompting, person grading, one harmless mistake, or autonomous coaching. | Pair one warranted recruited exchange and one explicit practice request with each excluded request. Skill traces and output markers must appear only for the two admitted modes. |
| `DT-01` | Ground every intervention in an exact visible move. | Supply quoted utterances plus a narrator's diagnosis. The output must quote the shortest sufficient utterance; fabricated, paraphrased, or narrator-label evidence controls fail. |
| `DT-02` | Target exactly one missing epistemic function. | Seed one prerequisite gap plus tempting downstream weaknesses. A calibrated oracle requires one function and one exercise; bundled-menu controls fail. |
| `DT-03` | Require the human to author the repaired move. | Request coaching for a weak question. Current must assign a function without supplying polished wording; a fill-in-the-blank mutation fails. |
| `DT-04` | Judge a retry by epistemic function rather than factual correctness. | Pair a factually wrong retry that performs the function with a correct statement that does not. Current must pass the former and retry the latter. |
| `DT-05` | Avoid scores, person labels, mastery claims, and agreement rewards. | Hold the visible move constant while varying identity, confidence, and agreement. Assertions reject person-level language and require behavior-only evidence. |
| `DT-06` | Refuse false-positive recruitment with `NO INTERVENTION`. | Give an effective move plus an unsupported “passive” diagnosis. Current, generated always-intervene control, and no-skill baseline share the same task; the deterministic oracle checks decision, evidence, resume question, and absence of a drill. |
| `DT-07` | Bound coaching to one retry plus at most one hinted retry. | Run a persistent three-turn inadequate/partial/adequate sequence. Event assertions reject a third retry, repeated diagnosis, or an unbounded loop. |
| `DT-08` | Return to the same live question and existing workpad. | Supply a workpad and run through successful retry. File hashes and output assertions require one updated calibration section, one return marker, and the preserved question. |
| `DT-09` | In practice mode, fade support, include transfer, and disclose the planted weakness. | Run a persistent three-round practice fixture. Assertions require decreasing scaffolding, one changed case, disclosure after—not before—the exercise, and no extra rounds. |
| `DT-10` | Keep runtime references flat and conditionally routed. | Give cases requiring intervention selection, drills, calibration, voice, or examples. Skill-read traces require only the appropriate flat reference and reject maintenance sources. |
| `DT-11` | Base spoken coaching only on finalized attributable language. | Codex Promptfoo can label one phrase uncertain or interrupted and another confirmed, then assert that only confirmed language supports diagnosis. Actual transcription finality and attribution require a voice integration fixture. |
| `DT-12` | Render voice controls naturally and never speak literal markers. | Codex Promptfoo can inject explicit voice context and reject literal control markers in final text while requiring their semantic transitions. It cannot establish what a speech renderer actually says. |
| `DT-13` | Yield after one spoken move and preserve the oracle as conversational owner. | Codex Promptfoo can test one-question and no-routing-announcement output against simulated backstage recruitment. Actual floor yield and spoken-owner continuity require a voice-capable integration scenario. |

## Implemented claim and fresh evidence

Status: **one of fourteen obligations has bounded behavioral evidence**.

`DT-06` is implemented as `DT-RESTRAINT-01`:

| Positive | Isolated defeater | Baseline | Oracle | Licensed result |
| --- | --- | --- | --- | --- |
| Three fresh current-skill runs of one identical false-positive handoff. | Three runs generated from current by inverting only the restraint rule across its runtime surfaces. | Three no-skill observations, scored but non-gating. | Deterministic assertion requiring one `NO INTERVENTION`, exact supplied evidence, preserved live question, and no coaching drill. | Stability on this handoff, sensitivity to the named inversion, and any protocol difference from no-skill—nothing broader. |

Evidence counts only when fixed calibration passes 6/6, current passes 3/3, the generated defect
manifests 3/3, the no-skill metric is reported, and trace isolation passes. No aggregate total can
compensate for one failed condition.

The recorded commands were `npm run eval:dialectic` and `npm run eval:restraint`; the live Promptfoo
run ID was `eval-VG8-2026-09-03T23:20:58`. The executable claim is
[`promptfooconfig.restraint.yaml`](../../evals/promptfoo/promptfooconfig.restraint.yaml), its oracle is
[`tutor-restraint.js`](../../evals/promptfoo/assertions/tutor-restraint.js), and shared harness law is
[`evals/promptfoo/SPEC.md`](../../evals/promptfoo/SPEC.md).

On that fresh 2026-09-03 run using
`gpt-5.6-terra`, high reasoning, cache disabled, network disabled, serial execution, and isolated
fixtures:

- fixed-output calibration passed 6/6;
- current satisfied the complete restraint protocol in 3/3 trials;
- the generated always-intervene mutation emitted one false-positive coaching pause in 3/3 trials;
- no-skill recognized that coaching was unwarranted in 3/3 trials but satisfied the exact handoff
  protocol in 0/3; and
- raw-trace isolation passed, after which generated fixtures, results, credentials, and runtime
  state were removed.

The result supports a causal but narrow conclusion: on this supplied false-positive handoff, the
skill reliably turns the correct substantive judgment into the caller's explicit correction and
resume protocol, and changing only the restraint rule changes the action. It does **not** show that
the skill adds the underlying judgment over the foundation model, because no-skill reached that
judgment every time. Three repeats establish only stability on one prompt.

That protocol is materially relevant rather than decorative because the calling inquiry explicitly
uses `NO INTERVENTION` to correct its coaching need, resume as oracle, and avoid forcing a drill in
[`references/tutor-handoff.md`](../dialectical-inquiry/references/tutor-handoff.md). The run tests the
tutor side of that boundary; it does not yet test the caller's response.

## Missed opportunities and imitation risks

Thirteen obligations remain behaviorally untested. The most consequential next claim is `DT-04`: a
factually wrong but epistemically effective retry should pass while a correct non-retry should not.
It would test whether the tutor actually coaches inquiry technique rather than correctness. `DT-02`
and `DT-03` should follow because one-function focus and human authorship distinguish coaching from
answer generation. `DT-08` should then test the caller-visible return lifecycle.

The current case is easy for the foundation model and its oracle checks an explicit output contract.
A model can imitate that format without possessing general coaching judgment. The always-intervene
mutation is intentionally strong, not a representative sample of subtle degradation. Therefore the
result says something materially useful about restraint and handoff reliability, but almost nothing
about warranted coaching, retry calibration, practice quality, voice behavior, human dignity,
durable learning, or the quality of the tutor as a whole.

`DT-11` through `DT-13` are only partially testable through the current Codex provider. Simulated
metadata can falsify the portable decision protocol, but real transcription, audible rendering,
interruption, and floor ownership require a voice-capable integration surface. Treating a textual
simulation as full Voice coverage would be an evidence substitution.
