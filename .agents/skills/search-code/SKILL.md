---
name: search_code
description: Find all places where a function, component, hook, or symbol is used across one or more repos. Use automatically when the user asks "where is X used", "find all usages of", "who calls", or "which files import/reference".
---

# Search Code Skill

Use this skill whenever the user wants to find usages of a function, component, hook, type, constant, or any named symbol — in the current repo or across multiple local repos.

## Step 1 — Clarify if needed

Before searching, confirm:
- **What** to search for: exact name, or a pattern (e.g. `useAuth` vs anything `useAuth*`)
- **Where** to search: current repo only, or a list of local repo paths the user specifies
- **Language filter**: if known, narrow to relevant file types (`.ts`, `.tsx`, `.py`, etc.)

If the user gave enough context, skip asking and proceed directly.

## Step 2 — Build the search strategy

Identify all the ways the symbol can appear in code:

| Usage type | What to grep for |
|---|---|
| Direct call | `functionName(` |
| Named import | `import.*functionName` or `from '...'` with `{ functionName }` |
| Default import | `import functionName` |
| Re-export | `export.*functionName` |
| Type reference | `: FunctionName` or `<FunctionName` |
| Dynamic call | `obj.functionName(` |
| JSX usage | `<ComponentName` or `<ComponentName />` |

Run multiple targeted patterns rather than one broad one — this reduces noise and misses.

## Step 3 — Execute the search

Use the `Grep` tool (not `grep` in Bash) for all searches. Key options:
- `output_mode: "content"` to see matching lines
- `-n: true` to include line numbers
- `glob` to filter by file extension (e.g. `"**/*.{ts,tsx}"`)
- `path` to target a specific repo directory

For each repo to search, run one `Grep` call per relevant pattern. Parallel calls are fine when searching the same pattern across different repos.

**Do not** use `Bash` with `grep` or `rg` — use the `Grep` tool exclusively.

## Step 4 — Deduplicate and rank results

After collecting raw matches:
1. Group results by **file**, then by **usage type** (import, call, type reference, etc.)
2. Skip false positives — e.g. the definition file itself (where the function is declared), test mock setups that just shadow the name, and comment-only lines
3. If a file both imports and calls the function, count it as one usage location

## Step 5 — Report

Present results as a table or grouped list:

```
## Usages of `functionName`

### current-repo (12 usages across 5 files)

| File | Line | Usage |
|---|---|---|
| [src/hooks/useData.ts](src/hooks/useData.ts#L14) | 14 | import |
| [src/hooks/useData.ts](src/hooks/useData.ts#L42) | 42 | call |
| [src/components/Card.tsx](src/components/Card.tsx#L8) | 8 | import |
...

### other-repo (3 usages across 2 files)
...
```

- Always link to the file with `#Lnn` anchors so the user can click directly to the line
- If 0 usages found, say so clearly and suggest checking for aliased imports or re-exports
- If results are very large (>30 files), group by directory and summarize counts instead of listing every line

## What NOT to do

- Don't read every file manually — use `Grep` with targeted patterns
- Don't search inside `node_modules/`, `dist/`, `.next/`, or `out/` — always exclude build output
- Don't report the function's own definition as a "usage"
- Don't confuse a similarly-named function (e.g. `handleSubmit` vs `handleSubmitForm`)

## Glob patterns to exclude

When setting the `glob` in `Grep`, prefer patterns like:
- `**/*.{ts,tsx}` for TypeScript projects
- `**/*.{js,jsx}` for JavaScript projects  
- `**/*.py` for Python
- Always avoid: `node_modules/**`, `dist/**`, `.next/**`, `build/**`

If ripgrep's `--glob '!node_modules'` isn't available through the tool, use `path` to scope searches to `src/` or equivalent source roots.
