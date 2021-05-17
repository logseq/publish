# Logseq Publish

Logseq Publish is a NextJS template to generate a fast, SEO friendly and scalable site from your Logseq content.

## How to use

1. Export to markdown in the Logseq desktop app
2. Clone this repo and replace the `content/pages` and `public/assets` folders with ones exported from Logseq
3. Run `yarn && yarn dev` to start the site locally
4. Sign in to [Vercel](https://vercel.com) to deploy

## What it does under the hood

- generate static htmls at build time from markdown files exported from Logseq
- transform Logseq-specific contents (like block ref and asset link) to displayable html
- core features for a content-heavy website

## TODO

- preview link
- support all Logseq-specific content types
- search
- UI/UX improvement

## Beyond

- incremental static generation at run time (need API support)
- support other frontend frameworks
- extract markdown syntax plugins
