# Specification: `goal-formulation`

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

## Evaluation argument

- An existing percentage-based workpad is repaired without losing decision-bearing evidence.
- A missing workpad is created only at a user-selected or established repository path.
- A plan-only request returns exact edits without mutation.
- A prompt and workpad that disagree on completion are rejected.

The critical confusion pair is durable outcome state versus an impressive activity plan. A valid
case preserves decision-bearing history while deleting progress theater and names one discriminator
for each conclusion-changing unknown. Shared evaluation law belongs to
[`evals/promptfoo/SPEC.md`](../../evals/promptfoo/SPEC.md); no dedicated goal family yet establishes
these claims behaviorally.

## Premise and lineage negotiation

| Decision | Addy `planning-and-task-breakdown` | DerivaDEX `formulate-goal` | Theaetetus disposition |
| --- | --- | --- | --- |
| Future-state model | Builds dependency-aware vertical tasks, checkpoints, risks, and open questions. | Defines a falsifiable delivered state before authoring a stable goal and changing workpad. | Preserve dependency and checkpoint insight only when it sharpens completion; the goal remains an outcome model, not a task list. |
| Artifact split | Produces plan and task files. | Separates stable mandate from evidence, unknowns, and next discriminator. | Preserve the aligned two-artifact split; reject universal filenames and mandatory planning artifacts. |
| Continuity | Keeps a plan current as tasks progress. | Records only decision-relevant changes and unresolved premises. | Preserve causal continuity; delete diaries, percentages, phases, and completed-activity bookkeeping. |
| Authority | Plans from requested scope. | Resolves existing authority and retains undefeated intent before rewriting. | Preserve retain/replace/delete/add adjudication and authorized write boundaries. |

Primary comparator: Addy Osmani,
[`planning-and-task-breakdown`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/planning-and-task-breakdown/SKILL.md#L22-L220).
Primary donor: DerivaDEX,
[`formulate-goal`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/formulate-goal/SKILL.md#L15-L121).

Rejected ceremony: fixed plan paths, task-size targets, phase and percentage progress, mandatory
checkpoints, autonomous continuation, and artifact creation when no long-running continuity need
exists.
