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
  <div style={{
    width: 52, height: 52, borderRadius: 14,
    background: `${color}18`, border: `1px solid ${color}35`,
    boxShadow: `0 0 14px ${color}20`,
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
  }}>
    <Icon size={22} color={color} strokeWidth={1.75} />
  </div>
)
```

### 3. Reemplazo de iconos en "Qué incluye"

| Emoji | Componente Lucide | Color hex |
|-------|-------------------|-----------|
| 🎤 | `Mic` | `#f59e0b` |
| ☕ | `Coffee` | `#10b981` |
| 📜 | `FileText` | `#8b5cf6` |
| 🚀 | `Rocket` | `#fbbf24` |
| 🖼️ | `Image` | `#ec4899` |
| 🤝 | `Users` | `#0ea5e9` |

Cambio visual en tarjetas: `bg-slate-50` → `bg-white shadow-sm`, hover más pronunciado (`shadow-lg`). El `IconBox` se posiciona arriba a la izquierda.

### 4. Reemplazo de iconos en "Qué NO incluye"

| Emoji | Componente Lucide | Color hex |
|-------|-------------------|-----------|
| 🏨 | `BedDouble` | `#f43f5e` |
| 🚌 | `Bus` | `#f43f5e` |
| 🍽️ | `Utensils` | `#f43f5e` |

Misma estructura, tono rose consistente con el fondo `bg-rose-50` ya existente.

### 5. Speaker cards — rediseño

**Nuevo tag-color mapping:**
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
- Avatar circular 64px con fondo gradiente del color del tag, iniciales en blanco `font-bold`
- Badge del tag centrado bajo el avatar (`rounded-full`, `text-xs`, color del tag)
- Nombre: `font-extrabold text-sm text-slate-800` centrado
- Rol: `text-xs text-slate-400 leading-snug text-center` (permite dos líneas)
- Hover: `shadow-lg border-amber-200 -translate-y-1`

### 6. Hero — dot grid pattern

Agregar textura sutil de puntos al fondo oscuro del hero:

```jsx
style={{
  background: "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)",
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
  backgroundSize: "24px 24px"
}}
```

El `background` sólido ya existente permanece como fallback. Solo la imagen de puntos se agrega encima.

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

- Línea vertical conectora entre pasos: `border-l-2 border-dashed border-slate-200` desde el contenedor del número
- Ícono `ArrowRight` (amber, size 14) al final del texto descriptivo en pasos 1–4
- Paso 5 ("¡Guadalajara!"): ícono `PartyPopper` en lugar de flecha

### 9. Iconos restantes

| Ubicación | Emoji actual | Cambio |
|-----------|--------------|--------|
| Airbnb card | 🏡 | `Home` icon emerald en `IconBox` |
| Transporte accordion | 🚌 | `Bus` icon slate-600 |
| Tip transporte grupal | 💡 | `Lightbulb` amber |
| Warning Airbnb | ⚠️ | `AlertTriangle` amber |
| Nav 🧬 | 🧬 | **Sin cambio** — decorativo/logo |
| CTA final 🧬 | 🧬 | **Sin cambio** — decorativo |

---

## Archivos afectados

| Archivo | Tipo de cambio |
|---------|---------------|
| `package.json` | Nueva dependencia: `lucide-react` |
| `app/page.js` | Nuevo componente `IconBox`, nuevos imports Lucide, rediseño speakers, texturas, separadores |

No se crean archivos nuevos. La arquitectura single-file se mantiene.

---

## Consideraciones

- Los emojis del nav (🧬) y CTA final se mantienen — son elementos decorativos de identidad de marca, no iconos funcionales.
- El `IconBox` no tiene `hover` propio — el hover se maneja en la tarjeta contenedora, como ya está.
- El dot-grid del hero usa `backgroundImage` (no un `<div>` extra) para no añadir nodos al DOM.
- Los separadores son `<div>` de altura fija, no requieren Tailwind custom.
