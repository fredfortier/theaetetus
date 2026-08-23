# Workpad: Dialectical Skills Project

Status: runtime skills and approved Voice Mode amendment implemented; Promptfoo/Codex scenario specifications added; execution remains.

## Objective

Create two repo-local Codex skills that train and support human-led dialectical inquiry with an AI:

- `dialectical-inquiry`: the human drives as midwife; the runtime agent answers as a fallible oracle.
- `dialectical-tutor`: coaches the human's midwife craft when the main conversation shows an ineffective pattern.

The intended outcome is not a better question-answer script. It is a repeatable environment in which the human learns to form, test, revise, transfer, and defend a first-principles mental model without surrendering epistemic agency.

## Authority

1. Explicit user direction and approved skill `SPEC.md` files.
2. The DerivaDEX handbook's Dialectic Method for source intent.[^derivadex-dialectic]
3. This repository's approved project artifacts.
4. `$skill-writer` for skill architecture and validation mechanics.
5. Official OpenAI documentation for provider mechanics only.
6. Primary and scholarly sources catalogued in [RESEARCH.md](RESEARCH.md) for technique evidence.

Implementation or examples may demonstrate current behavior; they do not override approved intent.

## Non-negotiable principles

- The human drives the inquiry and owns the resulting model.
- The oracle answers substantively; it does not turn the main conversation into an agent-led interrogation.
- “Oracle” is a role, not an authority claim.
- The agent maintains a provisional model of the human's expressed understanding, never a claim about hidden mental state.
- First-principles understanding is evidenced through derivation, prediction, counterexample, transfer, and explicit unknowns—not agreement or paraphrase.
- Aporia is a valid result.
- The tutor intervenes minimally, coaches one observable move, and returns control.
- Dialectic cannot be reduced to a fixed script, score, or deterministic question ladder.
- Cargo-cult correction targets missing causal or authority relations, never the person's identity or intelligence.
- Evidence, inference, and assumption remain visibly distinct.

## Promptfoo/Codex evaluation law

### Canon and authority boundary

Promptfoo supplies the evaluation grammar and the Codex provider contract; it does not define what a good dialectic is. The provider exposes final text, thread identity, heuristic skill-use evidence, and traced command, file, search, and tool activity. Its `skill-used` signal is inferred from direct `SKILL.md` reads rather than a first-class skill event.[^pf-codex-surface] The local SPECs and the dialectical sources define the desired behavior.

Promptfoo's canonical skill comparison holds model, task files, and permissions constant while changing the skill, and asks separately whether the skill routed, improved the work, and avoided neighboring skills.[^pf-skill-comparison] This project adopts that causal-comparison shape. It rejects any evaluation that changes model, permissions, evidence packet, and skill text in the same comparison.

Promptfoo test cases combine `vars`, assertions, metadata, provider/prompt filters, and per-test options. External files and scenarios can organize larger suites, while `options.repeat` samples nondeterministic behavior.[^pf-test-cases] Assertions can be reused through `assertionTemplates`; assertion sets, named metrics, and JavaScript assertion modules allow hard gates and focused measurements without duplicating logic.[^pf-assertions]

### Evaluation unit and grammar

The atomic evaluation unit is:

```text
task + isolated fixture + evidence packet + expected route + observable state transition + assertions
```

The implementation grammar must use these roles:

| Promptfoo construct | Project law |
| --- | --- |
| `providers` | Define named target variants: `current`, `mechanical-placebo`, and `no-skill`, holding model and permissions constant. The placebo is a deliberately defective control artifact, never a candidate skill. |
| `prompts` | Preserve natural user language. Do not force target dialogue into JSON merely to simplify grading. |
| `vars` | Carry `request`, embedded prior exchange when applicable, `query`, source `context`, `workspaceDir`, expected route, and expected state transition. |
| `metadata` | Tag skill, test layer, source slice, working/holdout status, and positive/negative/control origin. |
| `defaultTest` | Apply shared hard assertions and `disableVarExpansion: true` when arrays are semantic values rather than a desired Cartesian matrix. |
| `assertionTemplates` | Define reusable routing, citation-allowlist, person-label, workpad-shape, and handoff assertions. |
| `tests` | Express individually named behavioral cases. One row must test one principal decision. |
| `scenarios` | Generate controlled paraphrase/source-slice matrices only. Do not use scenarios to imply ordered conversation. |
| `options.repeat` | Repeat nondeterministic semantic cases three times; keep deterministic structural checks single-run. |

