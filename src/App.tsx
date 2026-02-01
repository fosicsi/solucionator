
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, X, Menu, Settings, Users, Sparkles, Moon, Sun, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import './App.css';

// --- FINAL VERSION: CREATIVE DESK HERO ---
// Replaced Hero Image with "Creative Workspace" photo. Removed overlay text layers.

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        background: '#2f333c', // Slightly lighter to perfect the match
        backdropFilter: 'none', // Removed blur to ensure seamless color match
        WebkitBackdropFilter: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container navbar-container">
        <div className="logo">
          <div className="logo-icon-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Full Logo (Icon + Text) */}
            <img src="/logo-full.png" alt="Solucionator Logo" style={{ height: '45px', width: 'auto' }} />
          </div>
        </div>

        <div className="nav-links desktop-only">
          <a href="#features" style={{ color: '#26d0ce', fontWeight: 600 }}>Soluciones</a>
          <a href="#showcase" style={{ color: '#26d0ce', fontWeight: 600 }}>Resultados</a>
          <a href="#testimonials" style={{ color: '#26d0ce', fontWeight: 600 }}>Testimonios</a>

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDark ? <Sun size={20} color="#26d0ce" /> : <Moon size={20} color="#26d0ce" />}
          </button>

          <button onClick={scrollToContact} className="btn-primary small" style={{ backgroundColor: '#26d0ce', color: '#000', border: 'none' }}>
            Agendar Auditoría Gratis
          </button>
        </div>

        <div className="mobile-actions">
          <button onClick={toggleTheme} className="theme-toggle-mobile">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <a href="#features" onClick={() => setIsOpen(false)}>Soluciones</a>
          <a href="#showcase" onClick={() => setIsOpen(false)}>Resultados</a>
          <button onClick={() => { setIsOpen(false); scrollToContact(); }} className="btn-primary full-width mt-4">
            Agendar Auditoría Gratis
          </button>
        </div>
      )}
    </nav>
  );
};


const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    className="feature-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
  >
    <div className="feature-icon">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="features-section" style={{ paddingBottom: '100px', paddingTop: '60px' }}>
      <div className="container">
        <div className="section-header center" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
            Soluciones que <br />
            <span style={{
              background: 'linear-gradient(135deg, #26d0ce 0%, #9f5afd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              marginTop: '10px'
            }}>
              Pagan su Propio Desarrollo
            </span>
          </h2>
          <p style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', maxWidth: '1200px', margin: '0 auto', lineHeight: 1.4, letterSpacing: '-0.01em' }}>
            No vendemos software genérico. Creamos <span style={{ color: '#26d0ce', fontWeight: 700, textShadow: '0 0 20px rgba(38, 208, 206, 0.3)' }}>activos digitales</span> que trabajan por ti.
          </p>
        </div>

        <div className="features-grid">
          <FeatureCard
            icon={Users}
            title="Para Youtubers"
            description="Automatiza la investigación de guiones, gestión de comentarios y análisis de tendencias. Tu asistente de producción 24/7."
            delay={0.1}
          />
          <FeatureCard
            icon={Cpu}
            title="Para Agencias"
            description="Generación de reportes automáticos, onboarding de clientes y chatbots de soporte entrenados con TUS datos."
            delay={0.2}
          />
          <FeatureCard
            icon={Settings}
            title="Para Empresas"
            description="Conecta tu ERP con IA. Clasificación de facturas, redacción legal preliminar y análisis financiero automático."
            delay={0.3}
          />
        </div>

        <div className="bento-grid">
          <motion.div
            className="bento-card bento-dark"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
          >
            <div className="bento-glow bento-glow-blue"></div>
            <h3 className="z-10 relative">Tus Datos, Tu Control (BYOK)</h3>
            <p className="z-10 relative">Te entregamos el código o el ejecutable. No dependes de nosotros para siempre.</p>
            <div className="tags z-10 relative mt-4">
              <span className="tag">Privacidad Total</span>
              <span className="tag">Sin Monthly Fees</span>
            </div>
          </motion.div>

          <motion.div
            className="bento-card bento-deep"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
          >
            <div className="bento-glow bento-glow-purple"></div>
            <Sparkles className="sparkle-icon" size={32} />
            <h3 className="z-10 relative">ROI en Semanas</h3>
            <p className="z-10 relative">Nuestros clientes recuperan la inversión en menos de 2 meses solo en horas ahorradas.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AnimatedGraph = () => {
  return (
    <div className="anim-card-content anim-graph">
      {[20, 35, 45, 80, 120, 177].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 10 }}
          whileInView={{ height: `${(h / 177) * 100}%` }}
          transition={{ delay: i * 0.2, duration: 1, type: "spring" }}
          className="graph-bar"
        ></motion.div>
      ))}
      <div className="graph-label flex flex-col items-start gap-1">
        {/* Content for graph-label if any, otherwise it's just a container */}
      </div>
    </div>
  );
};

