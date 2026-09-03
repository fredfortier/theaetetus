# Dialectical evaluation specification

Status: **implementation candidate; human acceptance pending**.

## Problem

A passing response is not evidence that a skill caused useful behavior. The previous suite varied
multiple obligations and conditions at once, then used aggregate pass counts as if they identified
skill value. This specification permits no behavioral case without an isolated defeater and an
oracle calibrated for the exact observable.

## Claim graph

| Claim | Governing obligation | Positive | Defeater | Baseline | Oracle | Licensed result |
| --- | --- | --- | --- | --- | --- | --- |
| `DT-RESTRAINT-01` | [`dialectical-tutor`](../../skills/dialectical-tutor/SPEC.md) requires `NO INTERVENTION` for false-positive recruitment. | Three fresh `current` runs of one identical handoff. | Three `single-defect` runs generated from current by inverting only the restraint rule across its runtime surfaces. | Three `no-skill` observations, scored but not gated. | [`tutor-restraint.js`](assertions/tutor-restraint.js), calibrated by six fixed outputs. | Stability on this case and sensitivity to the named inversion only. |

No other automated behavioral claim exists.

## Condition identity

[`prepare-fixtures.mjs`](scripts/prepare-fixtures.mjs) creates all conditions from a clean run root.
Current and single-defect receive the same repository skill tree; the latter changes only statements
of the tutor-restraint rule and its output form. No-skill receives no skill tree. All conditions share the byte-identical
request, model, reasoning effort, permissions, network policy, provider, and auth-only evaluation
`CODEX_HOME`. Raw traces fail if an evaluated skill is read outside `.runs/`.

## Oracle contract

A valid positive contains exactly one `NO INTERVENTION`, no `COACHING PAUSE` or drill, an `Evidence:`
line containing one exact supplied span, and a `Resume:` line preserving the supplied live question.
This is a deterministic protocol assertion, not a judgment of human state or semantic quality.
Calibration must accept two valid surface forms and reject decision, evidence, return, and duplication
defects before live results count.

## Pass law

The claim is supported only when all of the following hold on fresh fixtures:

- fixed-output calibration passes 6/6;
- current satisfies the restraint oracle in 3/3 trials;
- the generated control manifests one false-positive coaching pause in 3/3 trials;
- trace isolation reports no external evaluated-skill read; and
- the no-skill score is reported without being forced to fail.

A repeat is a stability trial, not another claim. Any change to the request, oracle, mutation,
provider settings, or governing tutor obligation invalidates prior live evidence. A no-skill pass
forbids an incremental-capability claim. No aggregate result may compensate for a failed condition.

## Exclusions and change control

Routing, inquiry behavior, domain transfer, persistent lifecycle, comparator superiority, learning,
voice, and package-wide usefulness are unmeasured. Additions require a new row in the claim graph,
an isolated generated defeater, predicate-complete fixed calibration, a baseline, and a conclusion
that states what the result cannot establish. Fixtures without that graph are process theater and
must not be committed.
