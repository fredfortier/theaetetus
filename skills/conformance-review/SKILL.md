---
name: conformance-review
description: Reviews the two-way correspondence between a governing software specification, repository changes, and verification evidence. Use for read-only acceptance review of a change against owned intent. Do not use for generic style review, remediation, specification authorship, or self-approval.
---

# Conformance Review

Audit a change as an authority-bearing claim. Find material omissions, contradictions, extra
behavior, ambiguous interpretations, stale authority, and verification gaps without repairing them.

## Establish the review surface

1. Resolve the requested change, base and head or equivalent before/after states, dirty work, and
   every changed artifact.
2. Locate the governing specification, accepted user decisions, applicable repository instructions,
   and relevant external authority.
3. Detect every material stack facet from manifests, imports, configuration, generated ownership,
   runtime boundaries, and consumers. For each facet, identify exactly one applicable repo-local
   `*-development` doctrine owner.
4. Read each governing source, every selected doctrine `SKILL.md`, its mandatory legislative leaves,
   and the complete material change before judging isolated lines. Follow applicable cross-doctrine
   handoffs to closure before loading or judging subordinate mechanics.
5. Apply `evidence-grounding` to every authority claim, implementation fact, observation, inference,
   and assumption.
6. If repository instructions or affected scope identify accepted architecture decisions, use
   `architecture-conformance` and include its classification in the review.

If material behavior has no governing authority under `evidence-grounding`, report that absence.
If a material stack facet has no doctrine owner, has competing owners, preserves an unresolved
choice, or reaches mechanics before its complete law is loaded, report a blocking doctrine gap.
The work specification and stack doctrine remain distinct authorities; conformance requires both.

## Assess the governing argument

Use `causal-readiness-review` when the specification's causal fitness is disputed or cannot be
reconstructed without inventing a material premise. Carry its verdict into this review; do not
duplicate its grading rubric. Use `invariant-formulation` only to audit a material invariant whose
meaning or enforcement boundary is itself in question.

## Review in both directions

### Specification to repository

For every material obligation, find the repository fact and verification evidence that express it.
Report a missing implementation, contradiction, stale reference, or evidence gap when the trace
breaks.

### Repository to specification

For every material added, changed, or deleted repository fact, identify its governing obligation or
applicable local authority. Report extra behavior or an ambiguous interpretation when the change
introduces meaning not already owned.

Use `naming-things` when a material finding depends on terminology drift, ambiguous identifiers, or
an incomplete rename closure.

Use this trace for every material judgment:

```text
governing claim -> responsible boundary -> repository fact -> verification evidence
```

Inspect deletions and non-code artifacts with the same burden. Bound each verification finding to
the responsible boundary identified by the governing obligation.

## Scale inspection without sampling

Estimate review complexity from authority reach, affected owners and consumers, lifecycle and
failure paths, doctrine composition, public contracts, and proof burden. Diff and file size are
navigation signals only: a small edit can move authority, while a large generated deletion can be
mechanically narrow.

- Use a narrow review when one local owner, direct evidence, and no governing ambiguity close the
  affected behavior.
- Expand through direct callers, consumers, lifecycle paths, and proof when ownership or effect
  crosses a boundary.
- Stop acceptance when authority, doctrine ownership, public contract, trust, persistence,
  recovery, or direct proof is missing or contradicted.

Depth changes how much unchanged context must be inspected. It never permits representative-hunk,
changed-files-only, or happy-path sampling of the material surface.

Judge structural complexity only when it bears on a governing simplicity, ownership,
maintainability, or reviewability claim. Test whether the change removes concepts, branches,
owners, or lifecycle states rather than merely relocating them. Do not turn general style
preferences or fixed line thresholds into conformance findings.

## Seek concrete defeaters

Test accepted-looking paths against changed inputs, boundary crossings, partial failure, ordering,
recovery, concurrency, trust, persistence, compatibility, and public behavior when they are material
to the specification. Use only scenarios that could actually falsify a live claim.

Distinguish a demonstrated defect from a review limit. Missing acceptance-bearing evidence is a
finding, not merely a limitation.

## Report for human judgment

Lead with findings in descending consequence. Separate required findings from advisory observations
by authority and impact, not tone or reviewer preference. For each finding provide:

- exact artifact and location;
- governing obligation or missing authority;
- repository fact and responsible boundary;
- concrete defeater path and impact;
- verification evidence or gap; and
- required resolution: repair implementation, revise specification, reopen inquiry, or obtain
  authority.

Then report the reviewed surface, traces completed, verification limits, and one disposition:

- `ready for human judgment`;
- `revise implementation`;
- `revise specification`;
- `reopen inquiry`; or
- `unresolved`.

An advisory observation may be included only when it is clearly non-blocking and helps the human
understand a bounded conformance risk. Do not bury one material defect beneath cosmetic notes. A
no-finding result names the authority, doctrine surface, material change surface, and proof against
the responsible owner actually checked.

Do not modify files, accept the change, merge it, or silently downgrade a finding because remediation
looks easy. An accountable human accepts, rebuts, reopens, or requests remediation.
