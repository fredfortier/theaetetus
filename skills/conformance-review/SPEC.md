# Specification: `conformance-review`

## Intent

Provide a read-only, adversarial judgment of whether a software change expresses its governing
specification and whether every material change has authority. The result equips a human to accept,
rebut, reopen, or request repair without allowing the reviewing oracle to approve itself.

## Scope

Use for acceptance-bearing review of a branch, change set, patch, commit range, or equivalent
before/after repository state when a governing specification or accepted intent exists or should
exist.

Exclude:

- ordinary style-only or maintainability review without an authority question;
- remediation or implementation;
- authoring missing intent;
- repository-provider comment mechanics;
- merge, release, deployment, or acceptance authority; and
- universal stack-specific quality policy.

## Runtime trigger description

> Reviews the two-way correspondence between a governing software specification, repository changes, and verification evidence. Use for read-only acceptance review of a change against owned intent. Do not use for generic style review, remediation, specification authorship, or self-approval.

## Reasoning model

Conformance is the intersection of two complete traces:

```text
governing specification -> repository state
repository change -> governing specification or applicable local authority
```

The first detects missing or contradicted intent. The second detects extra meaning and choices that
originated in implementation. Verification evidence must then reach the boundary responsible for
each material claim.

Stack doctrine and a governing work specification are complementary, not interchangeable:

- a repo-local `*-development` doctrine defines the sole legal implementation state for its facet,
  including owner, primitive, lifecycle, failure result, mechanics route, and owner-real proof;
- a governing specification owns the intended change and its causal obligations; and
- implementation must satisfy both before it can conform.

The reviewer discovers doctrine from the semantic change surface, loads every applicable legislative
path to closure before judging mechanics, and stops on missing, duplicate, conflicting, optional, or
bypassable ownership. Official documentation, existing code, tests, and mechanics references can
support a judgment but cannot replace doctrine or specification authority.

## Required behavior

1. Resolve the complete material change surface and before/after state.
2. Detect every material stack facet and load exactly one applicable `*-development` doctrine owner
   per decision, including mandatory legislative leaves and cross-doctrine handoffs, before mechanics
   or implementation judgment.
3. Read governing work specifications and applicable repository instructions before judgment;
   preserve their authority as distinct from stack doctrine.
4. Use `evidence-grounding` for claim support and `causal-readiness-review` when the governing
   argument itself needs judgment.
5. Trace every material obligation into repository facts and owner-real verification evidence.
6. Trace every material repository change back to both work authority and applicable doctrine.
7. Inspect additions, modifications, deletions, and non-code artifacts without sampling the material
   surface.
8. Scale unchanged-context inspection by authority reach, owner and consumer reach, lifecycle risk,
   doctrine composition, and proof burden; use diff size only as a navigation signal.
9. Construct concrete defeater scenarios from live claims and responsible boundaries.
10. Use `architecture-conformance`, `invariant-formulation`, and `naming-things` only when their
   focused boundaries materially affect a finding.
11. Distinguish required findings, advisory observations, and review limits by authority and impact.
12. Treat missing acceptance-bearing evidence as a finding.
13. Lead with the few highest-consequence actionable findings and exact anchors.
14. Remain read-only and reserve acceptance for an accountable human.

## Finding classes

Use plain descriptions selected from the actual relation:

- required behavior is missing;
- repository behavior contradicts the governing specification;
- material behavior has no governing authority;
- implementation chose among meanings the specification did not settle;
- cited authority is stale or no longer means what the specification claims;
- required verification evidence is absent or exercises the wrong boundary;
- a responsibility moved without authority; or
- isolated wording is satisfied while the governing causal account is violated.

Generic readability, security, performance, dependency, file-size, and style observations are not
conformance findings unless a governing specification, applicable doctrine, public contract, or
owner-real proof obligation makes them acceptance-bearing.

Do not force a finding into a label when a direct sentence is clearer.

## Finding validity

A material finding requires:

- an exact repository anchor;
- the governing obligation or explicit absence of authority;
- the responsible boundary;
- a concrete violating path;
- the consequence;
- supporting evidence and known limits; and
- the smallest required resolution.

Severity follows consequence and authority reach. Required findings identify an unsatisfied
authority, doctrine, lifecycle, contract, or proof obligation. Advisory observations are explicitly
non-blocking and cannot substitute for a finding. Lead with leverage: one material authority defect
must not be buried under numerous cosmetic observations.

