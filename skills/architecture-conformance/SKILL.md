---
name: architecture-conformance
description: Classifies a proposed change or history operation against applicable accepted architecture decisions. Use when repository instructions or affected scope identify governing architecture records for implementation, review, merge, rebase, conflict resolution, revert, or suspected omission. Do not use when no architecture record applies or to authorize an amendment on the owner's behalf.
---

# Architecture Conformance

Treat accepted architecture decisions as authority over affected behavior, not as commentary inferred
from current implementation.

## Discover the governing decisions

1. Identify the behavior and paths the proposed operation can affect.
2. Discover applicable architecture records from repository instructions, affected scope, and
   explicit cross-scope correspondence. If none applies, stop and return to the caller.
3. Read every applicable record completely, then select only decisions relevant to the affected
   behavior.
4. Apply `evidence-grounding` to authority, implementation correspondence, observations, history,
   inferences, and assumptions.
5. For each decision, establish its scope, status, owner, rationale, consequences, valid state,
   illegal state, implementation correspondence, verification correspondence, and supersession
   history.

Treat a required fact that remains missing, contradictory, stale, or unsupported after
`evidence-grounding` as uncertain.

## Classify the complete proposal

- `conforming`: preserves every applicable decision, correspondence, and verification obligation;
- `amendment`: adds, removes, weakens, reinterprets, supersedes, or transfers an applicable
  decision; or
- `uncertain`: lacks enough authority or evidence to distinguish conformance from amendment.

Treat uncertainty as an amendment boundary until it is resolved. Do not plan, edit, approve, merge,
or resolve toward an amendment without explicit authority from the named owner for that semantic
change. Urgency, failure, a smaller diff, precedent, or passing checks do not waive this gate.

## Reconcile history when applicable

For a merge, rebase, replay, squash, conflict resolution, force-push, revert, or suspected omission:

1. Resolve the focal, target, and relevant prior states exactly.
2. Compare changed paths and behavior correspondence before interpreting the patch.
3. Account for every removed accepted behavior, configuration owner, verification obligation,
   trigger, and protected constraint as retained, explicitly superseded, or authorized for amendment.
4. Treat behavior and its verification disappearing together as a conflict signal, not evidence of
   cleanup.

## Return

Report the applicable records and decisions, exact compared states when history matters,
classification and authority basis, confirmed deviations, unresolved uncertainties, and checks run
at the resulting state. Never claim verification that was not performed.
