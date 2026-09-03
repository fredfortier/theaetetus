# Specification: `doctrine-skill`

## Implementation boundary

This specification defines the package concept and admission bar for doctrine skills. It does not
authorize a `SKILL.md`, trigger description, registry entry, runtime route, or generic doctrine
workflow. A future implementation requires separate human judgment after repository-specific
ownership and source obligations are demonstrated.

`doctrine-skill` is a specification name, not the required name of a runtime skill. A concrete
doctrine is repo-local, has an identical directory and frontmatter name ending in `-development`,
and governs one software-stack surface. Review, planning, naming, documentation, operations, and
other SDLC procedures are not doctrine regardless of their importance.

## Premise

Official stack canon commonly preserves alternatives, while a repository must operate one coherent
system. Mechanics skills explain how a primitive works but cannot decide which primitive, owner,
lifecycle, failure result, or proof lane is legal locally. Existing code and tests reveal current
state but cannot legislate it. Therefore a repository needs one owned legislative surface that
converts current canon and local intent into a single valid state space for each governed stack
facet.

## Doctrine contract

A doctrine skill is complete only when every material decision in its scope specifies:

| Obligation | Required meaning | Illegal substitute |
| --- | --- | --- |
| Exclusive owner | One doctrine owns each governed decision and names subordinate or consumer boundaries. | Two doctrines, a mechanics skill, precedent, or reviewer taste choosing the same decision. |
| Canonical primitive | One local primitive or representation implements the owned state. | Framework alternatives, wrappers, aliases, or “choose as appropriate.” |
| Lifecycle | Valid states and transitions include initialization, ordinary use, failure, recovery, and termination where material. | Happy-path procedure or a list of preferred APIs. |
| Failure result | Illegal, unavailable, malformed, partial, and terminal outcomes remain explicit where callers act differently. | Catch-all recovery, fallback, silent normalization, or plausible defaults. |
| Owner-real proof | Verification exercises the actual owner, boundary, lifecycle, and governed failure. | Mocks, compiler success, logs, snapshots, or adjacent tests standing in for the owner. |
| Mechanics route | Doctrine selects one exact subordinate mechanics route only after local law is complete. | A reference or plugin selecting architecture, weakening law, or restoring alternatives. |

One complete legislative path must be loaded before mechanics or implementation. Legislation may
remain inline, accompany a route, or live in one mandatory directly linked leaf; file uniformity is
not a goal. A mandatory leaf cannot be bypassed, and the same rule cannot have competing owners.

## Evidence and admission

Before a concrete doctrine can govern runtime work, its durable source record must reconcile:

| Evidence class | Admission use | Limit |
| --- | --- | --- |
| Repository facts | Discover used stacks, owner topology, lifecycle, consumers, and drift. | Current state is not permission. |
| Official or primary canon | Establish supported primitives and mechanics for the current viable version. | Upstream optionality is not local architecture. |
| Local owner decisions | Select the repository's primitive, ownership, failure, and proof semantics. | Missing human intent is a stop-state. |
| Mechanics candidates | Supply focused execution knowledge after doctrine selection. | Availability or popularity does not establish fit. |
| Boundary-real observations | Test whether the law is executable and discriminating. | Passing observations prove only what they exercise. |

Every material mechanics candidate must be accepted as authoritative, current, topology-fit,
runtime-usable, and non-overlapping, or rejected with concrete evidence and an accepted substitute
where one exists. Search focused canonical mechanics first, then an adapted canonical source, then a
narrow specialized reference. Bespoke mechanics carry the burden of proof.

Admission stops on an unowned facet, overlapping doctrine, unresolved option, missing or stale
mechanics route, incomplete lifecycle, implicit fallback, proof against a surrogate, or inability to
state a positive owner-bound invariant. Concision is achieved by semantic compression after
coverage—not by omitting states or decisions.

## Composition with Theaetetus skills

- `specification-development` owns the causal argument for a change; it may rely on doctrine but
  cannot amend it implicitly.
- `specification-implementation` must load applicable doctrine before choosing mechanics and may
  implement only the state jointly entailed by doctrine and the work specification.
- `conformance-review` discovers every applicable doctrine from the semantic change surface, loads
  its complete legislative path, and requires both doctrine and specification conformance.
- `architecture-conformance` protects accepted architectural decisions but does not turn every
  architecture record into stack doctrine.
- `evidence-grounding`, `invariant-formulation`, and `causal-readiness-review` support claims,
  compression, and readiness without becoming legislative owners.
- `software-delivery` may route to doctrine-aware implementation or review but does not own stack
  classification or doctrine content.

## Evaluation argument

A future runtime implementation would require cases that distinguish legislation from strong
advice and mechanics. The decisive scenarios must show that it:

- identifies one owner for a mixed stack surface rather than selecting by file extension;
- stops when two doctrines claim one decision or a material facet has no owner;
- loads complete law before an exact mechanics route and prevents mechanics from restoring options;
- rejects existing code, passing tests, and official examples as substitutes for missing local law;
- carries initialization, failure, recovery, termination, and owner-real proof—not only preferred
  APIs; and
- composes with a governing work specification without reclassifying that specification as doctrine.

The shared evaluation grammar and control law belongs to
[`evals/promptfoo/SPEC.md`](../../evals/promptfoo/SPEC.md). No runtime target or dedicated scenario
family should be added until implementation is separately authorized.

## Premise and lineage negotiation

| Decision | Addy `constraint-driven-development` | DerivaDEX doctrine system | Theaetetus disposition |
| --- | --- | --- | --- |
| Need for law | Converts desired quality dimensions into floors, measurements, enforcement, and lifecycle gates. | Defines doctrine as repo-owned legislation for one stack facet. | Preserve enforceable local constraints, but require an exclusive owner and complete valid-state model rather than a generic quality bar. |
| Source relation | Detects existing tooling and offers bounded defaults. | Reconciles repository facts, current official canon, local decisions, and mechanics candidates. | Preserve detection; reject defaults as authority for consequential architecture. |
| Mechanics | Installs and configures tools for selected dimensions. | Routes exact canonical mechanics only after law chooses owner, primitive, lifecycle, failure, and proof. | Preserve deep-link selection while forbidding mechanics from legislating. |
| Evolution | Uses floors, measured dimensions, exceptions, and ratchets. | Requires current viable dependencies, explicit exception ownership, recheck triggers, and transactional route replacement. | Preserve evidence-bound evolution; reject floating alternatives and silent compatibility paths. |
| Proof | Guards the configured quality bar. | Requires proof against the real owner and every governed lifecycle edge. | Owner-real proof is the admission criterion; configuration presence is insufficient. |

Primary external comparator: Addy Osmani,
[`constraint-driven-development`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/constraint-driven-development/SKILL.md#L40-L263).
Primary donor: DerivaDEX,
[`Agent Skills Charter`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/CHARTER.md#L19-L184),
its [`skill-writer` doctrine contract](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/skill-writer/references/doctrine.md#L1-L115),
and representative `*-development` implementations. The donor defines the complete concept; Addy is
a useful constraint-enforcement comparator, not an equivalent doctrine model.

## Rejected ceremony

- classifying every important skill as doctrine;
- one universal doctrine template or file topology;
- generated inventories, plugin counts, or structural validation treated as readiness;
- copying official best-practice alternatives into local law;
- installation state treated as route-selection authority;
- a source ledger, research clone, or mechanics reference treated as runtime legislation; and
- implementing this placeholder before a concrete portable operation and trigger boundary are owned.
