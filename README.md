# TrollByte — static site

The website for the Specialisterne STU game-development class: hand-picked lessons and project pitches. It lives at **https://trollbytestu.github.io** and replaces the old Joomla site (`trollbyte.io`).

It is plain HTML and one CSS file. There is no build step: open any `.html` file in a browser and it works.

## Files

| Path | What it is |
|------|-----------|
| `index.html` | Home ("We moved from trollbyte.io to here.") |
| `lessons.html` | All lessons, as cards in five sections: Unreal Engine, Greyboxing & Level Design, Project Planning & Design, 3D, 2D |
| `lessons/<name>.html` | One page per lesson: the text plus the embedded video(s) or PDF links |
| `pitchdeck.html` | All pitches, in two sections: LLM Driven and VR Arcade |
| `pitchdeck/<name>.html` | One page per pitch. LLM pitches also have a `-slides.html` version to present |
| `about.html` | About page (still placeholder text) |
| `assets/css/style.css` | The whole design (colours, fonts, layout). Dark by default |
| `assets/js/main.js` | The light/dark toggle |
| `assets/vendor/reveal/` | reveal.js, used only by the `-slides.html` pitch pages |
| `assets/lessons/` | PDFs and images used by lesson pages |
| `assets/pitchdeck/` | Concept art and music used by pitch pages |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Add a YouTube lesson

1. Copy a lesson page in `lessons/` (for example `greyboxing-01-meshes.html`), rename it, and change the title, the text, the breadcrumb and the video ID in the `iframe`.
2. In `lessons.html`, copy a card in the right section and point it at the new page. `VIDEO_ID` is the part after `youtu.be/` or `watch?v=`:

```html
<article class="card">
  <a class="thumb video" href="lessons/my-lesson.html"><img loading="lazy" src="https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg" alt=""></a>
  <div class="body">
    <span class="tag badge-yt">▶ YouTube</span>
    <h3><a href="lessons/my-lesson.html">Lesson title</a></h3>
    <p class="note">Why I picked it: your note.</p>
  </div>
</article>
```

3. Update the count next to the series heading (for example `· 2` becomes `· 3`).

## Add a pitch

Copy an existing pitch page in `pitchdeck/`, put its images in `assets/pitchdeck/`, and add a card to the right section of `pitchdeck.html`.

## Preview locally

Double-click any `.html` file, or run this in the folder and open <http://localhost:8000>:

```bash
python -m http.server 8000
```

## Publish

Commit and `git push` to `main`. GitHub Pages rebuilds the site in a minute or two. Press Ctrl+F5 to skip the browser cache.

The repo is about 180 MB, mostly lesson PDFs, pitch art and music. That is fine for GitHub, but check the size before adding a lot more media.
