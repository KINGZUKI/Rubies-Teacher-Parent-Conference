# TPC / 26 — Teacher & Parent Conference 2026

A responsive React + Vite website for the Teacher & Parent Conference 2026, organised by Rubies Tech Foundation.

## Stack

- React 18 and React Router
- Vite
- Lucide React icons
- Plain CSS with reusable custom properties
- ESLint

## Run locally

Requires Node.js 20 LTS or newer and npm.

```bash
npm install
npm run dev
```

Open the local address printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
tpc_review/
├── public/
│   ├── images/
│   │   ├── partners/       # Supplied partner logo artwork
│   │   └── week1, week4/   # Conference and learning photographs
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── home/           # Homepage sections and reusable content
│   │   └── layout/         # Site header
│   ├── data/
│   ├── pages/              # Homepage and dedicated content pages
│   ├── styles/              # Global, homepage and section styles
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Updates included

- Added the supplied SQI College of ICT, Oyo State Ministry of Education and Oyo State Universal Basic Education Board logo images to the 2026 partners section.
- Updated the partner names and categories to match the supplied 2026 sponsorship proposal. HarvestHouse Christian Center is listed as Venue Partner; no official logo for it was included in the image pack.
- Expanded the sponsorship page with the proposal's foundation background, vision and mission, 2017–2024 timeline, impact figures, conference aims, previous online conferences, event-day figures, confirmed partner list, sponsor benefits, four sponsorship packages, comparison table, budget, alternative support options, commitments, key dates and contact details.
- Added responsive styling for the long-form proposal content and horizontally scrollable comparison/budget tables on smaller screens.
- Added smooth scroll-to-top behaviour when navigating between website pages.
- Corrected malformed literal newline characters in the route declarations in `src/App.jsx`.

## Source accuracy note

The sponsorship content is transcribed from the supplied **Teacher & Parent Conference 2026 Sponsorship Proposal.pdf**. The PDF contains a venue-budget discrepancy: its summary lists the venue as ₦750,000, while the detailed budget lists Venue and Screen at ₦1,000,000 and the venue contribution in kind at ₦1,000,000. The website flags this difference rather than silently choosing one figure.

The website should be checked by the organisers before publication, especially for final programme details, registration arrangements, partner logo approvals and any updates to the proposal.
