---
name: naming-things
description: Chooses, reviews, and repairs names for identifiers, APIs, configuration, files, modules, namespaces, and domain concepts. Use for candidate selection, rename planning, terminology drift, and controlled vocabularies. Do not use for prose editing unrelated to a named concept.
---

# Naming Things

Treat a name as a design decision about a referent, audience, and scope.

## Apply the standard

Prefer the candidate that best satisfies these criteria in order:

1. `consistency`: one canonical term per concept, aligned with local language and framework norms;
2. `distinguishability`: clearly different from nearby live concepts;
3. `understandability`: accurately teaches or recalls the represented concept for its audience; and
4. `conciseness`: contains only the words needed at the right abstraction level.

Do not optimize for cleverness, raw length, personal taste, typing convenience, or precedent whose
rationale no longer applies.

## Choose the name

1. Identify the exact object, value, operation, state, boundary, resource, or concept.
2. Identify its naming scope and audience.
3. Search identifiers, documentation, contracts, tests, glossaries, and style rules in the affected
   owner-and-consumer closure. Use `evidence-grounding` for claims about current usage, governing
   vocabulary, and external contracts.
4. Prefer problem-domain terms for domain concepts and standard technical terms for generic
   mechanics. Prefer dictionary words over inventions.
5. Match part of speech and cardinality to the surface: nouns for values and types, plural nouns for
   collections, verbs for operations, and positive predicates for booleans.
6. Include units when a measurement would otherwise be ambiguous. Expand abbreviations unless the
   audience and local convention make them unambiguous.
7. Remove type, container, path, or owner words already supplied by the surrounding syntax.
8. Make paired roles explicit when both are live, such as source/target, expected/actual, or
   local/remote.
9. Return the strongest candidate first; include alternatives only when they expose a real tradeoff.

## Plan a rename

For a non-trivial rename, report:

- complete or intentionally partial scope;
- affected owners, consumers, and reviewers;
- ongoing confusion cost of the current name;
- one-time change cost across code, contracts, generated artifacts, persisted data, and communication;
- atomic transition or an explicit external migration owner; and
- verification through search, tests, type checks, compatibility checks, or document review.

Do not create an alias, duplicate path, shim, or dual vocabulary without an explicitly owned
compatibility contract. Stop for authority before changing public APIs, schemas, protocol fields,
persisted data, or externally owned vocabulary unless that scope was requested.

## Return

State the recommendation, criterion-backed reason, affected scope, and rename plan when applicable.
