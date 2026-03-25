'use client';
import { useState, Fragment } from 'react';
import { Mic, Coffee, FileText, Rocket, Image as ImageIcon, Users, BedDouble, Bus, Utensils, House, Lightbulb, AlertTriangle, ArrowRight, PartyPopper } from 'lucide-react';

const GOOGLE_FORM_URL = "https://forms.gle/YRHR914L2pVnuNyq9";
const WHATSAPP_CONTACT = "https://wa.me/5214772688815";
const AIRBNB_LINK = "https://www.airbnb.mx/rooms/1524047220719488575?adults=16&check_in=2026-05-06&check_out=2026-05-09";

const SPEAKERS = [
  { name: "Dra. Lorena Amaya", role: "Directora CIATEJ", tag: "Investigación", i: "LA" },
  { name: "Teresa de León", role: "Country Manager, GRIDX", tag: "Inversión", i: "TL" },
  { name: "Diego Ocampo", role: "VP Tecnología, Neolpharma", tag: "Industria", i: "DO" },
  { name: "Daniel Domínguez", role: "CEO Allbiotech", tag: "Gobernanza", i: "DD" },
  { name: "Victor Flores", role: "CEO Biointellectus", tag: "Bioplásticos", i: "VF" },
  { name: "Adán Ramírez", role: "CEO Greenfluidics", tag: "DeepTech", i: "AR" },
  { name: "Salvador Orozco", role: "Fondo de Fondos", tag: "Inversión", i: "SO" },
  { name: "Teresa Quintana", role: "Gob. de Jalisco", tag: "Innovación", i: "TQ" },
];

const AGENDA = [
  { day: "DÍA 1", date: "Jueves 7", title: "Ciencia y Visión", items: ["Inauguración", "Rol de la biotecnología", "Problemas sistémicos", "Coffee break ☕", "El científico emprendedor", "Pósteres y pláticas"], c: "#10b981" },
  { day: "DÍA 2", date: "Viernes 8", title: "De Paper a Startup", items: ["Startup vs PyME", "Convertir ciencia en startup", "Validación y equipo", "Coffee break ☕", "Financiamiento biotech", "Panel inversores", "Startup Showcase 🚀"], c: "#8b5cf6" },
  { day: "DÍA 3", date: "Sábado 9", title: "Escalamiento & CVCs", items: ["Escalamiento lab → industria", "Propiedad Intelectual", "Servicios clave", "Coffee break ☕", "CVCs y pilotos", "Reto corporativo", "Premiación 🏆"], c: "#f59e0b" },
];

const COSTS = [
  { label: "Solo boleto (sin hotel)", price: 1340, note: "3 días de congreso", icon: "🎟️" },
  { label: "Hotel cuádruple", price: 3150, note: "$1,340 + $1,810 hotel · 2 noches · desayuno", icon: "👥", rec: true },
  { label: "Hotel triple", price: 3250, note: "$1,340 + $1,910 hotel", icon: "👤" },
  { label: "Hotel doble", price: 3450, note: "$1,340 + $2,110 hotel", icon: "👤" },
  { label: "Hotel sencilla", price: 5400, note: "$1,340 + $4,060 hotel", icon: "👤" },
];

const Chev = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "0.3s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const TAG_COLORS = {
  "Investigación": "#8b5cf6",
  "Inversión":     "#f59e0b",
  "Industria":     "#10b981",
  "Gobernanza":    "#0ea5e9",
  "Bioplásticos":  "#14b8a6",
  "DeepTech":      "#6366f1",
  "Innovación":    "#f97316"
};

const IconBox = ({ icon: Icon, color }) => (
  <div aria-hidden="true" style={{
    width: 52, height: 52, borderRadius: 14,
    background: `${color}18`, border: `1px solid ${color}35`,
    boxShadow: `0 0 14px ${color}20`,
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
  }}>
    <Icon size={22} color={color} strokeWidth={1.75} />
  </div>
);

