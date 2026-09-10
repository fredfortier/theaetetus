# Specification: `naming-things`

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

## Premise and lineage negotiation

| Decision | Addy `api-and-interface-design` | DerivaDEX `naming-things` | Theaetetus disposition |
| --- | --- | --- | --- |
| Naming purpose | Makes public interfaces predictable within a contract-first API discipline. | Resolves referent, scope, audience, vocabulary, grammar, and consumers for many technical surfaces. | Preserve predictable contracts but retain the donor's broader, explicit naming operation. |
| Standard | Emphasizes consistency, resource language, error semantics, and one-version evolution. | Orders consistency, distinguishability, understandability, and concision. | Preserve the ordered local standard; API rules apply only when that surface is actually governed. |
| Compatibility | Favors additive evolution and one live interface version. | Requires atomic rename closure and stops at externally owned compatibility boundaries. | Preserve one canonical live name; require migration authority before aliases or dual vocabulary. |
| Verification | Checks interface behavior and consumers. | Searches the complete usage closure and verifies the rename. | Preserve owner-and-consumer closure, including docs, configuration, schemas, and generated surfaces. |

Primary comparator: Addy Osmani,
[`api-and-interface-design`](https://github.com/addyosmani/agent-skills/blob/d2c37ef6225dd8726cdd369a8030307f48592d26/skills/api-and-interface-design/SKILL.md#L20-L155).
Primary donor: DerivaDEX,
[`naming-things`](https://gitlab.com/dexlabs/derivadex/-/blob/81650fee140c422b2c890436f0415e8ab3810fa5/.agents/skills/naming-things/SKILL.md#L12-L123).

Rejected ceremony: importing REST or TypeScript rules into unrelated names, exhaustive language
style catalogs, synonym lists without a recommendation, compatibility aliases without an owner, and
fixed output templates.
