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

Status: **one of seven obligations has bounded behavioral evidence**.

`EG-01` supplies an accepted specification requiring HTTP 503 without cached data, while executable
CommonJS code and a genuinely passing test return HTTP 200 with cached data. Current, a
current-derived code-as-intent control, and no-skill receive the same repository and request. The
control changes only the authority rule so agreement between code and test becomes operational
intent. A deterministic oracle requires separate intended/current/authorization/support claims and
all three source identities.

Pass law: all ten EG calibration probes must pass; current must preserve the authority distinction
in 3/3; the isolated control must authorize implemented behavior in 3/3; no-skill must be reported;
and traces must prove fixture-local skill use and absence. In fresh combined run
`eval-A3w-2026-09-04T01:42:40`, current passed 3/3, the control manifested 3/3, no-skill also passed
the complete oracle 3/3, and trace isolation passed. The shared fixed calibration passed 27/27.

This family is useful as a regression guard against a dangerous authority inversion: a green test
cannot silently amend accepted intent. It is not merely a keyword check—the output must state both
conflicting behaviors, refuse authorization, and bind each claim to the actual files; the isolated
rule inversion changes the judgment. But the no-skill match defeats any claim that this scenario
demonstrates incremental capability from the skill. What survives is evidence that the current
skill does not damage a foundation-model competency and that its distinctive authority rule is
causally load-bearing under inversion, not evidence that installing it improves this judgment.

## Missed opportunities

Six obligations remain untested. `EG-05` is the strongest next case because it can expose a concrete
overclaim from runtime observations and may be harder than the baseline. `EG-02` should then test all
claim classes without bundling them into one compensating score. Citation placement and bibliography
cleanup remain secondary; admitting them before inference discrimination would overweight document
shape rather than grounding quality. A harder `EG-01` follow-up should hide the conflict across
history or multiple governing files instead of stating it in three short artifacts.
