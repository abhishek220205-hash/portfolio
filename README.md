# Abhishek Kumar — Portfolio

A dependency-free static portfolio. No build step, no framework, nothing to install.

## File structure
```
portfolio/
├── index.html                 # Home: hero, about, projects, capabilities, contact
├── case-study-portfolio.html  # Case study page (copy this to add new ones)
├── 404.html                   # Custom not-found page
├── style.css                  # Entire design system (edit :root tokens to re-theme)
├── script.js                  # Scroll-reveal only; respects reduced motion
└── README.md
```

## Why not Next.js?
The brief allowed another stack if clearly better. With no dynamic data, static
HTML wins: free hosting anywhere, instant loads, and content editable in any
text editor. Migrate to Next.js later if you add a blog or CMS.

## Run locally
Open `index.html` in a browser — that's it. For a local server:
```
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy (pick one, all free)
- **GitHub Pages:** push the folder to a repo → Settings → Pages → deploy from branch. (`404.html` works automatically.)
- **Netlify:** drag the folder onto app.netlify.com/drop. (`404.html` works automatically.)
- **Vercel:** `vercel` CLI in the folder, or import the repo.

## Editing content
- **Hero headline / intro:** `index.html`, inside `<div class="hero">`.
- **Email / LinkedIn:** search `abhishek220205@gmail.com` and `linkedin.com` — they appear in the hero and contact sections.
- **Add a project:** copy an `<article class="project">…</article>` block in `index.html`. For a case study, duplicate `case-study-portfolio.html`, keep the seven sections (Problem, Target user, My role, Process, Key decisions, Final result, What I learned), and link it from the card. Then delete the "one honest project" note if no longer needed.
- **Colours / fonts / spacing:** the `:root` block at the top of `style.css`.

## Accessibility checklist (done)
- [x] Semantic landmarks: header, nav, main, footer, sections with headings
- [x] Skip-to-content link for keyboard users
- [x] Visible focus styles (`:focus-visible`)
- [x] All interactive elements are real links — fully keyboard navigable
- [x] `prefers-reduced-motion` honoured in both CSS and JS
- [x] Colour contrast: body text ≥ 7:1, accent-on-paper ≥ 4.5:1
- [x] `lang="en"`, descriptive titles, text scales with viewport (clamp)

## Performance checklist (done)
- [x] Zero external requests: no webfonts, no libraries, no trackers
- [x] Total page weight under ~20 KB per page
- [x] System fonts → no font-loading flash
- [x] `defer`red single small script; CSS is one file, cached across pages
- [x] No images to optimize yet — when adding project images, use compressed
      WebP/AVIF with explicit `width`/`height` and `loading="lazy"`

## Loading / empty / error states
- Static site: no loading spinners needed by design.
- Empty state: the projects section handles "few projects" honestly with the note block.
- Error state: custom `404.html`.

## Version-two improvements
1. Replace the meta case study with 2–3 real shipped projects (highest impact).
2. Add project screenshots + an og-image for richer social previews.
3. Add a resume PDF download once there's experience to list.
4. Add a favicon and web manifest.
5. Consider a short "now" section (what I'm learning this semester).
6. If a blog is wanted, migrate to Astro or Next.js at that point.
