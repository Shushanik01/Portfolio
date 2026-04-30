---
name: smell-check
description: Check for code smells after any refactor, cleanup, or code change. Use automatically whenever the user asks to refactor, clean up, reorganize, or improve existing code.
---
# Code Smell Check
Run this after any refactor or code change to catch common issues before they pile up. This is mostly focused on the React + TypeScript patterns used in this project.

## What to look for
### Components
- Component is doing too many things — if it's hard to summarize in one sentence, it probably needs to be split
- JSX is deeply nested or hard to read at a glance
- Ternaries stacked inside ternaries inside JSX (use early returns or extract a variable instead)
- Commented-out code left behind — just delete it, that's what git is for

### TypeScript
- `any` being used where a real type could work
- Props or state typed as `object` or `{}` — be more specific
- Missing return types on functions that aren't obviously inferred

### React-specific
- `useEffect` with a dependency array that looks wrong or incomplete
- State that could just be a derived value (computed from other state/props)
- Event handlers defined inline when the component already has a bunch of logic
- Lists rendered without `key` props

### General
- Magic strings or numbers that appear more than once — they should be a constant
- Logic copy-pasted in two places — consider a small helper or hook
- Variable names like `data`, `res`, `temp`, `thing` — rename to something meaningful
- Imports that aren't used

## How to report
After checking, give a short summary:
- If nothing major was found, say so briefly
- If there are issues, list them with the file and rough line number
- Don't rewrite everything at once — point out what's wrong and let the user decide what to fix first

## Notes
- Don't be nitpicky about style stuff that eslint already handles
- Focus on logic and structure, not formatting
- If a smell is minor and the code works fine, mention it but don't make it a big deal