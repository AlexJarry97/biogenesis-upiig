# UI Aesthetic Polish — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace emojis with Lucide SVG icons, redesign speaker cards, add hero dot-grid texture, section dividers, and step connectors in `app/page.js`.

**Architecture:** All changes are confined to a single `'use client'` React component file (`app/page.js`). New `lucide-react` dependency provides tree-shakeable SVG icons. Two new file-level constants (`TAG_COLORS`, `IconBox`) are added before the `Home` component.

**Tech Stack:** Next.js 14 App Router, Tailwind CSS 3, `lucide-react` (new), React 18 named imports

---

## Chunk 1: Setup + Icon Sections

### Task 1: Install lucide-react + update imports

**Files:**
- Modify: `package.json` (via npm)
- Modify: `app/page.js:2` — add Lucide imports + Fragment

- [ ] **Step 1: Install the dependency**

```bash
npm install lucide-react
```

Expected: `added 1 package` (or similar). Verify `lucide-react` appears under `dependencies` in `package.json`.

- [ ] **Step 2: Update the React import line to include Fragment + add Lucide imports**

In `app/page.js`, replace line 2:

```js
// Before
import { useState } from 'react';

// After
import { useState, Fragment } from 'react';
import { Mic, Coffee, FileText, Rocket, Image, Users, BedDouble, Bus, Utensils, House, Lightbulb, AlertTriangle, ArrowRight, PartyPopper } from 'lucide-react';
```

`Fragment` is required for Task 7 where the step map returns two sibling elements per iteration. All 14 Lucide icons are imported up-front.

- [ ] **Step 3: Add TAG_COLORS constant and IconBox component before `export default function Home()`**

In `app/page.js`, insert after the `const Chev = ...` block (after line 37, before `export default function Home()`):

```jsx
const TAG_COLORS = {
  "Investigación": "#8b5cf6",
  "Inversión":     "#f59e0b",
  "Industria":     "#10b981",
  "Gobernanza":    "#0ea5e9",
  "Bioplásticos":  "#14b8a6",
  "DeepTech":      "#6366f1",
  "Innovación":    "#f97316"
}

const IconBox = ({ icon: Icon, color }) => (
  <div aria-hidden="true" style={{
    width: 52, height: 52, borderRadius: 14,
    background: `${color}18`, border: `1px solid ${color}35`,
    boxShadow: `0 0 14px ${color}20`,
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
  }}>
    <Icon size={22} color={color} strokeWidth={1.75} />
  </div>
)
```

`aria-hidden="true"` is required — the icon is decorative and adjacent text already describes the meaning.

- [ ] **Step 4: Verify dev server starts clean**

```bash
npm run dev
```

