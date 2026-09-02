# Theaetetus

**Human-led dialectical inquiry for AI-native engineering teams.**

Theaetetus is a Codex plugin with two conversational skills and one backstage review skill for a
difficult moment in software work: a capable engineer must make a consequential change in a domain
they do not yet understand.

The usual AI interaction optimizes for an answer. This project optimizes for a different artifact:
a human-owned causal model that can survive review, predict a changed case, and justify a bounded
engineering consequence. The human questions a knowledgeable but fallible AI oracle; the oracle
answers substantively and exposes its assumptions; a brief tutor intervenes only when the human's
inquiry technique stops doing useful epistemic work.

> Interrogate the oracle. Keep the model.

This is an experimental method with a deliberately narrow evidence claim. Its
[automated evaluation](WORKPAD.md#validation-record) shows that the skills preserve human
ownership, evidence discipline, responsive coaching, and cross-case causal transfer on the
repository's fixtures. It does **not** yet show that real teams learn faster, retain more, or ship
better changes. That requires longitudinal human study.

## The problem

AI-native teams can obtain fluent code and architecture faster than they can verify the premises
behind them. The risk is greatest at a domain boundary: the engineer can recognize program shapes
while importing the wrong analogy for the target system—a transaction hash as HTTP success, a
signature as complete authorization, or idempotency as protection against revised chain history.

Two known hazards compound the problem. People can over-rely on incorrect AI recommendations even
when explanations are present, while human-first cognitive forcing can reduce that overreliance at
a usability cost.[^forcing] RLHF-trained assistants have also exhibited sycophancy: matching the
user's stated view can be preferred over correcting it.[^sycophancy] A longer answer, a citation
list, or an agent-authored “mental model” does not repair either failure.

Theaetetus starts from three premises:

1. Expertise is domain-relative. A senior software engineer can be an acclimating novice in
   cryptography, derivatives, market microstructure, or blockchain finality.[^expertise]
2. Evidence of understanding is generative: derivation, counterexample, prediction, transfer, and
   an explicit account of what remains unknown—not agreement or paraphrase. The ICAP framework
   gives this distinction a learning-science basis, while not validating this particular AI
   intervention.[^icap]
3. If the capability being developed is the human's judgment, the human must own the proposition,
   its revisions, and the terminal synthesis. An agent-led tutorial may deliver the answer while
   leaving that capability untested.

The resulting project thesis is a research hypothesis: disciplined, human-led dialectic may help a
cross-domain acclimating engineer reach a first reviewable contribution sooner without surrendering
epistemic agency. “Reviewable contribution” means a causal account, decision-owning boundary,
invariants and unknowns, and a discriminating test or bounded change—not instant expertise or
guaranteed correctness. The full premise and claim boundary are governed in
[WORKPAD.md](WORKPAD.md#governing-thesis).

## The role inversion

The project takes its name from Plato's *Theaetetus*, where Socrates describes intellectual
midwifery as helping another person bring forth and test an account. This project deliberately
reverses the classical allocation: the **human** practises the midwife's craft on an **AI** oracle.
The classical source supplies a form and a warning, not evidence that an AI-mediated engineering
method is effective.[^theaetetus]

| Role | Owns | Must not do |
| --- | --- | --- |
| Human midwife | The live question, provisional thesis, revisions, synthesis, and decision | Delegate judgment to the oracle or accept its prose as understanding |
| Fallible oracle | Substantive answers, independent reconstruction, evidence, uncertainty, counterexamples, and defeaters | Manufacture agreement, conceal assumptions, or write the human's final model |
| Dialectical tutor | One bounded repair to an observable inquiry move, followed by immediate return | Become the subject expert, score the person, or run the inquiry |
| Subject workpad | Public claims, causal relations, provenance, disagreements, unknowns, and terminal state | Become a transcript, hidden chain-of-thought, or monotonic confidence log |

This is not a fixed “Socratic” question ladder. Guided discovery depends on genuine curiosity,
responsive listening, and learner-authored synthesis; a predetermined sequence can become covert
persuasion.[^padesky] The skills therefore encode responsibilities and boundaries, not a dialogue
state machine. A precise **aporia**—the blocking premise and the evidence needed next—is a valid
result.

## What the project contains

- [`dialectical-inquiry`](plugins/theaetetus/skills/dialectical-inquiry/SKILL.md) runs a persistent, subject-bound
  inquiry. It answers as the oracle, maintains `.agent/<subject-slug>.md`, tests the expressed model,
  and closes only with human ownership or precise aporia.
- [`dialectical-tutor`](plugins/theaetetus/skills/dialectical-tutor/SKILL.md) repairs one observable midwife move. It
  may be recruited by the inquiry or invoked directly for deliberate practice, but it returns after
  at most one retry and one hinted retry.
- [`dialectical-process-reviewer`](plugins/theaetetus/skills/dialectical-process-reviewer/SKILL.md)
  gives the main oracle an independent, backstage qualitative audit at bounded checkpoints. It
  never speaks to the human or lowers the tutor's intervention threshold.
- [`evals/promptfoo`](evals/promptfoo) contains the frozen Promptfoo/Codex contract, calibrated
  graders, a matched mechanical placebo, sealed holdouts, persistent conversations, and six
  runnable synthetic domain sandboxes.
- [RESEARCH.md](RESEARCH.md) records the source synthesis, technique-to-runtime translation,
  applicability limits, and open evidence gaps.
- [WORKPAD.md](WORKPAD.md) governs the thesis, evaluation law, decisions, validation record, and the
  still-open human-productivity gate.

The skill files themselves have no application runtime dependency. Node, Promptfoo, Rust, and
Python are used only to reproduce this repository's evaluation suite.

## Use it in an AI-native team

Theaetetus belongs upstream of a consequential specification or change, when the engineer can
inspect evidence but does not yet own the target-domain model. Good uses include unfamiliar-system
onboarding, incident reconstruction, architecture premise discovery, security-boundary analysis,
and pre-implementation review.

It is not the right tool for a one-shot explanation, ordinary tutoring, a settled implementation,
an autonomous coding run, or an agent-authored conclusion awaiting human approval.

A practical team loop is:

1. **Name the decision, not a topic.** The DRI starts with the operational boundary, current
   account, and uncertainty—for example, “when may this swap UI call an operation successful?”
2. **Interrogate before specifying.** The oracle inspects code and sources, answers directly, and
   pressures the current account with a consequence, rival explanation, or discriminating case.
3. **Keep provenance visible.** The workpad separates the human's claims, oracle proposals,
   repository observations, external authority, inference, and unknowns.
4. **Recruit coaching sparingly.** Repeated passive acceptance, solution-label substitution, or
   failure to use the latest answer may trigger one tutor repair. A wrong answer or unfamiliar term
   alone does not.
5. **Demand transfer.** Before implementation, change an input or boundary. The human predicts the
   result from the same causal model rather than repeating the original vocabulary.
6. **Hand off a reviewable artifact.** The resulting invariant set, state machine, failing test,
   diagnostic plan, or small patch boundary enters normal engineering review. The workpad is
   evidence of the inquiry, not authority over the reviewer.

For team use, the domain reviewer should inspect the model and engineering artifact rather than
grade the eloquence of the conversation. The DRI remains accountable for the final claim. A
reviewer may close a false premise, add missing domain evidence, or reject an apparently owned
model that does not match the system.

## Install

Theaetetus is packaged as a skills-only Codex plugin in the repository marketplace topology
documented by OpenAI:[^codex-plugins]

```text
.agents/plugins/marketplace.json
plugins/theaetetus/
  .codex-plugin/plugin.json
  LICENSE
  skills/
    dialectical-inquiry/SKILL.md
    dialectical-tutor/SKILL.md
```

Install the Git marketplace and then the plugin:

```bash
codex plugin marketplace add fredfortier/theaetetus --ref master
codex plugin add theaetetus@theaetetus
```

Start a new Codex session after installation so the bundled skills are discovered. In Codex CLI,
`/plugins` opens the plugin browser. Plugins are supported in Codex CLI and Codex in the ChatGPT
desktop app; the current OpenAI documentation says the IDE extension does not support plugin
installation.[^codex-use-plugins]

For local development, clone the repository and add its root as a local marketplace:

```bash
git clone https://github.com/fredfortier/theaetetus.git
codex plugin marketplace add /absolute/path/to/theaetetus
codex plugin add theaetetus@theaetetus
```

The canonical—and only—skill sources live under
[`plugins/theaetetus/skills`](plugins/theaetetus/skills). The evaluation harness copies them from
the plugin into disposable test projects; this repository does not expose a project-scoped
`.agents/skills` installation.

### Backstage process reviewer

The conventional plugin bundles
[`dialectical-process-reviewer`](plugins/theaetetus/skills/dialectical-process-reviewer/SKILL.md) as a third skill.
During a live inquiry, the main skill asks a normal subagent to use that reviewer after the initial
account plus three material human moves, after each four additional material moves, and before an
`owned` close. No project agent, `AGENTS.md`, or post-install copy step is required.

The reviewer grades inquiry *moves*, not the person: each relevant dimension is `demonstrated`,
`not tested`, or `repair evidence`. It returns a private recommendation to the main oracle, which
independently checks the evidence before exposing any one-move remediation through the existing
tutor contract. If the current surface cannot coordinate subagents, the main skill performs the
same checkpoint locally and silently.[^codex-subagents]

## Start an inquiry

Launch Codex from the target repository and invoke the main skill with a subject, decision boundary,
present model, and inspectable evidence:

```text
$dialectical-inquiry

Subject: when this deposit becomes spendable.

We credit an ERC-20 Transfer log observed at latest and deduplicate by transaction hash.
My present model is that at-least-once delivery makes duplicates the only consistency threat.
Inspect the indexer and tests. What event would invalidate that model, and which ledger
transition would follow?
```

The oracle should answer the domain question before applying pressure. It will create a
subject-specific workpad under `.agent/`, preserve your stated model separately from its own
account, and return direction to you after each material exchange.

Useful follow-ups are responsive rather than ceremonial:

```text
Which observed fact distinguishes duplicate delivery from revision of canonical history?

If the original credit remains in an append-only ledger, what compensating entry preserves both
balance correctness and provenance?

Changed case: the source-chain transfer is finalized but the destination mint fails. Which part
of our model transfers, and where does it stop?
```

To practise the questioning craft outside a live inquiry, invoke the tutor directly:

```text
$dialectical-tutor

Help me practise questioning this oracle answer. Give me one planted weakness, one move at a time,
and disclose the weakness after the exercise.
```

Commit a workpad only when it is useful project evidence and contains no sensitive material. It is
designed to record public reasons and conclusions, never private chain-of-thought.

## What counts as success

A successful inquiry produces all of the following, or closes with a precise aporia that prevents
an unsafe change:

- a human-authored causal account using the target-domain primitives correctly;
- an imported analogy that has been retained, narrowed, or rejected for a stated reason;
- a counterexample or prediction on a changed case;
- visible separation of evidence, inference, assumptions, and unknowns;
- a concrete engineering artifact such as a failing test, invariant, diagnostic plan, state
  machine, or bounded patch design;
- an oracle challenge that the artifact survives, plus the evidence that would revise it.

Correct terminology without those relations is cargo-cult success and should fail. Aporia can pass
when it identifies the missing premise and next discriminating observation.

## Evaluation as a causal argument

The evaluation does not ask whether responses look Socratic. It asks whether the claimed result can
still be explained by visible ceremony.

The matched `mechanical-placebo` reads a skill, creates the same workpad shape, emits the same
lifecycle markers, and uses similar source labels. It deliberately removes the hypothesized causal
competencies: responsive listening, human model ownership, evidence limits, and warranted tutor
timing. If that placebo passes a semantic case, the ceremony-only explanation survives and the
evaluation fails.

The six domain sandboxes were selected for different problem classes rather than six surface
variations of one ownership bug:

| Sandbox | Imported analogy under pressure | Required engineering consequence |
| --- | --- | --- |
| ZK statement binding | Honest prover input is part of the proved statement | Bind the public claim and derive an adversarial proof test |
| Wallet lifecycle | Resolved mutation means success in current UI context | Immutable operation identity and a defensible transaction lifecycle |
| Mean-reversion backtest | High fitted PnL implies executable performance | Locate the earliest impossible information edge and repair event time |
| Cross-margin liquidation | Leverage is a position-local stop | Account-level equity/maintenance invariant over a coherent snapshot |
| Typed-signature replay | Signer recovery proves complete intent and uniqueness | Domain, freshness, atomic consumption, and a replay matrix |
| Reorged deposit | Deduplication covers post-consumption consistency | Reversible ledger state and canonical-history reconciliation |

Each working case has a changed-case holdout that must preserve the relation under different
surface vocabulary. The wallet case also has a true five-turn conversation in which repeated
solution-label substitution warrants one tutor repair. The fixture and gold outcome are separated
so the target cannot read its expected answer.

The final pre-plugin cache-disabled automated run passed **116/116 rows**: calibrated grader
controls, protocol units, matched controls, sealed holdouts, three pedagogical conversations, and
the wallet domain conversation. All 64 observed routing checks passed. The exact scope and result
are recorded in [the validation record](WORKPAD.md#validation-record); the repair history—including
invalid scenarios, grader plumbing defects, control defects, and genuine skill defects—is retained
in the [findings log](evals/promptfoo/evidence/findings-log.md).

That result supports only the frozen automated contract on these fixtures. It does not establish
human learning, productivity, retention, universal transfer, felt conversational quality, or Voice
behavior. The plugin topology and new backstage reviewer have passed structural validation and an
actual local Codex marketplace install, but the 116-row semantic suite has not been rerun against
that addition. The human-comparison gate remains open.

## Reproduce the evaluation

The full suite requires:

- Node.js 22.22 or later and npm;
- Python 3;
- a Rust toolchain with Cargo;
- Codex credentials available to `@openai/codex-sdk`;
- enough model budget for repeated target and grader calls.

Install the pinned JavaScript dependencies and run the frozen suite:

```bash
npm ci
npm run eval:dialectic
```

The [evaluation runner](evals/promptfoo/scripts/run-all.mjs) prepares disposable Git fixtures, runs
all six executable projects, verifies the holdout and final-freeze checksums, validates every
Promptfoo configuration, and runs all uncached target and grader comparisons. The provider
configurations disable target network/search access and do not inherit the ambient process
environment. Expect a material number of live model calls; this is not a lightweight unit test.

Smaller entry points are available for development:

```bash
npm run eval:prepare
npm run eval:calibrate
npm run eval:unit
npm run eval:holdout
npm run eval:integration
npm run eval:domain-integration
```

Do not tune against the sealed holdout. When a failure occurs, classify its owner first: runtime
skill, sandbox/task, grader, provider/harness, or unresolved. Change only the owning artifact,
replay the smallest calibrated case, and preserve failed attempts in the findings log. A green
aggregate cannot compensate for a failed hard invariant.

## Repository map

```text
.agents/plugins/marketplace.json
                              canonical repo marketplace catalog
plugins/theaetetus/
  .codex-plugin/plugin.json  installable plugin manifest
  skills/
    dialectical-inquiry/     main oracle skill, specification, and runtime references
    dialectical-tutor/       bounded coaching skill, specification, and practice references
    dialectical-process-reviewer/
                              backstage qualitative process audit for delegated checkpoints
evals/promptfoo/
  sandboxes/                 six minimal synthetic domain projects
  tests/                     working, control, holdout, and persistent-conversation cases
  assertions/                deterministic artifact and safety checks
  rubrics/                   calibrated semantic evaluation contracts
  evidence/                  frozen checksums and findings history
RESEARCH.md                   evidence synthesis and source limits
WORKPAD.md                    governing thesis, decisions, gates, and validation record
```

## Research status and contribution boundary

The current artifact is best understood as an evaluated research prototype with an applied team
workflow. The next decisive evidence is not another prompt case. It is a blinded comparison with
actual cross-domain acclimating engineers, measuring time to first reviewable contribution, domain
expert correction burden, changed-case transfer, and retained explanation. Failures and variance
must be reported; a small successful demonstration cannot establish general efficacy.

Contributions are most valuable when they sharpen that causal argument:

- report a live inquiry where the skill preserved or displaced human ownership;
- propose a genuinely different domain mechanism, not a renamed ownership scenario;
- improve a broken task, grader, or control without weakening its invariant;
- design the human comparison and review protocol;
- repair a general runtime defect without leaking case-specific nouns or gold answers into a skill.

Before submitting a change, run the relevant executable fixture, the smallest calibrated Promptfoo
case, and `git diff --check`. Explain what premise the change protects and what evidence would show
that it failed.

## License

[MIT](LICENSE) © 2026 Frederic Fortier.

## Canonical sources and limits

The compact bibliography below grounds the README's premise and approach. [RESEARCH.md](RESEARCH.md)
contains the fuller source inventory, translations, and stopping rationale.

[^theaetetus]: Plato, [*Theaetetus* 148e–151d](https://praxeology.net/theaetetus.htm), supplies the midwifery image, testing of intellectual offspring, and the legitimacy of rejection. It is a philosophical primary text, not an AI pedagogy trial.
[^expertise]: Elizabeth Persky and Jennifer Robinson, [“Moving from Novice to Expertise and Its Implications for Instruction”](https://pmc.ncbi.nlm.nih.gov/articles/PMC5738945/), review the domain specificity of expertise and the importance of metacognitive self-monitoring. It does not establish automatic transfer from software engineering into any target domain.
[^icap]: Michelene T. H. Chi and Ruth Wylie, [“The ICAP Framework: Linking Cognitive Engagement to Active Learning Outcomes”](https://education.asu.edu/sites/default/files/lcl/chiwylie2014icap_2.pdf), distinguishes passive receipt from constructive generation and interactive contribution. It does not validate this role inversion or certify understanding from a transcript.
[^padesky]: Christine A. Padesky, [“Socratic Questioning: Changing Minds or Guiding Discovery?”](https://padesky.com/wp-content/uploads/2012/11/socquest.pdf), supports genuine curiosity, responsive evidence gathering, mutual correction, and learner-owned synthesis. Its clinical setting is not imported as therapy or as evidence of engineering efficacy.
[^forcing]: Zana Buçinca, Maja Barbara Malaya, and Krzysztof Z. Gajos, [“To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI in AI-assisted Decision-making”](https://arxiv.org/abs/2102.09692), report an experiment with 199 participants in which forcing interventions reduced overreliance but received worse subjective ratings. The result motivates selective human-first commitment, not universal answer withholding.
[^sycophancy]: Mrinank Sharma et al., [“Towards Understanding Sycophancy in Language Models”](https://proceedings.iclr.cc/paper_files/paper/2024/hash/0105f7972202c1d4fb817da9f21a9663-Abstract-Conference.html), report sycophancy across five tested RLHF assistants and preference for view-matching answers in their studied settings. This establishes a design risk, not a timeless property of every model.
[^codex-plugins]: [Official OpenAI documentation, “Package your plugin”](https://developers.openai.com/plugins/build/plugins), defines the repository marketplace, plugin manifest, component paths, and distribution workflow.
[^codex-use-plugins]: [Official OpenAI documentation, “Plugins”](https://learn.chatgpt.com/docs/plugins), documents supported install surfaces, the CLI plugin browser, and the new-session boundary.
[^codex-subagents]: [Official OpenAI documentation, “Subagents”](https://learn.chatgpt.com/docs/agent-configuration/subagents), defines project agents under `.codex/agents/`, their required fields, delegation triggers, and model inheritance.
