import { motion } from 'motion/react';
import { Globe, ArrowRight, Lightbulb, TrendingUp, Languages, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 hidden lg:block" />
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 py-12 lg:py-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl shadow-slate-200"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                Innovation tech & Impact social
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-headline font-black text-slate-900 leading-[1.1] tracking-tighter mb-10"
              >
                Vision <br />
                <span className="text-primary uppercase">stratégique</span> <br />
                & Pilotage opérationnelle.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl lg:text-2xl text-slate-500 max-w-xl mb-12 font-body leading-relaxed border-l-4 border-primary/20 pl-8"
              >
                Consultant en Gestion de Projets & Coordination Opérationnelle.
                Je transforme les visions complexes en réalités tangibles à travers l'Afrique, le Japon et l'Europe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap gap-6"
              >
                <Link
                  to="/experience"
                  className="group relative overflow-hidden bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-slate-300 active:scale-95 flex items-center gap-3"
                >
                  <span className="relative z-10">Voir mon parcours</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white border-2 border-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:border-primary/20 hover:bg-slate-50 transition-all active:scale-95 shadow-sm flex items-center gap-3"
                >
                  Me contacter
                </Link>
              </motion.div>
            </div>

            {/* Right Image / Visual */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20"
              >
                {/* Main Image Container */}
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[16px] border-white bg-slate-200">
                  <img
                    alt="Irotori Baroka portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                    src="https://res.cloudinary.com/baroka/image/upload/v1772560108/etu-membres/vd1oeuf2dcwtymej4xtr.jpg"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Rail Text */}
                  <div className="absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 origin-center hidden xl:block">
                    <span className="text-[10px] font-black uppercase tracking-[1em] text-white/40 whitespace-nowrap">
                      INNOVATION • LEADERSHIP • IMPACT
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-[3rem] shadow-2xl text-white max-w-[240px] border-8 border-white"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-headline font-black">10</span>
                    <span className="text-2xl font-black text-white/60">+</span>
                  </div>
                  <p className="text-xs font-black uppercase tracking-widest leading-tight mt-2">
                    Années d'Expérience <br />Mondiale
                  </p>
                </motion.div>

                {/* Decorative Circle */}
                <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite] hidden lg:block" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 px-6 lg:px-12 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-headline font-extrabold mb-6 tracking-tight">Domaines d'Expertise</h2>
            <div className="h-2 w-32 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Tech Innovation */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Lightbulb size={36} />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Innovation Technologique</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-8">Pilotage de solutions technologiques disruptives et intégration de systèmes complexes pour optimiser la performance organisationnelle.</p>
              <ul className="space-y-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary" /> Transformation Digitale</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary" /> Gestion de la R&D</li>
              </ul>
            </div>
            {/* Strategy */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 md:mt-12">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-primary transition-all duration-500">
                <TrendingUp size={36} />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Stratégie</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-8">Accompagnement des leaders dans la définition de visions stratégiques et la mise en œuvre de feuilles de route opérationnelles pérennes.</p>
              <ul className="space-y-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary" /> Gouvernance</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary" /> Intelligence d'Affaires</li>
              </ul>
            </div>
            {/* International Coordination */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Globe size={36} />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Coordination Internationale</h3>
              <p className="text-on-surface-variant font-body leading-relaxed mb-8">Expertise multiculturelle facilitant la collaboration entre équipes délocalisées (Bénin, Japon, France) pour des projets à fort impact.</p>
              <ul className="space-y-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary" /> Management Interculturel</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-primary" /> Opérations Globales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-lg mb-8">
                <img
                  alt="Workplace"
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/baroka/image/upload/v1774038275/baniere_pro_cpp0mb.png"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-tertiary/10 rounded-2xl flex flex-col items-center justify-center p-4 text-center">
                  <Languages size={40} className="text-tertiary mb-2" />
                  <span className="font-label font-bold text-on-surface">Intégrité</span>
                </div>
                <div className="aspect-square bg-primary/10 rounded-2xl flex flex-col items-center justify-center p-4 text-center translate-y-8">
                  <TrendingUp size={40} className="text-primary mb-2" />
                  <span className="font-label font-bold text-on-surface">Excellence</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-on-surface">Une Vision Humaine de la Technologie</h2>
            <p className="text-lg text-on-surface-variant mb-8 font-body">
              Au-delà des algorithmes et des KPIs, je crois en une approche centrée sur l'humain. Mon parcours entre l'Afrique, l'Asie et l'Europe m'a appris que la réussite d'un projet technologique dépend avant tout de la clarté de la communication et de la cohésion des équipes.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-on-secondary-container" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-on-surface">Leadership Serviteur</h4>
                  <p className="text-on-surface-variant text-sm">Accompagner chaque collaborateur vers son plein potentiel.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <Globe size={20} className="text-on-secondary-container" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-on-surface">Écosystèmes Résilients</h4>
                  <p className="text-on-surface-variant text-sm">Bâtir des structures capables d'absorber le changement technologique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-12 lg:p-16 text-center text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-tertiary/20 rounded-full blur-2xl"></div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 relative z-10">Prêt à transformer vos défis opérationnels en opportunités ?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              to="/contact"
              className="bg-surface text-primary px-10 py-4 rounded-xl font-label font-bold text-lg hover:bg-surface-container-high transition-all"
            >
              Démarrer une collaboration
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
