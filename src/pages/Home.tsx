import { motion } from 'motion/react';
import { Globe, ArrowRight, Lightbulb, TrendingUp, Languages, CheckCircle2, GraduationCap, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import NetworkCanvas from '../components/NetworkCanvas';

export default function Home() {
  return (
    <>
      <SEO
        title="Accueil - Consultant en Gestion de Projets"
        description="Irotori Baroka, Consultant en Gestion de Projets & Coordination Opérationnelle. Innovation tech & Impact social en Afrique, Japon et Europe."
        canonical="https://baroka.com/"
        ogImage="https://baroka.com/og-image.jpg"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Network Canvas Background */}
        <NetworkCanvas />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 py-8 sm:py-10 md:py-12 lg:py-0">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900 text-white rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-6 sm:mb-8 shadow-xl shadow-slate-200"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#C8102E] rounded-full animate-ping" />
                Bénin · Afrique · Japon
              </motion.div>

              {/* Titre */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-headline font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 sm:mb-8"
              >
                Coordinateur de <br />
                <span className="uppercase" style={{ color: '#C8102E' }}>Programmes</span> <br />
                institutionnels
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl mb-6 sm:mb-8 font-body leading-relaxed"
              >
                Formation & renforcement des capacités -<br />
                de la conception au rapport final bailleur.
              </motion.p>

              {/* Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12"
              >
                {['IA appliquée', 'Financement international', 'Multi-pays'].map((pill) => (
                  <span
                    key={pill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-100 text-slate-700 rounded-full text-xs sm:text-sm font-bold"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>

              {/* Boutons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3"
              >
                <Link
                  to="/experience"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all hover:shadow-xl active:scale-95"
                  style={{ backgroundColor: '#0D1B2A', color: 'white' }}
                >
                  Voir mes programmes
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all hover:shadow-xl active:scale-95"
                  style={{ backgroundColor: '#C8102E', color: 'white' }}
                >
                  Me contacter
                </Link>
              </motion.div>
            </div>

            {/* Right Image / Visual */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                {/* Main Image Container - Forme organique */}
                <div
                  className="relative aspect-[4/5] overflow-hidden shadow-2xl bg-slate-200"
                  style={{ borderRadius: '40% 60% 55% 45% / 45% 45% 55% 55%' }}
                >
                  <img
                    alt="Irotori Baroka portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    src="https://res.cloudinary.com/baroka/image/upload/v1772560108/etu-membres/vd1oeuf2dcwtymej4xtr.jpg"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Stat 1 - Bas gauche (fond rouge) */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl text-white"
                  style={{ backgroundColor: '#C8102E' }}
                >
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-headline font-black">88</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight max-w-[140px] sm:max-w-[160px]">
                    bénéficiaires formés IA & Web
                  </p>
                </motion.div>

                {/* Stat 2 - Haut droite (fond blanc avec bordure) */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border-2 border-slate-200"
                >
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-slate-900">99</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight text-slate-600 max-w-[120px] sm:max-w-[140px]">
                    sessions ML enregistrées
                  </p>
                </motion.div>

                {/* Cercle décoratif grand - haut droite */}
                <div
                  className="absolute -top-20 -right-20 hidden lg:block"
                  style={{
                    width: '170px',
                    height: '170px',
                    border: '2px solid rgba(200, 16, 46, 0.2)',
                    borderRadius: '50%'
                  }}
                />

                {/* Cercle décoratif petit - bas droite */}
                <div
                  className="absolute -bottom-8 -right-12 hidden lg:block"
                  style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: 'rgba(200, 16, 46, 0.1)',
                    borderRadius: '50%'
                  }}
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Ce que je fais Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm font-black uppercase tracking-widest mb-3 sm:mb-4" style={{ color: '#C8102E' }}>
              CE QUE JE FAIS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-black text-slate-900 tracking-tight">
              De la conception à l'impact mesurable
            </h2>
          </div>

          {/* Grid asymétrique */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 sm:gap-8">
            {/* Grande carte - Coordination opérationnelle (gauche, 2 lignes) */}
            <div className="lg:row-span-2 relative overflow-hidden rounded-2xl sm:rounded-[2rem] shadow-xl min-h-[500px] sm:min-h-[600px] flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Image de fond */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                  alt="Coordination"
                  className="w-full h-full object-cover"
                />
                {/* Overlay sombre */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.75) 100%)' }}
                />
              </div>

              {/* Contenu */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-white mb-4 sm:mb-6 leading-tight">
                  Coordination <span style={{ color: '#C8102E' }}>opérationnelle</span>
                </h3>
                <p className="text-base sm:text-lg text-white/90 font-body leading-relaxed mb-8 sm:mb-10">
                  Je pilote l'exécution de bout en bout : sélection des bénéficiaires, recrutement des formateurs, suivi pédagogique, coordination multi-pays et reporting bailleur.
                </p>
              </div>

              {/* Tags en bas */}
              <div className="relative z-10 flex flex-wrap gap-2 sm:gap-3">
                {['Multi-pays', 'Reporting bailleur', 'Suivi pédagogique'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg text-xs sm:text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Petite carte 1 - Conception (haut droite) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-headline font-bold mb-4 sm:mb-5 text-slate-900">
                Conception de programmes
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
                Je structure des programmes sur mesure : objectifs, contenu, calendrier, critères d'évaluation : alignés sur les exigences des bailleurs.
              </p>
            </div>

            {/* Petite carte 2 - Formation (bas droite) */}
            <div className="bg-slate-100 p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-headline font-bold mb-4 sm:mb-5 text-slate-900">
                Formation de talents numériques
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
                Nouvelle génération d'ingénieurs IA et développeurs africains : approche terrain, pas théorique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Écosystème Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <p className="text-xs sm:text-sm font-black uppercase tracking-widest mb-3 sm:mb-4" style={{ color: '#C8102E' }}>
              IMPACT & ÉCOSYSTÈME
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-black text-slate-900 tracking-tight mb-4 sm:mb-6">
              Des résultats mesurables, un réseau international
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-3xl">
              Programmes coordonnés, bénéficiaires formés, partenaires engagés : voici ce que le terrain a produit.
            </p>
          </div>

          {/* Grid asymétrique */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4">

            {/* COLONNE GAUCHE */}
            <div className="flex flex-col gap-4">

              {/* 2 stats côte à côte */}
              <div className="grid grid-cols-2 gap-4">
                {/* Stat gauche - rouge */}
                <div className="p-6 sm:p-8 rounded-2xl text-white" style={{ backgroundColor: '#C8102E' }}>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-headline font-black mb-2">88</div>
                  <p className="text-xs sm:text-sm font-semibold leading-tight">bénéficiaires formés IA & Web</p>
                </div>

                {/* Stat droite - sombre */}
                <div className="p-6 sm:p-8 rounded-2xl text-white" style={{ backgroundColor: '#0D1B2A' }}>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-headline font-black mb-2">99</div>
                  <p className="text-xs sm:text-sm font-semibold leading-tight">sessions ML enregistrées</p>
                </div>
              </div>

              {/* Carte Impact emploi & insertion */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">
                  IMPACT EMPLOI & INSERTION
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-headline font-black" style={{ color: '#C8102E' }}>18</span>
                    <span className="text-sm sm:text-base text-slate-600">·</span>
                    <span className="text-sm sm:text-base text-slate-700">stages obtenus : Open Innovation Challenge</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-headline font-black" style={{ color: '#C8102E' }}>5</span>
                    <span className="text-sm sm:text-base text-slate-600">·</span>
                    <span className="text-sm sm:text-base text-slate-700">stages sur projet doctoral ML : EPAC/INSTI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-headline font-black" style={{ color: '#C8102E' }}>4</span>
                    <span className="text-sm sm:text-base text-slate-600">·</span>
                    <span className="text-sm sm:text-base text-slate-700">emplois : dont 2 dans des entreprises internationales</span>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl font-headline font-black text-slate-900">27</span>
                    <span className="text-sm sm:text-base text-slate-600">·</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">bénéficiaires insérés au total</span>
                  </div>
                </div>
              </div>

            </div>

            {/* COLONNE DROITE */}
            <div className="flex flex-col gap-4">

              {/* Carte Écosystème */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">
                  ÉCOSYSTÈME DANS LEQUEL J'OPÈRE
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Dive into Code', highlight: true },
                    { name: 'AOTS · Japon', highlight: true },
                    { name: 'JICA', highlight: true },
                    { name: 'EPAC · UAC', highlight: false },
                    { name: 'INSTI Lokossa', highlight: false },
                    { name: 'Sèmè City', highlight: false }
                  ].map((org) => (
                    <div
                      key={org.name}
                      className="flex items-center gap-2 p-3 rounded-lg bg-slate-50"
                      style={org.highlight ? { borderLeft: '2px solid #C8102E' } : {}}
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#C8102E' }} />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">{org.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carte Programme phare */}
              <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl text-white" style={{ backgroundColor: '#0D1B2A' }}>
                {/* Cercles décoratifs */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full" style={{ backgroundColor: 'rgba(200,16,46,0.2)' }} />
                <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(200,16,46,0.1)' }} />

                <div className="relative z-10">
                  {/* Badge */}
                  <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold text-white mb-4" style={{ backgroundColor: '#C8102E' }}>
                    Programme phare
                  </span>

                  <h3 className="text-xl sm:text-2xl font-headline font-black text-white mb-4 leading-tight">
                    Africa Open Innovation Challenge · 2021–2022
                  </h3>

                  <p className="text-sm sm:text-base text-white/70 font-body leading-relaxed mb-6">
                    Programme de renforcement des capacités en ingénierie web, initié par JICA et piloté avec Dive into Code. 24 jeunes développeurs béninois formés et accompagnés de la sélection à la certification.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {['JICA · Financement japonais', '24 bénéficiaires', 'Ingénierie web', 'Bénin'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                        style={{
                          border: '1px solid rgba(255,255,255,0.12)',
                          color: 'rgba(255,255,255,0.4)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-primary rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-black mb-4 sm:mb-6 tracking-tight">
              Vous pilotez un programme de formation ?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 font-body">
              Discutons de votre projet.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white text-primary px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-slate-50 hover:shadow-2xl transition-all active:scale-95"
            >
              Me contacter
              <ArrowRight size={20} className="sm:size-24" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
    </>
  );
}
