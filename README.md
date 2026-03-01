# AJ Sottile — Interactive Resume Portfolio

A single-page interactive portfolio built with **Next.js 15**, **Tailwind CSS v4**, **Framer Motion**, **Recharts**, and **React Flow**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- **Hero** with animated particle canvas background
- **About** section with animated stat counters and professional headshot placeholder
- **Skills** grid with clickable chips showing where each skill was used, plus a scrolling marquee
- **Experience** timeline with alternating cards, expandable details, and scroll animations
- **Medallion Architecture Visualizer** — interactive React Flow diagram of the TIDI/Fabric data pipeline with a "Run Pipeline" animation
- **Baseball Analytics Dashboard** — 4 interactive Recharts panels (pitch velocity, batting average, radar profile, strike zone heatmap) with player selector
- **Star Schema Explorer** — interactive React Flow ER diagram with toggleable Financial/Commercial schemas and expandable sample data
- **Side Projects** cards with 3D hover effects linking to GitHub repos
- **Contact** section with social links and resume download

## Deployment

This project is configured for **Vercel**. Push to your repo and connect it to Vercel for automatic deploys.

```bash
npm run build   # Verify production build locally
```

## Customization

- **Headshot**: Replace the `User` icon placeholder in `src/components/about/Headshot.tsx` with your real photo
- **Resume PDF**: Add your resume to `public/resume.pdf`
- **Colors**: All theme tokens are in `src/app/globals.css` and `src/lib/constants.ts`
- **Content**: Resume data lives in `src/data/resume.ts`
