# Product Requirements Document (PRD)

## FTECH Lighting Solutions — Corporate Website

| Field            | Detail                                      |
| ---------------- | ------------------------------------------- |
| **Product Name** | FTECH Lighting Solutions Website            |
| **Domain**       | ftechlighting.com                           |
| **Company**      | FTECH Solutions Sdn Bhd                     |
| **Version**      | 1.0                                         |
| **Date**         | February 13, 2026                           |
| **Status**       | In Development                              |
| **Prepared By**  | Nexova                                      |

---

## 1. Executive Summary

FTECH Solutions Sdn Bhd is a CIDB-certified, holistic and innovative lighting solutions company headquartered in Selangor, Malaysia, operating across Malaysia and Singapore. The company specializes in commercial, industrial, residential, and architectural lighting — covering design, customization, supply, project management, installation, and after-sales support.

This document outlines the product requirements for the FTECH corporate website, which serves as the company's primary digital presence. The website showcases the company's brand identity ("Light Made Beautiful"), service offerings, project portfolio, and provides a channel for client inquiries.

---

## 2. Objectives & Goals

### 2.1 Business Objectives

- Establish a premium, professional online presence that reflects FTECH's brand positioning in the lighting industry.
- Showcase completed projects across commercial, residential, hospitality, retail, and outdoor sectors to build credibility.
- Generate qualified leads through the contact/inquiry system.
- Communicate the full spectrum of FTECH's capabilities — from conceptual design to after-sales support.

### 2.2 Product Goals

| # | Goal                         | Success Metric                                      |
|---|------------------------------|-----------------------------------------------------|
| 1 | Brand Awareness              | Increased organic traffic and search visibility      |
| 2 | Lead Generation              | Contact form submissions and inquiry volume          |
| 3 | Portfolio Showcase            | User engagement on project pages (time on page)      |
| 4 | Content Management           | Non-technical staff can update content via CMS admin |
| 5 | Performance & Responsiveness | Lighthouse score > 90; mobile-first responsive design|

---

## 3. Target Audience

| Audience Segment              | Description                                                                 |
| ----------------------------- | --------------------------------------------------------------------------- |
| **Architects & Designers**    | Professionals seeking lighting design partners for commercial/residential projects |
| **Property Developers**       | Companies requiring end-to-end lighting solutions for new developments       |
| **Corporate Clients**         | Businesses needing office, showroom, or industrial facility lighting         |
| **Government & Institutional**| Public sector bodies (parliamentary complexes, educational institutions, libraries) |
| **Hospitality & Retail**      | Hotels, showrooms, and retail outlets requiring bespoke lighting solutions   |
| **General Inquirers**         | Visitors exploring FTECH's capabilities for potential projects               |

---

## 4. Tech Stack & Architecture

### 4.1 Frontend

| Technology       | Version   | Purpose                                  |
| ---------------- | --------- | ---------------------------------------- |
| Next.js          | 16.1.6    | React framework (SSR, SSG, routing)      |
| React            | 19.2.3    | UI component library                     |
| TypeScript       | 5.x       | Type-safe development                    |
| Tailwind CSS     | 4.x       | Utility-first CSS framework              |
| SASS             | 1.97.3    | Advanced CSS preprocessing               |
| Sharp            | 0.34.5    | Server-side image optimization           |

### 4.2 Backend & CMS

| Technology       | Version   | Purpose                                  |
| ---------------- | --------- | ---------------------------------------- |
| Payload CMS      | 3.74.0    | Headless content management system       |
| SQLite           | —         | Embedded file-based database             |
| Lexical Editor   | —         | Rich text editor for CMS content         |
| REST API         | Auto-gen  | CRUD endpoints at `/api/[...slug]`       |
| GraphQL API      | Auto-gen  | Query endpoint at `/api/graphql`         |

### 4.3 Deployment

| Component        | Detail                                       |
| ---------------- | -------------------------------------------- |
| Hosting          | Vercel                                       |
| Runtime          | Node.js 20+                                  |
| Database         | SQLite (file-based, embedded in project)     |
| Static Assets    | Served from `/public`                        |
| Image CDN        | Next.js Image Optimization + Unsplash remote |

---

## 5. Information Architecture & Sitemap