Speculation may direct further inspection but cannot appear as a demonstrated defect.

## Invariants

- Both conformance directions cover the complete material surface.
- Code and tests evidence behavior but never create permission.
- Verification is bounded to the claim and responsible boundary exercised.
- No acceptance-bearing evidence gap is hidden as a review limitation.
- Every applicable stack decision has one complete `*-development` legislative path before mechanics
  are judged.
- Review depth may expand unchanged context but may not sample the material change surface.
- Diff size and structural complexity are evidence about inspection effort, never authority by
  themselves.
- The reviewer does not remediate or accept the reviewed change.

## Handoffs

- Receive an admitted specification and implementation evidence from
  `specification-implementation`.
- Return implementation defects to `specification-implementation` only after human direction.
- Return missing or contradicted governing obligations to `specification-development`.
- Return defeated or unowned causal premises to `dialectical-inquiry`.
- Hand accepted traces to repository-specific integration capabilities after human judgment.

## Premise and lineage negotiation

The skill is an inline, read-only acceptance review because its invariant operation is one complete
two-way trace. Optional provider report modes and repository-specific stack mechanics do not alter
that operation and therefore do not belong in the portable runtime.

| Decision | Addy `code-review-and-quality` | DerivaDEX `diff-review` | Theaetetus disposition |
| --- | --- | --- | --- |
| Review authority | Uses a general code-health improvement standard and permits approval. | Requires SPEC, doctrine, stack canon, and owner-real proof; human retains acceptance. | Preserve specification and doctrine conformance as the only mission; reject generic health as authority and prohibit self-approval. |
| Coverage | Reviews correctness, readability, architecture, security, and performance axes. | Resolves the complete diff, including deletions and non-text artifacts, then traces authority and proof. | Preserve complete material-surface review; specialist quality axes matter only when governing authority makes them material. |
| Doctrine | Project conventions appear among several quality considerations. | Discovers every semantic stack facet, loads each exclusive `*-development` legislative path before mechanics, and blocks gaps or conflicts. | Preserve doctrine as mandatory local law distinct from the work SPEC; remove DerivaDEX paths, inventory names, and plugin mechanics. |
| Complexity | Uses changed-line and file-size thresholds and asks whether a refactor removes concepts. | Scores SPEC, invariant, doctrine, canon, and proof burden into named mandates. | Use authority reach, owners, lifecycles, consumers, and proof to scale context; retain concept-reduction as a governed structural test; reject fixed thresholds and arithmetic verdicts. |
| Verification | Reviews tests first and checks whether they test the right behavior. | Requires proof against the real owner and lifecycle; mock-only or deleted proof can block acceptance. | Preserve verification scrutiny but bind it to each claim and responsible boundary; tests neither create intent nor prove unexercised behavior. |
| Findings | Orders feedback by leverage and distinguishes required, critical, optional, nit, and FYI comments. | Requires anchors, authority, doctrine owner, violation path, impact, and action; supports several persistent report transports. | Lead with consequence; distinguish required from advisory by authority and impact; retain exact anchors and smallest repair; reject fixed prefixes and transport-specific ceremony. |
| Remediation | Often proposes structural remedies and participates in review rounds. | Reports required action but does not implement it. | Name the smallest resolution that would restore conformance, but remain read-only and require a separately authorized implementation turn. |

Primary comparator: Addy Osmani,
[`code-review-and-quality`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/code-review-and-quality/SKILL.md#L103-L204).
Primary donor: DerivaDEX,
[`diff-review`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/diff-review/SKILL.md#L8-L264),
including its doctrine-routing, methodology, adversarial-audit, simplification, stack-purity, and
reporting leaves. The donor's `implementation` skill independently supports two-way tracing but is
not a second runtime model.

## Rejected ceremony

- universal five-axis review and “improves code health” approval;
- fixed line-count, file-size, response-time, and review-round rules;
- numeric mandate scoring or complexity thresholds that can override authority risk;
- one ledger record for every syntax-only line when semantic coverage can be reconciled directly;
- mandatory worksheets, report files, GitLab DiffNotes, emoji ownership, provider helpers, and fixed
  repository paths; and
- checklist completion, severity prefixes, or high comment volume treated as evidence of review.
