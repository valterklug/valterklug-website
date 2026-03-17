# valterklug.com

React + Vite personal brand website for Valter Klug — Fractional CMO & International Brand Expansion Strategist.

## Quick Start
```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # → /dist (production)
npm run preview  # preview the build locally
```

## Deploy to Vercel (5 minutes)
1. Push this folder to a new GitHub repo
2. Go to vercel.com → New Project → Import that repo
3. Framework: **Vite** (auto-detected) · Build: `npm run build` · Output: `dist`
4. Click Deploy

`vercel.json` already handles SPA routing — all paths serve `index.html`.

---

## ✉️ Contact Form Setup (Required)

Forms use [Formspree](https://formspree.io) — free, no backend needed.

**Steps:**
1. Create a free account at formspree.io
2. Click **New Form** → name it (e.g. "valterklug.com contact")
3. Copy your Form ID — looks like `xkndvpzq`
4. Open `src/components/ContactForm.jsx`
5. Replace `YOUR_FORMSPREE_ID` on **line 11** with your actual ID:
   ```js
   const FORMSUBMITY_ID = 'xkodvpzq'   // ← your ID here
   ```
6. Redeploy → form submissions go straight to your email

Free plan: 50 submissions/month. Upgrade at formspree.io/pricing if needed.

---

## Site Map

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About & Background |
| `/services` | What I Do (4 service areas) |
| `/work` | Case Studies & Portfolio |
| `/intelligence` | Soundcheck Intelligence (6 products) |
| `/news` | News & Insights |
| `/contact` | Contact + Partner Network |

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite 5 | Framework & build |
| React Router 6 | Client-side routing |
| Framer Motion 11 | Page transitions & scroll animations |
| React Hook Form 7 | Form validation |
| Formspree | Form submissions (external) |

---

## Design Tokens (CSS Variables)

```css
--orange:     #EA633F   /* Primary CTA & accents */
--black:      #121212   /* Text & dark sections */
--near-black: #1E1E1E   /* Dark card backgrounds */
--cream:      #EAEAC8   /* Light accent sections */
--cyan:       #88E8F0   /* Intelligence section accent */
--yellow:     #E8EB74   /* Case study accents */
--mid-gray:   #666666   /* Body text */
--warm-gray:  #E8E8E8   /* Borders & dividers */
```

---

## What Each Page Does

**Home** — Hero with stats and quote card, trusted brands strip, 4-service overview, approach section, featured Guaraná/World Cup case study, CTA.

**About** — At-a-glance stats, biographical text, career timeline (2001→now), Chameleon Collective section.

**Services** — 4 expandable service cards (Fractional CMO, US Expansion, Brand Strategy, Digital Marketing) with full deliverable lists. Click b+` to expand.

**Work** — 6 case study cards: Guaraná/GUARANA1ION, Bauducco, KeroCoco, Tropical Fantasy, NYCFC, CBF/World Cup.

**Intelligence** — Soundcheck-powered intelligence services: 4-step process, then 6 expandable product cards (Expansion Analysis, Idea Validation, Business Plan, AI Focus Groups, Funding Vetting, CLEAR Assessment). Click \"View Deliverables\" to expand each.

**News** — Featured World Cup 2026 article + 5 article cards.

**Contact** — Full contact form (Formspree) + direct contact info + \"What to expect\" sidebar + partner network (Oxford USA, ITS Company, Global Franchise, Go To Market BD).

---

## Contact

valter.klug@chameleon.co  
linkedin.com/in/valterklug  
soundcheckinsights.com
