# Diseño: Polish Estético UI — Biogénesis UPIIG Landing

**Fecha:** 2026-03-25
**Estado:** Aprobado
**Archivo objetivo:** `app/page.js`, `package.json`

---

## Contexto

La landing usa emojis como iconos en todas las secciones. En móvil (audiencia principal: alumnos foráneos en celular) los emojis se renderizan diferente en Android vs iOS, se ven inconsistentes y poco profesionales. Los speaker cards solo muestran iniciales de texto en un cuadrado básico. Las secciones no tienen separación visual entre ellas.

## Objetivo

Mejorar la estética visual sin cambiar el contenido ni la estructura de la landing, con foco en:
1. Iconos coherentes entre Android e iOS
2. Speaker cards con más presencia visual
3. Textura y transiciones entre secciones

---

## Cambios diseñados

### 1. Dependencia nueva

```bash
npm install lucide-react
```

Tree-shakeable. Solo los iconos importados se incluyen en el bundle.

### 2. Componente `IconBox`

Nuevo componente local en `page.js` (antes del componente `Home`):

```jsx
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

`aria-hidden="true"` porque el ícono es decorativo — el texto adyacente ya describe el significado.

### 3. Reemplazo de iconos en "Qué incluye"

| Emoji | Componente Lucide | Color hex |
|-------|-------------------|-----------|
| 🎤 | `Mic` | `#f59e0b` |
| ☕ | `Coffee` | `#10b981` |
| 📜 | `FileText` | `#8b5cf6` |
| 🚀 | `Rocket` | `#fbbf24` |
| 🖼️ | `Image` | `#ec4899` |
| 🤝 | `Users` | `#0ea5e9` |

Cambio visual en tarjetas: `bg-slate-50` → `bg-white shadow-sm`, hover más pronunciado (`shadow-lg`). El `IconBox` se posiciona arriba a la izquierda (layout existente ya es `flex` vertical, solo se intercambia el `<div className="text-3xl">` por `<IconBox />`).

### 4. Reemplazo de iconos en "Qué NO incluye"

| Emoji | Componente Lucide | Color hex |
|-------|-------------------|-----------|
| 🏨 | `BedDouble` | `#f43f5e` |
| 🚌 | `Bus` | `#f43f5e` |
| 🍽️ | `Utensils` | `#f43f5e` |

Misma estructura, tono rose consistente con el fondo `bg-rose-50` ya existente.

### 5. Speaker cards — rediseño

**Nuevo tag-color mapping (constante antes de `Home`):**
```js
const TAG_COLORS = {
  "Investigación": "#8b5cf6",
  "Inversión":     "#f59e0b",
  "Industria":     "#10b981",
  "Gobernanza":    "#0ea5e9",
  "Bioplásticos":  "#14b8a6",
  "DeepTech":      "#6366f1",
  "Innovación":    "#f97316"
}
```

**Nueva estructura por tarjeta:**
```jsx
const c = TAG_COLORS[s.tag] || "#94a3b8";
<div className="bg-white hover:bg-amber-50 rounded-3xl p-5 border border-slate-100 hover:border-amber-200 transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-lg">
  {/* Avatar circular con color del tag */}
  <div className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center font-extrabold text-white text-base"
    style={{ background: `linear-gradient(135deg, ${c}cc, ${c})` }}>
    {s.i}
  </div>
  {/* Badge del tag */}
  <span className="inline-block rounded-full px-2 py-0.5 mb-2 text-xs font-bold"
    style={{ background: `${c}18`, color: c }}>
    {s.tag}
  </span>
  {/* Nombre */}
  <div className="font-extrabold text-sm text-slate-800 leading-tight mb-1">{s.name}</div>
  {/* Rol en dos líneas */}
  <div className="text-slate-400 text-xs leading-snug">{s.role}</div>
</div>
```

Hover border es amber genérico para mantener coherencia con el resto de la landing (el color de marca es amber, no el del tag).

### 6. Hero — dot grid pattern

`background` y `backgroundImage` son la misma propiedad en CSS — usar ambos en el mismo `style` hace que el segundo sobreescriba al primero. La solución correcta es un valor `background` multi-capa con coma:

```jsx
style={{
  background: `
    radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px),
    linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)
  `,
  backgroundSize: "24px 24px, cover"
}}
```

