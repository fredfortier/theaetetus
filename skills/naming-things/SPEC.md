# Specification: `naming-things`

Status: implemented.

## Intent and boundary

Provide reusable naming mechanics for concepts and technical surfaces. The skill owns candidate
selection, vocabulary coherence, and rename closure; it does not create domain authority or edit
unrelated prose.

## Naming decision

`naming-things` is an established term of art whose broad object accurately matches the many
supported naming surfaces. More formal alternatives would be longer without improving distinction,
and identifier-specific names would falsely exclude concepts, namespaces, and vocabulary.

## Required behavior

1. Resolve referent, scope, audience, and complete local usage before proposing a name.
2. Use `evidence-grounding` for claims about current usage and governing vocabulary.
3. Apply consistency, distinguishability, understandability, and conciseness in that order.
4. Fit grammar, cardinality, units, and role distinctions to the named surface.
5. Prefer domain vocabulary for domain concepts and standard terms for generic mechanics.
6. Return one defensible recommendation before alternatives.
7. Plan non-trivial renames across the complete owner-and-consumer closure.
8. Stop at externally owned compatibility boundaries rather than creating accidental dual language.

## Invariants

- One live concept has one canonical name within a naming scope.
- Distinguishability outranks brevity.
- Syntax and path context are not repeated without a disambiguating need.
- A rename includes its consumers and verification, not only a new spelling.
- Compatibility residue requires an explicit owner and contract.

## Shape and precision

Class: cross-cutting design utility. Primary shape: compact inline guidance. The runtime keeps the
ordered standard and high-value surface rules while omitting exhaustive language examples that
would falsely imply universal style law.

The port retains referent/scope/audience discovery, local search, ordered criteria, grammatical
fit, controlled vocabulary, rename economics, atomic closure, and proof. It removes competing
repository doctrine routes, source-specific installation concerns, language omissions, and fixed
output ceremony.

## Validation cases

- Two nearby concepts receive distinguishable names despite a shorter ambiguous option.
- A boolean uses a positive predicate and avoids a double negative.
- A module name omits the concept already supplied by its namespace.
- A public-field rename stops for migration authority instead of silently adding an alias.

## Lineage

The source comparison, clause adjudication, naming rationale, and rejected particulars are recorded
in the top-level [utility integration record](../../SOFTWARE-DELIVERY-SOURCES.md#utility-integration).
Package naming law is defined by
[`SOFTWARE-DELIVERY-SPEC.md`](../../SOFTWARE-DELIVERY-SPEC.md#canonical-vocabulary).