```
ftechlighting.com
├── / ............................ Home (Landing Page)
├── /about ....................... About Us
├── /services .................... Services & Solutions
├── /projects .................... Project Portfolio
├── /contact ..................... Contact & Inquiry
└── /admin ....................... CMS Admin Panel (internal)
    ├── /admin/collections/users
    ├── /admin/collections/pages
    ├── /admin/collections/projects
    ├── /admin/collections/services
    ├── /admin/collections/company-info
    ├── /admin/collections/locations
    └── /admin/collections/media
```

---

## 6. Feature Requirements

### 6.1 Home Page (`/`)

| ID      | Requirement                                                                 | Priority |
| ------- | --------------------------------------------------------------------------- | -------- |
| HOME-01 | Curtain reveal animation on initial page load                               | High     |
| HOME-02 | Accordion-based hero section with 5 panels (Welcome, About, Services, Projects, Contact) | High |
| HOME-03 | Desktop video background with poster fallback                               | High     |
| HOME-04 | Mobile-optimized static hero image background                               | High     |
| HOME-05 | Scroll indicator animation to guide user interaction                        | Medium   |
| HOME-06 | Smooth CSS transitions and easing animations across panels                  | Medium   |
| HOME-07 | Privacy/cookie consent popup (appears after 2s delay, persists via localStorage) | High |
| HOME-08 | Each panel links/navigates to the respective full page                      | High     |

### 6.2 About Page (`/about`)

| ID       | Requirement                                                                | Priority |
| -------- | -------------------------------------------------------------------------- | -------- |
| ABOUT-01 | Hero section with full-width background image                              | High     |
| ABOUT-02 | Editorial section with company narrative and story                         | High     |
| ABOUT-03 | Glass-morphism insight cards displaying Vision, Mission, and Company Values | High     |
| ABOUT-04 | Dynamic tabbed component showcasing 6 core competencies                    | High     |
| ABOUT-05 | Core competencies: Design, Customization, Supply, Project Management, Testing & Commissioning, After Sales | High |
| ABOUT-06 | Highlight CIDB certification and licensed professional entity status        | Medium   |
| ABOUT-07 | Footer CTA section with navigation to next page                            | Medium   |

### 6.3 Services Page (`/services`)

| ID       | Requirement                                                                | Priority |
| -------- | -------------------------------------------------------------------------- | -------- |
| SERV-01  | Mask hero section with title text overlay                                  | High     |
| SERV-02  | **Core Competencies section** (6 items) with strip-expand hover interaction | High    |
| SERV-03  | **Services & Solutions section** (5 items) with accordion-expand panels    | High     |
| SERV-04  | Each service displays capabilities listing                                 | High     |
| SERV-05  | Service categories: Conceptual Lighting Design, Bespoke Customization, Architectural Lighting, Commercial & Residential Lighting, Design & Installation | High |
| SERV-06  | Image backgrounds for each accordion panel                                 | Medium   |
| SERV-07  | Footer CTA section                                                         | Medium   |

### 6.4 Projects Page (`/projects`)

| ID       | Requirement                                                                | Priority |
| -------- | -------------------------------------------------------------------------- | -------- |
| PROJ-01  | Slice hero section with page title                                         | High     |
| PROJ-02  | Diagonal section layout for each project card                              | High     |
| PROJ-03  | Display 10 featured projects with metadata                                 | High     |
| PROJ-04  | Project metadata: name, location, scope, completion year, category         | High     |
| PROJ-05  | Project categories: Commercial, Residential, Hospitality, Retail, Outdoor  | High     |
| PROJ-06  | High-quality project imagery for each entry                                | High     |
| PROJ-07  | Footer CTA section                                                         | Medium   |

**Featured Projects:**

| # | Project Name                   | Category     | Location              | Year |
|---|--------------------------------|--------------|-----------------------|------|
| 1 | Aria KLCC                      | Residential  | Kuala Lumpur           | 2019 |
| 2 | Menara Hap Seng 3              | Commercial   | Kuala Lumpur           | —    |
| 3 | Mercedes Showroom              | Retail       | Puchong, Selangor      | —    |
| 4 | Autohaus Setia Alam            | Retail       | Setia Alam, Selangor   | —    |
| 5 | Sime Darby                     | Commercial   | Singapore              | —    |
| 6 | Akasa Cheras                   | Outdoor      | Cheras South, Selangor | —    |
| 7 | One @ Changi City              | Commercial   | Singapore              | —    |
| 8 | CMC Materials                  | Commercial   | Singapore              | —    |
| 9 | Hap Seng Industrial Park       | Commercial   | Selangor               | —    |
| 10| Singapore Botanic Gardens      | Outdoor      | Singapore              | —    |

