---
link: "[[1743802452-programming|Programming]]"
aliases:
  - Git Cheatsheet
tags:
  - Knowledge
  - Git
created_date: 2025-10-10
---
# Git Cheatsheet
# Git Cheatsheet

## Basic Configuration
| Command | Description |
|---------|-------------|
| `git config --global user.name "Your Name"` | Set your username |
| `git config --global user.email "your@email.com"` | Set your email |
| `git config --list` | Show current configuration |

## Repository Setup
| Command | Description |
|---------|-------------|
| `git init` | Initialize a new Git repository |
| `git clone <url>` | Clone a remote repository |
| `git remote add origin <url>` | Add remote repository |

## Basic Workflow
| Command | Description |
|---------|-------------|
| `git status` | Show working directory status |
| `git add <file>` | Add file to staging area |
| `git add .` | Add all changes to staging area |
| `git commit -m "message"` | Commit staged changes with message |
| `git commit -am "message"` | Add and commit all tracked files |

## Branching
| Command | Description |
|---------|-------------|
| `git branch` | List all branches |
| `git branch <branch-name>` | Create new branch |
| `git checkout <branch-name>` | Switch to branch |
| `git checkout -b <branch-name>` | Create and switch to new branch |
| `git merge <branch-name>` | Merge branch into current branch |
| `git branch -d <branch-name>` | Delete branch |

## Remote Repositories
| Command | Description |
|---------|-------------|
| `git push origin <branch>` | Push commits to remote |
| `git pull origin <branch>` | Pull latest changes from remote |
| `git fetch origin` | Download objects from remote |
| `git remote -v` | Show remote repositories |

## Viewing History
| Command | Description |
|---------|-------------|
| `git log` | Show commit history |
| `git log --oneline` | Compact commit history |
| `git log --graph` | Show commit history with graph |
| `git diff` | Show unstaged changes |
| `git diff --staged` | Show staged changes |

## Undoing Changes
| Command | Description |
|---------|-------------|
| `git restore <file>` | Discard changes in working directory |
| `git restore --staged <file>` | Unstage file |
| `git reset --hard HEAD` | Reset to latest commit (DANGEROUS) |
| `git revert <commit-hash>` | Create new commit that undoes changes |

## Stashing
| Command | Description |
|---------|-------------|
| `git stash` | Temporarily stash changes |
| `git stash pop` | Restore stashed changes |
| `git stash list` | List all stashes |
| `git stash drop` | Delete latest stash |

## Tagging
| Command | Description |
|---------|-------------|
| `git tag` | List all tags |
| `git tag <tag-name>` | Create lightweight tag |
| `git tag -a <tag-name> -m "message"` | Create annotated tag |
| `git push origin --tags` | Push tags to remote |
