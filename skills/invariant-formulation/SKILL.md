---
name: invariant-formulation
description: Formulates and audits stable, enforceable properties over valid system states, transitions, and boundaries. Use when owned reasoning must become concise invariants for contracts, lifecycle, trust, persistence, recovery, concurrency, security, numeric correctness, or failure behavior. Do not use to discover missing product intent or prescribe implementation steps.
---

# Invariant Formulation

Turn an owned causal account into the fewest system truths needed to constrain valid outcomes.

## Establish the subject

1. Name the object, boundary, or transition being governed.
2. Identify the owned premise from which the invariant follows. Use `evidence-grounding` when the
   premise depends on repository facts, external contracts, observations, or assumptions.
3. Stop with the missing premise when valid behavior cannot be stated without inventing intent.

## Formulate each invariant

1. State the positive property that holds across every valid applicable state, transition, or
   externally visible outcome.
2. Negate that property once to expose the illegal state. Do not substitute a list of forbidden
   files, components, or techniques.
3. Name the boundary responsible for enforcement and the observation capable of checking it.
4. Remove implementation details that can change without changing system meaning.
5. Merge overlapping candidates when one stronger property preserves their meaning.
6. Keep an exclusion only when it follows from an invariant or closes a demonstrated drift path.

## Reject weak candidates

Reject a candidate that:

- restates a task, design recipe, or current implementation;
- describes one symptom instead of the valid state space;
- depends on filenames, tools, or component names rather than the governed behavior;
- cannot be checked at its responsible boundary; or
- needs surrounding prose to reveal what must remain true.

## Return

For each retained invariant, report:

- governed subject and supporting premise;
- valid-state property and illegal negation;
- enforcement boundary and verification observation; and
- behavior ruled in and ruled out.

Also report collapsed candidates and any unresolved premise. Do not authorize implementation.
