# Product Requirements Document
## Personal Portfolio Website — Sajad Hussain Malla (Jin)
**Version:** 2.0 (Resume-accurate)
**Date:** September 2026
**Prepared for:** AI Agent / Developer Implementation
**Reference Design:** Randy Fahmi Creative Visual Portfolio

---

## 1. Project Overview

A single-page, scroll-based personal portfolio website for **Sajad Hussain Malla** (goes by Jin), a final-year B.Tech CSE student at CUSAT and Software Engineer Intern at Nippon Toyota, specialising in **backend engineering, cybersecurity, and AI-agentic systems**.

The design language is directly adapted from the Randy Fahmi reference image: editorial, bold, graphic-design-heavy, large typographic treatments, a strict 2-color accent system (amber/yellow + near-black), and a light warm-grey base — repositioned for a **backend/security engineer identity**.

---

## 2. Design System (Exact Tokens)

### 2.1 Color Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Base background | Warm Off-White | `#F0EDE8` | Page background, all sections |
| Primary accent | Amber Yellow | `#F5A623` | Highlighted text, icon fills, tags, badges, buttons |
| Dark / text | Charcoal Black | `#1A1A1A` | Headings, body text, icon strokes |
| Surface card | Light Grey | `#E8E4DE` | Cards, hover states, inset panels |
| Muted text | Mid Grey | `#6B6B6B` | Captions, dates, secondary labels |
| White pop | Pure White | `#FFFFFF` | Callout boxes, inner card highlights |

> ⚠️ No gradients. No purple. No dark backgrounds except footer bar and one contact card. The palette is strictly these six values.

### 2.2 Typography

#### Display Font — Hero & Section Titles
- **Font:** `Bebas Neue` (Google Fonts, free)
- **Weight:** 400 (inherently ultra-bold condensed)
- **Usage:** "BACKEND.", "ENGINEER.", all section titles
- **Transform:** ALL CAPS always
- **Sizing:** 96px–140px hero; 64px–80px section headings; 48px subsection labels
- **Letter-spacing:** -0.02em

#### Accent Script — Sub-label Ribbon
- **Font:** `Caveat` (Google Fonts, free)
- **Weight:** 700
- **Usage:** `"Backend Engineer"`, `"12x Hackathon Winner"` overlay labels
- **Color:** White text on `#F5A623` pill background
- **Sizing:** 18px–22px
- **Transform:** Slight -2° rotation (matching reference "Creative Visual" ribbon)

#### Body / UI Font
- **Font:** `DM Sans` (Google Fonts, free)
- **Weight:** 400 body / 500 labels / 700 sub-headings
- **Line-height:** 1.65
- **Sizing:** 14px–16px body; 12px captions

#### Monospace — Tech Stack Labels
- **Font:** `JetBrains Mono` (Google Fonts, free)
- **Weight:** 400
- **Usage:** Stack names, GitHub paths, tech detail labels
- **Sizing:** 12px–13px

### 2.3 Spacing System

Base unit: 8px

| Token | Value |
|-------|-------|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 32px |
| `--space-xl` | 64px |
| `--space-2xl` | 96px |
| `--space-3xl` | 128px |

### 2.4 Border Radius

| Element | Radius |
|---------|--------|
| Skill / tech tags | 999px pill |
| Project cards | 20px |
| Profile image frame | 20px |
| Amber ribbon labels | 8px |
| Section number badges | 4px |
| Contact card | 16px |

### 2.5 Decorative Elements (Direct Reference Matches)

#### Tech Doodle Icons
- Replace Randy's camera/design doodles with **tech SVG doodles**: terminal `>_`, server rack outline, shield/lock, circuit trace, code brackets `{}`, network node graph
- SVG line illustrations, stroke only, `#1A1A1A` at 15–20% opacity
- Scattered asymmetrically behind hero text — not in a grid
- 6–8 doodles in the hero; 2–3 in the About section background

#### Decorative Quotation Marks
- Large `"` marks in `#F5A623`, 180px+ Bebas Neue
- Top-left of each major section title block

#### Ghost Section Numbers
- `01`, `02`, `03`… in Bebas Neue 300px+, `#1A1A1A` at 6% opacity
- Bottom-left of each section as a watermark layer
- **Exact match to reference design**

#### Vertical Side Label (Fixed)
- Text: `SAJAD © 2026`
- Rotated 90° clockwise, fixed to viewport right edge
- DM Sans 700, 10px, letter-spacing 0.2em, color `#1A1A1A`
- **Direct match to "RANDY © 2025" in reference**

#### Amber Ribbon Label CSS
```css
.ribbon-label {
  background: #F5A623;
  color: #FFFFFF;
  font-family: 'Caveat', cursive;
  font-weight: 700;
  font-size: 20px;
  padding: 4px 16px;
  border-radius: 8px;
  transform: rotate(-2deg);
  display: inline-block;
}
```

---

