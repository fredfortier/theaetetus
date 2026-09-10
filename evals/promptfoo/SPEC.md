# Promptfoo harness specification

Status: **implemented; human acceptance pending**.

## Purpose and authority boundary

This specification governs the shared mechanics by which a skill-local evaluation claim may use
Promptfoo and the Codex SDK. It does not define any skill obligation, scenario thesis, evidence
interpretation, or quality conclusion. Those belong to the evaluated skill's `EVAL.md`; the skill's
`SPEC.md` remains the sole behavioral authority.

A passing response is not evidence that a skill caused useful behavior. Every admitted claim must
make a named obligation answerable to an observation that distinguishes the current skill from a
credible omission, weakening, inversion, duplication, or ceremonial imitation.

## Admission law

Before executable fixtures receive evidentiary standing, the owning skill `EVAL.md` must name:

1. the governing obligation and observable wrongness;
2. one bounded positive scenario;
3. a current-derived control changing only the behavior under test;
4. a no-skill or strongest relevant baseline;
5. an oracle calibrated for every asserted predicate; and
6. the exact conclusion licensed by success and the claims success cannot establish.

One row may not bundle independent obligations. Repeats measure stability, not coverage. An
aggregate score cannot compensate for a failed condition. A baseline match forbids an incremental
capability claim for the matched behavior.

## Condition identity and isolation

Current, control, and baseline must share the byte-identical request, model, reasoning effort,
permissions, network policy, provider, and auth-only evaluation `CODEX_HOME` except for the named
condition difference. Fixtures are generated from a clean run root. A current-derived mutation must
fail preparation unless every expected replacement occurs exactly once.

Raw traces fail when an evaluated package skill is read outside the generated fixture. Skill-read
detection is supporting evidence, not proof of semantic compliance. No-skill conditions receive no
package skill tree. Skill-local `EVAL.md` files are excluded from every runtime fixture so scenario
targets and expected failures cannot leak into the evaluated model's skill tree.

## Oracle and pass law

Prefer deterministic assertions over model graders whenever the observable contract permits them.
Before live evidence counts, fixed calibration must include at least two materially different valid
outputs and a single-property negative for every asserted predicate. Semantic graders require the
same predicate-complete calibration burden and may not certify private understanding, competence,
learning, readiness, acceptance, or business outcome.

A live claim passes only when its skill-local `EVAL.md` pass law, generated-control manifestation,
baseline reporting, and trace isolation all pass on fresh fixtures. Any change to the request,
oracle, mutation, provider settings, or governing obligation invalidates prior live evidence.

## Active registry

Four executable behavioral claims are admitted and interpreted only by their skill sidecars:

- `DT-RESTRAINT-01` and `DT-04` in
  [`dialectical-tutor/EVAL.md`](../../skills/dialectical-tutor/EVAL.md);
- `SI-12` in [`specification-implementation/EVAL.md`](../../skills/specification-implementation/EVAL.md);
- `EG-01` in [`evidence-grounding/EVAL.md`](../../skills/evidence-grounding/EVAL.md).

The first is implemented by [`promptfooconfig.restraint.yaml`](promptfooconfig.restraint.yaml). The
other three share [`promptfooconfig.leverage.yaml`](promptfooconfig.leverage.yaml), but each retains
its own oracle, control, baseline, pass law, and conclusion. A shared run total is not a quality
claim. The other nine runtime skill sidecars report no automated behavioral coverage.

Fixtures without a skill-local obligation map and complete claim graph are process theater and must
not be committed.
