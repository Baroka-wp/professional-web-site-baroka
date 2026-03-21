import { motion } from 'motion/react';
import { Rocket, Target, Users, Briefcase, Zap, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function LaForgeHub() {
  return (
    <>
      <SEO
        title="La Forge Hub - Innovation & Impact Social"
        description="La Forge Hub : catalyseur de talents en tech africaine. Projet ÉLAN pour l'emploi et Projet SPARK pour l'innovation."
        canonical="https://baroka.com/la-forge-hub"
        ogImage="https://baroka.com/laforge-og.jpg"
      />
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(190,18,60,0.15),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(190,18,60,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8 border border-primary/30"
          >
            <Zap size={12} className="sm:size-14" />
            Impact Social
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-headline font-extrabold leading-[1.05] mb-6 sm:mb-8 tracking-tight">
                La Forge <span className="text-primary">Hub</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-body leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-xl">
                Le catalyseur qui transforme les talents bruts en leaders de la tech africaine.
              </p>
              <a
                href="https://www.laforge-hub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-primary text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all active:scale-95 group"
              >
                Visiter le site officiel
                <ExternalLink size={16} className="sm:size-20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border-8 sm:border-10 md:border-[12px] border-white/5 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/forge/800/800"
                  alt="La Forge Hub"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 md:-bottom-10 md:-left-10 bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[2.5rem] shadow-2xl text-slate-900 max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">Notre Mission</p>
                <p className="font-bold text-sm sm:text-base leading-tight">Construire l'avenir technologique de l'Afrique par l'excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-tight text-slate-900 px-2">
            Deux Piliers pour Construire l'Avenir
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 font-body leading-relaxed px-4">
            Nous avons créé deux programmes complémentaires pour répondre aux défis de l'emploi et de l'innovation.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Projet ÉLAN */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm border border-slate-100 flex flex-col h-full"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/10 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center text-primary mb-6 sm:mb-8 md:mb-10">
              <Rocket size={28} className="sm:size-32 md:size-40" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold mb-3 sm:mb-4 text-slate-900">Projet ÉLAN</h3>
            <p className="text-primary font-bold text-base sm:text-lg md:text-xl mb-4 sm:mb-6 italic">Une passerelle vers l'emploi</p>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-body leading-relaxed mb-6 sm:mb-8 md:mb-10">
              Notre réponse directe au sous-emploi. Un programme intensif qui transforme de jeunes talents en développeurs opérationnels, prêts à intégrer le marché international.
            </p>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 mt-auto">
              {[
                { step: '1', title: 'Stage pratique (4 mois)', desc: 'Immersion en environnement de travail réel pour acquérir des compétences de terrain.' },
                { step: '2', title: 'Stage professionnel rémunéré', desc: 'Stabilité financière pour continuer à monter en compétences.' },
                { step: '3', title: 'Recrutement direct', desc: 'Garantir l\'embauche au poste de Développeur Junior.' },
                { step: '4', title: 'Progression de carrière', desc: 'Propulser nos talents vers des postes de Développeur Senior.' }
              ].map((item) => (
                <div key={item.step} className="flex gap-3 sm:gap-4 md:gap-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 flex items-center justify-center text-primary font-black text-base sm:text-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projet SPARK */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-slate-900 text-white rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl flex flex-col h-full"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center text-white mb-6 sm:mb-8 md:mb-10">
              <Zap size={28} className="sm:size-32 md:size-40" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold mb-3 sm:mb-4">Projet SPARK</h3>
            <p className="text-primary font-bold text-base sm:text-lg md:text-xl mb-4 sm:mb-6 italic">Un incubateur de solutions innovantes</p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-body leading-relaxed mb-6 sm:mb-8 md:mb-10">
              Notre réponse au besoin d'innovation locale. Nous agissons comme co-créateurs pour transformer les idées prometteuses en entreprises à fort impact.
            </p>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 mt-auto">
              {[
                { step: '1', title: 'Validation d\'idée', desc: 'Aide pour valider la faisabilité technique et commerciale des projets.' },
                { step: '2', title: 'Du concept au prototype', desc: 'Accompagnement pour développer un produit minimum viable (MVP) en intégrant l\'IA.' },
                { step: '3', title: 'Préparation au marché', desc: 'Préparation aux pitchs publics et élaboration de la stratégie marketing.' },
                { step: '4', title: 'Lancement', desc: 'Objectif : acquérir les 100 premiers utilisateurs et créer un cercle vertueux.' }
              ].map((item) => (
                <div key={item.step} className="flex gap-3 sm:gap-4 md:gap-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-primary font-black text-base sm:text-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-headline font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-tight text-slate-900">
            Rejoignez le <span className="text-primary">Mouvement</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 font-body leading-relaxed mb-8 sm:mb-10 md:mb-12 px-4">
            Que vous soyez un talent en quête d'opportunités ou un partenaire souhaitant soutenir l'innovation en Afrique, La Forge Hub est votre allié.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="https://www.laforge-hub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-slate-900 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-all active:scale-95"
            >
              Postuler au programme
            </a>
            <a
              href="mailto:birotori@gmail.com"
              className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:border-primary hover:text-primary transition-all active:scale-95"
            >
              Devenir partenaire
            </a>
          </div>
        </div>
      </section>
    </motion.div>
    </>
  );
}