## 3. Page Sections — Full Specification

---

### SECTION 01 — HERO

**Purpose:** Bold identity statement. Immediate visual impact.

#### Layout
```
┌────────────────────────────────────────────────────────────────┐
│  [doodle >_]  [doodle {}]         [doodle lock]  [doodle srv]  │
│                                                                  │
│  " B A C K E N D .           ┌──────────────────┐              │
│    [amber ribbon: Backend      │  Photo of Jin    │              │
│     Engineer]                  │  B&W + amber bg  │              │
│  E N G I N E E R .           └──────────────────┘              │
│                                                                  │
│  [doodle circuit]  [doodle node]                                 │
│                                                                  │
│  > Sajad Hussain Malla       Selected Best                      │
│                               Backend Build · 2026              │
│  [ghost "01" bottom-left, 6% opacity]                           │
└────────────────────────────────────────────────────────────────┘
```

#### Content Spec

| Element | Value | Style |
|---------|-------|-------|
| Display line 1 | `BACKEND.` | Bebas Neue 120px, `#1A1A1A` |
| Amber period dot | `•` | `#F5A623` |
| Ribbon label (overlapping, -2° tilt) | `Backend Engineer` | Caveat 700 20px, white on `#F5A623` |
| Display line 2 | `ENGINEER.` | Bebas Neue 120px, `#1A1A1A` |
| Bottom-left name | `> Sajad Hussain Malla` | DM Sans 500 14px; `>` in `#F5A623` |
| Bottom-right | `Selected Best / Backend Build · 2026` | DM Sans 400 italic 12px, `#6B6B6B` |

#### Hero Photo Spec
- Portrait photo of Jin, black & white conversion
- Background behind subject: `#F5A623` amber rectangle, 20px border-radius
- Size: ~280px × 340px, top-right quadrant
- Slight overlap with heading text (same compositional move as reference)
- If no photo available: amber rectangle with monogram `SH` in Bebas Neue 96px white

#### Doodle Placement (hero section, % of section dimensions)
1. Terminal `>_` — 8% left, 15% top
2. Code `{}` — 35% left, 10% top
3. Shield/lock — 75% left, 8% top
4. Server rack — 90% left, 20% top
5. Circuit trace — 5% left, 60% top
6. Network node — 78% left, 55% top (behind photo)

---

### SECTION 02 — ABOUT

**Purpose:** Personal statement + education + experience in one editorial panel.

#### Layout
```
┌─── About ──────────────────────── > ──────────────────────────┐
│                                                                  │
│  [Photo: Jin      " HELLO.                                      │
│   B&W, amber       I'm Sajad Hussain Malla — a backend          │
│   bg behind]       engineer who builds production systems        │
│                    and breaks things for fun (legally).          │
│                    SWE Intern @ Nippon Toyota · B.Tech CSE       │
│                    CUSAT 2026 · GPA 8.1                          │
│                                                                  │
│                    Education           Tech Stack               │
│                    ─────────           ──────────               │
│                    2023–2026           [badge grid]             │
│                    B.Tech CSE                                   │
│                    CUSAT, Kochi                                 │
│                    GPA: 8.1                                     │
│                                                                  │
│                    Experience                                    │
│                    ──────────                                   │
│                    [two-column entries]                          │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Let's Work Together :                                     │   │
│  │ 📧 huxi1314k@gmail.com  📞 +91-9103321565               │   │
│  │ LinkedIn · GitHub · Portfolio · Kochi, Kerala            │   │
│  └──────────────────────────────────────────────────────────┘   │
│  [ghost "02"]                                                    │
└────────────────────────────────────────────────────────────────┘
```

#### Bio Paragraph (exact copy)
> I'm **Sajad Hussain Malla**, a backend-first engineer who builds production systems that hold under pressure — and breaks them (legally) to find what doesn't. Currently finishing B.Tech CSE at CUSAT while working as a Software Engineer Intern at Nippon Toyota, where I've shipped a multi-cluster used-car platform, AI valuation modules, and migrated a decade of legacy data into PostgreSQL. Outside work hours, I'm doing CTFs, hunting bugs, and competing at hackathons.

DM Sans 400, 15px, `#1A1A1A`, line-height 1.65, max 60ch

#### Education Block
```
2023–
2026    B.Tech Computer Science Engineering
        Cochin University of Science and Technology (CUSAT)
        Kochi, Kerala · GPA: 8.1

2022    Senior Secondary — JKBOSE
        Govt. Boys HSS Magam, Budgam, J&K
        Score: 423/500 · Top 10 Ranker
```
- Year: DM Sans 700 18px `#F5A623`
- Degree: DM Sans 600 14px `#1A1A1A`
- Institution: DM Sans 400 13px `#6B6B6B`

#### Tech Stack Badges (2-row grid)
Row 1: `Python` `FastAPI` `PostgreSQL` `Redis`
Row 2: `Next.js` `TypeScript` `Docker` `Linux`
Row 3: `Wazuh` `Kali Linux` `SQLAlchemy` `MongoDB`

