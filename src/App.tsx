
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Zap, X, Menu, Settings, Users, Sparkles } from 'lucide-react';
import { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <div className="logo-icon">
            <Bot size={20} color="white" />
          </div>
          <span>Solucionator</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <a href="#features">Soluciones</a>
          <a href="#process">Cómo funciona</a>
          <a href="#pricing">Precios</a>
          <button className="btn-primary small">
            Empezar ahora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#features" onClick={() => setIsOpen(false)}>Soluciones</a>
          <a href="#process" onClick={() => setIsOpen(false)}>Cómo funciona</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Precios</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="bg-grid"></div>
      <div className="hero-glow"></div>

      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Nueva generación de Apps con IA</span>
          </div>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Organiza tu caos digital con <br />
          <span className="gradient-text-accent">Inteligencia Artificial</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Creamos aplicaciones a medida para programadores, youtubers y empresas.
          Automatiza flujos, reduce costos y encuentra respuestas al instante.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="btn-primary">
            Agendar Demo <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">
            Ver Ejemplos
          </button>
        </motion.div>

        {/* Hero Image Mockup Area */}
        <motion.div
          className="hero-mockup"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="mockup-window">
            <div className="mockup-overlay"></div>
            {/* Abstract UI representation */}
            <div className="mockup-ui">
              <div className="sidebar"></div>
              <div className="main-content">
                <div className="header-bar"></div>
                <div className="content-area">
                  <span className="faded-text">App Interface Preview</span>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              className="floating-card card-right"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="card-header">
                <div className="icon-box green"><Zap size={16} /></div>
                <div className="card-title">Workflow Optimizado</div>
              </div>
              <div className="line full"></div>
              <div className="line partial"></div>
            </motion.div>

            <motion.div
              className="floating-card card-left"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            >
              <div className="card-header">
                <div className="icon-box purple"><Bot size={16} /></div>
                <div className="card-title">Respuesta Generada</div>
              </div>
              <div className="card-text">Aquí tienes el script que pediste optimizado para reducir latencia...</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
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
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Soluciones para <span className="gradient-text-accent">Creadores y Empresas</span></h2>
          <p>
            No es solo software, es tu propio sistema operativo de trabajo. Adaptamos la IA a tus necesidades específicas.
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
            title="Para Programadores"
            description="Apps BYOK (Bring Your Own Key) para gestión de snippets, documentación automática y debugging asistido por contexto."
            delay={0.2}
          />
          <FeatureCard
            icon={Settings}
            title="Para Empresas"
            description="Organiza áreas enteras. Desde onboarding de empleados hasta soporte al cliente automatizado con tu propia base de conocimiento."
            delay={0.3}
          />
        </div>

        {/* Secondary Benefit Section - Bento Grid Style */}
        <div className="bento-grid">
          <motion.div
            className="bento-card bento-dark"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bento-glow bento-glow-blue"></div>
            <h3 className="z-10">Tus Datos, Tu Control</h3>
            <p className="z-10">Implementamos soluciones BYOK (Bring Your Own Key) para que tengas control total sobre los costos y la privacidad de tus modelos de IA.</p>
            <div className="tags z-10">
              <span className="tag">OpenAI</span>
              <span className="tag">Anthropic</span>
              <span className="tag">Local LLMs</span>
            </div>
          </motion.div>

          <motion.div
            className="bento-card bento-deep"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bento-glow bento-glow-purple"></div>
            <Sparkles className="sparkle-icon" size={32} />
            <h3 className="z-10">Flujos a Medida</h3>
            <p className="z-10">
              "Apps tipo SaaS construidas solo para ti". Olvida las suscripciones genéricas que no se adaptan. Creamos exactamente la herramienta que le falta a tu negocio.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <h2>¿Listo para escalar tu productividad?</h2>
        <p>
          Deja de perder tiempo en tareas repetitivas. Hablemos sobre cómo una app de IA personalizada puede transformar tu día a día.
        </p>
        <button className="btn-primary large">
          Agendar Consultoria Gratuita
        </button>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Bot size={20} className="icon-brand" />
          <span>Solucionator</span>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Solucionator. Todos los derechos reservados.
        </div>
        <div className="footer-socials">
          <a href="#">Twitter</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
