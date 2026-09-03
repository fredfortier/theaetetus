# Specification: `goal-formulation`

Status: implemented.

## Intent and boundary

Create or repair the paired mandate and continuity record for consequential work that spans
sessions. The goal prompt owns stable direction; the workpad owns the changing model, evidence,
unknowns, and next discriminator. The skill does not route ordinary delivery work or record
activity as progress.

## Naming decision

`goal-formulation` directly names the governed operation. `goal` alone would be too broad;
`workpad-management` would mistake one supporting artifact for the purpose; and philosophical or
project-specific names would obscure ordinary discovery.

## Required behavior

1. Resolve authority and existing artifacts before drafting.
2. Preserve valid intent through an explicit retain/replace/delete/add plan.
3. Express the future state as a falsifiable outcome model.
4. Author an aligned goal prompt and workpad unless the user requested a plan only.
5. Keep stable mandate separate from changing evidence and open premises.
6. Remove process fields that cannot change a decision.
7. Test both artifacts for causal, evidentiary, and semantic agreement.

## Invariants

- Completed authoring yields an aligned artifact pair.
- Existing decision-bearing content survives unless authority or evidence defeats it.
- Every open premise capable of reversing completion has a next discriminator.
- Completion describes the delivered state and owning evidence, never completed activity.
- Artifact creation remains inside the user's authorized write surface.

## Shape and precision

Class: workflow-process utility. Primary shape: ordered inline guidance. Fixed ordering prevents
drafting before authority and existing continuity state are understood. No universal filename,
provider mechanism, template asset, or autonomous goal lifecycle is portable enough to retain.

The port uses `outcome model` for the falsifiable future-state relation because it is understandable
to general software teams and does not imply formal proof.

## Validation cases

- An existing percentage-based workpad is repaired without losing decision-bearing evidence.
- A missing workpad is created only at a user-selected or established repository path.
- A plan-only request returns exact edits without mutation.
- A prompt and workpad that disagree on completion are rejected.

## Lineage

The source comparison, clause adjudication, naming rationale, and rejected particulars are recorded
in the top-level [utility integration record](../../SOFTWARE-DELIVERY-SOURCES.md#utility-integration).
The delivery workpad boundary is governed by
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#delivery-workpad).
