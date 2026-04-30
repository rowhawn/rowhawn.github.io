# Rohan Pathare — personal site

Static site for an artist portfolio, built with [Astro](https://astro.build/) and deployed to [GitHub Pages](https://pages.github.com/) via Actions.

In the repository **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions** (not “Deploy from a branch”) so the workflow below can publish `dist/`.

## Local development

```bash
npm install
npm run dev
```

Build production output to `dist/`:

```bash
npm run build
```

## Editing content

Pages live under [`src/pages/`](src/pages/) as **MDX** (Markdown with components). Each page uses front matter for the layout and SEO title:

```mdx
---
layout: ../../layouts/BaseLayout.astro
title: Page title
description: Short description for search and social previews.
---
```

### YouTube embed

```mdx
import YouTube from "../../components/YouTube.astro";

<YouTube id="VIDEO_ID" />
```

Use the video ID from the YouTube URL (the segment after `v=` or the last path segment for youtu.be links).

### Bluesky embed

Build time fetches the official oEmbed HTML (requires network during `npm run build`).

```mdx
import Bluesky from "../../components/Bluesky.astro";

<Bluesky url="https://bsky.app/profile/.../post/..." />
```

### Image gallery (Frequencies in Transit)

Place JPEGs under `src/assets/frequencies-in-transit/zine/` or `.../photos/`, then:

```mdx
import ImageGallery from "../../components/ImageGallery.astro";

<ImageGallery subdir="zine" />
<ImageGallery subdir="photos" />
```

### Images in a page

Put files under `src/assets/...` and import them:

```mdx
import { Image } from "astro:assets";
import photo from "../../assets/your-folder/photo.jpg";

<Image src={photo} alt="Description" widths={[400, 800]} sizes="(max-width: 640px) 100vw, 480px" />
```

## Tests

```bash
npm test
```