Badge style: `#F5A623` bg, `#1A1A1A` text, DM Sans 600 12px, 999px radius, 8px×12px padding

#### Experience Entries (two-column)

**Left column:**
- **Software Engineer Intern** · Nippon Toyota Pvt. Ltd. – UTrust
  *Jul 2026 – Present · Kochi*
- **Cybersecurity Analyst Intern** · ElevateLabs
  *May 2025 – Jul 2025 · Remote*

**Right column:**
- **Tech Lead** · ACES – Assoc. of Computer Engineering Students, CUSAT
  *Dec 2024 – Present · Kochi*
- **Open Source Contributor** · Social Summer of Code – ULSA
  *May 2024 · Remote*

Format: Role DM Sans 600 13px `#1A1A1A` · Company DM Sans 500 12px `#F5A623` · Date DM Sans 400 11px italic `#6B6B6B`

#### Contact Card (dark)
- Background: `#1A1A1A`, border-radius 16px, padding 24px
- Heading: `Let's Work Together :` — DM Sans 700 16px `#F5A623`
- Items with icons (amber icon, white label):
  - 📧 huxi1314k@gmail.com
  - 📞 +91-9103321565
  - 🔗 linkedin.com/in/sajad-hussain-malla-983854274
  - 🐙 GitHub (link from resume)
  - 📍 Kochi, Kerala, India

---

### SECTION 03 — TABLE OF CONTENT (What I Do)

**Purpose:** Four capability pillars — visual anchor cards, navigation-ready.

#### Layout
```
┌─── Table Of Content ──────────── > ──────────────────────────┐
│                                                                 │
│  [ghost: TABLE OF CONTENT. @ 8% opacity behind]               │
│  " TABLE OF CONTENT.                                           │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │  🖥️      │  │  🔒      │  │  🤖      │  │  🌐      │      │
│  │ Backend  │  │ Security │  │ AI &     │  │ Full-    │      │
│  │ Systems  │  │ Research │  │ Agentic  │  │ Stack    │      │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘      │
│  [ghost "03"]                                                   │
└────────────────────────────────────────────────────────────────┘
```

#### Title Treatment
- `"` amber Bebas Neue 80px
- `TABLE` `#1A1A1A` Bebas Neue 72px
- `OF` `#F5A623` Bebas Neue 72px (amber word)
- `CONTENT.` `#1A1A1A` Bebas Neue 72px
- Ghost layer behind: full string at 8% opacity, slightly offset left

#### Four Cards

Each card: `#F5A623` amber bg, 24px border-radius, ~220×260px, SVG icon 64px white, label DM Sans 700 16px `#1A1A1A` centered

| # | Icon (SVG) | Label |
|---|-----------|-------|
| 1 | Server / terminal | **Backend** Systems |
| 2 | Shield / lock | **Security** Research |
| 3 | Robot / neural net | **AI** & Agentic |
| 4 | Globe / code brackets | **Full-Stack** Dev |

Cards in a single row, equal width, `box-shadow: 0 4px 20px rgba(0,0,0,0.10)`

---

### SECTION 04 — PROJECTS

**Purpose:** Six featured builds from the resume. One featured card + five secondary cards.

#### Layout
```
┌─── Projects ───────────────────── > ──────────────────────────┐
│  " PROJECTS.                                                    │
│                                                                  │
│  [FEATURED — full width]                                        │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 01  UTrust Platform · Nippon Toyota      [Production]  │    │
│  │     Multi-cluster dealer CRM + AI valuation module     │    │
│  │     Next.js · FastAPI · PostgreSQL · Redis · AI        │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
│  [3-column secondary grid]                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                     │
│  │ 02       │  │ 03       │  │ 04       │                     │
│  │ Make-a-  │  │ Bug      │  │ ARGUS    │                     │
│  │ ton 8.0  │  │ Bounty   │  │ PPE Det. │                     │
│  └──────────┘  └──────────┘  └──────────┘                     │
│  ┌──────────┐  ┌──────────┐                                    │
│  │ 05       │  │ 06       │                                    │
│  │ DataBot  │  │ Local    │                                    │
│  │ NL→SQL   │  │ SIEM Lab │                                    │
│  └──────────┘  └──────────┘                                    │
│  [ghost "04"]                                                   │
└────────────────────────────────────────────────────────────────┘
```

#### Card Design Spec

**Featured card (full-width):**
- Background: `#FFFFFF`
- Border: 1px solid `#E8E4DE`
- Border-radius: 20px
- Padding: 32px
- Left border accent: 4px solid `#F5A623`
- Project number: Bebas Neue 56px `#F5A623`
- Title: DM Sans 700 22px `#1A1A1A`
- Org line: DM Sans 400 13px `#6B6B6B`
- Description: DM Sans 400 15px `#1A1A1A`, line-height 1.6
- Stack tags: JetBrains Mono 11px, `#1A1A1A` text, `#F0EDE8` bg, 4px radius
- Status badge: DM Sans 500 11px pill