The unit-suite configuration must have this shape; anchors may reduce duplication, but they must not hide provider differences:

```yaml
description: Dialectical skill discrimination

x-codex-common: &codexCommon
  model: <pinned-codex-model>
  model_reasoning_effort: high
  approval_policy: never
  network_access_enabled: false
  web_search_mode: disabled
  inherit_process_env: false
  persist_threads: false
  enable_streaming: true

providers:
  - id: openai:codex-sdk
    label: current
    config:
      <<: *codexCommon
      working_dir: '{{currentWorkspaceDir}}'
      sandbox_mode: workspace-write
  - id: openai:codex-sdk
    label: mechanical-placebo
    config:
      <<: *codexCommon
      working_dir: '{{placeboWorkspaceDir}}'
      sandbox_mode: workspace-write
  - id: openai:codex-sdk
    label: no-skill
    config:
      <<: *codexCommon
      working_dir: '{{noSkillWorkspaceDir}}'
      sandbox_mode: workspace-write

prompts:
  - id: natural-request
    raw: '{{request}}'

defaultTest:
  options:
    disableVarExpansion: true
    repeat: 3
  assert:
    - $ref: '#/assertionTemplates/noPersonDiagnosis'
    - $ref: '#/assertionTemplates/sourceUrlAllowlist'

assertionTemplates:
  noPersonDiagnosis:
    type: javascript
    value: file://assertions/no-person-diagnosis.js
    metric: HardSafety
  sourceUrlAllowlist:
    type: javascript
    value: file://assertions/source-url-allowlist.js
    metric: HardEvidenceBoundary

tests:
  - file://tests/routing.yaml
  - file://tests/evidence.yaml
  - file://tests/artifact.yaml
  - file://tests/intervention.yaml
  - file://tests/controls.yaml
```

The integration suite must be separate: use one prompt template per ordered conversation, `persist_threads: true`, `thread_pool_size: 1`, concurrency one, no deep tracing, and explicit turn-order fixtures. This prevents unit-test matrix expansion and thread pooling from masquerading as a conversation.

### Codex target law

1. Pin one explicit Codex model and reasoning effort across compared providers. An omitted model weakens attribution because the backend-resolved default is not exposed to Promptfoo.[^pf-codex-surface]
2. Give every row a disposable Git working directory. Use `workspace-write` only when the skill must create or update `.agent/*.md`; use `read-only` for routing near-misses and graders. Filesystem sandbox, network/search, approvals, and inherited environment are separate controls and must be configured separately.[^pf-codex-sandbox]
3. Set `approval_policy: never`, disable network and web search, and do not inherit the ambient process environment. The evidence packet, not live retrieval, governs textbook claims.
4. Enable streaming when skill-read or trajectory evidence is required. Do not call this live token streaming; Promptfoo still receives the final response only.[^pf-codex-surface]
5. Use ephemeral threads for routing and single-decision tests. Use a separate, serial integration configuration for true multi-turn lifecycle tests because persistent Codex threads pool by prompt template and configuration, not rendered variable values; deep tracing disables persistence.[^pf-codex-threads]
6. Do not apply `output_schema` to the target dialectical response. It would test a structured wrapper instead of the natural conversational contract. Structured output remains acceptable for graders and assertion helpers; Codex returns schema-constrained output to Promptfoo as a string, so JavaScript must parse it.[^pf-codex-surface]

### Test layers and correct tooling

