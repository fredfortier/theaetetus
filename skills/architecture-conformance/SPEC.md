# Specification: `architecture-conformance`

Status: implemented.

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

## Validation cases

- An ungoverned change exits without ceremony.
- A conforming edit preserves its decision and verification correspondence.
- A passing test cannot authorize a changed ownership boundary.
- A rebase that removes behavior and its regression check is reported as unresolved omission.
- A stale decision owner produces `uncertain`, not inferred approval.

## Lineage

The source comparison, clause adjudication, naming rationale, and rejected particulars are recorded
in the top-level [utility integration record](../../SOFTWARE-DELIVERY-SOURCES.md#utility-integration).
The authority hierarchy and human decision boundary inherit
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#roles-and-authority).