**Secondary cards (3-col grid):**
- Same style, smaller padding 24px, Bebas Neue number 48px

#### All Six Projects — Exact Content from Resume

---

**PROJECT 01 — UTrust Platform** *(Featured)*
- **Type:** Production · Internship
- **Organisation:** Nippon Toyota Pvt. Ltd. – UTrust Used Cars Division
- **Status:** 🟢 Active
- **Description:** Built internal procurement & inventory tooling for UTrust, reducing valuation-to-listing TAT by 30% via AI-assisted modules — directly driving a 20% uplift in used-car sales. Migrated records dating to 2014 from siloed legacy systems into a centralised PostgreSQL DB. Delivered a Next.js / FastAPI multi-cluster dealer platform across 4 clusters with AI valuation, RC/Vahan verification, and real-time bidding.
- **Stack tags:** `Next.js` `TypeScript` `FastAPI` `PostgreSQL` `Redis` `SQLAlchemy` `Docker` `AI Valuation`

---

**PROJECT 02 — Make-a-ton 8.0 Hackathon Management Platform**
- **Type:** Hackathon · Full-Stack
- **Year:** 2025
- **Status:** ✅ Shipped
- **Description:** Full-stack event dashboard with role-based auth, live Supabase Realtime subscriptions, three-stage checkpoint progression, mentorship request queue, and a multi-criteria judge scoring engine across 6 rubrics.
- **Stack tags:** `Next.js` `TypeScript` `Supabase` `Tailwind CSS`
- **Award note:** Won Make-a-ton 7.0 (MLH) previously; organised Make-a-ton 8.0 as Team Lead

---

**PROJECT 03 — Bug Bounty Hunter — AI Security Analyst Platform**
- **Type:** AI · Security
- **Year:** Dec 2025
- **Status:** ✅ Complete
- **Description:** Backend platform exposing Python REST APIs; Gemini LLM agent detects SQLi, XSS, and business logic flaws via deterministic + AI-driven analysis. Agentic pipelines handle subdomain discovery and endpoint mapping; real-time progress streamed via SSE. PoC Generator outputs validated curl/Python exploit scripts.
- **Stack tags:** `Python` `FastAPI` `Gemini API` `SSE` `Agentic Architecture`

---

**PROJECT 04 — ARGUS — Real-Time PPE Detection System**
- **Type:** Computer Vision · Django
- **Year:** Feb 2024
- **Status:** ✅ Complete · BPCL & HP Approved
- **Description:** Real-time object detection backend in Python (YOLOv8) for safety-gear violation detection. Integrated Django REST API with a live alert notification system. Demo approved by BPCL and HP at Dhishna Tech Fest.
- **Stack tags:** `Python` `YOLOv8` `Roboflow` `Django REST` `Computer Vision`

---

**PROJECT 05 — DataBot — Natural Language Database Access**
- **Type:** AI · Backend
- **Year:** 2024
- **Status:** ✅ Complete
- **Description:** Python backend that translates natural language prompts into validated SQL queries via Gemini LLM, executes them against a MySQL database using SQLAlchemy ORM, and returns structured JSON responses via a Flask REST API.
- **Stack tags:** `Python` `SQLAlchemy` `Gemini API` `Flask` `MySQL`

---

**PROJECT 06 — Local SIEM & Penetration Testing Lab**
- **Type:** Security · Infrastructure
- **Year:** 2024
- **Status:** ✅ Complete
- **Description:** Automated log ingestion and alert parsing using Python scripts on top of Wazuh SIEM; set up traffic capture and analysis pipelines for DNS, TCP/IP, and HTTP on locally deployed vulnerable machines.
- **Stack tags:** `Python` `Wazuh` `Wireshark` `Kali Linux` `Nmap`

---

### SECTION 05 — SKILLS

**Purpose:** Full technical stack, scannable in one view.

#### Layout
```
┌─── Skills ─────────────────────── > ──────────────────────────┐
│  " SKILLS.                                                      │
│                                                                  │
│  [Backend]    [Databases]    [Security]    [AI & Agentic]       │
│  Python       PostgreSQL     Kali Linux    Gemini API           │
│  FastAPI      MySQL          Wazuh SIEM    Claude API           │
│  Django       MongoDB        Metasploit    OpenAI LLMs          │
│  Flask        Redis          Wireshark     MCPs / SSE           │
│  TypeScript   SQLAlchemy     Nmap / Nessus YOLOv8              │
│  RESTful APIs Schema Design  OpenVAS                            │
│  C / C++      Query Optim.   Pentest LC                        │
│                                                                  │
│  [DevOps]     [Frontend]                                        │
│  Docker       Next.js                                           │
│  Git / CI-CD  TypeScript                                        │
│  Linux Kali   Tailwind CSS                                      │
│  Linux Ubuntu Supabase                                          │
│  [ghost "05"]                                                   │
└────────────────────────────────────────────────────────────────┘
```