| Layer | Question | Promptfoo tool | Hard rule |
| --- | --- | --- | --- |
| 0. Structure | Are the skill files valid and references resolvable? | Repository validator outside Promptfoo | Never cite this as behavioral coverage. |
| 1. Routing | Was the intended skill read, and was its sibling avoided? | `skill-used`, `not-skill-used`; optional `trajectory:step-count` while diagnosing | Routing evidence is necessary on route cases and never sufficient for a pass. Codex routing signals are heuristic.[^pf-skill-trace] |
| 2. Deterministic contract | Are required control markers bounded, forbidden labels absent, URLs allowlisted, and artifact fields present? | External `javascript` assertions using `output`, `vars`, and provider metadata | Prefer exact checks for exact contracts; return a reasoned `GradingResult`.[^pf-js-assertions] |
| 3. Source fidelity | Does a bounded source-summary output make only claims supported by the supplied claim cards? | `context-faithfulness` with explicit `query` and `context` | Use only on evidence-summary rows. Do not apply it to an open dialectic containing explicitly labeled local inference.[^pf-context-faithfulness] |
| 4. Semantic outcome | Did the response and workpad preserve human ownership, distinguish evidence from inference, and make the correct intervention decision? | `agent-rubric` with an explicit read-only Codex grader in the same fixture | The rubric must require artifact inspection and cite observed evidence. A text-only `llm-rubric` is insufficient when the workpad matters.[^pf-agent-rubric] |
| 5. Stateful integration | Does inquiry state survive actual turns, tutor recruitment, retry, return, and closure without transcript drift? | Dedicated serial Codex provider with `persist_threads: true`, one prompt template per conversation, `thread_pool_size: 1` | Do not simulate this layer solely by embedding a complete transcript in one prompt. |
| 6. Comparative discrimination | Does the current skill outperform a deliberately mechanical skill and no-skill control under identical conditions? | Provider labels, paired cases, named metrics, and side-by-side results | Compare behavior, not aggregate token-weighted pageantry. |
| 7. Human judgment | Does the exchange feel responsive, dignified, and genuinely human-led? | Recorded human review outside the automated pass | Required before claiming non-mechanical quality or human mastery. |

`factuality` is not the default source-grounding judge here: it compares output with a reference answer, while these conversations may legitimately add explicitly labeled inference and questions.[^pf-factuality] `context-faithfulness` is narrower and appropriate only for rows whose entire job is bounded source summary. `llm-rubric`, similarity, cost, latency, and `max-score` may be secondary diagnostics; none may override a failed hard invariant or serve as a proxy for human ownership.

### Working, holdout, and control sets

- Working cases contain the approved scenarios used to author the assertions.
- Holdout cases paraphrase the subject, vary which source limit is tempting to overclaim, and remain unread by the skill authoring loop until evaluation.
- Positive controls are canonical source-grounded, human-owned exchanges that must pass.
- Negative controls are fluent but mechanically Socratic-looking exchanges that must fail.
- Route controls include both neighboring-skill and no-skill near misses.
- Grader calibration must run assertions directly against fixed positive and negative outputs before any live Codex result is trusted. Promptfoo permits precomputed `providerOutput`; use it to test the grader rather than the target.[^pf-reference]

### Ceremony-only defeater and burden of proof

Null hypothesis: “The suite rewards only visible ceremony—reading `SKILL.md`, emitting `COACHING PAUSE`, creating a well-shaped workpad, naming source categories, and satisfying a permissive model judge. A mechanical agent can therefore score as well as the current skill without preserving human ownership, responding to the last answer, respecting evidence limits, or timing intervention from observed behavior.”

The burden rests on this project. More assertions, more source names, or a fluent control are not evidence against the null. The evaluation must make the null predict success and then give it a fair chance to succeed:

1. Construct a `mechanical-placebo` control artifact, not a candidate skill. Match the current target on the suspected ceremonial causes: direct `SKILL.md` read, required markers, workpad schema, allowed source names and URLs, approximate response-length band, model, reasoning effort, permissions, and evidence packet.
2. Remove the claimed causal competencies while retaining those matched surface features: use a fixed question ladder that ignores the latest answer, intervene automatically, write the human's synthesis, and repeat source names without respecting claim limits.
3. Before live runs, calibrate each semantic assertion against a fixed positive output and four single-defect negative outputs: ownership removed, responsiveness removed, evidence boundary removed, and intervention timing removed. An assertion that accepts its corresponding defect is invalid.
4. Freeze the assertions, thresholds, discriminating case IDs, and expected failures before running the live `current`, `mechanical-placebo`, and `no-skill` providers. Do not repair a failed result by relabeling it diagnostic or changing its weight.
5. Run all three providers on identical working and untouched holdout cases. The placebo must satisfy the matched ceremonial checks yet fail every predesignated semantic case; the current skill must pass every hard gate across repeats.
6. Define `DialecticalOutcome` solely from ownership, responsiveness, evidence-boundary, intervention-timing, and state-transition judgments. Exclude skill-read, marker, file-existence, source-count, length, cost, latency, and token metrics from that outcome.
7. Inspect the grader's cited observations and obtain blinded human comparison before making any claim about non-mechanical conversational quality.

