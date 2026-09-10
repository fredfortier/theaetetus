# Process Reviewer Handoff

Open when a periodic, signal-driven, or pre-close process review is due.

## Checkpoint cadence

When subagents are available, delegate one backstage review:

- after the human's initial account plus three material human moves;
- after each four additional material human moves;
- once before classifying a requested close as `owned`;
- earlier when visible evidence suggests immediate surrender of judgment or a consequential
  repeated process failure.

A material human move changes, tests, derives, challenges, transfers, or attempts to close the live
model. Short acknowledgements, clarifications of wording, and ordinary fact requests do not count.
Do not review during a pending coaching retry. Do not spawn concurrent reviewers.

This cadence is a backstop, not the intervention threshold. A scheduled review may—and usually
should—return `NO_INTERVENTION` or `WATCH`.

## Delegate the review

Spawn one subagent and tell it to use `$dialectical-process-reviewer`. Pass only:

- subject and current boundary;
- the recent human moves and oracle context needed to interpret them;
- the live inquiry question;
- one unresolved prior calibration observation, if any;
- checkpoint kind: `periodic`, `signal`, or `pre-close`;
- existing workpad path.

Ask for the skill's compact `PROCESS REVIEW` report. The reviewer must not edit files, answer the
subject question, coach the user, or become another conversational oracle. Wait for its report
before deciding the next conversational move.

If subagents are unavailable, apply the same review locally and silently. Do not imply that a
subagent ran.

## Use the report

- `NO_INTERVENTION`: resume without mentioning the checkpoint.
- `WATCH`: record the exact observation only when it may establish a later repeated pattern, then
  resume without mentioning the checkpoint.
- `COACHING_WARRANTED`: independently verify the quoted evidence against
  [midwife-calibration.md](midwife-calibration.md), then use
  [tutor-handoff.md](tutor-handoff.md) for one bounded repair. A reviewer recommendation never
  lowers the tutor threshold.
- `CLOSURE_GAP`: ask the human to supply the missing ownership criterion before a later close, or
  close with precise aporia if they explicitly require closure now. Do not start a coaching pause
  in the closure turn.

Expose no backstage report, grade table, or cadence marker unless the user asks for the audit.
When remediation changes the live interaction, state only the ordinary tutor evidence and one
missing function. Preserve the parent oracle as the sole conversational owner.