#### Six Skill Columns — Exact Content from Resume

**Languages & Frameworks**
`Python` `C` `C++` `SQL` `TypeScript` `Django` `Flask` `FastAPI` `RESTful APIs`

**Data & Databases**
`MySQL` `MongoDB` `Redis` `PostgreSQL` `SQLAlchemy` `Schema Design` `Query Optimisation`

**AI & Agentic Tools**
`Gemini API` `Claude (Anthropic)` `OpenAI-compatible LLMs` `MCPs` `SSE` `YOLOv8` `Agentic Micro-architectures`

**DevOps & Tools**
`Docker` `Git` `CI/CD` `Linux (Kali)` `Linux (Ubuntu)`

**Security**
`Wazuh SIEM` `Wireshark` `Nmap` `Metasploit` `Nessus` `OpenVAS` `Penetration Testing`

**Frontend**
`Next.js` `TypeScript` `Tailwind CSS` `Supabase` `Realtime`

#### Column Header Style
- Amber `#F5A623` underline rule (2px) beneath each column name
- DM Sans 700 14px `#1A1A1A` column name

#### Badge Style (within columns)
- Inline pill: `#F0EDE8` bg, `#1A1A1A` text, DM Sans 500 12px, 999px radius, 6px×10px padding
- Hover state: `#F5A623` bg, `#1A1A1A` text

---

### SECTION 06 — CERTIFICATIONS & AWARDS

**Purpose:** Credibility signals — certs, awards, hackathon wins.

#### Layout
```
┌─── Certs & Awards ──────────────── > ─────────────────────────┐
│  " CERTIFIED.                                                   │
│    AWARDED.                                                      │
│                                                                  │
│  CERTIFICATIONS                     AWARDS                      │
│  ────────────────────               ──────────────────          │
│  ✅ Google Cybersecurity Analyst    🏆 12x National             │
│     Coursera                            Hackathon Winner         │
│  ✅ CCEP – Red Team Leaders                                     │
│     Certified Cybersecurity         Notable wins:               │
│     Educator Professional           · Huddle Global 2025 (KSUM) │
│  ✅ Forage Job Simulations:         · Make-a-ton 7.0 (MLH)      │
│     Tata, Visa, AIG,                · Code reCET (CET TVM)      │
│     Datacom, Air India              · INKRIT 2.0 & 3.0          │
│  ✅ IEDC Design Bootcamp            · HACKnTech                  │
│     Phase II                        · Social Summer of Code      │
│  🕐 CEH (pursuing)                                              │
│  🕐 SAL1 – TryHackMe (pursuing)                                 │
│  🕐 IT Security: Defense Against                                │
│     the Digital Dark Arts (Coursera)                            │
│  [ghost "06"]                                                   │
└────────────────────────────────────────────────────────────────┘
```

#### Cert Badge Design
- Completed: `#F5A623` amber bg, white ✅ icon, DM Sans 600 13px `#1A1A1A` text
- Pursuing: dashed 1.5px border `#F5A623`, `#6B6B6B` text, 🕐 icon

#### Award Callout — "12x" Hero Stat
- Large Bebas Neue display: `12x` in `#F5A623` 96px
- Sub-label: `National Hackathon Winner` DM Sans 600 16px `#1A1A1A`
- This is a visual anchor within the awards column, exactly like a pull-quote

---

### SECTION 07 — EXPERIENCE TIMELINE

**Purpose:** Chronological career scan for recruiters.

#### Layout — Vertical Left-Border Timeline

```
│
│ Jul 2026  ●── Software Engineer Intern
│  NOW           Nippon Toyota Pvt. Ltd. – UTrust Division · Kochi
│                · AI-assisted inventory tooling → 30% TAT reduction
│                · 20% uplift in used-car sales
│                · Multi-cluster Next.js/FastAPI platform (4 clusters)
│                · PostgreSQL migration from 2014 legacy data
│
│ May 2025  ●── Cybersecurity Analyst Intern
│ Jul 2025       ElevateLabs · Remote
│                · Automated Nessus/OpenVAS CVE reporting
│                · Live traffic analysis (Wireshark, tcpdump)
│                · Full pentest lifecycle on Kali Linux
│                · Authored SOC playbook
│
│ Dec 2024  ●── Tech Lead
│  NOW           ACES – Assoc. of Computer Engineering Students, CUSAT
│                · Cybersecurity workshops & coding bootcamps
│                · 200+ CS students
│                · Hackathon lab coordination
│
│ May 2024  ●── Open Source Contributor
│                Social Summer of Code – ULSA · Remote
│                · Memory allocation bug fixes in C/C++
│
│ Jun 2023  ●── B.Tech CSE Begun
│                CUSAT, Kochi · GPA: 8.1
```

