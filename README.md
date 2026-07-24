# TrollByte — static site

A zero-build static website for **trollbytestu.github.io**. Just HTML + one CSS file — no frameworks, no build step. Open any `.html` file in a browser and it works.

## Files

| File | What it is |
|------|-----------|
| `index.html` | Home |
| `lessons.html` | Lessons — **Unreal Engine** + **Project Planning** tracks (curated YouTube + text) |
| `pitchdeck.html` | Project pitches |
| `about.html` | About page |
| `assets/css/style.css` | The whole design lives here (colours, fonts, layout). Dark by default. |
| `assets/js/main.js` | Just the light/dark toggle |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Add a curated YouTube lesson

In `lessons.html`, copy a `.card` block inside the right track and set the video's `VIDEO_ID` (the part after `youtu.be/` or `watch?v=`):

```html
<article class="card">
  <a class="thumb video" href="https://youtu.be/VIDEO_ID">
    <img src="https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg" alt="">
  </a>
  <div class="body">
    <span class="tag badge-yt">▶ YouTube</span>
    <h3><a href="https://youtu.be/VIDEO_ID">Lesson title</a></h3>
    <p class="note">Why I picked it: your curator note.</p>
    <div class="meta">Channel · series</div>
  </div>
</article>
```

> Need a page for a written tutorial or a pitch write-up? Ask and a ready-to-fill article template gets added back in.

## Preview locally

Just double-click any `.html` file, **or** from this folder run:

```bash
python -m http.server 8000
```

…then open <http://localhost:8000>.

## Publish to GitHub Pages

Because the repo is named `trollbytestu.github.io`, it publishes to the root of that domain automatically.

```bash
git init
git add .
git commit -m "Initial TrollByte site"
git branch -M main
git remote add origin https://github.com/trollbytestu/trollbytestu.github.io.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / root**. Live within a minute or two at **https://trollbytestu.github.io**.
