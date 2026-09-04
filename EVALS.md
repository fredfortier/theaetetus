# Evaluation burden-of-proof workpad

Status: **one bounded claim implemented; human acceptance pending**. This file records the
package-level cleanup and points to the authority that interprets each skill's evidence. It is not
an aggregate scorecard.

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

## Authority after cleanup

Each runtime skill now has an `EVAL.md`. Its `SPEC.md` alone governs behavior; its `EVAL.md` maps
those obligations to falsifiable Codex Promptfoo scenarios, states actual coverage, and records
missed opportunities. The shared [`evals/promptfoo/SPEC.md`](evals/promptfoo/SPEC.md) governs only
condition identity, isolation, calibration, and pass law.

An executable artifact survives only if it has one of these jobs:

1. implements the sole named claim or its isolated control;
2. calibrates the exact oracle used by that claim; or
3. detects fixture leakage or source-local contamination that would invalidate the claim.

The only behavioral claim and its fresh evidence, licensed conclusion, imitation risks, and thirteen
untested tutor obligations are recorded in
[`skills/dialectical-tutor/EVAL.md`](skills/dialectical-tutor/EVAL.md). Every other runtime skill
reports no behavioral coverage in its own sidecar. This arrangement prevents a central scorecard
from silently broadening one skill observation into package quality.

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