Timeline visual spec:
- Axis line: 2px solid `#E8E4DE`, left-aligned at 100px from section left edge
- Node dot: 12px circle, `#F5A623` fill, border 2px `#1A1A1A`
- Active node (current role): 16px, pulsing amber ring animation
- Year label: Bebas Neue 28px `#F5A623`, left of axis
- Role: DM Sans 700 16px `#1A1A1A`
- Company: DM Sans 500 14px `#6B6B6B`
- Bullets: DM Sans 400 13px `#1A1A1A`, indented 16px, line-height 1.5

---

### SECTION 08 — CONTACT / FOOTER

**Purpose:** Final CTA. Clean, direct.

#### Layout
```
┌────────────────────────────────────────────────────────────────┐
│                                                                  │
│  " LET'S                                                        │
│    BUILD.                                                        │
│                                                                  │
│  I'm open to backend engineering roles, security research       │
│  collaborations, and hackathons. Based in Kochi, open to remote.│
│                                                                  │
│  ┌──────────────────────────┐  ┌────────────────────────────┐  │
│  │ 📧 huxi1314k@gmail.com  │  │ 🔗 LinkedIn                │  │
│  │ 📞 +91-9103321565       │  │ 🐙 GitHub                  │  │
│  │ 📍 Kochi, Kerala, India │  │ 🌐 Portfolio               │  │
│  └──────────────────────────┘  └────────────────────────────┘  │
│                                                                  │
│  ─────────────────────────────────────────────────────────     │
│  [#1A1A1A footer bar]                                           │
│  Sajad Hussain Malla · B.Tech CSE · CUSAT · 2026               │
│                              Built with Next.js + Tailwind      │
└────────────────────────────────────────────────────────────────┘
```

- Hero heading: Bebas Neue 96px, `LET'S` line 1, `BUILD.` line 2, amber period dot
- Sub-copy: DM Sans 400 16px `#6B6B6B`
- Contact cards: `#FFFFFF` bg, border `#E8E4DE`, border-radius 16px, padding 24px
- Footer bar: `#1A1A1A` bg, `#FFFFFF` DM Sans 400 12px
- Footer right: `Built with Next.js + Tailwind` — JetBrains Mono 11px `#F5A623`

---

## 4. Section Header Pattern (Repeated on All Sections Except Hero)

**Direct match to Randy Fahmi reference — every section uses this exact row:**

```
[Section Label]  ─────────────────────────────────────  [›]
```

- Left: section name, DM Sans 500 14px `#1A1A1A`, uppercase tracking 0.1em
- Middle: flex-grow horizontal rule, 1px `#E8E4DE`
- Right: 32px circle button, `#1A1A1A` fill, white `›` arrow, no border-radius override (full circle)

---

## 5. Layout Architecture

### 5.1 HTML Structure

```html
<body>
  <aside class="vertical-label">SAJAD © 2026</aside>
  <section id="hero">…</section>
  <section id="about">…</section>
  <section id="what-i-do">…</section>
  <section id="projects">…</section>
  <section id="skills">…</section>
  <section id="certifications">…</section>
  <section id="experience">…</section>
  <section id="contact">…</section>
</body>
```

### 5.2 Grid & Container

- Max container width: **1200px**, centered, `margin: 0 auto`
- Side padding: **64px** desktop, **24px** mobile
- Section vertical padding: **96px** top + bottom
- Vertical label: `position: fixed`, right `0`, top `50%`, transform `rotate(90deg) translateY(-50%)`, `z-index: 100`

### 5.3 Project Grid

- Featured: `grid-column: 1 / -1` (full width)
- Secondary 5 cards: `grid-template-columns: repeat(3, 1fr)`, last row has 2 cards centred or left-aligned

---

## 6. Animation & Motion

**One orchestrated load sequence. Everything else static.**

| Element | Animation | Timing |
|---------|-----------|--------|
| Hero display text | Words fade-in + slide up 20px, staggered | 0.6s ease-out, 0.1s stagger per word |
| Amber ribbon label | Scale 0.8→1.0 | 0.3s ease-out, 0.4s delay |
| Hero photo | Fade in | 0.8s ease, 0.2s delay |
| Section titles | Fade in on scroll (IntersectionObserver) | 0.4s ease |
| Project cards | Y-translate 20px→0 on scroll-in | 0.5s ease-out |
| Timeline active node | Amber pulse ring, infinite | 2s ease-in-out infinite |
| All other elements | None | — |

> ⚠️ No parallax. No scroll-jacking. No looping background animations. No hover card-flip effects.

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|------------|-------|-----------|
| Mobile | < 640px | Single column; hero text 64px; doodles hidden; photo hidden; project cards stack |
| Tablet | 640–1024px | 2-col project grid; 2-col about layout; skills 3-col |
| Desktop | > 1024px | Full layout as specified above |

Design is **desktop-primary** (recruiter/hiring-manager viewport).

