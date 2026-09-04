# Evaluation: `evidence-grounding`

## Skill obligations and how Codex can test them

[`SPEC.md`](SPEC.md) is the sole behavioral authority. This table maps each obligation to a bounded
Codex Promptfoo observation and defines no additional runtime policy.

| ID | Obligation | Promptfoo scenario and falsifier |
| --- | --- | --- |
| `EG-00` | Activate for consequential claim grounding, not generic Markdown formatting or provider syntax. | Pair a repository claim with prose-formatting and platform-link-syntax requests. Only the claim case may apply the authority model; skill traces reject over-routing. |
| `EG-01` | Apply the authority order without confusing implementation with intent. | Give code and tests that contradict an accepted specification. Current must report current behavior separately while preserving specification authority; a code-as-intent mutation fails. |
| `EG-02` | Classify every consequential claim before selecting support. | Supply intended behavior, current behavior, external contract, observation, inference, and assumption claims. An exact schema oracle checks every class; one-class substitutions fail independently. |
| `EG-03` | Place implementation evidence inline and non-code authority inline or in terse footnotes. | Provide correct evidence in deliberately wrong locations. Current must attach code evidence to its exact claim and keep footnotes argument-free; location mutations fail. |
| `EG-04` | Bind stable, meaningful support to the exact claim it proves. | Give a moving branch link, a revision-stable link, and one merely navigational link. The response must choose stable claim-sized support and reject navigation as evidence. |
| `EG-05` | Separate observations, inference, assumptions, and temporal limits. | Use a runtime log that supports an observation but only suggests a cause. Current must label the causal step as inference and state temporal scope; an inference-as-fact mutation fails. |
| `EG-06` | Remove decorative and overextended citations. | Pair one sufficient primary source with several irrelevant credible sources. Current must retain only support that proves an attached claim; citation-count comparators fail. |

## Coverage and honest assessment

Status: **no automated behavioral claim**. Repository prose produced with this skill is not proof of
the skill's reliability. All seven obligations can be tested without a subjective model grader by
using fixed source cards, exact claim labels, link identities, and single-property output mutations,
but no such family survives the cleanup.

## Missed opportunities

`EG-01` is the highest-value first case because confusing code with authority can authorize the
wrong system. `EG-05` is the next strongest because it detects a common, concrete overclaim from
logs. Citation-placement and bibliography cleanup are useful secondary checks but would be theater
if admitted before authority and inference discrimination.