La primera capa (puntos) se renderiza encima. La segunda (gradiente) es el fondo base. El `backgroundSize` aplica `24px 24px` a la primera capa y `cover` a la segunda.

### 7. Separadores entre secciones

**Entre hero (oscuro) y primera sección clara:**
```jsx
<div style={{ height: 2, background: "linear-gradient(90deg, transparent, #fbbf2440, transparent)" }} />
```

**Entre secciones claras:**
```jsx
<div style={{ height: 1, background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />
```

Total: ~4 separadores en la página.

### 8. Sección "Pasos de registro"

El layout actual de cada paso es `flex items-start gap-5`. El número vive en `w-12 h-12 rounded-2xl`. La línea conectora **no** va en ese div — va en el contenedor padre de cada paso como un pseudo-separador entre items, implementado así:

```jsx
// Cada paso (excepto el último) se renderiza así:
<div key={i} className="bg-slate-50 rounded-3xl p-5 flex items-start gap-5 border border-slate-100 hover:bg-amber-50/30 transition-all">
  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 font-mono font-bold text-lg"
    style={{ background:`${s.c}15`, color:s.c, border:`1px solid ${s.c}30` }}>{s.n}
  </div>
  <div>
    <div className="font-extrabold text-slate-800">{s.t}</div>
    <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
      {s.d}
      {/* Flecha solo en pasos 1-4, PartyPopper en paso 5 */}
      {i < 4
        ? <ArrowRight size={14} color="#f59e0b" className="flex-shrink-0 ml-1" />
        : <PartyPopper size={14} color="#ec4899" className="flex-shrink-0 ml-1" />
      }
    </div>
  </div>
</div>
{/* Conector visual entre pasos (no en el último) */}
{i < 4 && (
  <div className="flex gap-5 px-5">
    <div className="w-12 flex justify-center">
      <div className="w-0.5 h-3 bg-slate-200 rounded" />
    </div>
  </div>
)}
```

El conector es un `div` de 3px de alto, centrado bajo el número, fuera de la tarjeta. No requiere restructurar el layout existente.

El texto del paso cambia de `<div>` a `<div className="flex items-center gap-1">` para alinear el ícono en línea con el texto.

### 9. Iconos restantes

| Ubicación | Emoji actual | Componente Lucide | Color |
|-----------|--------------|-------------------|-------|
| Airbnb card | 🏡 | `House` | `#10b981` emerald en `IconBox` |
| Transporte accordion | 🚌 | `Bus` | `#64748b` slate-500 (raw, sin `IconBox`) |
| Tip transporte grupal | 💡 | `Lightbulb` | `#f59e0b` amber (raw, size 14) |
| Warning Airbnb | ⚠️ | `AlertTriangle` | `#f59e0b` amber (raw, size 14) |
| Nav 🧬 | 🧬 | **Sin cambio** — decorativo/logo |
| CTA final 🧬 | 🧬 | **Sin cambio** — decorativo |
| Costos 🎟️ 👥 👤 | emojis | **Sin cambio** — pequeños decorativos en selector de radio |

Nota: se usa `House` (no `Home`) ya que `Home` es un alias deprecado en lucide-react v1+.

---

## Archivos afectados

| Archivo | Tipo de cambio |
|---------|---------------|
| `package.json` | Nueva dependencia: `lucide-react` |
| `app/page.js` | Nuevo `TAG_COLORS`, nuevo `IconBox`, imports Lucide, rediseño speakers, hero texture, separadores, step connectors |

No se crean archivos nuevos. La arquitectura single-file se mantiene.

---

## Consideraciones

- Los emojis del nav (🧬) y CTA final se mantienen — son elementos decorativos de identidad de marca, no iconos funcionales.
- Los emojis del selector de costos (🎟️, 👥, 👤) se mantienen — son pequeños decorativos sin equivalente SVG natural.
- El `IconBox` lleva `aria-hidden="true"` — el texto adyacente ya describe el significado del ícono.
- El dot-grid del hero usa una sola propiedad `background` multi-capa para evitar el conflicto CSS shorthand.
- El conector de pasos es un `div` separado entre tarjetas, no modifica la estructura interna de cada paso.
- Los separadores son `<div>` de altura fija, no requieren Tailwind custom.
