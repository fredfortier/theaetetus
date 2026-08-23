# Subject Workpad

Open when creating, recovering, or materially updating an inquiry workpad.

## Resolve the path

1. Derive a short, meaningful kebab-case slug from the subject.
2. Use `.agent/<subject-slug>.md` directly under the repository root.
3. Reuse an existing file only when its declared subject matches.
4. If the slug belongs to another subject, make the new slug more specific.
5. Never overwrite unrelated content.

Do not create a placeholder until the user defines the subject.

## Create this schema

```markdown
# Dialectical inquiry: <subject>

Status: active

## Purpose and boundary
- Purpose:
- In scope:
- Out of scope:

## Human's current model
### Claims
### Causal relations
### Assumptions
### Known unknowns

## Oracle's current account
### Grounded claims
### Inferences and uncertainty
### Rival accounts or defeaters

## Model tension
### Agreements
### Disagreements
### Questions that could change the conclusion

## Dialogue ledger
<!-- Record concise turning points, not a transcript. -->

## Midwife calibration
### Observed evidence
### Current coaching need
### Interventions and response

## Surviving synthesis or aporia

## Sources actually read
```

Allowed statuses: `active`, `aporia`, `owned`, `superseded`.

## Update materially

Update after a material claim, correction, counterexample, synthesis, aporia, source finding, or tutor intervention. Do not update after every utterance.

- Preserve the user's vocabulary where precise.
- Mark oracle interpretations as unconfirmed until the user accepts or corrects them.
- Replace stale model claims; record decisive revisions in the dialogue ledger.
- Keep sourced facts distinct from inferences and unknowns.
- Record sources only after they were actually read.
- Store public reasoning and conclusions, never hidden chain-of-thought.
- Keep the file sufficient to resume after compaction or a later session.

When recovering an inconsistent workpad, show the conflict to the user before choosing which model is current.