The inference is deliberately narrow. If the matched placebo passes a semantic case, the null survives and Gate 4 fails. If the grader cannot reject a single-defect control, that grader is inadmissible. If the placebo satisfies the ceremonial checks but fails the frozen semantic gates while the current target passes the same working and holdout cases, ceremony alone cannot explain the score difference on those cases. This does not prove universal dialectical skill, human understanding, or transfer beyond the tested distribution.

### Pass law

- Every hard routing, safety, evidence-boundary, artifact, and lifecycle assertion passes on every repeat.
- Fixed positive grader controls pass and every corresponding single-defect control fails before live results count.
- `current` passes every designated outcome case; `mechanical-placebo` passes the matched ceremonial checks but fails every predesignated semantic case; `no-skill` stays out of near misses and fails the positive workflow obligations.
- No weighted average can compensate for a hard failure.
- `DialecticalOutcome` contains only semantic outcome assertions; route, trace, latency, cost, token count, citation count, and file existence are reported separately.
- The automated suite may establish behavior on its fixtures. Only human review may support a claim about felt non-mechanical quality, and no test may certify the human's internal understanding.

## Deliverables

| Artifact | Purpose | State |
| --- | --- | --- |
| `RESEARCH.md` | Evidence synthesis, techniques, source inventory, topology decision, gaps | complete |
| `WORKPAD.md` | Project governance, decisions, phase gates, progress | active |
| `skill/dialectical-inquiry/SPEC.md` | Approved blueprint for the main skill | approved |
| `skill/dialectical-tutor/SPEC.md` | Approved blueprint for the tutor skill | approved |
| `skill/dialectical-inquiry/SKILL.md` and references | Main runtime skill | implemented |
| `skill/dialectical-tutor/SKILL.md` and references | Tutor runtime skill | implemented |
| Voice Mode runtime references and spec amendments | Verbal-first inquiry, transcript protection, and capability-aware orchestration | implemented |

## Phase gates

### Gate 1: research and topology

Pass when:

- canonical and applied sources have been read;
- techniques are mapped to runtime behavior and guardrails;
- topology, shapes, gaps, and portability decisions are explicit;
- both `SPEC.md` blueprints are ready for user review.

State: passed.

### Gate 2: blueprint approval

Requires explicit user approval or corrections for:

- skill names and locations;
- human/oracle/tutor role contracts;
- runtime workpad schema and lifecycle;
- formative calibration and tutor triggers;
- named cross-skill recruitment with portable fallback;
- completion and aporia conditions.

State: passed by explicit user approval on 2026-08-22. The approved runtime root is `skill/<name>/`.

### Gate 3: authoring

After approval:

1. Apply approved corrections to both specs.
2. Read the `$skill-writer` authoring, description-optimization, and registration-validation references.
3. Author runtime routers and focused flat references.
4. Add happy-path, robust, and anti-pattern/repair examples.
5. Register skills according to repository conventions approved at Gate 2.

State: passed. Both routers, all routed references, and transformed examples are implemented.

### Gate 4: validation

Pass when:

- structural validation succeeds;
- positive and negative trigger cases route correctly;
- scenario evals show the human remains the driver;
- tutor recruitment is brief, evidence-based, and returns cleanly;
- the workpad survives multi-turn updates without becoming a transcript;
- false-premise, sycophancy, overreliance, cargo-cult, and premature-closure cases are exercised;
- a human review confirms the interaction feels skilled rather than mechanical.

State: structural and prior static scenario validation passed; Promptfoo/Codex scenario execution and live human review remain open.

## Adopted decisions

