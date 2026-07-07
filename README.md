# North Valley College Website

A fast, static campus website built with Astro, TypeScript, Tailwind CSS, Astro Content Collections, Markdown/MDX-ready content, and JSON data files.

This is designed as a public college website, not a student ERP or dashboard. Most day-to-day updates can be made by editing Markdown or JSON files.

## Tech Stack

- Astro with static output
- TypeScript
- Tailwind CSS
- Astro Content Collections
- Markdown/MDX-ready page and article content
- JSON structured data
- Sitemap generation
- Cloudflare Pages deployment

## Folder Structure

```txt
src/
  components/          Reusable UI components
  content/
    config.ts          Content collection schemas
    pages/             About and admissions content
    departments/       Department detail pages
    notices/           Notice detail pages
    events/            Event detail pages
    data/              Faculty and gallery JSON data
  layouts/             Shared page layouts
  pages/               Astro routes
  styles/              Global Tailwind styles
public/
  images/              Local campus placeholder images
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Check and build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Update Guide

### Add a New Notice

Create a Markdown file in `src/content/notices/`, for example:

```txt
src/content/notices/library-hours.md
```

Use this frontmatter:

```md
---
title: "Library Hours Updated"
date: 2026-08-01
category: "Library"
important: false
---

Write the notice body here.
```

The notice listing and detail route are generated automatically.

### Add a New Event

Create a Markdown file in `src/content/events/`:

```md
---
title: "Orientation Day"
date: 2026-08-05
location: "Main Auditorium"
image: "/images/events/orientation-day.svg"
featured: true
---

Write the event details here.
```

Add the referenced image file under `public/images/events/`.

### Add a New Department

Create a Markdown file in `src/content/departments/`:

```md
---
title: "Department of Mathematics"
description: "Programs in pure and applied mathematics."
image: "/images/departments/mathematics.svg"
headOfDepartment: "Dr. Priya Sharma"
courses:
  - "B.Sc. Mathematics"
featured: false
---

Write the department page content here.
```

The file name controls the URL slug. For example, `mathematics.md` becomes `/departments/mathematics/`, so no separate `slug` field is needed.

### Add a Faculty Member

Edit `src/content/data/faculty.json` and add another object:

```json
{
  "name": "Dr. Priya Sharma",
  "role": "Assistant Professor",
  "department": "Mathematics",
  "email": "priya.sharma@northvalley.edu",
  "image": "/images/faculty/default.svg"
}
```

### Update Gallery Images

1. Add image files to `public/images/gallery/`.
2. Edit `src/content/data/gallery.json`.
3. Add or update entries with the image path, title, description, and category.

## Cloudflare Pages Deployment

Recommended Cloudflare Pages settings:

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

Deployment flow:

1. Push this project to a GitHub repository.
2. In Cloudflare Pages, create a new project from that repository.
3. Select the Astro framework preset.
4. Confirm the build command and output directory above.
5. Deploy from the `main` branch.

The site is static, so no server runtime is required.

## SEO Basics

- Each page layout supports a title and meta description.
- Dynamic routes generate clean URLs from content collection slugs.
- The sitemap integration outputs a sitemap during build.
- HTML uses semantic landmarks, headings, lists, and article sections.

## Future Enhancement

For non-technical staff editing, add Decap CMS so notices, events, departments, faculty, and gallery entries can be edited through an admin interface while still committing changes to GitHub.