export default function Home() {
  const [oA, setOA] = useState(null);
  const [sC, setSC] = useState(1);
  const [sT, setST] = useState(false);
  const [sAb, setSAb] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 border-b border-slate-200/60" style={{ backdropFilter: "blur(20px)" }}>
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-lg">🧬</div>
            <div>
              <div className="font-extrabold text-sm tracking-tight text-slate-800">UIL UPIIG <span className="text-amber-500">×</span> Biogénesis</div>
              <div className="text-slate-400" style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>De los papers a la realidad</div>
            </div>
          </div>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-900 px-5 py-2 rounded-2xl font-extrabold text-xs uppercase tracking-wide transition-all hover:scale-105">Registrarme</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)", backgroundSize: "24px 24px, cover" }}>
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #fbbf24, transparent)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-extrabold text-xs uppercase tracking-widest text-amber-300">40% OFF · Exclusivo UPIIG</span>
          </div>
          <h1 className="font-extrabold tracking-tighter leading-none mb-6" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}>
            <span className="text-white">Emprendimiento en</span><br /><span className="text-amber-400">Biotecnología</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">5° Congreso Biogénesis · De paper a startup biotech · Escalamiento, industria y fondos de inversión</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-sm text-slate-300">
            <div className="flex items-center gap-2">📅 <span className="font-bold">7 – 9 Mayo 2026</span></div>
            <div className="flex items-center gap-2">📍 <span className="font-bold">UVM Guadalajara Sur</span></div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 text-slate-900 px-8 py-4 rounded-2xl font-extrabold text-base uppercase tracking-wide hover:bg-amber-300 active:scale-95 transition-all hover:scale-105" style={{ boxShadow: "0 0 30px rgba(251,191,36,0.3)" }}>Quiero ir — Registrarme →</a>
            <a href="#info" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-slate-400 border border-slate-600 px-8 py-4 rounded-2xl font-bold text-sm hover:text-white hover:border-slate-400 transition-all">Primero quiero saber más ↓</a>
          </div>
          <div className="inline-flex items-center gap-3">
            <span className="text-slate-500 line-through font-mono text-sm">$2,200</span>
            <span className="text-amber-400 font-mono font-bold text-2xl">$1,340 MXN</span>
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">Ahorras $860</span>
          </div>
        </div>
      </section>

      <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #fbbf2440, transparent)" }} />

      {/* QUÉ INCLUYE */}
      <section id="info" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-extrabold text-xs uppercase tracking-widest text-amber-500">Tu boleto incluye</span>
            <h2 className="font-extrabold text-3xl md:text-4xl text-slate-800 mt-3 tracking-tight">3 días de inmersión total</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Mic,       color: "#f59e0b", t: "Conferencias y paneles", d: "Speakers internacionales" },
              { icon: Coffee,    color: "#10b981", t: "Coffee break diario",    d: "Networking informal" },
              { icon: FileText,  color: "#8b5cf6", t: "Constancia UVM",         d: "Con aval institucional" },
              { icon: Rocket,    color: "#fbbf24", t: "Startup Showcase",       d: "Pitch ante inversores" },
              { icon: ImageIcon, color: "#ec4899", t: "Concurso de carteles",   d: "Publica en CIBIOS-BUAP" },
              { icon: Users,     color: "#0ea5e9", t: "Networking",             d: "+350 asistentes biotech" },
            ].map((x, i) => (
              <div key={i} className="bg-white shadow-sm hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3"><IconBox icon={x.icon} color={x.color} /></div>
                <div className="font-extrabold text-sm text-slate-800 mb-1">{x.t}</div>
                <div className="text-xs text-slate-500">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />

      {/* QUÉ NO INCLUYE */}
      <section className="py-16 px-4 bg-rose-50 border-y border-rose-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="font-extrabold text-xs uppercase tracking-widest text-rose-500">Importante</span>
            <h2 className="font-extrabold text-2xl text-slate-800 mt-2 tracking-tight">Tu boleto NO incluye</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-extrabold text-xs uppercase tracking-widest text-amber-500">Agenda</span>
            <h2 className="font-extrabold text-3xl text-slate-800 mt-3 tracking-tight">3 días, 3 enfoques</h2>
            <p className="text-slate-400 mt-2 text-sm">8:00 am – 3:00 pm cada día</p>
          </div>
          <div className="space-y-3">
            {AGENDA.map((d, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100" style={{ borderLeft: `4px solid ${d.c}` }}>
                <button onClick={() => setOA(oA === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono font-bold text-xs px-3 py-1 rounded-full" style={{ background: `${d.c}15`, color: d.c }}>{d.day}</span>
                      <span className="text-slate-400 text-xs">{d.date}</span>
                    </div>
                    <div className="font-extrabold text-slate-800">{d.title}</div>
                  </div>
                  <Chev open={oA === i} />
                </button>
                {oA === i && (<div className="px-5 pb-5 space-y-2">{d.items.map((item, j) => (<div key={j} className="flex items-center gap-3 text-sm text-slate-600 py-1"><div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: d.c }} />{item}</div>))}</div>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-extrabold text-xs uppercase tracking-widest text-amber-500">Speakers</span>
            <h2 className="font-extrabold text-3xl text-slate-800 mt-3 tracking-tight">Quién estará ahí</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />

      {/* COSTOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-extrabold text-xs uppercase tracking-widest text-amber-500">Inversión</span>
            <h2 className="font-extrabold text-3xl text-slate-800 mt-3 tracking-tight">¿Cuánto me sale?</h2>
            <p className="text-slate-400 mt-2 text-sm">Precio con descuento UPIIG del 40% · Grupo de 8+ personas</p>
          </div>
          <h3 className="font-extrabold text-lg text-slate-700 mb-4">🏨 Opción A: Hotel con convenio</h3>
          <p className="text-sm text-slate-500 mb-4">Holiday Inn o Hampton · 2 noches (6-8 mayo) · Desayuno incluido · 30 habitaciones</p>
          <div className="space-y-3 mb-8">
            {COSTS.map((c, i) => (
              <button key={i} onClick={() => setSC(i)} className={`w-full text-left rounded-3xl p-5 border-2 transition-all duration-300 ${sC === i ? "bg-amber-50 border-amber-300 shadow-lg shadow-amber-100/50" : "bg-white border-slate-100 hover:border-amber-200"}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${sC === i ? "border-amber-500 bg-amber-500" : "border-slate-300"}`}>{sC === i && <div className="w-2 h-2 rounded-full bg-white" />}</div>
                    <div>
                      <div className="flex items-center gap-2"><span className="font-extrabold text-sm text-slate-800">{c.icon} {c.label}</span>{c.rec && <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-bold">Más barato</span>}</div>
                      <span className="text-xs text-slate-400">{c.note}</span>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-amber-600 text-lg">${c.price.toLocaleString()}</span>
                </div>
              </button>
            ))}
          </div>

          {/* AIRBNB */}
          <h3 className="font-extrabold text-lg text-slate-700 mb-4">🏠 Opción B: Airbnb grupal (más barato)</h3>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 border-2 border-emerald-200 mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-3xl flex-shrink-0">🏡</div>
              <div className="flex-1">
                <div className="font-extrabold text-slate-800 mb-1">Casa completa cerca del metro</div>
                <div className="text-sm text-slate-600 mb-3 leading-relaxed">Rentar un Airbnb para 16 personas puede salir mucho más barato. Ejemplo: ~$8,000 MXN/noche entre todos = <strong className="text-emerald-700">~$500 por persona por noche</strong>.</div>
                <button onClick={() => setSAb(!sAb)} className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-3">{sAb ? "Ocultar" : "Ver comparativa"} <Chev open={sAb} /></button>
                {sAb && (
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl p-4 border border-emerald-100">
                      <div className="font-bold text-sm text-slate-700 mb-3">💰 Comparativa por persona (3 noches)</div>
                      {[{l:"Hotel cuádruple (convenio)",p:"$1,810",t:"$3,150 total"},{l:"Airbnb grupal (16 pers.)",p:"~$1,500",t:"~$2,840 total",h:true},{l:"Airbnb grupal (12 pers.)",p:"~$2,000",t:"~$3,340 total"}].map((r,j)=>(
                        <div key={j} className={`flex items-center justify-between py-2 px-3 rounded-xl text-sm ${r.h?"bg-emerald-50 border border-emerald-200":""}`}>
                          <div><span className="font-bold text-slate-700">{r.l}</span>{r.h&&<span className="ml-2 bg-emerald-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">Mejor precio</span>}</div>
                          <div className="text-right"><div className="font-mono font-bold text-emerald-600">{r.p}</div><div className="text-xs text-slate-400">{r.t}</div></div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
                      <div className="font-bold text-sm text-amber-800 mb-2">⚠️ Consideraciones</div>
                      <div className="text-xs text-amber-700 space-y-1 leading-relaxed">
                        <div>• No incluye desayuno (tendrás que comprar comida)</div>
                        <div>• Coordinarse bien para limpieza</div>
                        <div>• Verificar cercanía al metro/transporte hacia UVM</div>
                        <div>• Pago directo en Airbnb, separado del congreso</div>
                      </div>
                    </div>
                    <a href={AIRBNB_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-2xl font-bold text-sm hover:bg-emerald-700 transition-all">Ver Airbnb ejemplo →</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* TRANSPORTE */}
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 mb-8">
            <button onClick={() => setST(!sT)} className="w-full flex items-center justify-between p-5">
              <div className="flex items-center gap-3"><span className="text-xl">🚌</span><span className="font-extrabold text-slate-800 text-sm">¿Y el transporte León → Guadalajara?</span></div>
              <Chev open={sT} />
            </button>
            {sT && (
              <div className="px-5 pb-5">
                <p className="text-sm text-slate-500 mb-3">~3 horas. Precios de referencia (ida):</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {[{l:"ETN",p:"~$325",n:"Anticipada"},{l:"Futura",p:"~$315",n:"Económico"},{l:"Primera Plus",p:"~$620",n:"Primera clase"}].map((t,i)=>(
                    <div key={i} className="bg-white rounded-2xl p-4 text-center border border-slate-100">
                      <div className="font-extrabold text-sm text-slate-800">{t.l}</div>
                      <div className="font-mono font-bold text-amber-600 text-lg">{t.p}</div>
                      <div className="text-slate-400 text-xs">{t.n}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-xs text-amber-700 font-medium">💡 Estamos gestionando transporte grupal UPIIG. Regístrate y te avisamos.</div>
              </div>
            )}
          </div>

          {/* TOTAL */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-6 border-2 border-amber-300" style={{ boxShadow: "0 8px 32px rgba(251,191,36,0.15)" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-extrabold text-slate-800">Tu inversión estimada (hotel)</span>
              <span className="font-mono font-bold text-amber-600 text-3xl">${COSTS[sC].price.toLocaleString()} <span className="text-sm text-slate-400 font-normal ml-1">MXN</span></span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 border-t border-amber-200/50 pt-3">
              <span>Precio público: <span className="line-through">$2,200</span></span>
              <span className="text-emerald-600 font-bold">Ahorras $860 con descuento UPIIG 🎉</span>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPA */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-extrabold text-xs uppercase tracking-widest text-amber-500">Oportunidades</span>
            <h2 className="font-extrabold text-3xl text-slate-800 mt-3 tracking-tight">No solo asistas — participa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-6 border border-slate-100" style={{ borderTop: "4px solid #8b5cf6" }}>
              <div className="text-3xl mb-3">🖼️</div>
              <h3 className="font-extrabold text-slate-800 mb-3">Concurso de Carteles</h3>
              <div className="text-sm text-slate-500 space-y-2">
                <div className="flex items-start gap-2"><span className="text-violet-500">✓</span> Presenta tu investigación</div>
                <div className="flex items-start gap-2"><span className="text-violet-500">✓</span> Publicación en revista CIBIOS-BUAP</div>
                <div className="flex items-start gap-2"><span className="text-violet-500">✓</span> Premios para top 3</div>
                <div className="flex items-start gap-2"><span className="text-violet-500">✓</span> Formato: cartel u oral (8 min)</div>
              </div>
              <div className="mt-4 bg-violet-50 text-violet-700 rounded-xl px-4 py-2 text-xs font-bold border border-violet-100">⏰ Fecha límite: 27 marzo 2026</div>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-slate-100" style={{ borderTop: "4px solid #f59e0b" }}>
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-extrabold text-slate-800 mb-3">Startup Showcase</h3>
              <div className="text-sm text-slate-500 space-y-2">
                <div className="flex items-start gap-2"><span className="text-amber-500">✓</span> 5 min pitch + 2 min Q&A</div>
                <div className="flex items-start gap-2"><span className="text-amber-500">✓</span> Reuniones 1:1 con fondos</div>
                <div className="flex items-start gap-2"><span className="text-amber-500">✓</span> Solo 10 proyectos seleccionados</div>
                <div className="flex items-start gap-2"><span className="text-amber-500">✓</span> Difusión en redes del congreso</div>
              </div>
              <div className="mt-4 bg-amber-50 text-amber-700 rounded-xl px-4 py-2 text-xs font-bold border border-amber-100">⏰ Fecha límite: 31 marzo 2026</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)" }} />

      {/* PASOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-extrabold text-xs uppercase tracking-widest text-amber-500">Paso a paso</span>
            <h2 className="font-extrabold text-3xl text-slate-800 mt-3 tracking-tight">¿Cómo me registro?</h2>
          </div>
          <div className="space-y-3">
            {[
              { n:"01", t:"Llena el formulario",   d:"Regístrate con tus datos y preferencias.",         c:"#f59e0b" },
              { n:"02", t:"Te agregamos al grupo",  d:"WhatsApp según tu participación.",                  c:"#8b5cf6" },
              { n:"03", t:"Transferencia grupal",   d:"$1,340 × persona. Te pasamos datos bancarios.",     c:"#10b981" },
              { n:"04", t:"Recibe tu código-cupón", d:"Registro en luma.com/congresobiogenesis.",          c:"#f59e0b" },
              { n:"05", t:"¡Guadalajara!",          d:"Llega el 6 de mayo. 3 días de innovación.",         c:"#ec4899" },
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
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4" style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-amber-400/10 to-amber-300/5 rounded-[2.5rem] p-10 border border-amber-400/20" style={{ boxShadow: "0 0 60px rgba(251,191,36,0.1)" }}>
            <div className="text-5xl mb-4">🧬</div>
            <h2 className="font-extrabold text-3xl text-white mb-3 tracking-tight">¿Te apuntas?</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">Llena el formulario, te agregamos al grupo de WhatsApp y arrancamos la gestión.</p>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-amber-400 text-slate-900 px-10 py-5 rounded-2xl font-extrabold text-base uppercase tracking-wide hover:bg-amber-300 active:scale-95 transition-all hover:scale-105" style={{ boxShadow: "0 0 40px rgba(251,191,36,0.3)" }}>Registrarme ahora →</a>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
              <a href={WHATSAPP_CONTACT} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">📱 WhatsApp con Alejandro</a>
              <span className="hidden sm:inline">·</span>
              <a href="https://congresobiogenesis.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">🌐 congresobiogenesis.org</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-amber-400/20 flex items-center justify-center"><span className="text-amber-400 font-bold" style={{fontSize:10}}>U</span></div>
            <span className="font-bold">UIL UPIIG · Impact Lab · IPN</span>
          </div>
          <div className="text-center">La técnica al servicio de la patria · De los papers a la realidad</div>
          <div className="font-mono text-slate-700">2026</div>
        </div>
      </footer>
    </div>
  );
}
