import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Layers, 
  MapPin, 
  ArrowRight, 
  Phone, 
  Mail, 
  Award, 
  FileCheck, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight, 
  Menu, 
  X, 
  Hammer, 
  HardHat, 
  Factory, 
  Droplet, 
  Calendar,
  Sparkles,
  Calculator,
  Grid,
  CheckCircle2,
  Lock,
  ThumbsUp,
  ExternalLink,
  MessageCircle,
  Clock
} from 'lucide-react';

import { servicesData, projectsData, minLinkData, ServiceItem, ProjectItem } from './data';
import { Logo } from './components/Logo';

export default function App() {
  // Navigation states
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Interactive services state
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<'all' | 'mining' | 'industrial'>('all');
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);
  const [activeDetailService, setActiveDetailService] = useState<ServiceItem | null>(null);

  // MinLink Interactive tool states
  const [activePillar, setActivePillar] = useState<string>('pillar-categoria');
  const [simName, setSimName] = useState('');
  const [simMineral, setSimMineral] = useState('Oro (Au)');
  const [simLocation, setSimLocation] = useState('Sonora');
  const [simSize, setSimSize] = useState('50');
  const [simPermits, setSimPermits] = useState('En trámite');
  const [simResult, setSimResult] = useState<any | null>(null);
  const [simSubmitted, setSimSubmitted] = useState(false);
  const [simLoading, setSimLoading] = useState(false);

  // Reference Project States
  const [selectedProjectId, setSelectedProjectId] = useState<string>('cascabel');

  // Lead / Contact Forms state
  const [contactForm, setContactForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    interes: 'MinLink - Inversión'
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Monitor page scroll to style header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active link spy
      const sections = ['inicio', 'acerca', 'servicios', 'proyectos', 'minlink', 'contacto'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    // Simulate real database receipt
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      // Reset form
      setContactForm({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
        interes: 'MinLink - Inversión'
      });
    }, 1200);
  };

  const handleEvaluateProjectSimulator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simName.trim()) return;
    setSimLoading(true);
    
    setTimeout(() => {
      // Create a smart geological summary preview
      const score = Math.floor(Math.random() * 20) + 75; // 75-95 rating
      const estimatedRating = score >= 90 ? 'ALTO POTENCIAL' : 'POTENCIAL MEDIO';
      const code = `ML-${simLocation.slice(0,3).toUpperCase()}-${Math.floor(Math.random() * 900) + 100}`;
      
      setSimResult({
        code,
        score,
        estimatedRating,
        concession: simName,
        mineral: simMineral,
        area: simSize,
        legalSecurity: simPermits === 'Concedido' ? 'ÓPTIMA' : 'REQUIERE AUDITORÍA',
        nextStep: 'Requiere muestreo pericial en sitio por COSMIN para habilitación en Data Room.'
      });
      setSimLoading(false);
    }, 1000);
  };

  const getServiceIcon = (id: string) => {
    switch(id) {
      case 'permisos': return <FileCheck className="w-6 h-6 text-amber-500" />;
      case 'evaluacion': return <TrendingUp className="w-6 h-6 text-amber-500" />;
      case 'servicios-tecnicos': return <HardHat className="w-6 h-6 text-amber-500" />;
      case 'exploracion': return <Compass className="w-6 h-6 text-amber-500" />;
      case 'plantas': return <Factory className="w-6 h-6 text-amber-500" />;
      case 'comercializacion': return <Award className="w-6 h-6 text-amber-500" />;
      case 'termofusion': return <Droplet className="w-6 h-6 text-amber-500" />;
      case 'obra-civil': return <Layers className="w-6 h-6 text-amber-500" />;
      case 'metalmecanica': return <Hammer className="w-6 h-6 text-amber-500" />;
      case 'renta-espacios': return <Grid className="w-6 h-6 text-amber-500" />;
      default: return <HardHat className="w-6 h-6 text-amber-500" />;
    }
  };

  const getProjectImage = (idx: number) => {
    switch(idx) {
      case 0: return "/src/assets/images/cosmin_hero_1780602879732.png";
      case 1: return "/src/assets/images/cosmin_minlink_1780602891522.png";
      case 2: return "/src/assets/images/cosmin_subterranean_1780602903150.png";
      case 3: return "/src/assets/images/cosmin_laboratorio_1780602916080.png";
      default: return "/src/assets/images/cosmin_hero_1780602879732.png";
    }
  };

  const filteredServices = selectedServiceCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === selectedServiceCategory);

  const selectedProject = projectsData.find(p => p.id === selectedProjectId) || projectsData[0];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* 2026 Header with Glassmorphism */}
      <header 
        id="navbar-cosmin"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-zinc-950/85 backdrop-blur-md border-b border-amber-500/10 py-3 shadow-lg' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group" id="link-logo-home">
            <Logo showSubtitle={true} className="scale-95 origin-left" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/40 p-1 rounded-full border border-zinc-800/80">
            {[
              { id: 'inicio', label: 'Inicio' },
              { id: 'acerca', label: 'Nosotros' },
              { id: 'servicios', label: 'Servicios' },
              { id: 'proyectos', label: 'Proyectos' },
              { id: 'minlink', label: 'MinLink' },
              { id: 'contacto', label: 'Contacto' }
            ].map((tab) => (
              <a
                id={`nav-link-${tab.id}`}
                key={tab.id}
                href={`#${tab.id}`}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 uppercase tracking-wider text-xs ${
                  activeSection === tab.id
                    ? 'bg-amber-500 text-black font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                }`}
              >
                {tab.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action & WhatsApp Integration */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              id="header-whatsapp-btn"
              href="https://wa.me/526624471000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 Transition text-xs font-mono"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>662 447 1000</span>
            </a>
            <a
              id="header-cta-minlink"
              href="#minlink"
              className="bg-zinc-900 hover:bg-zinc-800 text-amber-500 hover:text-amber-400 font-display font-semibold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 border border-amber-500/20 shadow-sm"
            >
              MinLink Portal
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Controles Menu Móvil"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 flex flex-col p-6 gap-4 shadow-xl md:hidden"
            >
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'acerca', label: 'Nosotros' },
                { id: 'servicios', label: 'Servicios' },
                { id: 'proyectos', label: 'Proyectos' },
                { id: 'minlink', label: 'MinLink' },
                { id: 'contacto', label: 'Contacto' }
              ].map((tab) => (
                <a
                  id={`mobile-nav-link-${tab.id}`}
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm tracking-wider uppercase font-semibold py-2 px-3 rounded-lg ${
                    activeSection === tab.id ? 'bg-amber-500/10 text-amber-400 border-l-4 border-amber-500' : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {tab.label}
                </a>
              ))}
              <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
                <a 
                  id="mobile-nav-wa"
                  href="https://wa.me/526624471000"
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Soporte Express WhatsApp</span>
                </a>
                <a 
                  id="mobile-nav-cta"
                  href="#contacto" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-amber-500 hover:bg-amber-600 text-black py-2.5 rounded-xl text-sm font-bold uppercase transition"
                >
                  Reserva una consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 1. HERO SECTION & STRATEGIC STATEMENT */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Background Image Layer with Ambient Dark Shade Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/cosmin_hero_1780602879732.png" 
            alt="COSMIN Gran Minería de Cobre" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_#09090b_95%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950" />
          
          {/* Subtle slow background golden pulse */}
          <div className="absolute top-[20%] right-[15%] w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-zinc-800/30 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-spin duration-3000" />
              <span>Estilo Premium & Confiabilidad 2026</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
              Sinergia Minera de <span className="gradient-text-gold block sm:inline">Alto Nivel</span> en el Norte del País 
            </h1>

            <blockquote className="border-l-4 border-amber-500 pl-4 py-2 my-2 text-zinc-300 text-lg md:text-xl font-medium tracking-wide">
              "Reunirse es el comienzo, mantenerse juntos es un progreso, trabajar juntos es un éxito."
            </blockquote>

            <p className="hidden md:block text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
              Consultoría y Servicios Integrales en Ingeniería, permisos SE/SEDENA/SEMARNAT, obras complejas y el servicio exclusivo <strong className="text-zinc-200">MinLink</strong> para vincular estratégicamente concesionarios de mineral con inversionistas de capital.
            </p>

            {/* Premium CTA Container */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <a 
                id="hero-primary-cta"
                href="#contacto"
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-display font-bold rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 gold-glow hover:from-amber-400 hover:to-amber-500 text-sm tracking-wider uppercase"
              >
                <span>Reserva una consulta</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                id="hero-secondary-cta"
                href="#servicios"
                className="px-8 py-4 bg-zinc-900/80 hover:bg-zinc-900 hover:border-zinc-700 text-zinc-200 font-display font-semibold rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 border border-zinc-800 text-sm tracking-wider uppercase hover:text-white"
              >
                <span>Catálogo de Servicios</span>
              </a>
            </div>

            {/* Fast Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-4 border-t border-zinc-900/80 w-full">
              <div>
                <span className="font-display font-extrabold text-2xl md:text-3xl text-amber-500 block">15+</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest font-mono mt-1 block">Años de Récord</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl md:text-3xl text-white block">100%</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest font-mono mt-1 block">Cumplimiento Legal</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl md:text-3xl text-white block">662+</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest font-mono mt-1 block">Atención Directa</span>
              </div>
            </div>
          </div>

          {/* Interactive Hero Side Card (MinLink Gateway Highlight) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative glass-panel rounded-3xl p-6 sm:p-8 gold-glow shadow-2xl border border-amber-500/10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-41 h-41 bg-zinc-800/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px] tracking-widest uppercase">
                  ● Sistema Verificado
                </span>
                <Clock className="w-4 h-4 text-zinc-500" />
              </div>

              <div className="mb-6">
                <p className="text-xs uppercase font-mono text-amber-500 tracking-widest">MINLINK PLATAFORMA</p>
                <h3 className="font-display font-bold text-2xl text-white mt-1">Concesión Activa & Auditoría de Campo</h3>
                <p className="text-zinc-400 text-sm mt-2">
                  Estructuramos y auditamos propiedades mineras para enlazarlas con inversionistas privados e institucionales de manera transparente.
                </p>
              </div>

              {/* Verified Badges */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-zinc-200 block uppercase tracking-wider">Due Diligence Geonormativa</strong>
                    <span className="text-xs text-zinc-400">Verificamos la vigencia del título técnico/legal.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-zinc-200 block uppercase tracking-wider">Muestreo en Laboratorio Certificado</strong>
                    <span className="text-xs text-zinc-400">Validamos leyes de oro, plata y cobre en sitio.</span>
                  </div>
                </div>
              </div>

              <a 
                id="hero-side-card-cta"
                href="#minlink"
                className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-amber-500 hover:text-black text-zinc-100 font-display font-semibold py-3.5 px-4 rounded-xl transition duration-200 text-xs uppercase tracking-widest border border-zinc-800 hover:border-amber-500"
              >
                <span>Acceder a la Cartera de Proyectos</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ACERCA DE (ABOUT US) & CORE VALUES */}
      <section id="acerca" className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Decorative corner vector */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Split Image Showcase */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 group flex-1 flex flex-col h-full">
              <img 
                src="/src/assets/images/cosmin_subterranean_1780602903150.png" 
                alt="Ingenieros de COSMIN en campo subterráneo" 
                referrerPolicy="no-referrer"
                className="w-full h-full min-h-[400px] object-cover hover:scale-105 transition-all duration-500 flex-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              {/* Dynamic Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl border border-amber-500/20">
                <p className="text-[10px] font-mono uppercase text-amber-500 tracking-widest">Sede Hermosillo, Sonora</p>
                <h4 className="font-display font-bold text-white text-base">Equipo Técnico Sólido</h4>
                <p className="text-zinc-400 text-xs mt-1">Nuestros peritos supervisan personalmente la ejecución geológica y civil de cada cliente.</p>
              </div>
            </div>
            
            {/* Background absolute shape */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-amber-500/20 rounded-tr-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-amber-500/20 rounded-bl-3xl -z-10" />
          </div>

          {/* Copy Writing Section */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500">
              <span className="w-6 h-[1px] bg-amber-500 block" />
              <span>Nuestras actividades en la minería</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
              Consultoría y Servicios Integrales de <span className="gradient-text-gold">Alta Exigencia</span>
            </h2>

            <p className="text-zinc-300 text-base leading-relaxed">
              <strong>COSMIN</strong> es una firma especializada en ingeniería minera e industrial con un fuerte despliegue técnico operativo en la zona norte de México. Ofrecemos a concesionarios, contratistas e inversionistas soluciones de ingeniería integral altamente robustas y confiables.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Desde el análisis legal, topografía, geotecnia y geofísica avanzada, hasta obras civiles de gran escala y termofusión de ductos de gran calibre, nuestro enfoque prioriza la excelencia operativa, la responsabilidad ambiental y la mitigación total de riesgos. Contamos con un panel activo de profesionales periciales multidisciplinados listos para desplegarse.
            </p>

            {/* Core Values visual list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
              <div className="flex gap-3 items-start p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/40 hover:border-amber-500/10 transition duration-200">
                <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-semibold text-zinc-200 tracking-wider block">CONFIABILIDAD JURÍDICA</strong>
                  <span className="text-xs text-zinc-400 mt-0.5 block">Permitología ante dependencias reguladoras con estricto apego a leyes nacionales.</span>
                </div>
              </div>

              <div className="flex gap-3 items-start p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/40 hover:border-amber-500/10 transition duration-200">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-semibold text-zinc-200 tracking-wider block">RESPONSABILIDAD TÉCNICA</strong>
                  <span className="text-xs text-zinc-400 mt-0.5 block">Ingeniería geológica validada por peritos mineros de destacada trayectoria.</span>
                </div>
              </div>
            </div>

            <a 
              id="about-cta-contact"
              href="#contacto"
              className="mt-4 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-amber-500 hover:text-amber-400 font-display font-semibold rounded-xl text-xs uppercase tracking-wider border border-amber-500/20 transition duration-200"
            >
              Contactar a Dirección Técnica
            </a>
          </div>

        </div>
      </section>

      {/* 3. CATÁLOGO INTERACTIVO DE SERVICIOS */}
      <section id="servicios" className="py-24 bg-zinc-900/40 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zinc-950 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Segment */}
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center gap-4 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 py-1 px-3 rounded-full bg-amber-500/5 border border-amber-500/10">
              Ofrecemos Soluciones Integrales
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Portafolio de <span className="gradient-text-gold">Especialidades COSMIN</span>
            </h2>
            <p className="text-zinc-400 text-sm">
              Diseño, logística, gestión y construcción. Seleccione una división de especialidad para filtrar nuestro catálogo operativo.
            </p>

            {/* Filter Buttons */}
            <div className="flex p-1.5 rounded-2xl bg-zinc-950 border border-zinc-800 mt-4 gap-2">
              {[
                { id: 'all', label: 'Todo el Catálogo' },
                { id: 'mining', label: 'Servicios Mineros' },
                { id: 'industrial', label: 'Industrial & Obra Civil' }
              ].map((tab) => (
                <button
                  id={`btn-filter-service-${tab.id}`}
                  key={tab.id}
                  onClick={() => setSelectedServiceCategory(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
                    selectedServiceCategory === tab.id
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Grid with clean 2026 aesthetics shadows and borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={service.id}
                  id={`card-service-${service.id}`}
                  className="group relative rounded-2xl p-6 bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/20 transition-all duration-300 flex flex-col justify-between hover:scale-[1.01] hover:shadow-xl hover:shadow-amber-500/[0.02]"
                  onMouseEnter={() => setHoveredServiceId(service.id)}
                  onMouseLeave={() => setHoveredServiceId(null)}
                >
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 transition group-hover:bg-amber-500/10 group-hover:border-amber-500/30">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest bg-zinc-900 px-2 py-1 rounded-md">
                        {service.category === 'mining' ? 'MINERO' : 'INDUSTRIAL'}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-amber-400 transition">
                      {service.title}
                    </h3>

                    <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <p className="text-[10px] font-mono uppercase text-amber-500/70 tracking-tight italic bg-amber-500/5 px-2 py-1.5 rounded-lg border border-amber-500/5 inline-block">
                      {service.specs}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between">
                    <button
                      id={`btn-read-service-${service.id}`}
                      onClick={() => setActiveDetailService(service)}
                      className="text-xs font-semibold text-zinc-300 group-hover:text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Ver detalles</span>
                      <ChevronRight className="w-3 h-3 text-amber-500 transition group-hover:translate-x-1" />
                    </button>
                    <a 
                      id={`btn-interest-service-${service.id}`}
                      href="#contacto" 
                      onClick={() => {
                        setContactForm(prev => ({
                          ...prev,
                          interes: `Servicio - ${service.title}`,
                          mensaje: `Hola COSMIN, me interesa solicitar cotización y asesoría especializada sobre el servicio: ${service.title}.`
                        }));
                      }}
                      className="text-[10px] font-mono text-zinc-500 hover:text-amber-500 tracking-wider uppercase transition"
                    >
                      Cotizar
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Quick catalog download promotion banner */}
          <div className="mt-16 glass-panel rounded-3xl p-8 border border-amber-500/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-lg text-white">¿Necesita nuestro portafolio de capacidades completo?</h4>
                <p className="text-zinc-400 text-xs mt-1">Descargue la propuesta de servicios técnicos autorizados de COSMIN en un PDF de alta resolución estructurado comercialmente.</p>
              </div>
            </div>
            <a 
              id="download-catalog-pdf-btn"
              href="#contacto" 
              onClick={() => {
                alert("Su solicitud de portafolio se ha activado. Por favor, complete el formulario de contacto para recibir el dossier oficial COSMIN.");
              }}
              className="bg-amber-500 hover:bg-amber-600 text-black font-display font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shrink-0"
            >
              Solicitar Dossier PDF
            </a>
          </div>

        </div>

        {/* Modal for Service Expansion */}
        <AnimatePresence>
          {activeDetailService && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-zinc-950 border border-amber-500/20 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative max-h-[90vh] overflow-y-auto"
                id="service-detail-modal"
              >
                <button 
                  id="close-service-modal"
                  onClick={() => setActiveDetailService(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                    {getServiceIcon(activeDetailService.id)}
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-mono text-amber-500 tracking-wider">
                      {activeDetailService.category === 'mining' ? 'División Minera' : 'División Industrial'}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      {activeDetailService.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-left text-sm text-zinc-300">
                  <p className="leading-relaxed text-zinc-400">
                    {activeDetailService.longDesc}
                  </p>

                  <div className="pt-4">
                    <h4 className="font-display font-semibold text-white tracking-wide uppercase text-xs mb-3">
                      Líneas de Operación y Entregables:
                    </h4>
                    <ul className="space-y-2.5">
                      {activeDetailService.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 mt-6">
                    <p className="text-xs uppercase tracking-wider text-amber-500 font-mono">ESTÁNDAR GENERAL DE CALIDAD</p>
                    <p className="text-zinc-400 text-xs mt-1">Cumplimiento conforme a las regulaciones de la Secretaría de Economía, normas oficiales mexicanas pertinentes (NOM) y peritajes acreditados colectivamente.</p>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a 
                    id="modal-cta-quote"
                    href="#contacto"
                    onClick={() => {
                      setContactForm(prev => ({
                        ...prev,
                        interes: `Servicio - ${activeDetailService.title}`,
                        mensaje: `Hola COSMIN \nEstimado equipo técnico, deseo solicitar asesoría ejecutiva para el servicio "${activeDetailService.title}".\nPor favor comuníquese conmigo lo antes posible.`
                      }));
                      setActiveDetailService(null);
                    }}
                    className="flex-1 text-center bg-amber-500 hover:bg-amber-600 text-black font-display font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition"
                  >
                    Cotizar este servicio
                  </a>
                  <button 
                    id="modal-close-action"
                    onClick={() => setActiveDetailService(null)}
                    className="px-4 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-xl text-xs font-semibold uppercase tracking-wider transition"
                  >
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. CARTERA DE PROYECTOS DE REFERENCIA */}
      <section id="proyectos" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col items-start gap-6 mb-12">
            <div className="text-left max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500">Historial Operativo</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-1">
                La experiencia se <span className="gradient-text-gold">demuestra en las rocas</span>
              </h2>
              <p className="text-zinc-400 text-sm mt-2">
                Conozca algunos de nuestros proyectos insignia ejecutados bajo exigencia mecánica, hidrológica y jurídica impecable.
              </p>
            </div>

            {/* Project Pill Selectors */}
            <div className="flex flex-wrap gap-2 pt-1">
              {projectsData.map((project) => (
                <button
                  id={`btn-select-project-${project.id}`}
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                    selectedProjectId === project.id
                      ? 'bg-amber-500 text-black border-amber-500 shadow-lg'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {project.title.split(',')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Project Display card - Slate styling 2026 */}
          <div className="relative rounded-3xl bg-zinc-900 border border-zinc-800/80 p-6 sm:p-8 overflow-hidden min-h-[460px] flex items-center justify-center">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              
              {/* Text Area */}
              <div className="lg:col-span-6 flex flex-col items-start text-left gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-md font-mono text-[10px] uppercase tracking-widest font-semibold">
                    {selectedProject.tag}
                  </span>
                  <span className="text-zinc-500 text-xs uppercase font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    {selectedProject.location}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                
                <div className="w-12 h-1 bg-amber-500 rounded-full" />

                <div className="space-y-3.5 my-4">
                  {selectedProject.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-sm">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0 mt-0.5">
                        <span className="font-mono text-[9px] font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>

                <a 
                  id={`project-cta-contact-${selectedProject.id}`}
                  href="#contacto"
                  onClick={() => {
                    setContactForm(prev => ({
                      ...prev,
                      interes: `Proyecto - Referencia ${selectedProject.title}`,
                      mensaje: `Deseo corroborar referencias técnicas relativas a su experiencia con el proyecto: ${selectedProject.title}.`
                    }));
                  }}
                  className="mt-2 text-xs font-mono text-zinc-400 hover:text-amber-500 flex items-center gap-1.5 transition uppercase tracking-wider"
                >
                  <span>Solicitar más información técnica</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Visual Area */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl h-[340px] group">
                  <img 
                    src={getProjectImage(selectedProject.imageIdx)}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Subtle watermarks represent quality verification */}
                  <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/20 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="font-mono text-[9px] text-zinc-300 uppercase tracking-widest font-semibold">COSMIN VALIDADO</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Sliding Gallery Mini Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {projectsData.map((proj) => (
              <div 
                id={`gallery-item-${proj.id}`}
                key={proj.id} 
                onClick={() => setSelectedProjectId(proj.id)}
                className={`relative h-24 rounded-xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                  selectedProjectId === proj.id ? 'border-amber-500 outline-none scale-[1.02]' : 'border-zinc-800 opacity-60 hover:opacity-100 hover:scale-[1.01]'
                }`}
              >
                <img 
                  src={getProjectImage(proj.imageIdx)}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/50 hover:bg-black/20 transition-all flex items-center justify-center p-2">
                  <span className="font-display font-semibold text-[10px] text-center uppercase tracking-widest text-white leading-tight">
                    {proj.title.split(',')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. MINLINK STRATEGIC HUB (CONVERSION & TRUST CRUCIAL ELEMENT) */}
      <section id="minlink" className="py-24 bg-zinc-900/40 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zinc-950 to-transparent" />
        
        {/* Abstract geological vector map watermark effect */}
        <div className="absolute top-[10%] left-[-10%] w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto gap-3 mb-16">
            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500">
              <Compass className="w-6 h-6 shadow-sm" />
            </div>
            <span className="font-mono text-xs uppercase text-amber-500 tracking-widest font-semibold mt-2">
              Servicio de Vinculación de COSMIN
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              MinLink: El <span className="gradient-text-gold">Ecosistema Minero</span> Integrador
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Propocionamos infraestructura técnica y certidumbre legal para disolver las barreras que separan a concesionarios de títulos sin capital de los fondos inversionistas calificados.
            </p>
          </div>

          {/* Interactive Pillars Representation Graphic */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 mb-16">
            <h3 className="font-display font-extrabold text-xl text-center text-white uppercase tracking-widest mb-8">
              PILARES DE LA CARTERA DE PROYECTOS VERIFICADOS
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Graphic Diagram Side (Replacing the wheel image with beautiful pure responsive interactive CSS) */}
              <div className="lg:col-span-5 flex flex-col justify-center items-center">
                <div className="relative w-72 h-72 rounded-full border border-zinc-800/80 p-6 flex items-center justify-center bg-zinc-900/50">
                  
                  {/* Outer Orbiting Rings */}
                  <div className="absolute inset-2 rounded-full border border-dashed border-amber-500/20 pointer-events-none" />
                  
                  {/* Center Hub */}
                  <div className="z-10 w-24 h-24 rounded-full bg-zinc-950 border-2 border-amber-500 flex flex-col items-center justify-center shadow-lg text-center p-2">
                    <span className="font-display font-extrabold text-xs text-white uppercase">MINLINK</span>
                    <span className="font-mono text-[8px] text-amber-500 uppercase tracking-widest font-bold">VERIFIED</span>
                  </div>

                  {/* 4 Quadrants Interactive selectors */}
                  {minLinkData.pillars.map((p, idx) => {
                    // Position calculations
                    let posClass = '';
                    switch (idx) {
                      case 0: posClass = 'top-4 left-1/2 -translate-x-1/2'; break; // Top
                      case 1: posClass = 'right-4 top-1/2 -translate-y-1/2'; break; // Right
                      case 2: posClass = 'bottom-4 left-1/2 -translate-x-1/2'; break; // Bottom
                      case 3: posClass = 'left-4 top-1/2 -translate-y-1/2'; break; // Left
                    }

                    const isSelected = activePillar === p.id;

                    return (
                      <button
                        id={`btn-pillar-select-${p.id}`}
                        key={p.id}
                        onClick={() => setActivePillar(p.id)}
                        className={`absolute ${posClass} w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-center p-2 transition-all duration-300 border cursor-pointer ${
                          isSelected 
                            ? 'bg-amber-500 text-black border-amber-500 scale-110 shadow-lg gold-glow font-bold' 
                            : 'bg-zinc-950 hover:bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                        }`}
                      >
                        <span className="font-mono text-[9px] uppercase tracking-wider block font-bold">
                          {idx === 0 ? 'CATEGORÍA' : idx === 1 ? 'VALORACIÓN' : idx === 2 ? 'POTENCIAL' : 'AUDITORÍA'}
                        </span>
                        <ChevronRight className={`w-3 h-3 mt-1 transition-transform ${isSelected ? 'rotate-90 text-black' : 'text-zinc-500'}`} />
                      </button>
                    );
                  })}

                </div>

                {/* Legend helper */}
                <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mt-6">
                  ▲ Haga clic en los botones del domo para alternar criterios.
                </p>
              </div>

              {/* Dynamic Content Panel Side */}
              <div className="lg:col-span-7 text-left">
                {minLinkData.pillars.map((p) => {
                  if (p.id !== activePillar) return null;
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                      id={`pillar-display-${p.id}`}
                    >
                      <span className="text-xs uppercase font-mono text-amber-500 tracking-wider">Criterio Auditoria</span>
                      <h4 className="font-display font-extrabold text-2xl text-white">
                        {p.title}
                      </h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {p.description}
                      </p>

                      <div className="pt-4 border-t border-zinc-900">
                        <strong className="text-xs uppercase tracking-wider font-semibold text-zinc-200 block mb-2">Puntos del Protocolo:</strong>
                        <ul className="space-y-2">
                          {p.bullets.map((bullet, k) => (
                            <li key={k} className="flex gap-2.5 items-start text-xs text-zinc-400 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Two-Column Pitch for Target Audiences */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* For Concessionaires */}
            <div className="rounded-3xl p-6 sm:p-8 bg-zinc-950 border border-zinc-900 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-mono text-[9px] text-amber-500 uppercase tracking-widest font-bold">OPORTUNIDAD</span>
                    <h4 className="font-display font-bold text-xl text-white leading-none mt-0.5">{minLinkData.concessionaires.title}</h4>
                  </div>
                </div>
                
                <p className="text-zinc-400 text-xs mb-6 uppercase tracking-wider font-semibold">{minLinkData.concessionaires.subtitle}</p>

                <ul className="space-y-4">
                  {minLinkData.concessionaires.items.map((item, id) => (
                    <li key={id} className="flex gap-3 items-start text-sm text-left text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900">
                <a 
                  id="concessionaire-link-form"
                  href="#assessment-tool"
                  className="w-full inline-block text-center bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-amber-500 hover:text-amber-400 font-display font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider transition"
                >
                  Evaluar mi concesión minera
                </a>
              </div>
            </div>

            {/* For Investors */}
            <div className="rounded-3xl p-6 sm:p-8 bg-zinc-950 border border-zinc-900 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-mono text-[9px] text-amber-500 uppercase tracking-widest font-bold">MUTUALIDAD</span>
                    <h4 className="font-display font-bold text-xl text-white leading-none mt-0.5">{minLinkData.investors.title}</h4>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs mb-6 uppercase tracking-wider font-semibold">{minLinkData.investors.subtitle}</p>

                <ul className="space-y-4">
                  {minLinkData.investors.items.map((item, id) => (
                    <li key={id} className="flex gap-3 items-start text-sm text-left text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900">
                <a 
                  id="investor-link-form"
                  href="#contacto"
                  onClick={() => {
                    setContactForm(prev => ({
                      ...prev,
                      interes: 'MinLink - Inversionistas',
                      mensaje: 'Deseo platicar con el director de MinLink sobre la cartera activa de prospectos de oro, plata y cobre verificados bajo estándar COSMIN.'
                    }));
                  }}
                  className="w-full inline-block text-center bg-amber-500 hover:bg-amber-600 text-black font-display font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider transition"
                >
                  Registrarme como Inversionista
                </a>
              </div>
            </div>

          </div>

          {/* INTERACTIVE PRE-EVALUATION TOOL (HIGH CONVERSION GAMECHANGER) */}
          <div id="assessment-tool" className="mt-16 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 rounded-3xl p-6 sm:p-10 border border-amber-500/10 text-left relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 px-2 py-1 rounded-md border border-amber-500/20">
                  <Calculator className="w-3 h-3" />
                  <span>SIMULADOR MINLINK v1.4</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                  Pre-Evaluación Digital de Concesión
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Ingrese las variables generales de su título minero. Nuestro algoritmo pericial evaluará las variables para simular un índice de viabilidad técnica y clasificación preliminar.
                </p>

                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 space-y-2">
                  <p className="font-mono text-zinc-300 font-semibold flex items-center gap-1">
                    <Lock className="w-3 h-3 text-amber-500" /> RESPETO DE CONFIDENCIALIDAD
                  </p>
                  <p>COSMIN no almacena ni divulga coordenadas o datos sensibles sin un acuerdo formal de confidencialidad NDA recíprocamente firmado.</p>
                </div>
              </div>

              {/* Interactive Inputs */}
              <div className="lg:col-span-7">
                <form onSubmit={handleEvaluateProjectSimulator} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1.5">Nombre de la Propiedad / Título</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ej. La Aurora 2"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans"
                        value={simName}
                        onChange={(e) => setSimName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1.5">Mineral Principal</label>
                      <select 
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans"
                        value={simMineral}
                        onChange={(e) => setSimMineral(e.target.value)}
                      >
                        <option value="Oro (Au)">Oro (Au) / Plata (Ag)</option>
                        <option value="Cobre (Cu)">Cobre (Cu) Pórfido</option>
                        <option value="Plomo / Zinc">Plomo (Pb) / Zinc (Zn)</option>
                        <option value="Otro">Otro Mineral Metálico</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1.5">Ubicación (Estado)</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ej. Sonora"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans"
                        value={simLocation}
                        onChange={(e) => setSimLocation(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1.5">Tamaño (Hectáreas)</label>
                      <input 
                        type="number" 
                        required
                        placeholder="Ej. 120"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans"
                        value={simSize}
                        onChange={(e) => setSimSize(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1.5">Estatus del Título</label>
                      <select 
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans"
                        value={simPermits}
                        onChange={(e) => setSimPermits(e.target.value)}
                      >
                        <option value="Concedido">Título Concedido (Vigente)</option>
                        <option value="En trámite">En Trámite de Concesión</option>
                        <option value="Regularización">Falta Regularización de Cuotas</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      id="btn-trigger-simulator"
                      type="submit"
                      disabled={simLoading}
                      className="w-full bg-amber-500 hover:bg-amber-600 font-display font-extrabold text-black py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition duration-200"
                    >
                      {simLoading ? 'Analizando Coeficientes...' : 'Calcular Viabilidad Técnica & Generar Preview Card'}
                    </button>
                  </div>
                </form>

                {/* Simulated Result Modal Preview Card */}
                {simResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-6 rounded-2xl bg-zinc-950 border-2 border-dashed border-amber-500/30 relative"
                    id="sim-result-card"
                  >
                    <div className="absolute top-4 right-4 bg-amber-500 text-black font-mono font-bold text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full">
                      MOCKUP PREVIEW
                    </div>

                    <div className="border-b border-zinc-900 pb-4 mb-4 flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[9px] text-zinc-500">CÓDIGO DE EXPEDIENTE REGISTRADO</span>
                        <h4 className="font-display font-extrabold text-amber-500 leading-none mt-1">{simResult.code}</h4>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[9px] text-zinc-500">ESTIMACIÓN DE DESEMPEÑO</span>
                        <p className="text-emerald-400 font-mono text-xs uppercase font-bold mt-1">
                          {simResult.estimatedRating} ({simResult.score}%)
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                      <div>
                        <span className="text-zinc-500 block uppercase font-mono text-[9px]">CONCESIÓN EVALUADA</span>
                        <strong className="text-zinc-200 block text-sm">{simResult.concession} ({simResult.area} Has)</strong>
                      </div>
                      <div>
                        <span className="text-zinc-500 block uppercase font-mono text-[9px]">VECINDAD GEOLÓGICA</span>
                        <strong className="text-zinc-200 block text-sm">{simResult.mineral} - {simResult.legalSecurity}</strong>
                      </div>
                    </div>

                    <div className="bg-zinc-900/40 border border-zinc-800 p-3 rounded-lg text-xs leading-relaxed text-zinc-300">
                      <span className="text-amber-500 font-mono text-[9px] uppercase tracking-wider block font-bold">RECOMENDACIÓN DEL PERITO:</span>
                      {simResult.nextStep}
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-900 justify-between items-center">
                      <p className="text-[11px] text-zinc-400">¿Desea enviar este pre-peritaje a un consultor real de COSMIN sin costo?</p>
                      <button 
                        id="btn-send-sim-results"
                        onClick={() => {
                          setContactForm({
                            nombre: '',
                            email: '',
                            telefono: '',
                            interes: 'MinLink - Concesión Pre-Evaluada',
                            mensaje: `Hola COSMIN, he simulado mi propiedad "${simResult.concession}" de ${simResult.area} Has en ${simLocation} con mineral de ${simResult.mineral} (Código: ${simResult.code}). Deseo agendar llamada para evaluar su inclusión en la cartera MinLink.`
                          });
                          setSimSubmitted(true);
                          // Scroll smoothly to contact form
                          document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-emerald-500 hover:bg-emerald-600 text-black font-display font-bold py-2 px-4 rounded-lg text-[10px] uppercase tracking-wider transition whitespace-nowrap"
                      >
                        {simSubmitted ? '✓ Datos Cargados Abajo' : 'Cargar en Formulario de Contacto'}
                      </button>
                    </div>
                  </motion.div>
                )}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. CONTACTO & LEAD SECURE FORM & MAP (HIGH CONVERSION / TRUST) */}
      <section id="contacto" className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="/src/assets/images/cosmin_laboratorio_1780602916080.png" 
            alt="Muestras geológicas laboratorio" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover blur-sm" 
          />
          <div className="absolute inset-0 bg-zinc-950" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Contact Office & Address Info side */}
            <div className="lg:col-span-5 flex flex-col items-start text-left gap-6">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500">Contacto</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Iniciemos el <span className="gradient-text-gold">camino a la viabilidad</span>
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Estamos basados en Hermosillo, Sonora, el epicentro minero del norte de la república mexicana. Comuníquese directamente para cotizar licencias, peritajes, obras civiles o registrarse en la cartera MinLink.
              </p>

              <div className="w-full space-y-4 pt-4">
                
                {/* Desk info card */}
                <div className="flex gap-4 items-start p-4 rounded-2xl bg-zinc-900/85 border border-zinc-800">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Oficina Comercial</span>
                    <strong className="text-zinc-200 block text-xs uppercase tracking-wider mt-0.5">COSMIN Sede Norte</strong>
                    <p className="text-zinc-400 text-xs mt-1">Av. Leopoldo Ramos 297, Col. Olivares, C.P. 83180 Hermosillo, Sonora, México.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-2xl bg-zinc-900/85 border border-zinc-800">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Llamadas y WhatsApp</span>
                    <a 
                      id="link-phone-contact"
                      href="https://wa.me/526624471000" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-200 block text-xs hover:text-amber-500 font-semibold uppercase tracking-wider mt-0.5"
                    >
                      +52 (662) 447 1000
                    </a>
                    <p className="text-zinc-400 text-xs mt-1">Horario: Lunes a Viernes de 8:00 AM a 6:00 PM (Hora de Hermosillo)</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-2xl bg-zinc-900/85 border border-zinc-800">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Correo Ejecutivo</span>
                    <a 
                      id="link-mail-contact"
                      href="mailto:contacto@cosmin-builder-xhzkhc0hburbufyz.hostingersite.com" 
                      className="text-zinc-200 block text-xs hover:text-amber-500 font-semibold tracking-wide mt-0.5"
                    >
                      contacto@cosmin-builder-xhzkhc0hburbufyz.hostingersite.com
                    </a>
                    <p className="text-zinc-400 text-xs mt-1">Respuesta técnica garantizada en menos de 24 horas.</p>
                  </div>
                </div>

              </div>

              {/* Verified Trust Badges */}
              <div className="pt-6 border-t border-zinc-900/80 w-full flex items-center gap-4">
                <span className="text-[10px] uppercase font-mono text-zinc-500">Acreditaciones Técnicas:</span>
                <span className="px-2 py-1 rounded bg-zinc-900 text-xs font-mono text-zinc-400 border border-zinc-800">SE</span>
                <span className="px-2 py-1 rounded bg-zinc-900 text-xs font-mono text-zinc-400 border border-zinc-800">SEDENA</span>
                <span className="px-2 py-1 rounded bg-zinc-900 text-xs font-mono text-zinc-400 border border-zinc-800">SEMARNAT</span>
              </div>
            </div>

            {/* Premium Lead Form Box (High conversion setup) */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/10 shadow-2xl relative">
                
                {/* Backdrop lighting */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="mb-6 text-left">
                  <h3 className="font-display font-extrabold text-2xl text-white">Formulario de Consulta Directa</h3>
                  <p className="text-zinc-400 text-xs mt-1">Complete los datos y un perito de COSMIN se comunicará con usted de inmediato.</p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1 text-left">Nombre Completo *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ej. Ing. Carlos Mendoza"
                        className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/25 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans"
                        value={contactForm.nombre}
                        onChange={(e) => setContactForm({...contactForm, nombre: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1 text-left">Correo Electrónico *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="carlos.mendoza@empresa.com"
                        className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/25 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1 text-left">Número de Teléfono *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="Ej. 662 123 4567"
                        className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/25 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans"
                        value={contactForm.telefono}
                        onChange={(e) => setContactForm({...contactForm, telefono: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1 text-left">Interés Principal</label>
                      <select 
                        className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans"
                        value={contactForm.interes}
                        onChange={(e) => setContactForm({...contactForm, interes: e.target.value})}
                      >
                        <option value="MinLink - Inversión">Registrarme para invertir en minería</option>
                        <option value="MinLink - Concesionario">Evaluar y listar mi propiedad minera</option>
                        <option value="Gestión de Permisos">Permisología (SE / SEDENA / SEMARNAT)</option>
                        <option value="Servicios Técnicos & Barrenación">Estudios Técnicos y Exploración</option>
                        <option value="Obra Civil o Termofusión">Obra Civil o Termofusión HDPE</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-400 font-mono mb-1 text-left">Mensaje o Requerimiento Específico *</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Describa brevemente la situación de sus títulos, el mineral, el volumen o la necesidad de permisos..."
                      className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/25 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition font-sans resize-none"
                      value={contactForm.mensaje}
                      onChange={(e) => setContactForm({...contactForm, mensaje: e.target.value})}
                    />
                  </div>

                  <div className="flex items-center gap-1.5 py-1 text-[11px] text-zinc-400 text-left">
                    <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Sus datos están encriptados y protegidos por la Ley Federal de Datos Personales de México.</span>
                  </div>

                  <button 
                    id="btn-submit-lead-form"
                    type="submit"
                    disabled={contactSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 font-display font-extrabold text-black py-4 px-6 rounded-2xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {contactSubmitting ? 'Procesando Envío Seguro...' : 'Enviar Solicitud e Iniciar Consulta'}
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Real success layout feedback */}
                  {contactSuccess && (
                    <motion.div 
                      id="contact-form-success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs text-left flex gap-3 items-start"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold">¡Solicitud Procesada Exitosamente!</strong>
                        <p className="mt-1">Hemos registrado su expediente bajo el ID de seguimiento comercial <strong>CS-{(Math.floor(Math.random() * 80000) + 10000)}</strong>. Un perito en minería de COSMIN se comunicaría con usted vía telefónica o correo electrónico en las próximas horas.</p>
                      </div>
                    </motion.div>
                  )}
                </form>

              </div>
            </div>

          </div>

          {/* Interactive Mock Map Component to show Realism */}
          <div className="mt-16 bg-zinc-90 w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-4 space-y-3">
                <span className="font-mono text-[9px] text-amber-500 uppercase tracking-widest font-bold">MAPA SATELITAL DE CONTROL</span>
                <h4 className="font-display font-bold text-xl text-white">Sede Central: Hermosillo</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Ubicación central privilegiada para coordinar operaciones de barrenación, obra civil y termofusión en la Sierra de Sonora y estados aledaños del norte de México.
                </p>
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-xs">
                  <p className="font-semibold text-zinc-200">Av. Leopoldo Ramos 297</p>
                  <p className="text-zinc-500">Hermosillo, Sonora, C.P. 83180</p>
                </div>
              </div>
              <div className="lg:col-span-8 h-[240px] rounded-2xl overflow-hidden relative border border-zinc-900">
                {/* Mocking interactive google maps accurately with beautiful high-end dark slate render */}
                <div className="absolute inset-0 bg-zinc-950 z-0 flex flex-col items-center justify-center">
                  {/* Geological Grid overlay */}
                  <div className="absolute inset-0 opacity-15 bg-radial-[circle_at_center,_#f59e0b_1px,_transparent_1px] bg-[size:16px_16px]" />
                  
                  {/* Simulated map graphic */}
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center animate-bounce">
                        <MapPin className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="bg-zinc-900 text-[10px] text-white font-mono px-2 py-0.5 rounded border border-zinc-800 whitespace-nowrap">
                        COSMIN CENTRAL
                      </span>
                    </div>

                    {/* Street references */}
                    <div className="absolute top-4 left-6 text-[9px] font-mono text-zinc-500">CO Olivares / Ley 57</div>
                    <div className="absolute bottom-8 right-12 text-[9px] font-mono text-zinc-500">Blvd. Solidaridad</div>
                    <div className="absolute top-1/3 right-1/4 text-[9px] font-mono text-zinc-600 block">Calle Olivares</div>

                    <div className="absolute bottom-4 right-4 bg-zinc-900/90 backdrop-blur-sm p-2 rounded border border-zinc-800 text-right text-[10px] font-mono text-zinc-400">
                      Coordenadas: 29.1024° N, 110.9754° W
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER & TRUST INDICATION */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Logo Desc Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Logo showSubtitle={true} className="scale-95 origin-left" />
            </div>
            
            <p className="text-zinc-400 text-xs leading-relaxed">
              Servicios Industriales, Gestión de Licencias SEDENA/SE/SEMARNAT, Proyectos Civiles y Plataforma MinLink de Vinculación Geonormativa en México.
            </p>

            <div className="flex items-center gap-3">
              <a 
                id="footer-wa"
                href="https://wa.me/526624471000" 
                target="_blank" 
                aria-label="whatsapp link"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-emerald-400 transition"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                id="footer-mail"
                href="mailto:contacto@cosmin-builder-xhzkhc0hburbufyz.hostingersite.com"
                aria-label="mail link"
                className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-amber-500 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Access links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-[10px] uppercase font-extrabold text-amber-500 tracking-wider">Divisiones de Servicio</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#servicios" onClick={() => setSelectedServiceCategory('mining')} className="text-zinc-400 hover:text-white uppercase tracking-wider text-[11px]">Servicios Mineros Técnicos</a></li>
              <li><a href="#servicios" onClick={() => setSelectedServiceCategory('industrial')} className="text-zinc-400 hover:text-white uppercase tracking-wider text-[11px]">Industrial & Obra Civil</a></li>
              <li><a href="#minlink" className="text-zinc-400 hover:text-white uppercase tracking-wider text-[11px]">MinLink Strategic Hub</a></li>
              <li><a href="#assessment-tool" className="text-zinc-400 hover:text-white uppercase tracking-wider text-[11px]">Simulador de Concesiones</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h5 className="font-mono text-[10px] uppercase font-extrabold text-amber-500 tracking-wider">Enlaces Corporativos</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="text-zinc-400 hover:text-white uppercase tracking-wider text-[11px]">Inicio</a></li>
              <li><a href="#acerca" className="text-zinc-400 hover:text-white uppercase tracking-wider text-[11px]">Sobre Nosotros</a></li>
              <li><a href="#proyectos" className="text-zinc-400 hover:text-white uppercase tracking-wider text-[11px]">Casos de Éxito</a></li>
              <li><a href="#contacto" className="text-zinc-400 hover:text-white uppercase tracking-wider text-[11px]">Contacto</a></li>
            </ul>
          </div>

          {/* Core Newsletter */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono text-[10px] uppercase font-extrabold text-amber-500 tracking-wider">Boletín MinLink</h5>
            <p className="text-zinc-500 text-[11px]">Regístrese para recibir alertas confidenciales de nuevas concesiones verificadas listas para financiamientos.</p>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSubscribed(true);
                setNewsletterEmail('');
              }} 
              className="flex gap-2"
            >
              <input 
                type="email" 
                required
                placeholder="correo@empresa.com"
                className="bg-zinc-900 border border-zinc-800 text-xs px-3 py-2 rounded-xl text-white focus:outline-none focus:border-amber-500 flex-1 font-sans"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button 
                id="btn-newsletter"
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-2 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition"
              >
                OK
              </button>
            </form>
            {newsletterSubscribed && (
              <p className="text-emerald-400 text-[10px]">¡Inscripción de alerta confirmada!</p>
            )}
          </div>

        </div>

        {/* Legal foot */}
        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 COSMIN S.A. de C.V. Todos los derechos reservados. Hermosillo, Sonora, México.</p>
          <div className="flex gap-4">
            <a href="#contacto" onClick={() => alert("Aviso de Privacidad: COSMIN opera bajo estricto NDA. Sus datos de concesiones y peritajes se resguardan legalmente.")} className="hover:text-zinc-300">Aviso de Privacidad</a>
            <a href="#contacto" onClick={() => alert("Términos del Servicio: Los análisis del simulador son proyecciones técnicas de primer orden y requieren validación formal.")} className="hover:text-zinc-300">Términos y Condiciones</a>
          </div>
        </div>

        {/* Floating WhatsApp Quick Action Button for Conversions */}
        <a 
          id="whatsapp-floating-action-btn"
          href="https://wa.me/526624471000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition duration-300 hover:scale-110 flex items-center justify-center gold-glow"
          aria-label="Chat Directo WhatsApp con COSMIN"
        >
          <MessageCircle className="w-6 h-6 animate-pulse" />
        </a>
      </footer>

    </div>
  );
}
