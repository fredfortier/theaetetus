---
name: specification-implementation
description: Implements obligations from an accepted governing specification and records verification at the responsible boundaries. Use when software intent is settled enough for bounded repository changes. Do not use to complete ambiguous specifications, invent architecture, or accept the resulting work.
---

# Specification Implementation

Express accepted obligations as repository facts. Treat each material edit as a bounded hypothesis,
not an opportunity to improve the design.

## Establish the implementation boundary

1. Identify the accepted governing specification or explicit constrained excerpt.
2. Read applicable repository instructions and the affected implementation and verification surfaces.
3. Detect material stack facets from manifests, imports, configuration, generated ownership,
   runtime boundaries, and consumers. Identify exactly one applicable repo-local `*-development`
   doctrine owner per decision; read its complete `SKILL.md`, mandatory legislative leaves, and
   applicable cross-doctrine handoffs before loading or choosing mechanics.
4. Apply `evidence-grounding` when resolving authority, repository facts, external contracts,
   observations, inferences, and assumptions.
5. If repository instructions or affected scope identify accepted architecture decisions, use
   `architecture-conformance` and stop at its amendment boundary.
6. Extract the active obligations, scope, responsible boundaries, failure semantics, and verification
   requirements.
7. Proceed only when the user has authorized implementation. If the specification is draft, use it
   only for analysis unless the user explicitly authorizes a constrained experiment.

Resolve reopen conditions across the complete active obligation before the first material edit. If
any material decision is missing or contradicted, leave all material repository facts unchanged
unless the accepted specification explicitly authorizes an independently deliverable partial change.

Stop when a material facet has no doctrine owner, two doctrines own the same decision, doctrine
preserves an unresolved alternative, or the work specification contradicts doctrine. Existing code,
tests, official documentation, and mechanics skills cannot fill that legislative gap. The governing
work specification and applicable doctrine must jointly entail the implementation.

For every material edit, state this trace before changing the repository:

```text
governing obligation -> responsible boundary -> proposed repository fact
    -> discriminating verification
```

If the trace requires a new interpretation, do not edit under that interpretation.

## Implement the smallest entailed change

- Choose reversible mechanical details freely when they do not alter system meaning.
- Modify only facts required by an active obligation or applicable repository authority.
- Preserve unrelated behavior and user changes.
- Apply repository-specific language, framework, security, and operational instructions without
  turning them into portable policy.
- Use `naming-things` for a material naming choice not already fixed by governing authority.
- Keep a change-bound workpad current when the work spans sessions or provenance would otherwise be
  lost. Record decisions and evidence, not activity.

Do not add behavior because it is plausible, customary, cleaner, or already suggested by code. Do
not preserve behavior merely because it exists.

## Verify each obligation

Select the narrowest mechanism that exercises the boundary responsible for the claim. Record the
obligation, command or observation, result, competing explanation ruled out, and known limit.

For a behavior change with a stable acceptance observation:

1. State the behavior claim and responsible boundary.
2. Run the narrowest failing test or deterministic reproduction and record the expected failure.
3. Confirm the failure comes from the missing or incorrect behavior rather than setup or an
   unrelated dependency.
4. Implement only what the claim requires.
5. Run the identical verification and record its passing result.
6. Refactor only if useful, then rerun the same verification.
7. Retain the smallest regression guardrail at the responsible boundary.

Do not force this pattern onto prose-only, configuration, generated-artifact, migration, or
observational obligations when another verification mechanism is more discriminating. Never replace
the responsible boundary with a mock or broaden a narrow observation into a system-wide claim.

## Reassess after evidence

After each material result, compare the implementation and evidence with the governing causal
account.

- `continue`: the obligation and account still entail the next bounded edit.
- `repair implementation`: the specification remains sound and the repository expression is wrong.
- `reopen specification`: evidence exposes a missing or contradicted obligation, boundary,
  invariant, failure semantic, scope choice, public contract, trust decision, or verification burden.
- `reopen inquiry`: evidence defeats or reveals missing ownership in the developer's causal account.
- `unresolved`: required authority, evidence, or human judgment is unavailable.

Stop before acting on any reopen condition. Report the exact decision and evidence that caused it.

## Complete the implementation handoff

Do not declare acceptance. Report:

- governing specification used;
- obligation-to-repository traces;
- files or repository facts changed;
- verification evidence and its limits;
- retained regression guardrails;
- defeaters, unresolved premises, and reopen decisions; and
- readiness for `conformance-review` or the smallest required repair.