| Decision | Basis |
| --- | --- |
| Two skills, not one monolith | Separates subject inquiry from coaching the inquiry skill. |
| Main skill name `dialectical-inquiry` | Names the activity without claiming generic ownership of all dialectics. |
| Tutor name `dialectical-tutor` | Makes the recruited role and trigger boundary explicit. |
| Human midwife / agent oracle | Explicit user intent; deliberately inverts classical maieutics. |
| Oracle is fallible and evidence-grounded | Prevents “oracle” from becoming authority or fluent completion. |
| Qualitative calibration, no score | Human skill and understanding cannot be mechanically certified. |
| Workpad at `.agent/<subject-slug>.md` | Persistent, subject-specific public model ledger required by user. |
| Tutor recruited after repeated or consequential evidence | Prevents interruption after every imperfect move. |
| Named tutor route plus portable fallback | Honors seamless recruitment while acknowledging `$skill-writer` portability guidance. |
| Reference-backed runtime skills | Keeps routers concise and loads calibration/examples only when relevant. |
| Runtime root `skill/<name>/` | Explicitly approved after the location decision was presented. |
| Voice is a routed runtime branch | Live audio changes turn-taking, evidence delivery, transcript authority, and coaching rendering without changing the core dialectic. |
| Authoritative Voice activation only | Public docs do not establish a universal skill-visible flag; transcript style is not reliable detection evidence. |
| Oracle remains the voice owner | Manager-style specialist use preserves continuity and the human–oracle role contract. |
| Promptfoo cases use independent disposable fixtures | Prevents persistent-thread history and workpad mutations from contaminating adjacent rows. |
| Textbook claim cards are the eval evidence boundary | Tests source use and source limits without live web variance or unsupported efficacy claims. |
| Routing traces are supporting evidence only | Codex `skill-used` is heuristic and cannot prove dialectical quality. |
| A matched mechanical placebo carries the ceremony-only null | It preserves route, markers, file shape, source labels, and presentation while removing the claimed semantic competencies; accepting it invalidates the evaluation. |
| The burden of proof is not yet discharged | The law and controls are specified, but no behavioral claim follows until grader calibration, live controls, untouched holdouts, and human comparison have run. |

## Rejected decisions

| Decision | Reason |
| --- | --- |
| Extend the existing DerivaDEX `dialectics` skill unchanged | Its agent-led interview elicits DRI premises; this project requires the human to question the oracle and master that craft. |
| One skill that silently switches personalities | Makes coaching hard to inspect and encourages tutor takeover. |
| Fixed thesis/antithesis/synthesis prompt chain | Treats skilled judgment as mechanical and encourages ritual compliance. |
| Numerical mastery or confidence score | Creates false precision and Goodhart pressure. |
| Agent-generated final mental model accepted by user | Approval is not ownership. |
| Tutor question bank as the core method | Question categories are scaffolds; selection, listening, and adaptation are the skill. |
| Always delay every oracle answer | Cognitive forcing is useful selectively and can harm usability. |
| Multi-agent as the primary inquiry topology | The tutor and research workers may support a Voice-capable runtime backstage, but the inquiry remains one human–oracle conversation. |

## Remaining evaluation

- Implement the matched mechanical placebo and the four single-defect grader controls without using live results to tune their expected outcomes.
- Freeze the semantic assertions, thresholds, discriminating case IDs, and expected failures before target execution.
- Implement and run the approved Promptfoo/Codex fixtures specified in both skill specs.
- Reject the ceremony-only null only if the matched placebo passes ceremonial checks, fails the frozen semantic gates, and the current target passes the same working and untouched holdout cases.
- Exercise trigger and non-trigger fixtures in the target runtime.
- Exercise the integrated false-positive handoff and portable fallback paths in a live inquiry.
- Conduct a live human review for conversational agency and non-mechanical feel.

Voice runtime validation remains deferred and has no test scenarios in the present Promptfoo specification.

## Validation record

Static validation completed on 2026-08-22:

- the canonical `quick_validate.py` validator passed both skill roots;
- `git diff --check` passed;
- every bundled reference is flat and directly linked from its owning `SKILL.md`;
- no host-specific absolute path or `file://` link appears in project Markdown;
- transformed examples cover ownership and transfer, false framing and aporia, cargo-cult repair, false-positive tutor recruitment, bounded coaching, and oracle supervision;
- final descriptions preserve the approved positive and negative trigger boundaries.

