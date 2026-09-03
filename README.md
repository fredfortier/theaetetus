# Theaetetus

**Human-owned reasoning from inquiry through software delivery.**

Theaetetus is a twelve-skill Codex package for carrying a developer-owned causal account from inquiry
through specification, implementation, verification, and conformance review.

The usual AI interaction optimizes for an answer. This project optimizes for a different artifact:
a human-owned causal model that can survive review, predict a changed case, and justify a bounded
engineering consequence. The human questions a knowledgeable but fallible AI oracle; the oracle
answers substantively and exposes its assumptions; a brief tutor intervenes only when the human's
inquiry technique stops doing useful epistemic work.

> Interrogate the oracle. Keep the model.

This is an experimental method with a deliberately narrow evidence claim. Its existing
[automated evaluation](evals/promptfoo/SPEC.md#current-evidence-and-open-obligations) shows that the inquiry and tutor skills
preserve human ownership, evidence discipline, responsive coaching, and cross-case causal transfer
on the repository's fixtures. The delivery skills have structural validation but not yet equivalent
behavioral evidence. Nothing here shows that real teams learn faster, retain more, or ship better
changes. That requires longitudinal human study.

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
guaranteed correctness. The stable premise and claim boundary are governed in
[PHILOSOPHY.md](PHILOSOPHY.md); the current audit burden is recorded in [SDLC.md](SDLC.md).

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

- [`dialectical-inquiry`](skills/dialectical-inquiry/SKILL.md) runs a persistent, subject-bound
  inquiry. It answers as the oracle, maintains `.agent/<subject-slug>.md`, tests the expressed model,
  and closes only with human ownership or precise aporia.
- [`dialectical-tutor`](skills/dialectical-tutor/SKILL.md) repairs one observable midwife move. It
  may be recruited by the inquiry or invoked directly for deliberate practice, but it returns after
  at most one retry and one hinted retry.
- [`specification-development`](skills/specification-development/SKILL.md) develops, repairs, and
  assesses the leanest governing specification that follows from the developer's causal account.
- [`specification-implementation`](skills/specification-implementation/SKILL.md) traces accepted
  obligations into bounded repository changes and verification evidence, reopening intent when
  implementation discovers a new decision.
- [`conformance-review`](skills/conformance-review/SKILL.md) reviews the specification and change in
  both directions without remediating or accepting its own findings.
- [`software-delivery`](skills/software-delivery/SKILL.md) identifies the current obligation and
  routes once to the focused skill or local integration capability that owns it.
- [`invariant-formulation`](skills/invariant-formulation/SKILL.md) turns owned reasoning into stable,
  enforceable properties without inventing intent.
- [`goal-formulation`](skills/goal-formulation/SKILL.md) authors an aligned persistent mandate and
  continuity workpad for long-running work.
- [`causal-readiness-review`](skills/causal-readiness-review/SKILL.md) grades whether a proposed
  solution follows from owned, grounded premises.
- [`architecture-conformance`](skills/architecture-conformance/SKILL.md) classifies changes against
  applicable accepted architecture decisions.
- [`evidence-grounding`](skills/evidence-grounding/SKILL.md) matches repository claims to admissible,
  claim-sized support.
- [`naming-things`](skills/naming-things/SKILL.md) chooses canonical terms and plans complete rename
  transitions.
- [PHILOSOPHY.md](PHILOSOPHY.md) and
  [SOFTWARE-DELIVERY-SPEC.md](SOFTWARE-DELIVERY-SPEC.md) define the package's role allocation,
  obligation graph, vocabulary, and acceptance boundary.
- [`evals/promptfoo/SPEC.md`](evals/promptfoo/SPEC.md) governs the Promptfoo/Codex evaluation;
  the surrounding directory contains its calibrated
  graders, a matched mechanical placebo, sealed holdouts, persistent conversations, and six
  runnable synthetic domain sandboxes.
- [RESEARCH.md](RESEARCH.md) records the source synthesis, technique-to-runtime translation,
  applicability limits, and open evidence gaps.
- [SDLC.md](SDLC.md) is the active comparative-audit continuity workpad;
  [WORKPAD.md](WORKPAD.md) is the compact historical index for the superseded incubation workpad.

The skill files themselves have no application runtime dependency. Node, Promptfoo, Rust, and
Python are used only to reproduce this repository's evaluation suite.

## Use it in an AI-native team

Theaetetus can enter wherever the earliest unsatisfied delivery obligation lies. Use inquiry when
the developer does not yet own the target-domain account; specification development when the
account is owned but implementation authority is incomplete; implementation when obligations are
accepted; and conformance review when the change needs human acceptance judgment.

It does not replace repository policy, stack expertise, ordinary one-shot assistance, integration
mechanics, or accountable human judgment.

A practical team loop is:

1. **Name the decision, not a topic.** The developer starts with the operational boundary, current
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
6. **Govern implementation.** Develop the leanest specification whose obligations follow from the
   owned account, then implement only repository facts traceable to those obligations.
7. **Verify at the responsible boundary.** Record what each observation establishes, the competing
   explanation it rules out, and its limit.
8. **Review both directions.** Check that every obligation appears in repository state and every
   material changed fact has authority. A human accepts, rebuts, or reopens the result.

For team use, the domain reviewer should inspect the model and engineering artifact rather than
grade the eloquence of the conversation. The developer remains accountable for the final claim. A
reviewer may close a false premise, add missing domain evidence, or reject an apparently owned
model that does not match the system.

## Install

Codex loads repository-scoped skills from `.agents/skills` and supports symlinked skill folders.
It can invoke a skill explicitly with `$skill-name` or implicitly when the request matches the
skill description.[^codex-skills]

Clone this repository and copy the skill directories into the repository where the team will use
them:

```bash
git clone https://github.com/fredfortier/theaetetus.git
cd your-project
mkdir -p .agents
cp -R ../theaetetus/skills .agents/
```

For active skill development, symlink the skill directory instead of copying it. This repository
does exactly that at its root: [`.agents/skills`](.agents/skills) points to [`skills/`](skills).
Restart Codex if a newly added or changed skill does not appear.

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

The evaluation asks whether a claimed result survives controls that preserve visible ceremony while
removing the relevant skill behavior. It separates routing, deterministic structure, semantic
outcomes, persistent state, changed-case transfer, and human-only claims so one proxy or aggregate
cannot conceal a failed invariant.

[The Promptfoo evaluation specification](evals/promptfoo/SPEC.md) is the sole authority for the
scenario topology, six-domain rationale, optimal-target and oracle definitions, controls, pass law,
historical 116/116 result, and the strict limits of that result. The
[findings log](evals/promptfoo/evidence/findings-log.md) retains failed scenarios, grader and harness
defects, control repairs, and demonstrated skill defects.

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
skills/
  dialectical-inquiry/       main oracle skill, specification, and runtime references
  dialectical-tutor/         bounded coaching skill, specification, and practice references
  specification-development/ causal specification development and readiness assessment
  specification-implementation/ bounded implementation and verification
  conformance-review/        read-only two-way acceptance review
  software-delivery/         current-obligation router
.codex-plugin/plugin.json    installable plugin manifest
evals/promptfoo/
  SPEC.md                   evaluation authority, topology, targets, oracles, and pass law
  sandboxes/                 six minimal synthetic domain projects
  tests/                     working, control, holdout, and persistent-conversation cases
  assertions/                deterministic artifact and safety checks
  rubrics/                   calibrated semantic evaluation contracts
  evidence/                  frozen checksums and findings history
RESEARCH.md                   evidence synthesis and source limits
PHILOSOPHY.md                 human ownership and oracle role
SOFTWARE-DELIVERY-SPEC.md     package-level delivery contract
SOFTWARE-DELIVERY-SOURCES.md  source adjudication and translation record
DERIVADEX-MIGRATION.md        replacement coverage and cutover gates
SDLC.md                       active comparative-audit continuity workpad
WORKPAD.md                    superseded incubation history index
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
[^codex-skills]: [Official OpenAI documentation, “Build skills”](https://learn.chatgpt.com/docs/build-skills), defines skill structure, explicit and implicit invocation, repository discovery under `.agents/skills`, and symlink support. It governs Codex mechanics only, not Theaetetus's epistemic design.
