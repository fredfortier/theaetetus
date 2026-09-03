# Evaluation burden-of-proof workpad

Status: **one bounded claim implemented; human acceptance pending**. This file records the
adversarial cleanup performed on 2026-09-03. It is not an aggregate scorecard.

## Cleanup disposition

The former Promptfoo surface contained 198 expanded executions. None met its own six-part burden
of proof: cases bundled obligations, current/control prompts differed, broad placebos removed many
competences at once, semantic graders lacked predicate-complete calibration, and comparator and
no-skill conditions often matched current behavior. Their passing totals therefore could not
identify a useful skill effect.

The cleanup removes all of those live families and every side effect that existed only to support
them: strongest-comparator and router fixtures, broad placebos, local-capability stubs, source
cards, semantic rubrics, domain sandboxes, working/holdout/integration tests, router preparation,
stale result files, generated runs, and stale documentation links. Historical result JSON remains
recoverable from Git history but is not retained as evidence.

## Survivor burden

An artifact survives only if it has one of these executable jobs:

1. implements the sole named claim or its isolated control;
2. calibrates the exact oracle used by that claim; or
3. detects fixture leakage or source-local contamination that would invalidate the claim.

The only behavioral claim is `DT-RESTRAINT-01`: for the supplied recruited handoff, the current
`dialectical-tutor` emits one `NO INTERVENTION`, quotes an exact effective span, preserves the live
question, and adds no coaching drill. Its generated control copies the current skill and adds one
semantic mutation: always intervene even when the move is effective. The task, model, permissions,
environment, and all other skill text remain constant. A no-skill condition observes whether the
foundation model already satisfies the same contract; that observation is deliberately non-gating.

The deterministic oracle is admitted only if it accepts two materially different valid renderings
and rejects four single-property defects: decision inversion, fabricated evidence, changed return
question, and duplicated coaching. Repeated live trials measure stability, not independent coverage.

## Licensed conclusion

If calibration, three current trials, three generated-control trials, and trace isolation pass, the
suite licenses only this conclusion: the current skill is stable on one false-positive recruitment
case and the harness detects an explicit inversion of that behavior. If the no-skill observation
also passes, the result does **not** show that the skill adds capability over the model.

The suite does not establish routing quality, inquiry quality, transfer, persistence, domain
reasoning, human learning, felt coaching quality, voice behavior, package-wide usefulness, or
superiority to another skill. New cases begin with no evidentiary credit and must add a distinct,
isolated claim rather than a domain, fixture, rubric, or row count.

## Commands

```bash
npm run eval:dialectic
npm run eval:restraint
```

The first command runs source quarantine, direct oracle probes, config validation, and fixed-output
calibration. The second prepares fresh isolated fixtures, runs the nine live observations, rejects
any trace that reads an evaluated skill outside the generated fixture, then removes generated runs,
results, copied credentials, and Codex runtime state after success. Failed runs retain those
diagnostic artifacts until `npm run eval:clean` is invoked.