### 6.5 Contact Page (`/contact`)

| ID       | Requirement                                                                | Priority |
| -------- | -------------------------------------------------------------------------- | -------- |
| CONT-01  | Contact hero section                                                       | High     |
| CONT-02  | Location cards grid displaying office details                              | High     |
| CONT-03  | Contact inquiry form with fields: Name (required), Email (required), Project Type/Interest (required) | High |
| CONT-04  | Client-side form validation                                                | High     |
| CONT-05  | Form submission handling (currently placeholder — requires backend integration) | High |
| CONT-06  | Display headquarters address: 10-2, Jln USJ 9/5N, Subang Business Centre, 47600 Subang Jaya, Selangor | High |
| CONT-07  | Display contact phone: 03-8021 7905                                        | High     |

### 6.6 Global Navigation & UX

| ID       | Requirement                                                                | Priority |
| -------- | -------------------------------------------------------------------------- | -------- |
| NAV-01   | Persistent header navigation with links to all main pages                  | High     |
| NAV-02   | Mobile hamburger menu with full-screen overlay                             | High     |
| NAV-03   | Horizontal scroll navigation on desktop (wheel + touch)                    | High     |
| NAV-04   | Navigation dot indicators for horizontal scroll sections                   | Medium   |
| NAV-05   | Arrow navigation for horizontal scroll sections                            | Medium   |
| NAV-06   | Cross-page boundary navigation (scroll past end → next page)               | Medium   |
| NAV-07   | Mobile fallback to traditional vertical scrolling                          | High     |

### 6.7 CMS Admin Panel (`/admin`)

| ID       | Requirement                                                                | Priority |
| -------- | -------------------------------------------------------------------------- | -------- |
| CMS-01   | User authentication with role-based access (Admin, Editor)                 | High     |
| CMS-02   | Manage **Projects** collection (CRUD, image galleries, categorization)     | High     |
| CMS-03   | Manage **Services** collection (CRUD, features, descriptions)              | High     |
| CMS-04   | Manage **Pages** collection with dynamic sections (Text, Gallery, CTA, Accordion, Tabs) | High |
| CMS-05   | Manage **Company Info** singleton (name, tagline, logos, social links, vision, mission, values, stats, certifications) | High |
| CMS-06   | Manage **Locations** collection (address, contact, coordinates, maps)      | High     |
| CMS-07   | **Media** library for image/video uploads with alt text (stored in `/public/uploads`) | High |
| CMS-08   | Draft/Published status workflow for Projects, Services, and Pages          | Medium   |
| CMS-09   | Rich text editing via Lexical editor                                       | High     |
| CMS-10   | REST API auto-generated for all collections                                | High     |
| CMS-11   | GraphQL API endpoint available                                             | Low      |

---

## 7. Data Model (CMS Collections)

### 7.1 Users

| Field   | Type    | Required | Description                |
| ------- | ------- | -------- | -------------------------- |
| email   | Email   | Yes      | Login email                |
| name    | Text    | Yes      | Display name               |
| role    | Select  | Yes      | Admin or Editor            |

### 7.2 Projects

| Field          | Type         | Required | Description                          |
| -------------- | ------------ | -------- | ------------------------------------ |
| name           | Text         | Yes      | Project name                         |
| slug           | Text         | Yes      | URL slug (auto-generated)            |
| category       | Select       | Yes      | Commercial / Residential / Hospitality / Retail / Outdoor |
| location       | Text         | No       | Project location                     |
| client         | Text         | No       | Client name                          |
| year           | Text         | No       | Completion year                      |
| description    | Rich Text    | No       | Project description                  |
| featuredImage  | Upload       | Yes      | Primary project image                |
| gallery        | Array        | No       | Additional images with captions      |
| relatedServices| Relationship | No       | Links to Services collection         |
| featured       | Checkbox     | No       | Featured project flag                |
| order          | Number       | No       | Display sort order                   |
| status         | Select       | Yes      | Draft / Published                    |

### 7.3 Services

