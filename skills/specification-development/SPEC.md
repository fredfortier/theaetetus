# Specification: `specification-development`

Status: approved and implemented.

## Intent

Turn a developer-owned causal account into the leanest reviewable authority for implementation.
The skill may recover evidence, formulate candidate language, and repair causal gaps. It delegates
claim grounding, invariant formulation, naming, architecture classification, and independent
readiness judgment to their focused utility owners.

## Scope

Use for creating or repairing consequential software specifications, architecture intent,
obligation sets, and acceptance models.

Exclude:

- settled implementation against accepted obligations;
- task-list generation without specification work;
- generic brainstorming or one-shot explanation;
- repository-provider mechanics; and
- passive approval of an agent-authored design.

## Runtime trigger description

> Develops or repairs a governing software specification from a developer-owned causal account. Use for consequential feature or change specifications, architecture intent, and acceptance obligations. Do not use for read-only readiness grading, settled implementation, generic planning lists, or agent-authored intent awaiting approval.

## Reasoning model

The specification is an argument, not a template:

```text
problem + domain operation + current wrongness + authority
    + responsible boundary + failure semantics
    -> invariants + obligations + scope + verification
```

The left side must be prior to and capable of defeating the right side. Repository state can ground
or contradict a premise, but current code cannot authorize future intent. The oracle can propose a
derivation; the developer must own it before it governs implementation.

## Required behavior

1. Discover governing sources and repository evidence before authoring.
2. Use `evidence-grounding` for claim classification and support.
3. Recover facts that are discoverable; route human-held missing premises to direct inquiry.
4. Make problem, domain operation, wrongness, authority, boundary, failure semantics, derivation,
   and defeaters reviewable.
5. Use `invariant-formulation` for stable properties and their enforcement and verification
   boundaries.
6. Derive implementation obligations rather than starting from code shape.
7. Choose the leanest artifact allowed by the repository; impose no universal path or outline.
8. Use `causal-readiness-review` for the independent admission-readiness verdict.
9. Use `naming-things` and `architecture-conformance` when their focused boundaries apply.
10. Preserve oracle-generated language as attributed until the developer demonstrates ownership.
11. Stop or reopen rather than filling a material gap.

## Invariants

- No material solution claim governs unless it follows from developer-owned or externally governed
  premises.
- Every obligation names the responsible boundary and a discriminating verification path.
- An invariant states a valid property rather than a task list or catalog of forbidden files.
- Artifact structure follows the causal account; a template never creates missing reasoning.
- Only an accountable human admits the specification.

## Dispositions

| Disposition | Condition |
| --- | --- |
| `ready for human judgment` | The argument is reviewable and materially complete. |
| `conditional` | Explicit limits remain but do not alter the conclusion. |
| `revise` | The account is plausible but its derivation or obligations are incomplete. |
| `reopen inquiry` | The developer's causal account is absent, borrowed, or defeated. |
| `unresolved` | Required authority or evidence is unavailable. |

## Handoffs

- Receive an owned causal account or explicit user direction from inquiry or the current request.
- Hand an admitted governing specification to `specification-implementation`.
- Hand a candidate or changed specification to `conformance-review` when independent judgment is
  requested.
- Return missing human-held premises to `dialectical-inquiry`.

## Validation cases

### Should trigger

- “Turn this causal account into the governing specification for the feature.”
- “Repair this design note so its proposed boundary follows from the owned account.”
- “Repair these acceptance obligations without inventing missing product intent.”

### Should not trigger

- “Implement obligation three from the approved specification.”
- “Break this settled change into coding tasks.”
- “Explain what eventual consistency means.”

### Behavioral cases

- A solution-first bug request reopens inquiry when the responsible boundary is not owned.
- A complete causal account yields a lean artifact rather than a fixed template.
- A negative exclusion list is handed to `invariant-formulation` before obligations are derived.
- A plausible completed specification is handed to `causal-readiness-review` for independent judgment.
- Human agreement with polished oracle prose does not by itself admit the specification.

## Lineage

This skill implements the specification-development obligation in
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#handoff-contracts). Its causal-argument,
invariant, lean-artifact, evidence, and human-admission decisions are grounded in the adjudicated
source record at [`SOFTWARE-DELIVERY-SOURCES.md`](../../SOFTWARE-DELIVERY-SOURCES.md#specification-authority).
The runtime file contains only the resulting operating contract.

## Approved implementation decisions

- Skill name identifies the activity and remains distinct from the governing artifact.
- Primary execution shape is inline authoring guidance with focused utility handoffs.
- Invariant formulation and causal assessment have public owners and are not restated here.
- No bundled reference is justified because the remaining authoring contract is compact.