---

## 8. Tech Stack for Implementation

**Recommended for AI agent (Next.js path):**

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14, App Router, TypeScript |
| Styling | Tailwind CSS + CSS custom properties for design tokens |
| Fonts | `next/font/google` — Bebas Neue, Caveat, DM Sans, JetBrains Mono |
| Icons | Lucide React + custom inline SVG doodles |
| Animation | Framer Motion (scroll-triggered via `whileInView`) |
| Deployment | Vercel |
| Images | `next/image` with priority on hero photo |

**Alternative (HTML/CSS/JS, no build step):**
- Vanilla HTML5 + CSS3 + ES6 JS
- Google Fonts via CDN `<link>` tags
- IntersectionObserver API for scroll animations
- No framework, no bundler

---

## 9. Complete Content Inventory

**All content below is sourced from the resume PDF. Agent must use this — no generated placeholders.**

### Personal Details
| Field | Value |
|-------|-------|
| Full name | Sajad Hussain Malla |
| Goes by | Jin |
| Role | Backend Engineer · Software Engineering Intern |
| Phone | +91-9103321565 |
| Email | huxi1314k@gmail.com |
| Location | Kochi, Kerala, India |
| LinkedIn | linkedin.com/in/sajad-hussain-malla-983854274 |
| Education | B.Tech CSE, CUSAT (Jun 2023–Present), GPA 8.1 |
| Secondary | JKBOSE, 423/500, Top 10 Ranker, 2022 |

### About Bio
> I'm **Sajad Hussain Malla**, a backend-first engineer who builds production systems that hold under pressure — and breaks them (legally) to find what doesn't. Currently finishing B.Tech CSE at CUSAT while working as a Software Engineer Intern at Nippon Toyota, where I've shipped a multi-cluster used-car platform, AI valuation modules, and migrated a decade of legacy data into PostgreSQL. Outside work hours, I'm doing CTFs, hunting bugs, and competing at hackathons.

### Interests / Hobbies (for footer or sidebar)
CTFs · Football · Tinkering at Tinkerspace

### Languages Spoken
English · Hindi · Urdu · Malayalam (conversational)

### Experience (chronological, newest first)

**Software Engineer Intern** · Nippon Toyota Pvt. Ltd. – UTrust Used Cars Division
Jul 2026 – Present · Kochi
- Built internal procurement & inventory tooling for the UTrust platform, reducing valuation-to-listing TAT by 30% via AI-assisted modules — directly driving a 20% uplift in used-car sales.
- Migrated records dating to 2014 from siloed legacy systems into a centralised PostgreSQL DB.
- Delivered a Next.js / FastAPI multi-cluster dealer platform (4 clusters) with AI valuation, RC/Vahan verification, and real-time bidding.

**Cybersecurity Analyst Intern** · ElevateLabs
May 2025 – Jul 2025 · Remote
- Automated Nessus/OpenVAS scan reporting into risk-tiered CVE schemas; captured live traffic (Wireshark, tcpdump) to detect TCP/DNS/HTTP anomalies.
- Ran full pentest lifecycle (recon, enumeration, exploitation) on Kali Linux.
- Authored a SOC playbook covering password policy, entropy analysis, and incident response procedures.

**Tech Lead** · ACES – Assoc. of Computer Engineering Students, CUSAT
Dec 2024 – Present · Kochi
- Organised cybersecurity workshops, coding bootcamps, and competitive programming events for 200+ CS students.
- Managed lab setups and technical resources for departmental hackathons.

**Open Source Contributor** · Social Summer of Code – ULSA
May 2024 · Remote
- Fixed memory allocation bugs in C/C++ projects; collaborated with international developers.

**Team Lead – Tech Fest Dhishna** · CUSAT
Feb 2024 · Kochi
- Led organisation of one of the largest inter-college tech events in Kerala.

### Projects (all 6)

**UTrust Platform** · Nippon Toyota · Jul 2026–Present
Stack: Next.js, TypeScript, FastAPI, PostgreSQL, Redis, SQLAlchemy, AI Valuation
Key metrics: 30% TAT reduction, 20% sales uplift, 2014→2026 legacy migration, 4 clusters

**Make-a-ton 8.0 – Hackathon Management Platform** · 2025
Stack: Next.js, TypeScript, Supabase, Tailwind CSS
Features: RBAC auth, Supabase Realtime, 3-stage checkpoint system, mentorship queue, 6-rubric judge scoring engine

**Bug Bounty Hunter – AI Security Analyst Platform** · Dec 2025
Stack: Python, FastAPI, Gemini API, SSE, Agentic Architecture (also uses Flask variant)
Features: SQLi/XSS/business-logic flaw detection, subdomain discovery, endpoint mapping, SSE live streaming, PoC exploit script generation

**ARGUS – Real-Time PPE Detection System** · Feb 2024
Stack: Python, YOLOv8, Roboflow, Django REST, Computer Vision
Note: Demo approved by BPCL and HP at Dhishna Tech Fest

