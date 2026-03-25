# CLAUDE.md — Biogénesis UPIIG Landing

## Proyecto
Landing page para el grupo UPIIG que asistirá al 5° Congreso Biogénesis 2026 (Emprendimiento en Biotecnología). Desplegado en Vercel, conectado a un Google Form para registro.

## Ubicación del código
```
C:\Users\aleja\Projects\biogenesis-upiig\
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js          # Landing completa (single-file)
├── package.json         # Next.js 14 + React 18 + Tailwind 3
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── .gitignore
```

## Stack
- Next.js 14 (App Router) + Tailwind CSS 3
- Fuentes: Sora (display), DM Sans (body), JetBrains Mono (datos)
- Deploy: Vercel auto-deploy desde GitHub
- Repo: github.com/AlexJarry97/biogenesis-upiig (main)

## URLs activas
- Google Form: https://forms.gle/YRHR914L2pVnuNyq9
- WhatsApp: +52 1 477 268 8815
- Airbnb ejemplo: https://www.airbnb.mx/rooms/1524047220719488575
- Congreso: https://congresobiogenesis.org
- Tickets: https://luma.com/congresobiogenesis

## Identidad visual (UIL UPIIG)
- Amarillo Innovación: #FFD700 / amber-400 (CTAs, acentos)
- Gris Técnico: #2C2C2C (nav, footer)
- Verde Bienestar: #A8D5BA
- Fondo general: slate-50 (claro, NO negro puro)
- Hero/CTA final: slate-800 (oscuro pero no negro)
- Bordes: rounded-3xl. Mobile-first obligatorio.
- Lema: "De los papers a la realidad"

## Arquitectura page.js
Single 'use client' component. Config vars al inicio (GOOGLE_FORM_URL, etc).
Secciones: Nav → Hero → Incluye → NO incluye → Agenda → Speakers → Costos (hotel + Airbnb + transporte) → Oportunidades → Pasos → CTA final → Footer.

## Contexto congreso
- 5° Congreso Biogénesis, 7-9 Mayo 2026, UVM Guadalajara Sur
- Precio público: $2,200 MXN | UPIIG 40% OFF: $1,340 MXN
- Hotel convenio: Cuádruple $3,150 | Triple $3,250 | Doble $3,450 | Sencilla $5,400
- Airbnb grupal (16 pers): ~$2,840/persona total
- Transporte León→GDL: ~3hrs, ETN ~$325, Futura ~$315

## Contexto institucional
- IPN: "La Técnica al Servicio de la Patria"
- UPIIG: Campus Guanajuato (Silao, Puerto Interior)
- UIL UPIIG: Capítulo estudiantil de emprendimiento e impacto social
- ~73% alumnos foráneos. Líder: Alejandro Jiménez

## Comandos
```bash
# Usar CMD (no PowerShell) para git — PS tiene problemas con comillas
cd C:\Users\aleja\Projects\biogenesis-upiig
npm install          # primera vez
npm run dev          # localhost:3000
git add -A && git commit -m cambio && git push origin main  # deploy auto en Vercel
```

## Notas
- Google Form tiene solo Secciones 1-2 (datos + participación). Secciones 3-4 se agregan después.
- Dos grupos WhatsApp: "Biogénesis Asistencia Normal" y "Biogénesis Participación Start up"
- 18 miembros actuales en grupo principal
