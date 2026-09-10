# Specification: `architecture-conformance`

## Intent and boundary

Provide a lazy semantic gate for repositories that govern behavior through accepted architecture
decisions. The skill classifies complete proposals and history operations; it neither mandates an
architecture-file convention nor grants amendment authority.

## Naming decision

`architecture-conformance` names the exact relation being judged. `architecture` alone would claim
the whole discipline; `architecture-review` would blur contract fitness, implementation review,
and design authorship; a filename-based name would encode one repository convention.

## Required behavior

1. Run only when scope or repository instructions identify applicable architecture authority.
2. Read every applicable record completely while loading only affected decisions.
3. Establish decision ownership, valid and illegal states, consequences, correspondence, and
   supersession.
4. Classify the complete proposal as conforming, amendment, or uncertain.
5. Stop uncertain and amendment cases at the named owner's authority boundary.
6. Reconcile exact historical states when an operation can omit accepted behavior or verification.
7. Report only checks actually performed.

## Invariants

- Current implementation and passing checks evidence conformance but never define architecture.
- A proposal conforms only when it preserves decisions and their material correspondence.
- Uncertainty cannot be resolved in favor of mutation without owner authority.
- Accepted behavior and verification cannot disappear silently during history rewriting.
- Repositories without an applicable architecture record pay no architecture ritual.

## Shape and precision

Class: cross-cutting SDLC gate. Primary shape: compact inline guidance. Lazy discovery avoids a
global path registry and keeps the skill portable across architecture-record formats.

The port retains semantic classification, record fitness, owner-controlled amendment, and
historical closure. It removes the fixed architecture filename, hardcoded repository census,
source-local caller inventory, standards exposition, and claims that one document schema is
universal. A record remains usable only to the degree its applicable decision is unambiguous.

## Premise and lineage negotiation

| Decision | Addy `documentation-and-adrs` | DerivaDEX `architecture` | Theaetetus disposition |
| --- | --- | --- | --- |
| Applicability | Encourages ADRs for significant decisions and matching repository convention. | Activates only when an architecture contract governs affected scope. | Preserve lazy, repository-declared applicability; never impose an ADR convention. |
| Decision semantics | Records context, decision, alternatives, consequences, status, and supersession. | Tests owner, valid/illegal states, consequences, correspondence, and amendment authority. | Preserve decision meaning, consequences, lifecycle, and supersession as the conformance surface. |
| Classification | Primarily authors and maintains documentation. | Classifies a proposal as conformance, amendment, or uncertainty. | Own classification only; delegate authorship and reserve amendments for the decision owner. |
| History | Maintains ADR status and changelog-like documentation. | Reconciles rebases and other history operations against accepted behavior and proof. | Preserve semantic history reconciliation; reject documentation maintenance as this skill's mission. |

Primary comparator: Addy Osmani,
[`documentation-and-adrs`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/documentation-and-adrs/SKILL.md#L23-L101).
Primary donor: DerivaDEX,
[`architecture`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/architecture/SKILL.md#L8-L62).

Rejected ceremony: universal ADR templates, fixed architecture filenames, documentation inventories,
and treating record presence or test success as amendment authority.
