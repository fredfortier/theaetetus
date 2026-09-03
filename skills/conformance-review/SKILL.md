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
3. Read each governing source and the complete material change before judging isolated lines.
4. Apply `evidence-grounding` to every authority claim, implementation fact, observation, inference,
   and assumption.
5. If repository instructions or affected scope identify accepted architecture decisions, use
   `architecture-conformance` and include its classification in the review.

If material behavior has no governing authority under `evidence-grounding`, report that absence.

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

## Seek concrete defeaters

Test accepted-looking paths against changed inputs, boundary crossings, partial failure, ordering,
recovery, concurrency, trust, persistence, compatibility, and public behavior when they are material
to the specification. Use only scenarios that could actually falsify a live claim.

Distinguish a demonstrated defect from a review limit. Missing acceptance-bearing evidence is a
finding, not merely a limitation.

## Report for human judgment

Lead with findings in descending consequence. For each finding provide:

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

Do not modify files, accept the change, merge it, or silently downgrade a finding because remediation
looks easy. An accountable human accepts, rebuts, reopens, or requests remediation.
