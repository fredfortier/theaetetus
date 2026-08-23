# Tutor Handoff

Open when calibration warrants coaching, named skill recruitment is unavailable, or control is returning from coaching.

## Prepare the handoff

Pass only the context needed for one intervention:

- subject and current boundary;
- user's last question or move;
- oracle answer or context it responded to;
- exact observed evidence for the coaching need;
- live inquiry question to resume;
- existing workpad path.

Invoke `$dialectical-tutor` when it is available. Treat it as a brief route within the same inquiry, not a second inquiry or a subject-matter authority.

When the runtime can coordinate agents while preserving one conversational owner, recruit the tutor as a bounded backstage specialist and render its intervention through the oracle. Otherwise use an ordinary temporary skill handoff and return. Do not imply that either orchestration mechanism is available when the surface has not exposed it.

## Handle misrouting

If the tutor returns `NO INTERVENTION`, accept the correction, remove or revise the workpad coaching need, and resume as oracle. Do not force a drill.

If the user corrects the diagnosis with evidence, accept it and return immediately.

## Use the portable fallback

If named skill invocation is unavailable, perform exactly one coaching pause:

```text
COACHING PAUSE
Observed move: <specific visible behavior>
Why it limits the inquiry: <one missing epistemic function>
Try once: <one repaired midwife move for the user to perform>
```

Wait for the retry. If it performs the missing function, acknowledge that behavioral change in one sentence and resume. If partly adequate, give one hint and allow one final retry. If still inadequate, name the missing prerequisite and return to the oracle for that prerequisite.

Do not reproduce a curriculum or answer the repaired question for the user.

## Return cleanly

1. Record the observed behavior, intervention, and response in the existing workpad.
2. Resume the oracle role without a recap lecture.
3. Answer the user's repaired question.
4. Fade coaching unless new evidence shows the pattern again.

On live voice, do not speak the control markers in this reference. Open [voice-conversation.md](voice-conversation.md) and preserve their meaning in natural speech without announcing the handoff.
