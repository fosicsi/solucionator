import { useState } from 'react';
import './App.css';

export default function App() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate network
    setTimeout(() => {
      window.location.href = `mailto:solucionatorai@gmail.com?subject=Solicitud Roadmap IA&body=Email: ${email}%0D%0A%0D%0AMensaje: ${message}`;
      setFormState('success');
      setEmail('');
      setMessage('');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-charcoal font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-60"></div>

      {/* Main Wrapper */}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        {/* Navigation */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200/50 bg-white/80 backdrop-blur-md px-10 py-3 shadow-sm">
          <div className="flex items-center gap-3 text-charcoal cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex size-8 items-center justify-center rounded-lg bg-charcoal text-primary">
              <span className="material-symbols-outlined text-[20px]">architecture</span>
            </div>
            <h2 className="text-charcoal text-lg font-bold leading-tight tracking-[-0.015em]">Solucionator</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="hidden md:flex items-center gap-9">
              <button onClick={() => scrollTo('features')} className="text-charcoal text-sm font-medium leading-normal hover:text-primary transition-colors">Soluciones</button>
              <button onClick={() => scrollTo('portfolio')} className="text-charcoal text-sm font-medium leading-normal hover:text-primary transition-colors">Casos</button>
              <button onClick={() => scrollTo('testimonials')} className="text-charcoal text-sm font-medium leading-normal hover:text-primary transition-colors">Nosotros</button>
            </div>
            <button onClick={() => scrollTo('contact')} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-charcoal text-white hover:bg-primary hover:text-charcoal transition-all duration-300 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Auditar Gratis</span>
            </button>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 lg:py-20">
              <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                <div className="@container">
                  <div className="flex flex-col gap-12 py-10 lg:flex-row items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-8 flex-1">
                      <div className="flex flex-col gap-4 text-left">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
                          <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                          <span className="text-xs font-semibold text-charcoal">Solucionator IA 2.0 Live</span>
                        </div>
                        <h1 className="text-charcoal text-4xl lg:text-6xl font-black leading-[0.95] tracking-[-0.033em]">
                          Soluciones que <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Pagan su Propio Desarrollo.</span>
                        </h1>
                        <h2 className="text-gray-600 text-lg lg:text-xl font-medium leading-relaxed max-w-[600px]">
                          No vendemos software genérico. Creamos <span className="font-bold text-charcoal">activos digitales</span> que trabajan por ti las 24 horas.
                        </h2>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => scrollTo('contact')} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary text-charcoal text-base font-bold leading-normal tracking-[0.015em] hover:shadow-[0_0_20px_rgba(59,184,247,0.4)] transition-shadow">
                          <span className="truncate">Auditar mi Negocio Gratis</span>
                        </button>
                        <button onClick={() => scrollTo('features')} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white border border-gray-200 text-charcoal text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-colors">
                          <span className="truncate">Ver Soluciones</span>
                        </button>
                      </div>

                      {/* Trust Indicators */}
                      <div className="flex items-center gap-4 pt-4">
                        <div className="flex -space-x-3">
                          {/* Using placeholders for avatars to keep it clean for now */}
                          <div className="size-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">JM</div>
                          <div className="size-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">SR</div>
                          <div className="size-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">LG</div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex gap-1 text-primary">
                            <span className="material-symbols-outlined text-sm">star</span>
                            <span className="material-symbols-outlined text-sm">star</span>
                            <span className="material-symbols-outlined text-sm">star</span>
                            <span className="material-symbols-outlined text-sm">star</span>
                            <span className="material-symbols-outlined text-sm">star</span>
                          </div>
                          <span className="text-xs font-bold text-charcoal">Validado por líderes de industria</span>
                        </div>
                      </div>
                    </div>

                    {/* Visual Content (Engineering 3D Vibe) */}
                    <div className="w-full flex-1 relative perspective-1000 group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative w-full aspect-square md:aspect-[4/3] bg-charcoal rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex items-center justify-center">
                        <div className="w-full h-full bg-cover bg-center opacity-90 mix-blend-screen" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADl2FMUUpRlNTtaEdLKPw1CzrUlaULbUufQLdLX65gV9aHArufO2SOpIuhj1pPcJ6MslOQxJf33pgd4b5s4gO1fjfJEKGw2Q5zsV5V77WXkeP8-ehsVvbG3Yw2d0e9T0NxqUxjWD5I8xb4SXhLXpizDM6oWYeeCi7yBpz02SIq2VZs-iomTtu1SKlHGKu3nGdGsf1I4MtBZiLQfyXQnuVgiGa8fWVqa2wA7-py5LeWCm46upUZKTtpUN3v7CVDm6SdjNBDZ7EeHiMX')" }}></div>

                        {/* Floating Metric Card */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="text-[10px] font-mono text-primary uppercase">Status: ROI Positive</div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 w-3/4 bg-primary/40 rounded"></div>
                            <div className="h-2 w-1/2 bg-primary/20 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof Bar */}
          <section className="border-y border-gray-200 bg-white/50 backdrop-blur-sm">
            <div className="px-4 md:px-10 lg:px-40 py-8">
              <div className="max-w-[1200px] mx-auto">
                <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest text-center mb-8">Empresas que escalan con nosotros</h4>
                <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale transition-all hover:grayscale-0">
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span className="material-symbols-outlined">hexagon</span> ACME Logistics</div>
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span className="material-symbols-outlined">change_history</span> FinTech X</div>
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span className="material-symbols-outlined">all_inclusive</span> Infinite Brands</div>
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span className="material-symbols-outlined">polymer</span> Nexus AI</div>
                  <div className="text-xl font-black text-charcoal flex items-center gap-2"><span className="material-symbols-outlined">view_in_ar</span> Cube Media</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features / Soluciones */}
          <section id="features" className="py-20 px-4 md:px-10 lg:px-40">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-charcoal text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Arquitectura Digital
                </h2>
                <p className="text-gray-600 text-base md:text-lg font-normal leading-normal max-w-[720px]">
                  Tres pilares para la transformación total. No solo construimos webs; diseñamos ecosistemas que facturan.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 hover:border-charcoal hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-charcoal text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-charcoal transition-colors">
                    <span className="material-symbols-outlined text-[28px]">terminal</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-charcoal text-xl font-bold">Desarrollo a Medida</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Infraestructura robusta y escalable. Código limpio diseñado para procesar altos volúmenes de datos sin romperse.
                    </p>
                  </div>
                </div>
                {/* Feature 2 (Highlighted) */}
                <div className="group flex flex-col gap-4 rounded-2xl border border-charcoal bg-charcoal p-6 shadow-2xl transform md:-translate-y-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 text-primary flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-[28px]">psychology</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold">Automatización IA</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Agentes inteligentes que trabajan 24/7. Reducimos tareas manuales repetitivas para que tu equipo se enfoque en crecer.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 hover:border-charcoal hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-charcoal text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-charcoal transition-colors">
                    <span className="material-symbols-outlined text-[28px]">explore</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-charcoal text-xl font-bold">Estrategia Digital</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Mapas de ruta basados en datos. No adivinamos; analizamos tu mercado y construimos la herramienta exacta para dominarlo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio (Showcase) */}
          <section id="portfolio" className="py-20 px-4 md:px-10 lg:px-40 bg-white border-t border-gray-200">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
              <div className="flex items-center justify-between">
                <h2 className="text-charcoal text-3xl font-bold tracking-tight">Implementaciones Recientes</h2>
                <a className="hidden md:flex items-center gap-1 text-sm font-bold text-primary hover:underline" href="#">
                  Ver todos los casos <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Case 1: Viral Dashboard */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 cursor-pointer md:col-span-2">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsvs93vAMF3WesHIufOAiaOE7x6PsNyFRRsrTScIxGCcelFYKjPzUSuAiqDbM9vyUWGxYh9FzwCnVdeIJFn2BV_E-6gObadSrwRbNhefaxyzwbB15B_y5r0Yyzlj2nv8eklYLVF-E-ymzML1ysRgIth5OX7gZTrPaboO9jWqXx9NZRntNglCt3qvfUzVQGdCx215b0Mg1TV9H9evX_npTEcf-kwWWd2lDGskVPTAMg3yBVKPuCN2WfdzfF8-Sk_HER5AQ4coZsB2wk')" }}></div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">CREADORES</span>
                  </div>
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-lg">Viral Trends Dashboard</h4>
                      <p className="text-primary text-sm">Detección de contenido automática</p>
                    </div>
                  </div>
                </div>

                {/* Case 2: Business Intel */}
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 cursor-pointer md:col-span-2">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIOoJJZkHvxy6ugVVl5Allf45EugUZ7PpA17_A9ZrbR96Rv7hPaCGO8EsL6zuUar3LMztyRINK2n4UZ5C8jHLdU2HCrXTSr68vw3N3vE14A3NcLy6ca4IbtpxVipii2ZiBCgvxer5OqKz8H29Sq5mSUMemG6htlKCnC4Da5LG9ZKj3y6QTo0oLBpaKLi2p-3t9m59eHF23yDLQMBVtjmMfSi1Q4oSzxSxwP-SMtcoPjkMmluxqDPfsfBAA-tAyen9hL8Q6JEwBH9GX')" }}></div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">CORPORATIVO</span>
                  </div>
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-white font-bold text-lg">Board Intelligence</h4>
                      <p className="text-primary text-sm">Proyección de datos en tiempo real</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials (Reusing Feature Card Style) */}
          <section id="testimonials" className="py-20 px-4 md:px-10 lg:px-40 bg-background-light">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
              <h2 className="text-charcoal text-center text-3xl font-bold tracking-tight">Resultados Reales</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonio 1 */}
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-charcoal text-primary flex items-center justify-center font-bold">JM</div>
                    <div>
                      <div className="font-bold text-charcoal">Javier Méndez</div>
                      <div className="text-xs text-gray-500">Director Técnico @ FinTech</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"Redujimos el tiempo de onboarding de 2 semanas a 2 días. La herramienta se pagó sola en el primer mes de uso."</p>
                  <div className="mt-4 flex text-yellow-400 text-sm"><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span></div>
                </div>
                {/* Testimonio 2 */}
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-charcoal text-primary flex items-center justify-center font-bold">SR</div>
                    <div>
                      <div className="font-bold text-charcoal">Sofía R.</div>
                      <div className="text-xs text-gray-500">Creator Economy (1.2M+ Subs)</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"Mi equipo perdía 15 horas/semana investigando. Ahora tenemos guiones virales listos cada mañana automáticamente."</p>
                  <div className="mt-4 flex text-yellow-400 text-sm"><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span></div>
                </div>
                {/* Testimonio 3 */}
                <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-charcoal text-primary flex items-center justify-center font-bold">LG</div>
                    <div>
                      <div className="font-bold text-charcoal">Logística Global</div>
                      <div className="text-xs text-gray-500">Gerencia de Operaciones</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic">"La solución BYOK fue clave. Usamos nuestra propia API Key y mantenemos control total de nuestros datos."</p>
                  <div className="mt-4 flex text-yellow-400 text-sm"><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section (The High Converting Form) */}
          <section id="contact" className="py-20 px-4 md:px-10 lg:px-40 bg-charcoal relative overflow-hidden">
            {/* Abstract BG in CTA */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-pattern"></div>

            <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 text-left">
                <h2 className="text-white text-4xl font-black mb-6 leading-tight">
                  Solicita tu <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Roadmap de IA</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Analizamos tus cuellos de botella y te diseñamos un plan de automatización a medida. <span className="text-white font-bold">Sin coste. Sin compromiso.</span>
                </p>

                <div className="flex flex-col gap-4 text-gray-300 mb-8">
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500">check_circle</span> Auditoría de procesos manuales</div>
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500">check_circle</span> Estrategia de implementación (7 días)</div>
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-green-500">check_circle</span> Calculadora de ROI personalizada</div>
                </div>

                <div className="inline-flex items-center gap-2 text-sm text-yellow-400 font-medium bg-yellow-400/10 px-4 py-2 rounded-lg border border-yellow-400/20">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span> Solo 3 cupos disponibles esta semana
                </div>
              </div>

              <div className="w-full md:w-[450px] bg-white rounded-2xl p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-charcoal">¿Dónde te enviamos el plan?</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-charcoal">Tu mayor dolor de cabeza actual</label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Ej: 'Mi equipo pierde 4 horas copiando datos...'"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === 'sending' || formState === 'success'}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${formState === 'success'
                        ? 'bg-green-500 text-white'
                        : 'bg-charcoal text-white hover:bg-primary hover:text-charcoal'
                      }`}
                  >
                    {formState === 'idle' && (
                      <>Recibir mi Plan de Automatización <span className="material-symbols-outlined">arrow_forward</span></>
                    )}
                    {formState === 'sending' && 'Analizando solicitud...'}
                    {formState === 'success' && '¡Solicitud Recibida!'}
                  </button>
                  <p className="text-center text-xs text-gray-400">Te responderemos en menos de 24h.</p>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-charcoal text-white pt-16 pb-8 px-4 md:px-10 lg:px-40 border-t border-gray-800">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              <div className="flex flex-col gap-4 max-w-sm">
                <div className="flex items-center gap-2 text-white">
                  <div className="flex size-6 items-center justify-center rounded bg-primary text-charcoal">
                    <span className="material-symbols-outlined text-[16px]">architecture</span>
                  </div>
                  <h2 className="text-lg font-bold">Solucionator</h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ingeniería para la excelencia. Construimos las herramientas digitales que tu negocio necesita para dominar el mercado.
                </p>
                <div className="mt-4">
                  <p className="text-gray-500 text-sm italic mb-2">¿Sigues bajando?</p>
                  <button onClick={() => scrollTo('contact')} className="text-primary underline text-sm hover:text-white transition-colors">Hagámoslo realidad.</button>
                </div>
              </div>
              <div className="flex gap-16 flex-wrap">
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-primary">Empresa</h4>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Sobre Nosotros</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Carreras</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Blog</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-primary">Recursos</h4>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Documentación</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Centro de Ayuda</a>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-primary">Conectar</h4>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">Twitter</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">LinkedIn</a>
                  <a className="text-gray-400 hover:text-white text-sm" href="#">GitHub</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs">© 2024 Solucionator. Todos los derechos reservados.</p>
              <p className="text-gray-600 text-xs">Estado del Sistema: <span className="text-green-500">Operacional</span></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
