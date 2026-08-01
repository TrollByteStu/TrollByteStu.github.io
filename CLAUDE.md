# TrollByte — notes for Claude Code

Context for anyone (human or Claude) picking this project up on a fresh machine.
Open Claude Code in this repo folder and this file is read automatically.

## What this is
A **static website** for a **Specialisterne STU** game-development class — a curated hub of
teaching materials (mostly hand-picked YouTube lessons), plus project pitches. Hosted **free on
GitHub Pages** at **https://trollbytestu.github.io**. It replaces an old Joomla site (`trollbyte.io`,
now being retired).

## Ground rules
- **Zero build step.** Plain HTML + one shared stylesheet. No frameworks, no bundler, no CLI.
- **The maintainer knows HTML/CSS well but does not want build tooling or new languages.** Keep it that way.
- **Dark theme by default** (near-black, echoing the old site). Optional light toggle lives in
  `assets/js/main.js` — the *only* JavaScript, and it's removable.
- All design lives in **`assets/css/style.css`** via CSS variables at the top. Change colours there once.
- `.nojekyll` is present so Pages serves files exactly as-is.

## Structure
| File | Purpose |
|------|---------|
| `index.html` | Splash page — "We moved from trollbyte.io to here." |
| `lessons.html` | Two tracks: **Unreal Engine** and **Project Planning**. Mostly curated YouTube cards, some text tutorials. |
| `pitchdeck.html` | Project pitches. |
| `about.html` | About. |
| `assets/css/style.css` | Entire design system. |
| `assets/js/main.js` | Light/dark toggle only. |

## Conventions
- A **curated YouTube lesson** is a `.card` containing a `.thumb.video`, a `▶ YouTube` tag, an `<h3>`
  linking to the video, and a `.note` paragraph ("Why I picked it: …"). See `README.md` for the exact
  copy-paste snippet, including how to use `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg` thumbnails.
- Add a page by copying an existing one; keep the shared `<header>` nav and `<footer>` in sync.

## Deploy
Edit → commit → `git push` to `origin/main`. GitHub Pages auto-builds; live in a minute or two.
Hard-refresh (Ctrl/Cmd+F5) to beat browser cache.

## Lessons (rebuilt from the Joomla backup)
`lessons.html` + `lessons/<alias>.html` are **generated** from the old site's database, not hand-written.
- 58 lessons across 4 tracks: Unreal Engine (49, in 5 series), Project Planning & Design (3), 3D/Blender (4), 2D (2).
- Each old article was `description + {youtube}` tag(s); rebuilt as a page that embeds the video(s) + keeps the text.
- Example PDFs (pitch decks / design docs) live under `assets/lessons/Lessons/PitchPlan/` (~90 MB; some are
  third-party industry docs, kept at the maintainer's decision).
- Source of truth for regeneration: the `.JPA` backup → extract `installation/sql/site.*` → concat → parse.
  (The one-off extractor/generator scripts were in a scratchpad and may not persist.)

## Pitchdeck (rebuilt from backup)
`pitchdeck.html` + `pitchdeck/<alias>.html` are generated from the old `PitchDeck` category (id 13):
14 student "VR Arcade" game pitches (~2 yrs old), each with write-up + concept art under `assets/pitchdeck/`.
Kept as example starting points for new students.

## To do / next
- Fill in the About page (still placeholder).
- Repo is ~175 MB (lesson PDFs + pitch art). Fine for GitHub, but keep an eye on it if adding lots more media.
- A graphics-focused colleague may later provide a **2D image** to build a real visual template around
  (swap the emoji placeholders for art, derive the palette from the image).
