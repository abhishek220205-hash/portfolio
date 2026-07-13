# Abhishek Kumar — Portfolio

A Next.js + TypeScript portfolio built around two real, shipped hackathon
projects. Every line of content is real: no invented metrics, employers, or
testimonials.

---

## 1. Design process

### Three directions considered

1. **Warm-paper editorial** (cream background, serif display, terracotta
   accent) — rejected. This is the single most common "AI portfolio" look
   right now, and the terracotta lands close to a shade associated with
   another AI product, which would read as a tell rather than a choice.
2. **Dark mode, single neon accent** — rejected. It suits a hacker/security
   persona, but Abhishek's actual work (legal aid, voice AI for
   Hindi speakers) is about accessibility and clarity, not intensity.
3. **Signal / pipeline system** (chosen) — grounded directly in the
   subject: both real projects *are* literal pipelines (STT → Chat → TTS,
   Ingest → Retrieve → Answer). The site borrows that vocabulary as its
   visual language: a warm paper base (not the cliché cream+terracotta
   combination), an amber "signal" accent evoking a waveform or indicator
   light, and pipeline diagrams built from each project's real
   architecture instead of stock screenshots.

### Design system

| Token | Value | Use |
|---|---|---|
| `paper` | `#F5F4EF` | Base background |
| `ink` | `#14171F` | Primary text, dark surfaces |
| `ink-soft` | `#2B2E38` | Secondary headings |
| `signal` | `#D98E2B` | Accent — links, active states, the waveform |
| `teal` | `#1F4B4A` | Reserved secondary accent (v2 use) |
| `line` | `#C9C4B7` | Hairline rules, borders |
| `muted` | `#6B6A63` | Body copy on paper |

- **Display**: Space Grotesk (geometric, technical — matches an AI/dev
  identity)
- **Body**: Newsreader (literary serif — used for the reading-heavy case
  study copy, an intentional reversal of the "serif display / sans body"
  default)
- **Mono**: IBM Plex Mono (labels, pipeline nodes, the "currently" status
  panel)

**Signature element**: the pipeline diagram (`PipelineDiagram.tsx`).
Every place a generic portfolio would use a numbered `01 / 02 / 03` marker
or a stock screenshot, this site instead renders the project's actual
processing chain as connected nodes — because in both real projects, the
content genuinely is a sequence.

### Information architecture

```
/                       Hero → About → Selected work → Capabilities → Contact
/projects/[slug]        Case study: Problem, Target user, My role, Process,
                         Key decisions, Final result, What I learned
/ (404 fallback)        Custom not-found page, on-theme
```

---

## 2. Setup

Requires Node.js 18.18+ (Next.js 14 requirement).

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 3. Deployment

Simplest path is Vercel (built by the Next.js team, zero config):

```bash
npm install -g vercel
vercel
```

Or any Node host: `npm run build` then `npm run start`.

**Before deploying**, replace the placeholder domain in two files:
- `app/layout.tsx` — `siteUrl` constant
- `app/sitemap.ts` — `siteUrl` constant

## 4. Editing content

**You should never need to touch component code to update your story.**
Everything editable lives in `data/projects.ts`:

- `profile` — name, role, bio, education, email, LinkedIn, GitHub, working
  style
- `projects` — add a new project by adding a new object to the array; a
  case-study page is generated automatically at `/projects/your-slug`
- Each project's `pipeline` array drives its diagram — list your pipeline's
  real steps in order

To add a third project, copy the shape of an existing entry in `projects`
and fill in your own problem / process / decisions / result / learning.
No routing code changes needed.

---

## 5. Accessibility checklist

- [x] Semantic landmarks: `header`, `nav`, `main`, `footer`, `article`
- [x] Skip-to-content link, visible on keyboard focus
- [x] All interactive elements have a visible focus ring (`:focus-visible`,
      2px solid, 3px offset — never removed, only ever styled)
- [x] Mobile nav toggle has `aria-expanded` / `aria-controls`
- [x] Pipeline diagrams have a text `aria-label` summarizing the sequence
      for screen readers, since the visual nodes are otherwise decorative
- [x] Copy-email button uses `aria-live="polite"` so the success/error
      state is announced
- [x] `prefers-reduced-motion` respected globally (animations reduced to
      1ms) and the hero trace line uses Tailwind's `motion-safe:` variant
      as a second layer of defense
- [x] Color contrast: ink (`#14171F`) on paper (`#F5F4EF`) exceeds WCAG AA
      for body text; muted text (`#6B6A63`) checked against paper at
      normal text size
- [ ] **To do before shipping**: run an automated pass (axe DevTools or
      Lighthouse) once real deployment images/fonts are in place, and a
      manual keyboard-only pass through both the nav and the case-study
      pages

## 6. Performance checklist

- [x] `next/font` self-hosts and subsets all three typefaces — no external
      font requests, no layout shift from a late-loading web font
- [x] No client-side JS on the homepage except the two components that
      truly need interactivity (mobile nav toggle, copy-email button);
      everything else renders as static server components
- [x] Case-study pages are statically generated at build time
      (`generateStaticParams`) rather than fetched client-side
- [x] No unoptimized images shipped — diagrams are inline SVG, which is
      resolution-independent and weighs almost nothing
- [ ] **To do**: once you add real screenshots (e.g. of the Gradio UI or
      the Expo app on-device), use `next/image` for automatic AVIF/WebP
      and lazy loading — the config in `next.config.mjs` is already set
      up for it

---

## 7. V2 improvements

1. **Real screenshots**: on-device screenshots of both apps (the Gradio
   tabs, the Expo app on the two Android phones it was tested on) would
   replace/complement the pipeline diagrams with concrete proof.
2. **A written-up "lessons across both projects" note** — the two case
   studies already each end in "What I learned"; a short synthesis across
   both (infrastructure constraints, API limits, testing on real hardware)
   could become its own short-form post.
3. **Dark mode** using the reserved `teal` token as the dark-surface
   accent, rather than duplicating the amber signal color.
4. **A lightweight blog/notes route** if hackathon write-ups (like the
   Dev.to article for HackHazards) become a recurring habit — could live
   at `/notes` reusing the same case-study layout primitives.
5. **Open Graph images**: generate per-page social preview images with
   `next/og` instead of relying on the default metadata card.