| Field          | Type      | Required | Description                          |
| -------------- | --------- | -------- | ------------------------------------ |
| name           | Text      | Yes      | Service name                         |
| slug           | Text      | Yes      | URL slug                             |
| category       | Select    | Yes      | Core Competencies / Lighting Solutions |
| shortDescription | Text    | No       | Brief summary                        |
| fullDescription | Rich Text | No      | Detailed description                 |
| icon           | Upload    | No       | Service icon                         |
| featuredImage  | Upload    | No       | Banner image                         |
| gallery        | Array     | No       | Service gallery with captions        |
| features       | Array     | No       | Title + description pairs            |
| order          | Number    | No       | Display sort order                   |
| status         | Select    | Yes      | Draft / Published                    |

### 7.4 Company Info

| Field          | Type      | Required | Description                          |
| -------------- | --------- | -------- | ------------------------------------ |
| companyName    | Text      | Yes      | Company name                         |
| tagline        | Text      | No       | Brand tagline                        |
| logo           | Upload    | No       | Standard logo                        |
| logoWhite      | Upload    | No       | White variant logo                   |
| contactEmail   | Email     | No       | Primary email                        |
| contactPhone   | Text      | No       | Primary phone                        |
| whatsApp       | Text      | No       | WhatsApp number                      |
| socialMedia    | Group     | No       | Instagram, LinkedIn, Facebook URLs   |
| aboutShort     | Text      | No       | Short company description            |
| aboutFull      | Rich Text | No       | Full company description             |
| vision         | Text      | No       | Vision statement                     |
| mission        | Text      | No       | Mission statement                    |
| values         | Array     | No       | Company values list                  |
| stats          | Array     | No       | Label, value, suffix triplets        |
| certifications | Array     | No       | Certification entries                |

### 7.5 Locations

| Field          | Type      | Required | Description                          |
| -------------- | --------- | -------- | ------------------------------------ |
| city           | Text      | Yes      | City name                            |
| country        | Text      | Yes      | Country name                         |
| isHQ           | Checkbox  | No       | Headquarters flag                    |
| address        | Group     | Yes      | Street, building, floor, postal code |
| contact        | Group     | No       | Phone, email, WhatsApp               |
| coordinates    | Group     | No       | Latitude, longitude                  |
| googleMapsEmbed| Code      | No       | Maps iframe embed                    |
| order          | Number    | No       | Display sort order                   |

### 7.6 Media

| Field     | Type    | Required | Description                    |
| --------- | ------- | -------- | ------------------------------ |
| file      | Upload  | Yes      | Image or video file            |
| alt       | Text    | Yes      | Alt text for accessibility     |
| caption   | Text    | No       | Optional caption               |

---

## 8. Design & UX Requirements

### 8.1 Brand Identity

| Element         | Specification                                           |
| --------------- | ------------------------------------------------------- |
| **Tagline**     | "Light Made Beautiful"                                  |
| **Primary Color** | `#820000` — Deep Burgundy                             |
| **Secondary**   | `#2a0a0a` — Dark Burgundy                               |
| **Accent**      | `#87181a` — Accent Burgundy                             |
| **Background**  | `#FBF1E5` — Light Beige                                 |
| **Text Dark**   | `#1a1a1a`                                               |
| **Text Secondary** | `#4a4a4a`                                            |
| **Typography**  | Helvetica Neue, Helvetica, Arial (sans-serif)           |
| **Text Style**  | Uppercase headers with generous letter-spacing           |

### 8.2 Animation & Motion

| Element              | Specification                                       |
| -------------------- | --------------------------------------------------- |
| Transition Duration  | 0.3s – 0.8s depending on element                    |
| Easing Functions     | Custom cubic-bezier curves (smooth, expo, quint, back) |
| Curtain Reveal       | Full-screen curtain animation on home page load     |
| Accordion Transitions| Smooth width/height expand/collapse                 |
| Hover Effects        | Strip expand, opacity shifts, scale transforms      |

### 8.3 Responsive Design

| Breakpoint | Behavior                                                    |
| ---------- | ----------------------------------------------------------- |
| Desktop    | Horizontal scroll navigation, video backgrounds, full animations |
| Mobile (< 768px) | Vertical scrolling, static image backgrounds, hamburger menu, simplified layouts |

---

## 9. Non-Functional Requirements

### 9.1 Performance

