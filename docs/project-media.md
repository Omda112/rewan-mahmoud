# Project media conventions

Store approved project media under `public/projects/<project-slug>/`. Keep source
files outside `public/`; only optimized, review-approved exports belong here.

Use lowercase, hyphenated names that describe the content and breakpoint intent:
`rashan-checkout-desktop.webp`, `rashan-checkout-mobile.webp`, and
`rashan-checkout-detail.webp`.

Prefer WebP or AVIF for raster screenshots. Retain a high-resolution source for
future exports, but deliver only the dimensions needed by the page. Record each
approved asset in `PortfolioProject.media` with accurate dimensions and useful
alternative text.

Suggested crops:

- Hero/product composition: 16:10 or 3:2
- Product interface: 4:3 or 16:10
- Mobile interface: 9:16
- Detail/process artifact: preserve the original ratio when it conveys evidence

Use `next/image` when project media is rendered. Supply `width`, `height`, and a
responsive `sizes` value so layout is reserved before loading. Use an empty alt
only for decorative crops; describe meaningful screens, flows, or artifacts.

Do not add media records until the asset, its permission to publish, and its
description are verified.

## Project mockup screens

Each project retains its CSS interface until a media record explicitly targets
its device screen. Rashan expects a mobile viewport; Banka and Taskly expect a
desktop viewport. After placing an approved asset under the matching project
directory, add a record like the following. Replace every placeholder with
verified information; this is a shape example, not approved portfolio content.

```ts
media: [
  {
    src: "/projects/<project-slug>/<approved-screen>.webp",
    alt: "<accurate description of the approved project screen>",
    width: <approved pixel width>,
    height: <approved pixel height>,
    slot: "device-screen",
    viewport: "mobile", // Rashan; use "desktop" for Banka and Taskly.
    objectFit: "cover",
    objectPosition: "center",
  },
]
```

`objectFit` accepts `cover` or `contain`. Use `objectPosition` only when a
verified crop needs adjustment (for example, `center top`). The device shell,
perspective, lighting, crop, and outer composition stay in place; only its
inner screen content is replaced.
