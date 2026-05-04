---
name: github
description: Help with GitHub tasks — writing commit messages, drafting PR descriptions, naming branches, and linking issues. Use automatically when the user mentions committing, pushing, opening a PR, or anything git/GitHub related.
---

# GitHub Skill

Use this skill whenever the user is about to commit, push, open a PR, or asks for help with anything git or GitHub related.

## Writing Commit Messages

Follow Conventional Commits: `<type>(<scope>): <subject>`

Allowed types: `feat`, `fix`, `refactor`, `style`, `test`, `docs`, `chore`, `perf`, `ci`

Rules:
- Subject: imperative mood ("add" not "added"), no period, ≤ 72 characters
- Body (optional): explain *why*, not *what*
- Footer: reference issues with `Closes #n` or `Fixes #n`

When helping the user write a commit message:
1. Look at what files changed and what they do
2. Identify the single most important change — that's the type and scope
3. Write the subject line first, then ask if a body/footer is needed
4. If multiple unrelated things changed, suggest splitting into separate commits

## Suggesting Branch Names

Pattern: `<type>/<short-description>` in kebab-case

- `feat/dark-mode-toggle`
- `fix/hero-layout-overflow`
- `chore/upgrade-next-15`
- `docs/update-readme`

Never suggest committing directly to `main` or `master`. If the user is on `main`, remind them to branch off first.

## Drafting PR Descriptions

A good PR description includes:
- **What changed** — one or two sentences
- **Why** — the motivation or problem being solved
- **How to test** — steps to verify it works
- **Screenshots** — for any UI changes, remind the user to attach them
- **Issue link** — `Closes #n` if there's a related issue

When drafting, ask the user: "Is there an issue number to link?" if they haven't mentioned one.

Keep PRs focused. If the diff touches many unrelated things, point it out and suggest splitting.

## Linking Issues

- `Closes #n` — use when the PR fully resolves the issue (GitHub auto-closes it on merge)
- `Fixes #n` — same as Closes, preferred for bug fixes
- `Refs #n` — use when related but not fully resolved

## What Not to Commit

Flag these if you notice them about to be staged:
- `.env`, `.env.local`, or any file with secrets or API keys
- `node_modules/`
- Build output: `dist/`, `.next/`, `out/`
- OS junk: `.DS_Store`, `Thumbs.db`
- Editor state: `.vscode/` (unless it contains shared launch/settings the team agreed to track)

If the user is about to commit any of these, stop and point it out before proceeding.

## How to Report

- For commit messages: give a ready-to-copy commit message, then briefly explain your type/scope choice if it wasn't obvious
- For PRs: give a formatted markdown description they can paste directly into GitHub
- For issues: be direct — "use `Closes #42` in the PR body to auto-close this on merge"
- Don't lecture about conventions; just apply them and explain only if asked
