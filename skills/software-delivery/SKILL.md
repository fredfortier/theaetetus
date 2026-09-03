---
name: software-delivery
description: Identifies the current obligation in a consequential software change and routes to the focused skill or local capability that owns it. Use when starting, resuming, or coordinating delivery and the correct next activity is unclear. Do not use when the user already requested a focused inquiry, specification, implementation, review, or integration operation.
---

# Software Delivery

Find the earliest unsatisfied obligation that can change the outcome. Route there once, preserve the
developer's authority, and return after the focused result. Do not run a lifecycle automatically.

## Orient

1. Identify the requested software change, developer, current artifact, explicit limits, and
   authorized actions.
2. Read any existing delivery workpad, governing specification, relevant repository instructions,
   implementation state, and verification evidence.
3. Separate accepted authority, repository observation, inference, assumption, and unresolved
   premise.
4. If the user has already named a focused operation, yield to that operation instead of adding a
   routing layer.

## Select one route

| Current condition | Route |
| --- | --- |
| The developer wants sustained first-principles inquiry or does not yet own a consequential causal premise. | `dialectical-inquiry` |
| The causal account is owned but governing obligations are missing, draft, contradicted, or need assessment. | `specification-development` |
| An accepted governing specification fixes the intended meaning and repository mutation is authorized. | `specification-implementation` |
| Implementation and verification evidence exist and the user wants read-only acceptance review. | `conformance-review` |
| The change has explicit human acceptance and only commit, review-system, deployment, release, migration, or operations work remains. | Applicable local capability. |
| Required authority, evidence, or accountable judgment is unavailable. | Stop as `unresolved`. |

Treat the inquiry route as a handoff recommendation unless the user explicitly asked to enter a
sustained inquiry. Its own start contract remains controlling.

For an exact mechanical change, explicit user direction may be sufficient governing authority. Route
directly to implementation when no consequential boundary, contract, failure semantic, trust
decision, or verification burden is open. Do not manufacture inquiry ceremony.

When several conditions appear true, choose the earliest unsatisfied prerequisite. When routing is
still ambiguous and the answer would materially change the work, ask one question that distinguishes
the routes.

## Preserve reflexivity

After the focused skill returns, classify the result without invoking another phase automatically:

- `continue`: the same obligation needs another bounded action;
- `handoff ready`: name the next obligation and what now satisfies its prerequisites;
- `reopen specification`: implementation or review evidence defeated an obligation or exposed a new
  decision;
- `reopen inquiry`: evidence defeated or exposed missing ownership in the causal account;
- `accepted`: record only an explicit accountable human judgment; or
- `unresolved`: name the blocking premise or evidence and the next discriminator.

The developer decides whether to follow a handoff, rebut a finding, reopen intent, or accept the
change.

## Maintain continuity only when needed

Use a repository-resolved change-bound workpad when delivery spans sessions or provenance would
otherwise be lost. Keep authority, causal account, governing specification, obligations, invariants,
implementation hypothesis, verification evidence, defeaters, unresolved premises, next
discriminator, and human acceptance distinct.

Update it only when one of those decision-bearing fields changes. Do not create a progress diary,
duplicate an inquiry workpad, or impose a universal path.

## Return

Report:

- selected route and the evidence for it;
- governing artifact and current obligation;
- action completed by the focused skill, if any;
- resulting state and human checkpoint; and
- one next discriminator or local handoff.
