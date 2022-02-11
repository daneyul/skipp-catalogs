## Webflow design catalogs JavaScript
This repo controls the interactions for the design catalogs at https://design-catalogs.skipp.co/catalogs/. It is hosted on NPM and referenced in Webflow.

## CDN Snippet
This JS file is referenced in Webflow in the page settings of the `Catalog Templates` page. It looks like `<script src="https://cdn.jsdelivr.net/npm/skipp-catalog@9.9.0/index.js"></script>
`

## Hosting
This JS file is hosted on my personal npm account currently. To move it somewhere else, please create an npmjs.com account and publish this repo locally by running `npm publish` (you need to log into your npm account via npm on terminal). Whenever I make changes to this file, I edit the `package.json` file and bump the version up. Then, I publish it to npm and update the snippet's version on Webflow (go into the `Catalog Templates` page settings, find `<script src="https://cdn.jsdelivr.net/npm/skipp-catalog@9.9.0/index.js"></script>
` and bump up the `skipp-catalog@9.9.0` part to `skipp-catalog@9.9.1` or whatever you've changed the version to.
