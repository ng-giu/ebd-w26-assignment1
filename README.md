# Assignment 1 — Environment Setup and Development Basics

EBD (BINF 503), Winter 2026. Budget about 2 hours.

By the end of this you will have VS Code, Git, and Node.js installed and
working together, and you will have made your first commits and pushes.
Nothing here is "real" JavaScript yet — that's Assignment 2. This is just
the plumbing: terminal, editor, version control, and running a file.

## 1. Setup

Install, in this order:

1. **VS Code** — <https://code.visualstudio.com/>
2. **Git** (Windows: this also gives you Git Bash) — <https://git-scm.com/downloads>
3. **Node.js**, the **LTS** version — <https://nodejs.org/>

**Windows users:** if VS Code or a terminal was already open when you
installed Node.js, close and reopen it. A terminal that was open before the
install can't see the new `node` command.

Open a terminal (VS Code's built-in terminal is fine: menu **Terminal → New
Terminal**) and check both tools installed correctly:

```bash
git --version
node -v
```

If either command is "not found," the install didn't finish, or your
terminal needs restarting.

Now set your git identity. **Your first commit will fail without this:**

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@student.giu-uni.de"
```

Finally, create a **GitHub account** if you don't have one: <https://github.com/>

## 2. Get the repo

1. On the assignment's GitHub page, click **Use this template → Create a new
   repository**. This creates your own copy under your own account — not a
   fork, so nobody else can browse your work.
2. Clone **your** new repo and open it in VS Code:
   - Open VS Code.
   - Click the **Source Control** icon in the left sidebar (it looks like a
     branching line).
   - Click **Clone Repository**, paste your repo's URL, and pick a folder on
     your machine.
   - Use this button, not `git clone` in the terminal — the point of this
     step is learning where this lives in VS Code, since you'll use it again
     later for commits.

## 3. Work through it, from the terminal

Everything from here happens in a terminal, inside your project folder.
Open one from VS Code: **Terminal → New Terminal**.

First, a sanity check:

```bash
node init.js
```

This checks your Node version, your git identity, and that you actually
cloned this repo (rather than downloading a ZIP, which has no git remote).
It tells you exactly what to fix if something's wrong. Don't move on until
it prints "Everything looks good."

### Step 1 — paths

```bash
node step1/hi.js
```

Run it exactly like that, from the repo root, first. **It will fail.** Read
the error — it tells you where your terminal currently is, where the file
it needed actually lives, and the exact fix. Then do what it says:

```bash
cd step1
node hi.js
```

This is the one lesson of the whole assignment that matters most: a
filename like `"greeting.txt"` is resolved from wherever your terminal
currently is, not from wherever the script file happens to sit on disk.

### Step 2

```bash
cd ..
cd step2
node okay.js
```

Same idea, no trap this time — just practice moving around with `cd`.

### The assignment

```bash
cd ..
cd assignment
node generate.js
```

This asks you a few questions, then looks at **which GitHub account owns
this repo's remote** and uses that to generate a small trial that's unique
to you. It writes `question.md` in this folder — **read it**, it tells you
exactly what to do.

You'll then:

1. Create `solution.js` in the `assignment/` folder, following
   `question.md`.
2. Run it and check the output:
   ```bash
   node solution.js
   ```
3. Commit and push (see below).

## 4. Commit twice, two different ways

VS Code and Git are two different things wearing the same interface, and
this assignment wants you to notice that. You will commit **twice**:

1. **Commit `question.md` through VS Code's Source Control tab.** Stage it
   (the `+` next to the file), write a commit message, click the checkmark
   to commit, then click **Sync Changes** to push.
2. **Commit `solution.js` from the terminal**, using the actual commands:
   ```bash
   git add assignment/solution.js
   git commit -m "Add solution"
   git push
   ```

Both routes run the exact same Git underneath. The Source Control tab is a
set of buttons over `git add` / `git commit` / `git push`; the sidebar
Explorer is just a view of the same files on disk. Same repo, two doors in.

## 5. Submit

Fill in the submission form (link on the CMS) with:

- Your name
- Your student ID
- Your GitHub username
- Your repo's URL

Make sure `question.md` and `solution.js` are both pushed before you submit
— the grader clones exactly what's on GitHub, not what's on your laptop.

## Troubleshooting

- **`git` or `node` not found:** reopen your terminal (or VS Code) after
  installing. A terminal opened before the install doesn't see it.
- **Windows: `ls` doesn't work.** Git Bash supports `ls` fine. PowerShell
  and Command Prompt use `dir` instead — or just use Git Bash / VS Code's
  terminal, which defaults to something `ls`-compatible.
- **`node step1/hi.js` "worked" from the root:** it shouldn't have. Re-read
  the error output — if you're not seeing it, make sure you're running the
  file at `step1/hi.js`, unmodified.
- **`node init.js` complains about the git remote:** you probably
  downloaded a ZIP instead of cloning. Go back to step 2.
- **`generate.js` can't find a GitHub owner:** same cause — make sure you
  cloned your own generated repo (not the template itself, not a ZIP).
