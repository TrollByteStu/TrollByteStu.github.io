# TrollByte — notes for Claude

Context for anyone (human or Claude) picking this project up on a fresh machine. Open Claude in this repo folder and this file is read automatically. `README.md` has the how-to steps for people.

## What this is

A **static website** for a **Specialisterne STU** game-development class: a curated hub of teaching material (mostly hand-picked YouTube lessons) and project pitches. Hosted **free on GitHub Pages** at **https://trollbytestu.github.io**. It replaces the old Joomla site (`trollbyte.io`, being retired).

## Ground rules

- **No build step.** Plain HTML and one shared stylesheet. No frameworks, no bundler, no CLI.
- **The maintainer (Erik) knows HTML and CSS well but does not want build tooling or new languages.** Keep it that way.
- **Dark theme by default** (near-black, like the old site). The light toggle is in `assets/js/main.js`.
- All design lives in **`assets/css/style.css`**, with the colours as CSS variables at the top. Change them there once.
- JavaScript: `assets/js/main.js` (theme toggle) on every page, and the vendored **reveal.js** in `assets/vendor/reveal/`, used only by the pitch slide pages. Nothing else.
- `.nojekyll` is present so Pages serves the files exactly as they are.
- Commit and push only when Erik asks.

## Structure

| Path | Purpose |
|------|---------|
| `index.html` | Splash page: "We moved from trollbyte.io to here." |
| `lessons.html` | Lesson cards in five sections: Unreal Engine, Greyboxing & Level Design, Project Planning & Design, 3D, 2D. |
| `lessons/<alias>.html` | One page per lesson (63). |
| `pitchdeck.html` | Pitch cards in two sections: LLM Driven (7) and VR Arcade (14). |
| `pitchdeck/<alias>.html` | One page per pitch. Each LLM pitch also has `<alias>-slides.html`, a reveal.js deck. |
| `about.html` | About. Still placeholder text. |
| `assets/css/style.css` | The whole design system. |
| `assets/js/main.js` | Light/dark toggle only. |
| `assets/vendor/reveal/` | reveal.js for the slide pages. |
| `assets/lessons/` | Lesson images and example PDFs (`Lessons/PitchPlan/`, about 90 MB; some are third-party industry documents, kept at Erik's decision). |
| `assets/pitchdeck/` | Pitch art: `LLMDriven/` for the LLM pitches, `Pitchdeck/` for the VR Arcade pitches (including their music). |

## Conventions

- **Lesson card** in `lessons.html`: a `.card` with a `.thumb.video` (YouTube thumbnail from `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg`), a `▶ YouTube` tag, an `<h3>` linking to the lesson page, and a `.note` paragraph. Lessons with more than one video show a `.parts` badge (`▶ 2`). Reading lessons use a plain `.thumb` with 📄 and a `Reading` tag.
- **Lesson page**: `.article` with `.crumbs` (Lessons · section · series), `<h1>`, `.article-body` with the text, then one `.video-embed` per video (`youtube-nocookie.com/embed/…`).
- Each series heading in `lessons.html` shows its lesson count (`· 13`). Update it when adding or removing a lesson.
- The card note in `lessons.html` is the first ~130 characters of the page text, ending in `…`. If you edit a lesson's text, check the card too.
- Copy an existing page to make a new one, and keep the shared `<header>` nav and `<footer>` the same on every page.
- Some file names don't match their lessons (`5-minute-metrials-…`, `statetree-course-02-transitions-conditions.html` is lesson 03, `statetree-course-08-subtree-and-linked-assets.html` is about state transition events). Leave them: renaming breaks links people have saved.
- Lesson text is Erik's own voice (some of it typed into Joomla years ago). Fix typos, keep the tone. Don't edit the quoted third-party article in `lessons/pitchdeck-examples.html` or the students' VR Arcade pitch texts.

## Deploy

Edit, commit, `git push` to `origin/main`. GitHub Pages rebuilds and the site is live in a minute or two. Hard-refresh (Ctrl/Cmd+F5) to beat the browser cache.

## History

- **Lessons and VR Arcade pitches** were rebuilt from the old Joomla backup (`.JPA` → `installation/sql/site.*` → parsed). The one-off scripts were in a scratchpad and are gone; the pages are now edited by hand.
- **Greyboxing & Level Design** and **Framework & Multiplayer** were added after the rebuild.
- **LLM Driven pitches** (BOILERHEART, Meat Machines, Silly Empires, Mutated Henchman, Fantasy Stalker, GUESTS?, BOILERHEART II: Cranky Engines) were written new, each with a slide deck. Cranky Engines is the class's current project.
- 2026-10-18: typo pass on the lesson texts, duplicate light-theme block removed from `style.css`, README and this file brought up to date.

## To do / next

- Fill in the About page.
- Some cards have no note yet (Blender, UV unwrap, Arcane painting).
- A Cranky Engines project log: being planned with Erik.
- Repo is about 180 MB (lesson PDFs, pitch art and music). Fine for GitHub, but keep an eye on it.
- A graphics-focused colleague may later provide a **2D image** to build a real visual template around (swap the emoji placeholders for art, derive the palette from the image).
