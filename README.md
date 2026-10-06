# CUSP project page

Project page for **CUSP: CUSUM-Governed Survival Hazard Alarms at the Perception Onset for Off-Road Navigation**.
Built with the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)
(Bulma + Font Awesome + Academicons), with the same layout and styling as the
[CanonNav project page](https://dongwookkim110.github.io/canonnav-project/).

Everything is static — no build step. All CSS/JS/fonts are vendored under `static/`, so the page also works offline.

```
index.html                       the page
static/css/index.css             page styles (Bulma + Font Awesome + Academicons are vendored next to it)
static/js/index.js               copy-BibTeX button, scroll-to-top, video pause-on-scroll
static/images/
  teaser.jpg                     Fig. 1
  method.png                     Fig. 2
  detections.jpg                 Fig. 3
  far_curve.png                  Fig. 4
  poster_*.jpg                   first frames of the five clips (video posters)
  social_preview.jpg             1200x630 Open Graph / Twitter card image
static/videos/
  site2.mp4  site3.mp4  site4.mp4  site5.mp4  missed.mp4
                                 the supplementary video cut into five clips, grouped by site
                                 (720p, 2.4-9.1 MB each; all cuts are at the original scene boundaries)
static/pdf/cusp_paper.pdf        paper PDF linked from the "Paper" button
```

## Deploy on GitHub Pages

1. Create a repository, e.g. `cusp-project`, and push the contents of this folder to its `main` branch
   (so that `index.html` sits at the repository root).
2. In the repository: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   branch `main`, folder `/ (root)`, Save.
3. The page appears at `https://<username>.github.io/cusp-project/` after a minute or two.

## Before publishing

- **Buttons** — `arXiv` and `Code` are disabled ("Coming soon"); add the links and delete the `disabled`
  attribute. `Paper` currently points at `static/pdf/cusp_paper.pdf`; switch it to the arXiv PDF if preferred.
  Author names can be wrapped in `<a href="...">` for personal pages.
- **BibTeX** — add the venue / arXiv id once available.
- **Meta tags** — replace `https://USERNAME.github.io/cusp-project/` in the `og:url` / `og:image` /
  `twitter:image` tags with the final URL so link previews work.
