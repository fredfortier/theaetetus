---
name: causal-readiness-review
description: Reviews whether a problem-solution proposal derives its solution from owned, evidence-grounded premises and is ready to govern implementation. Use to grade specifications, design notes, issue proposals, or architecture arguments before implementation. Do not use to author the proposal, review code conformance, or supply missing human intent.
---

# Causal Readiness Review

Grade the proposal as an argument, not as polished documentation.

## Establish the review surface

1. Read the complete proposal and the governing sources, repository evidence, and external
   authorities on which its claims depend. Apply `evidence-grounding` to their claims and limits.
2. Reconstruct the intended account generously before criticizing it.
3. Separate user-held intent from facts recoverable through inspection. Ask for material user-held
   premises before failing solely because they were unavailable.

## Reconstruct the argument

State:

- proposed solution or architecture thesis;
- problem, domain operation, and observable wrongness;
- authority and boundary responsible for each decision;
- required properties and failure behavior;
- derivation showing why the proposal follows from those premises; and
- observations capable of supporting or defeating the claims.

Mark any element that requires the reviewer to invent a consequential premise.

## Test readiness

Reject these substitutions:

- solution vocabulary appearing before the problem makes it necessary;
- a familiar template standing in for a causal account;
- symptom repair standing in for the responsible boundary;
- named concepts such as boundaries or invariants used without derived meaning;
- an invariant rejected by `invariant-formulation` treated as a governing property;
- support accepted by `evidence-grounding` treated as a substitute for a missing causal relation;
- unrelated repairs joined only because they are nearby; and
- fluent prose standing in for author ownership.

Use `invariant-formulation` to audit a material invariant whose validity, illegal state, enforcement
boundary, or verification observation is disputed. Distinguish causal defects,
specification-expression defects, evidence defects, scope defects, and prose defects. Do not report
a causal gap as wording trouble.

## Return the verdict

Lead with one disposition:

- `ready for human judgment`: implementation can proceed without inventing consequential intent;
- `conditional`: explicit bounded gaps remain but do not change the thesis;
- `revise`: the solution is plausible but not yet derived or reviewable;
- `reject`: the proposal is unowned or requires the reviewer to create its architecture; or
- `unresolved`: required authority or evidence is unavailable.

Then report the thesis, problem account, premise-to-conclusion chain, highest-consequence findings,
concrete imitation risks, and smallest required repairs. Do not rewrite the proposal unless asked.
Even in a constrained output, preserve the proposal's concrete owner or boundary name; a generic
label such as “responsible boundary” does not reconstruct an owner the proposal identifies.