const MagneticField = () => {
  return (
    <div className="relative w-full h-[250px] flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-slate-900/50">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 z-10" />

      {/* The Reactor Core */}
      <div className="relative z-20 flex items-center justify-center">
        {/* Core Glow */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-accent-primary/20 blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Core Ring */}
        <div className="relative w-24 h-24 rounded-full border-2 border-accent-primary/30 flex items-center justify-center backdrop-blur-sm bg-slate-900/40 shadow-[0_0_30px_rgba(38,208,206,0.2)]">
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-accent-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <Sparkles className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" size={32} />
        </div>
      </div>

      {/* Incoming Particles (Raw Traffic) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`in-${i}`}
          className="absolute left-0 w-2 h-2 rounded-full bg-slate-500/50"
          initial={{ x: -20, y: 50 + Math.random() * 100, opacity: 0 }}
          animate={{
            x: "50%",
            y: "50%",
            opacity: [0, 1, 0],
            scale: [1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "circIn"
          }}
          style={{ top: 0, bottom: 0, margin: 'auto' }}
        />
      ))}

      {/* Outgoing Beam (Converted Leads) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[2px] bg-gradient-to-r from-accent-primary to-transparent opacity-30" />
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`out-${i}`}
          className="absolute z-20 flex items-center gap-2"
          initial={{ x: 0, opacity: 0, scale: 0 }}
          animate={{ x: 150 + i * 50, opacity: [0, 1, 0], scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 + i * 0.5 }}
          style={{ left: '50%', top: '45%' }}
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(38,208,206,0.6)]">
            <Users size={14} className="text-slate-900" />
          </div>
          <span className="text-xs font-bold text-accent-primary bg-slate-900/80 px-2 py-1 rounded-full border border-accent-primary/30">
            +$2.4k
          </span>
        </motion.div>
      ))}

      {/* Floating UI Elements */}
      <div className="absolute bottom-4 left-6 z-30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">System Active</span>
        </div>
      </div>

      <div className="absolute top-4 right-6 z-30 text-right">
        <h4 className="text-3xl font-black text-white leading-none tracking-tighter">
          <motion.span
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
          >
            24/7
          </motion.span>
        </h4>
        <p className="text-[10px] text-accent-primary font-bold uppercase tracking-wider">Lead Flow</p>
      </div>

    </div>
  )
}

