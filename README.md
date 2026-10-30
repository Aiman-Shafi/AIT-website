# American Import Tile — HTML, CSS & JavaScript

A standalone static website. No framework, npm installation, API key, or build step required.

## Open locally
Unzip the folder and open index.html in your browser. Keep the folder structure intact.
For a local server, run `python3 -m http.server 8080` from this folder and visit http://localhost:8080.

## Publish
Upload the contents of this folder to any static web host. index.html must be at your chosen site root. Links and assets use relative paths so subfolder hosting is supported.

## Pages
- index.html: homepage
- projects.html: project portfolio and interactive map
- projects/roosevelt-field.html
- projects/ala-moana-amp.html
- projects/westroads-flagship-lounge.html

## Editing
- styles.css: shared design, responsive layout, typography
- app.js: homepage, project map, menu, video and inquiry form
- projects.css / projects.js: portfolio page
- project-detail.css / project-detail.js: detail pages
- image-motion.css / image-motion.js: image reveals and hover effects
- map-enhancements.css / map-enhancements.js: bronze active location, brief halo effect, one-time map introduction and two-line native dropdown
- assets/: local photography, logos, fonts and optimized hero video

The native dropdown retains keyboard, touch and screen-reader support. Its opened option menu follows the visitor's browser/OS. Animations honor reduced-motion preferences. Map locations are approximate city-level positions, not surveyed project addresses.

## Form behavior
The inquiry form prepares a mailto draft addressed to info@americanimporttile.com. The visitor must send it from their email application. No submissions are stored and no email is sent automatically. Connect your chosen form service if direct submission is needed.

## Assets and content
The hero video and serif font were provided by the client/user. Photography and brand logos were sourced from the client and partner websites. Confirm permission to reuse all assets before production use. See asset-sources.json for recorded sources. Verify business contact details and project credits with the client before final launch.

This export includes the requested map refinements. Exporting this package does not update the separately hosted preview.
