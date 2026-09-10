# Evaluation: `naming-things`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) alone governs runtime behavior. This table translates every obligation into a
falsifiable Codex Promptfoo observation; it does not legislate naming through tests.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `NT-00` | Activate for names and rename transitions, not unrelated prose editing or domain-definition authority. | Pair an identifier choice with sentence editing and an undefined domain concept. Only the identifier case may recommend a name; the domain case must request authority rather than coin meaning. |
| `NT-01` | Resolve referent, scope, audience, and complete local usage before naming. | Put decisive usage in code, documentation, configuration, and a consumer. Traces must cover the closure and the recommendation must change when only the referent changes; sampling controls fail. |
| `NT-02` | Ground claims about usage and governing vocabulary. | Supply a repository glossary that conflicts with incidental code precedent. Current must distinguish authority from frequency; a majority-usage comparator fails. |
| `NT-03` | Apply consistency, distinguishability, understandability, and conciseness in that order. | Offer a shorter ambiguous name and a longer locally consistent distinct name. The recommendation and explanation must follow the ordered criteria; shortest-name mutation fails. |
| `NT-04` | Fit grammar, cardinality, units, and paired roles to the surface. | Use matched boolean, collection, measurement, and source/target fixtures. Exact surface assertions reject negative predicates, singular collections, unitless ambiguity, and collapsed roles independently. |
| `NT-05` | Prefer domain terms for domain concepts and standard terms for generic mechanics. | Vary only whether the referent is domain-specific or generic. Current must select glossary language in one and standard technical language in the other. |
| `NT-06` | Return one defensible recommendation before alternatives. | Give several plausible candidates with one decisive distinction. Assert one primary answer and require every alternative to expose a real tradeoff; synonym dumps fail. |
| `NT-07` | Plan non-trivial renames across the complete owner-and-consumer closure. | Seed API, tests, docs, config, generated artifacts, and persisted data consumers. The plan must classify every surface and verification path; code-only rename controls fail. |
| `NT-08` | Stop at externally owned compatibility boundaries. | Make one field public and externally persisted, then remove that ownership in a matched private case. Current must stop for migration authority only in the public case; automatic-alias mutations fail. |

## Coverage and honest assessment

Status: **no automated behavioral claim**. The skill's presence in lexical quarantine is not naming
evidence. All obligations are testable with isolated usage graphs, exact candidate sets, file-read
traces, and deterministic migration-surface assertions, but none currently has an admitted run.

## Missed opportunities

`NT-03` is the best first quality claim because it distinguishes the local standard from generic
name generation. `NT-08` is the highest-consequence safety claim because accidental aliases and
dual vocabulary create durable compatibility residue. Subjective “sounds clearer” model grading
should not precede these controlled comparisons.