These checks establish structure and static behavioral coverage. They do not certify human mastery or the felt quality of a live dialectical exchange.

Voice amendment validation completed on 2026-08-22:

- both skill roots passed the canonical structural validator after the new references were added;
- every Voice reference is flat and directly routed from its owning `SKILL.md`;
- positive Voice triggers and adjacent non-triggers were added to both specs;
- static failure cases cover false surface detection, unclear or interrupted audio, vocal-delivery bias, stale delegated results, tutor takeover, asynchronous source visibility, and oral synthesis;
- `git diff --check` and the whitespace audit passed.

This is static coverage only. Actual surface metadata visibility, interruption behavior, and backstage agent coordination remain runtime-dependent and require a live Voice session.

## Update protocol

After each approved phase or material decision:

- update status and phase gates;
- record adopted, rejected, or deferred decisions;
- link new evidence at the exact claim it supports;
- keep research/maintenance provenance out of runtime skill references;
- never begin the next gated phase implicitly.

[^derivadex-dialectic]: The DerivaDEX handbook's [Dialectic Method](https://gitlab.com/dexlabs/derivadex/-/blob/master-patch-ci-topology/wiki/handbook/ai-native-team.md#dialectic-method) defines the human-ownership intent translated by this project.
[^pf-codex-surface]: Promptfoo's [OpenAI Codex SDK provider](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/) documents the final-output surface, strict provider configuration, explicit model behavior, schema-string handling, streaming traces, and heuristic skill detection.
[^pf-skill-comparison]: Promptfoo's [Test Agent Skills guide](https://www.promptfoo.dev/docs/guides/test-agent-skills/) requires controlled skill comparisons and separates invocation, output quality, and neighboring-skill avoidance.
[^pf-test-cases]: Promptfoo's [Test Case Configuration](https://www.promptfoo.dev/docs/configuration/test-cases/) documents `vars`, assertions, metadata, provider/prompt filters, external cases, and per-test repetition.
[^pf-assertions]: Promptfoo's [configuration guide](https://www.promptfoo.dev/docs/configuration/guide/) and [Assertions and Metrics reference](https://www.promptfoo.dev/docs/configuration/expected-outputs/) document assertion templates, assertion sets, named metrics, external assertion modules, and variable expansion.
[^pf-codex-sandbox]: Promptfoo's [Codex sandbox documentation](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/#sandbox-mode) distinguishes filesystem access from network, search, approvals, and environment inheritance.
[^pf-codex-threads]: Promptfoo's [Codex thread-management documentation](https://www.promptfoo.dev/docs/providers/openai-codex-sdk/#thread-management) documents ephemeral defaults, prompt-template/config pooling, serial ordering requirements, and the incompatibility between deep tracing and persistence.
[^pf-skill-trace]: Promptfoo's [skill trace guidance](https://www.promptfoo.dev/docs/guides/test-agent-skills/#add-trace-evidence-when-needed) shows `trajectory:step-count` for a Codex `SKILL.md` read and treats trace evidence as workflow evidence.
[^pf-js-assertions]: Promptfoo's [external JavaScript assertion contract](https://www.promptfoo.dev/docs/configuration/expected-outputs/#javascript) exposes output, variables, provider response, and metadata and permits a reasoned `GradingResult`.
[^pf-context-faithfulness]: Promptfoo's [Context Faithfulness assertion](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/context-faithfulness/) measures whether response claims are supported by supplied context and documents its judge limitations.
[^pf-agent-rubric]: Promptfoo's [Agent Rubric](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/agent-rubric/) is specifically for a coding-agent grader that must inspect workspace artifacts; it supports an explicit read-only Codex working directory and threshold.
[^pf-factuality]: Promptfoo's [Factuality assertion](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/factuality/) compares an output with a reference answer for factual consistency.
[^pf-reference]: Promptfoo's [Configuration Reference](https://www.promptfoo.dev/docs/configuration/reference/) documents precomputed `providerOutput`, enabling assertion calibration without a target-provider call.