Expected: server starts on port 3000 with no import/compilation errors. Open browser to verify page still renders.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json app/page.js
git commit -m "feat: add lucide-react, IconBox component, TAG_COLORS constant"
```

---

### Task 2: Replace icons in "Qué incluye"

**Files:**
- Modify: `app/page.js` — the 6-item grid in the `{/* QUÉ INCLUYE */}` section (around line 97)

- [ ] **Step 1: Replace the data array and card JSX in the "Qué incluye" grid**

Find the block starting with `{[{icon:"🎤"` inside the `<div className="grid grid-cols-2 md:grid-cols-3 gap-4">` and replace the entire `.map(...)` expression with:

```jsx
{[
  { icon: Mic,      color: "#f59e0b", t: "Conferencias y paneles", d: "Speakers internacionales" },
  { icon: Coffee,   color: "#10b981", t: "Coffee break diario",    d: "Networking informal" },
  { icon: FileText, color: "#8b5cf6", t: "Constancia UVM",         d: "Con aval institucional" },
  { icon: Rocket,   color: "#fbbf24", t: "Startup Showcase",       d: "Pitch ante inversores" },
  { icon: Image,    color: "#ec4899", t: "Concurso de carteles",   d: "Publica en CIBIOS-BUAP" },
  { icon: Users,    color: "#0ea5e9", t: "Networking",             d: "+350 asistentes biotech" },
].map((x, i) => (
  <div key={i} className="bg-white shadow-sm hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-3"><IconBox icon={x.icon} color={x.color} /></div>
    <div className="font-extrabold text-sm text-slate-800 mb-1">{x.t}</div>
    <div className="text-xs text-slate-500">{x.d}</div>
  </div>
))}
```

Changes from original: `bg-slate-50` → `bg-white shadow-sm`, added `hover:shadow-lg`, replaced `<div className="text-3xl mb-3">{x.icon}</div>` with `<div className="mb-3"><IconBox .../></div>`.

- [ ] **Step 2: Visual check**

Open browser, scroll to "Tu boleto incluye" section. Each of the 6 cards should show a colored semi-transparent icon box with SVG icon instead of an emoji. On hover the card should lift and shadow intensify.

- [ ] **Step 3: Commit**

```bash
git add app/page.js
git commit -m "feat: replace emoji icons with Lucide SVGs in Qué incluye"
```

---

### Task 3: Replace icons in "Qué NO incluye"

**Files:**
- Modify: `app/page.js` — the 3-item grid in the `{/* QUÉ NO INCLUYE */}` section (around line 116)

- [ ] **Step 1: Replace the data array and card JSX in the "NO incluye" grid**

Find the block starting with `{[{icon:"🏨"` inside the `<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">` and replace with:

```jsx
{[
  { icon: BedDouble, color: "#f43f5e", t: "Hospedaje",  d: "El hotel se paga aparte. Ve más abajo las opciones con convenio y Airbnb." },
  { icon: Bus,       color: "#f43f5e", t: "Transporte", d: "León → Guadalajara (~3 hrs). Estamos gestionando transporte grupal UPIIG." },
  { icon: Utensils,  color: "#f43f5e", t: "Comidas",    d: "Solo incluye coffee break. El hotel con convenio SÍ incluye desayuno." },
].map((x, i) => (
  <div key={i} className="bg-white rounded-3xl p-6 border border-rose-100">
    <div className="mb-3"><IconBox icon={x.icon} color={x.color} /></div>
    <div className="font-extrabold text-sm text-slate-800 mb-1">{x.t}</div>
    <div className="text-xs text-slate-500 leading-relaxed">{x.d}</div>
  </div>
))}
```

All three icons use `#f43f5e` (rose) to stay consistent with the `bg-rose-50` section background.

- [ ] **Step 2: Commit**

```bash
git add app/page.js
git commit -m "feat: replace emoji icons with Lucide SVGs in Qué NO incluye"
```

---

### Task 4: Redesign speaker cards

**Files:**
- Modify: `app/page.js` — the SPEAKERS `.map()` block (around lines 163–174)

- [ ] **Step 1: Replace the speaker card JSX inside the `.map()` block**

Find `{SPEAKERS.map((s, idx) => (` and replace the entire map expression with:

```jsx
{SPEAKERS.map((s, idx) => {
  const c = TAG_COLORS[s.tag] || "#94a3b8";
  return (
    <div key={idx} className="bg-white hover:bg-amber-50 rounded-3xl p-5 border border-slate-100 hover:border-amber-200 transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-lg">
      <div className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center font-extrabold text-white text-base"
        style={{ background: `linear-gradient(135deg, ${c}cc, ${c})` }}>
        {s.i}
      </div>
      <span className="inline-block rounded-full px-2 py-0.5 mb-2 text-xs font-bold"
        style={{ background: `${c}18`, color: c }}>
        {s.tag}
      </span>
      <div className="font-extrabold text-sm text-slate-800 leading-tight mb-1">{s.name}</div>
      <div className="text-slate-400 text-xs leading-snug">{s.role}</div>
    </div>
  );
})}
```

Changes: `rounded-2xl` → `rounded-full` avatar, gradient uses tag color from `TAG_COLORS`, tag badge moved above name with matching color, added `hover:shadow-lg`.

- [ ] **Step 2: Visual check**

Scroll to "Quién estará ahí". Each card should show a circular colored avatar (gradient from TAG_COLORS), a colored pill badge for the tag, speaker name, and role. No more amber/violet generic gradient.

- [ ] **Step 3: Commit**

```bash
git add app/page.js
git commit -m "feat: redesign speaker cards with color-coded avatar and tag badge"
```

---

## Chunk 2: Hero + Separators + Steps + Remaining Icons

### Task 5: Hero dot-grid texture

**Files:**
- Modify: `app/page.js:62` — the HERO `<section>` opening tag

- [ ] **Step 1: Replace hero section's inline background style**

Find (line 62):
```jsx
<section className="relative overflow-hidden pt-24 pb-20 px-4" style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)" }}>
```

Replace with:
```jsx
<section className="relative overflow-hidden pt-24 pb-20 px-4" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)", backgroundSize: "24px 24px, cover" }}>
```

Important: both gradient layers are in a **single** `background` string separated by a comma. `backgroundSize` applies `24px 24px` to the dot layer and `cover` to the gradient base. Using separate `background` and `backgroundImage` properties would cause one to overwrite the other — this single-property approach avoids that CSS shorthand conflict.

- [ ] **Step 2: Visual check**

Hero should show a subtle dot grid pattern over the dark gradient background. The dots are 1px white at 7% opacity on a 24×24px grid.

- [ ] **Step 3: Commit**

```bash
git add app/page.js
git commit -m "feat: add dot-grid texture to hero section"
```

---

### Task 6: Section dividers

**Files:**
- Modify: `app/page.js` — 4 insertion points between section closing and opening tags

- [ ] **Step 1: Add amber glow divider between HERO and QUÉ INCLUYE**

Find the `</section>` closing tag of the HERO section (before `{/* QUÉ INCLUYE */}`) and insert immediately after it:

```jsx
<div style={{ height: 2, background: "linear-gradient(90deg, transparent, #fbbf2440, transparent)" }} />
```

- [ ] **Step 2: Add slate divider between QUÉ INCLUYE and QUÉ NO INCLUYE**

Find the `</section>` closing tag of the "Qué incluye" section (before `{/* QUÉ NO INCLUYE */}`) and insert after it:

```jsx
<div style={{ height: 1, background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />
```

- [ ] **Step 3: Add slate divider between SPEAKERS and COSTOS**

Find the `</section>` closing tag of the SPEAKERS section (before `{/* COSTOS */}`) and insert after it:

```jsx
<div style={{ height: 1, background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />
```

- [ ] **Step 4: Add slate divider between PARTICIPA and PASOS**

Find the `</section>` closing tag of the PARTICIPA section (before `{/* PASOS */}`) and insert after it:

```jsx
<div style={{ height: 1, background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />
```

- [ ] **Step 5: Visual check**

Scrolling the full page, you should see:
- A faint amber glow line at the dark→light transition after the hero
- Thin slate fade-in/fade-out lines at 3 other section breaks

- [ ] **Step 6: Commit**

```bash
git add app/page.js
git commit -m "feat: add section dividers between hero and content sections"
```

---

### Task 7: Step connectors with ArrowRight / PartyPopper

**Files:**
- Modify: `app/page.js` — the PASOS `.map()` block (around lines 319–331)

- [ ] **Step 1: Replace the steps `.map()` block**

Find the `{[...].map((s, i) => (` block in the `{/* PASOS */}` section and replace the entire expression with:

```jsx
{[
  { n:"01", t:"Llena el formulario",  d:"Regístrate con tus datos y preferencias.",              c:"#f59e0b" },
  { n:"02", t:"Te agregamos al grupo", d:"WhatsApp según tu participación.",                      c:"#8b5cf6" },
  { n:"03", t:"Transferencia grupal", d:"$1,340 × persona. Te pasamos datos bancarios.",          c:"#10b981" },
  { n:"04", t:"Recibe tu código-cupón", d:"Registro en luma.com/congresobiogenesis.",             c:"#f59e0b" },
  { n:"05", t:"¡Guadalajara!",         d:"Llega el 6 de mayo. 3 días de innovación.",            c:"#ec4899" },
].map((s, i) => (
  <Fragment key={i}>
    <div className="bg-slate-50 rounded-3xl p-5 flex items-start gap-5 border border-slate-100 hover:bg-amber-50/30 transition-all">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-mono font-bold text-lg"
        style={{ background:`${s.c}15`, color:s.c, border:`1px solid ${s.c}30` }}>{s.n}
      </div>
      <div>
        <div className="font-extrabold text-slate-800">{s.t}</div>
        <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
          {s.d}
          {i < 4
            ? <ArrowRight size={14} color="#f59e0b" className="flex-shrink-0 ml-1" />
            : <PartyPopper size={14} color="#ec4899" className="flex-shrink-0 ml-1" />
          }
        </div>
      </div>
    </div>
    {i < 4 && (
      <div className="flex gap-5 px-5">
        <div className="w-12 flex justify-center">
          <div className="w-0.5 h-3 bg-slate-200 rounded" />
        </div>
      </div>
    )}
  </Fragment>
))}
```

`Fragment` (imported in Task 1) is required because the map returns two sibling elements per iteration (card + connector). The connector `div` aligns with the number box (same `w-12` + `px-5` offset) and is only rendered for steps 1–4.

- [ ] **Step 2: Visual check**

Scroll to "¿Cómo me registro?". Steps 1–4 should show a small amber arrow icon inline after the description text. Step 5 shows a pink party popper. A thin 2px vertical line appears below the step number between consecutive steps.

- [ ] **Step 3: Commit**

```bash
git add app/page.js
git commit -m "feat: add step connectors and ArrowRight/PartyPopper icons to registration steps"
```

---

### Task 8: Remaining icon replacements

**Files:**
- Modify: `app/page.js` — 4 locations in the COSTOS section

- [ ] **Step 1: Replace 🏡 in Airbnb card**

Find (in the Opción B Airbnb card, around line 208):
```jsx
<div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-3xl flex-shrink-0">🏡</div>
```

Replace with:
```jsx
<div className="flex-shrink-0"><IconBox icon={House} color="#10b981" /></div>
```

Note: use `House`, not `Home` — `Home` is a deprecated alias in lucide-react v1+.

- [ ] **Step 2: Replace 🚌 in transport accordion button**

Find (transport accordion button, around line 243):
```jsx
<div className="flex items-center gap-3"><span className="text-xl">🚌</span>
```

Replace with:
```jsx
<div className="flex items-center gap-3"><Bus size={20} color="#64748b" />
```

- [ ] **Step 3: Replace ⚠️ in Airbnb warning block**

Find (inside the Airbnb comparativa, around line 225):
```jsx
<div className="font-bold text-sm text-amber-800 mb-2">⚠️ Consideraciones</div>
```

Replace with:
```jsx
<div className="font-bold text-sm text-amber-800 mb-2 flex items-center gap-1"><AlertTriangle size={14} color="#f59e0b" /> Consideraciones</div>
```

- [ ] **Step 4: Replace 💡 in transport tip**

Find (transport tip block, around line 258):
```jsx
<div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-700 font-medium">💡 Estamos gestionando transporte grupal UPIIG. Regístrate y te avisamos.</div>
```

Replace with:
```jsx
<div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-center gap-2 text-xs text-amber-700 font-medium"><Lightbulb size={14} color="#f59e0b" className="flex-shrink-0" /> Estamos gestionando transporte grupal UPIIG. Regístrate y te avisamos.</div>
```

- [ ] **Step 5: Final visual check — full page scroll**

Open `http://localhost:3000` and scroll the entire page:
- [ ] Hero: subtle dot grid visible
- [ ] "Qué incluye": 6 colored SVG icon boxes (no emojis)
- [ ] "Qué NO incluye": 3 rose-colored SVG icon boxes (no emojis)
- [ ] Dividers: faint lines at hero→content and 3 section transitions
- [ ] Speakers: circular colored gradient avatars + tag badge pills
- [ ] Airbnb card: House SVG icon in emerald IconBox
- [ ] Transport button: Bus SVG icon (no emoji)
- [ ] Transport tip: Lightbulb SVG icon inline
- [ ] Airbnb warning: AlertTriangle SVG icon inline
- [ ] Registration steps: ArrowRight on steps 1–4, PartyPopper on step 5, connector lines between steps

- [ ] **Step 6: Commit + push**

```bash
git add app/page.js
git commit -m "feat: replace remaining emoji icons (House, Bus, Lightbulb, AlertTriangle)"
git push
```