**DataBot – Natural Language Database Access** · 2024
Stack: Python, SQLAlchemy, Gemini API, Flask, MySQL
Features: NL prompt → validated SQL → MySQL execution → structured JSON response

**Local SIEM & Penetration Testing Lab** · 2024
Stack: Python, Wazuh, Wireshark, Kali Linux, Nmap
Features: Automated log ingestion + alert parsing on Wazuh; DNS/TCP/HTTP traffic analysis pipelines

### Certifications

**Completed:**
- Google Cybersecurity Analyst Certificate – Coursera (SIEM, SOC tools, Network Security)
- Certified Cybersecurity Educator Professional (CCEP) – Red Team Leaders
- Forage Job Simulations: Tata Group, Visa, AIG, Datacom, Air India
- IEDC Innovation & Design Bootcamp Phase II

**In Progress:**
- CEH (Certified Ethical Hacker)
- SAL1 – TryHackMe
- IT Security: Defense Against the Digital Dark Arts – Coursera (Google)

### Awards & Hackathons
- **12x National Hackathon Winner**
- Huddle Global 2025 (KSUM)
- Make-a-ton 7.0 (MLH)
- Code reCET (CET Trivandrum)
- INKRIT 2.0 & 3.0
- HACKnTech
- Social Summer of Code Certificate – ULSA

### Volunteer / Organiser
- Team Lead – Make-a-ton 8.0
- Team Lead – Dhishna Tech Fest, CUSAT
- Team Lead – Sargam Cultural Fest, CUSAT
- Team Lead – Vibhava CUSAT

---

## 10. Reference Design Cross-Map

| Randy Fahmi Reference | Sajad's Portfolio Equivalent |
|----------------------|------------------------------|
| `PORTO FOLIO.` display text | `BACKEND. ENGINEER.` |
| "Creative Visual" cursive amber ribbon | "Backend Engineer" amber ribbon |
| Camera / design tool doodles | Terminal `>_` / server / lock / circuit doodles |
| Adobe CC icon badges (Pr Ai Ps Lr) | Python / FastAPI / PostgreSQL / Redis tech badges |
| 4 categories: Graphic / Photo / Video / Editor | 4 categories: Backend / Security / AI-Agentic / Full-Stack |
| "Selected Best Graphic Design Until 2025" | "Selected Best Backend Build · 2026" |
| B&W portrait + amber rectangle bg | Same photo treatment for Jin |
| "RANDY © 2025" vertical fixed label | "SAJAD © 2026" vertical fixed label |
| Ghost section numbers 01 / 02 / 03 | Same ghost numbers, same position |
| Section header: label + horizontal line + circle `›` | Same — every section |
| Dark "Let's Work Together" contact card | Same — `#1A1A1A` bg, amber label |

---

## 11. What NOT to Do (Guardrails for AI Agent)

1. **Do not** use dark backgrounds anywhere except the footer bar and the Let's Work Together contact card
2. **Do not** use purple, blue, teal, or gradient colour schemes — amber and charcoal only
3. **Do not** use Inter, Roboto, Arial, or system-ui as the display font — Bebas Neue is required
4. **Do not** animate more than the 5 elements listed in Section 6
5. **Do not** add a navbar, hamburger menu, or sticky header — this is a pure scroll page
6. **Do not** generate Lorem Ipsum — all content is in Section 9
7. **Do not** add a dark-mode toggle — light mode only
8. **Do not** add emojis as section icons — use SVG line illustrations
9. **Do not** create a blog, testimonials, pricing, or services section
10. **Do not** add a "Download Resume" CTA button unless explicitly requested later
11. **Do not** make all project cards identical heights — allow natural content-driven sizing
12. **Do not** add any content not listed in Section 9 — nothing invented

---

## 12. Prompt to Feed the AI Agent

Copy-paste the following as the instruction block when feeding to a code-generation agent:

```
Build a single-page personal portfolio website for Sajad Hussain Malla (Jin) following
the PRD below. The visual reference is the Randy Fahmi Creative Visual Portfolio design.

Implementation stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.
Fonts via next/font/google: Bebas Neue (display), Caveat (ribbon labels), DM Sans (body),
JetBrains Mono (tech tags).

Color palette (exact):
  --color-bg: #F0EDE8
  --color-amber: #F5A623
  --color-dark: #1A1A1A
  --color-card: #E8E4DE
  --color-muted: #6B6B6B
  --color-white: #FFFFFF

Follow the PRD exactly. All content is in Section 9 of the PRD — use it verbatim.
Do not generate placeholder text. Do not deviate from the colour palette. 
Build all 8 sections. Start with the design tokens and global CSS, then build
section by section in order.
```

---

*End of PRD — Version 2.0*
*Source: Resume PDF (Sajad Hussain Malla, September 2026) + Randy Fahmi visual reference*