const Showcase = () => {
  return (
    <section id="showcase" className="section-padding showcase-section" style={{ paddingTop: '120px' }}>
      <div className="container">

        <div className="section-header center" style={{ marginBottom: '40px', maxWidth: '1200px', width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
            Tu Negocio no es Genérico. <br />
            <span style={{
              background: 'linear-gradient(135deg, #26d0ce 0%, #9f5afd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Tu Software Tampoco
            </span>
          </h2>
          <p style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', maxWidth: '100%', margin: '0 auto', lineHeight: 1.4, letterSpacing: '-0.01em' }}>
            Desarrollamos las herramientas exactas que necesitas: desde <span style={{ color: '#26d0ce', fontWeight: 700, textShadow: '0 0 20px rgba(38, 208, 206, 0.3)' }}>automatizaciones con IA</span> hasta plataformas completas que multiplican tu eficiencia.
          </p>
        </div>

        <div className="bento-grid-layout">
          <motion.div
            className="bento-item wide creators-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src="/images/editor.png" alt="Video Editor Workspace" className="bento-bg-image" />
            <div className="bento-overlay"></div>

            <div className="card-top-content">
              <div className="card-tag purple mb-auto">CREADORES</div>
              <div className="mt-auto pb-8">
                <h3 className="text-3xl font-bold mb-2">Viral Trends Dashboard</h3>
                <p className="opacity-90 max-w-md">Tu centro de comando para detectar oportunidades de contenido antes que la competencia.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bento-item dark business-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <img src="/images/meeting.png" alt="Executive Meeting" className="bento-bg-image" />
            <div className="bento-overlay"></div>

            <div className="card-padding relative z-10">
              <div className="card-tag blue w-auto self-start">EMPRESAS</div>
              <div className="mt-auto">
                <h3 className="card-title-lg text-white">Board Intelligence</h3>
                <p>Proyecciones en tiempo real para tomar decisiones basadas en datos.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bento-item logistics-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img src="/images/warehouse.png" alt="Warehouse Manager" className="bento-bg-image" />
            <div className="bento-overlay"></div>

            <div className="card-padding relative z-10">
              <div className="card-tag green w-auto self-start">LOGÍSTICA</div>
              <div className="mt-auto">
                <h3 className="card-title-lg">Live Inventory</h3>
                <p>Control total de stock desde una sola pantalla centralizada.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bento-item full-width analytics-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="analytics-layout">
              <div className="analytics-info z-10" style={{ maxWidth: '45%' }}>
                <MagneticField />
              </div>
              <div className="analytics-graph z-0 mix-blend-overlay opacity-50">
                <AnimatedGraph />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>



      </div>
    </section>
  )
}

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding testimonials-section" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="section-header center" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1 }}>
            Historias de <span style={{
              background: 'linear-gradient(135deg, #26d0ce 0%, #9f5afd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              marginLeft: '10px'
            }}>
              Éxito
            </span>
          </h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="user-profile">
              <div className="avatar">CD</div>
              <div className="user-info">
                <div className="name">Carlos Dev</div>
                <div className="role">CTO @ StartupX</div>
              </div>
            </div>
            <p className="quote">"Redujimos el tiempo de onboarding de 2 semanas a 2 días con la app de IA que nos construyeron. Impresionante."</p>
          </div>
          <div className="testimonial-card">
            <div className="user-profile">
              <div className="avatar">AC</div>
              <div className="user-info">
                <div className="name">Ana Content</div>
                <div className="role">YouTuber (500k)</div>
              </div>
            </div>
            <p className="quote">"Mi flujo de guiones era un caos. Ahora tengo ideas generadas y organizadas automáticamente cada mañana."</p>
          </div>
          <div className="testimonial-card">
            <div className="user-profile">
              <div className="avatar">ES</div>
              <div className="user-info">
                <div className="name">Empresa SA</div>
                <div className="role">Gerente Ops</div>
              </div>
            </div>
            <p className="quote">"La solución BYOK nos permite usar nuestros propios modelos sin exponer datos sensibles. Justo lo que buscábamos."</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "¿Necesito saber programar para usar las apps?", a: "No. Nosotros construimos la app por ti. Te entregamos un producto listo para usar, diseñado a medida de tu flujo de trabajo." },
    { q: "¿Qué significa BYOK (Bring Your Own Key)?", a: "Significa que tú usas tu propia clave de API de OpenAI o Anthropic. Así pagas el costo real de uso a ellos, sin sobreprecios nuestros." },
    { q: "¿Puedo pedir cambios después de la entrega?", a: "Sí, todos nuestros planes incluyen un periodo de soporte y ajustes para asegurar que la herramienta se adapta perfectamente a ti." },
    { q: "¿Cuánto tarda el desarrollo?", a: "Depende de la complejidad, pero la mayoría de nuestras soluciones tipo 'Micro-SaaS' están listas en menos de 7 días." }
  ];

  return (
    <section className="section-padding faq-section" style={{ paddingTop: '60px' }}>
      <div className="container faq-container">
        <div className="section-header center w-full" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1 }}>
            Preguntas <span style={{
              background: 'linear-gradient(135deg, #26d0ce 0%, #9f5afd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              marginLeft: '10px'
            }}>
              Frecuentes
            </span>
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.q}
                <ChevronDown className={`icon-chevron ${openIndex === idx ? 'rotate' : ''}`} size={18} />
              </button>
              <div className={`faq-answer ${openIndex === idx ? 'open' : ''}`}>
                <div className="faq-content-inner">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTA = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    // Simulate network request & fallback to mailto
    setTimeout(() => {
      window.location.href = `mailto:solucionatorai@gmail.com?subject=Consulta desde Web&body=Email: ${email}%0D%0A%0D%0AMensaje: ${message}`;
      setFormState('success');
      setEmail('');
      setMessage('');
      setTimeout(() => setFormState('idle'), 3000);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding cta-section">
      <div className="container">
        <div className="cta-card glass-panel-dark">
          <div className="cta-content-grid">
            <div className="cta-text-col">
              <h2 className="cta-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '24px', fontWeight: 800 }}>
                ¿Tu idea vale más que&nbsp;
                <span style={{
                  background: 'linear-gradient(135deg, #26d0ce 0%, #9f5afd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  tu tiempo?
                </span>
              </h2>
              <p className="cta-desc" style={{ fontSize: '1.25rem', marginBottom: '32px', maxWidth: '90%' }}>
                Deja de perder horas en tareas manuales. Cuéntanos qué te frena y nosotros construiremos la <span className="font-bold">Inteligencia Artificial</span> que lo resuelva por ti.
              </p>
              <div className="cta-benefits">
                <div className="benefit-item"><div className="check-icon">✓</div> Análisis de viabilidad gratuito</div>
                <div className="benefit-item"><div className="check-icon">✓</div> Prototipo funcional en 7 días</div>
                <div className="benefit-item"><div className="check-icon">✓</div> Privacidad garantizada (BYOK)</div>
              </div>
            </div>

            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Tu Email Corporativo</label>
                <input
                  type="email"
                  placeholder="nombre@empresa.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>¿Qué quieres automatizar?</label>
                <textarea
                  rows={3}
                  placeholder="Ej: Paso 2 horas al día copiando datos de Excel a..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn-primary full-width ${formState === 'success' ? 'success' : ''}`}
                disabled={formState === 'sending' || formState === 'success'}
              >
                {formState === 'idle' && (
                  <>Enviar Consulta <ArrowRight size={18} /></>
                )}
                {formState === 'sending' && 'Enviando...'}
                {formState === 'success' && '¡Mensaje Enviado!'}
              </button>
              <p className="form-note">Te responderemos desde solucionatorai@gmail.com</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo-full.png" alt="Solucionator AI" style={{ height: '35px', width: 'auto' }} />
            </div>
            <p>
              Deja de adaptar tu negocio al software. Construye la tecnología exacta para dominar tu mercado.
            </p>
          </div>
          <div className="footer-links-col">
            <h4>Aprender</h4>
            <ul>
              <li><a href="#features">Casos de Uso</a></li>
              <li><a href="#showcase">Galería</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToContact(); }}><b>Agendar Consultoría</b></a></li>
              <li><a href="mailto:solucionatorai@gmail.com">Email Directo</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Solucionator. Todos los derechos reservados.</div>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  return (
    <div className="app">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Showcase />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
