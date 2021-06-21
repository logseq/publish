# Logseq Publish

Logseq Publish is a app that generates a fast, SEO friendly and scalable website from your Logseq graph.

## How to use

1. Export to json in the Logseq desktop app.
2. Clone this repo.
3. Copy the exported json to the root as data.json.
4. Copy the whole `assets` folder from Logseq repo to the `public` folder.
5. Run `yarn && yarn dev` to start the site locally.
6. [Deploy](https://nextjs.org/docs/deployment)

## How does it work

1. Logseq exports a json file, which a basically a tree structure consisting of various kinds of block types.
2. Logseq Publish renders the tree structure recursively, providing different React components for each block type.
3. Logseq Publish utilizes NextJS to generate static htmls at build time.