| Requirement                | Target                                        |
| -------------------------- | --------------------------------------------- |
| Lighthouse Performance     | > 90                                          |
| First Contentful Paint     | < 1.5s                                        |
| Largest Contentful Paint   | < 2.5s                                        |
| Image Optimization         | Sharp + Next.js Image (lazy loading, responsive srcsets) |
| Bundle Size                | Minimized via React Compiler + tree shaking    |

### 9.2 SEO

| Requirement                | Implementation                                |
| -------------------------- | --------------------------------------------- |
| Meta Tags                  | Title, description, keywords on all pages     |
| OpenGraph                  | OG tags for social media sharing              |
| Twitter Cards              | Twitter card metadata                         |
| Semantic HTML              | Proper heading hierarchy (h1–h6)              |
| Structured Data            | Schema.org markup (recommended)               |
| Sitemap                    | Auto-generated via Next.js                    |

### 9.3 Accessibility

| Requirement                | Standard                                      |
| -------------------------- | --------------------------------------------- |
| Alt Text                   | Required on all media uploads                 |
| Keyboard Navigation        | All interactive elements reachable via keyboard |
| Color Contrast             | WCAG 2.1 AA minimum                          |
| Screen Reader Support      | Semantic HTML + ARIA labels where needed       |

### 9.4 Security

| Requirement                | Implementation                                |
| -------------------------- | --------------------------------------------- |
| Auth                       | Payload CMS user authentication (email/password) |
| Environment Secrets        | `PAYLOAD_SECRET` for encryption (must be changed for production) |
| Input Validation           | Client-side + server-side form validation     |
| HTTPS                      | Enforced via Vercel deployment                |
| Admin Access               | Role-based (Admin / Editor)                   |

### 9.5 Browser Support

| Browser         | Version              |
| --------------- | -------------------- |
| Chrome          | Latest 2 versions    |
| Firefox         | Latest 2 versions    |
| Safari          | Latest 2 versions    |
| Edge            | Latest 2 versions    |
| Mobile Safari   | iOS 15+              |
| Chrome Android  | Latest 2 versions    |

---

## 10. Open Items & Future Considerations

| ID   | Item                                                            | Status       |
| ---- | --------------------------------------------------------------- | ------------ |
| OI-1 | **Contact form backend integration** — Currently logs to console; needs API endpoint for email delivery or CRM integration | To Do |
| OI-2 | **Firebase integration** — Firebase debug log present but no active integration detected; clarify if Firebase Hosting or other services are planned | To Clarify |
| OI-3 | **Google Maps integration** — Location schema supports embed codes but not yet rendered on contact page | To Do |
| OI-4 | **Analytics** — No Google Analytics, Plausible, or similar tracking detected | To Do |
| OI-5 | **Individual project detail pages** — Currently projects are displayed as sections; consider dedicated `/projects/[slug]` pages | Recommended |
| OI-6 | **Individual service detail pages** — Consider dedicated `/services/[slug]` pages for SEO | Recommended |
| OI-7 | **WhatsApp integration** — Company info stores WhatsApp number; consider adding click-to-chat widget | Recommended |
| OI-8 | **Social media links** — Schema supports Instagram, LinkedIn, Facebook but not rendered in footer/navigation | To Do |
| OI-9 | **Multi-language support** — Given Malaysia/Singapore operations, consider Bahasa Melayu & Chinese translations | Future |
| OI-10| **Blog/Insights section** — Content marketing for SEO and thought leadership | Future |
| OI-11| **Environment variable hardening** — Replace default `PAYLOAD_SECRET` with a strong production key | Critical |
| OI-12| **Legacy static HTML files** — Root-level `.html` files (index.html, about.html, contact.html) appear to be legacy; confirm and remove if unused | To Clarify |

---

## 11. Glossary

| Term             | Definition                                                      |
| ---------------- | --------------------------------------------------------------- |
| **CIDB**         | Construction Industry Development Board (Malaysia)              |
| **CMS**          | Content Management System                                       |
| **SSR**          | Server-Side Rendering                                           |
| **SSG**          | Static Site Generation                                          |
| **Payload CMS**  | Open-source headless CMS built with TypeScript                  |
| **Lexical**      | Meta's extensible rich text editor framework                    |
| **Horizontal Scroll** | Desktop UX pattern where pages scroll left-to-right instead of top-to-bottom |
| **Glass-morphism** | UI design trend using frosted-glass translucent card effects  |
| **Bespoke**      | Custom-made, tailored to specific client requirements           |

---

*This document is a living artifact and should be updated as the project evolves.*
