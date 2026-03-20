import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Network, Globe, Terminal, GraduationCap, CheckCircle2, Cpu, BarChart3, Handshake, ExternalLink, Github, FileText, PlayCircle, Rocket, ArrowRight } from 'lucide-react';
import Modal from '../components/Modal';

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 py-16 md:py-24"
    >
      <header className="mb-20 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface mb-6 leading-[1.1] tracking-tight">
          Expertise & <br /><span className="text-primary">Compétences</span>
        </h1>
        <p className="text-xl text-on-surface-variant font-body leading-relaxed">
          Une approche holistique combinant la rigueur de la gestion de projet, la vision stratégique internationale et l'excellence technique en ingénierie logicielle.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* 1. Project Management & Coordination */}
        <section className="md:col-span-7 bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <Network size={24} />
              </div>
              <h2 className="text-2xl font-headline font-bold text-on-surface">Gestion de Projet & Coordination</h2>
            </div>
            <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
              Expertise avérée dans le pilotage de projets complexes, garantissant le respect des délais, des budgets et des objectifs stratégiques par des méthodologies agiles éprouvées.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-primary font-bold block mb-1">Agile & Scrum</span>
                <span className="text-sm text-slate-500">Optimisation des cycles de développement.</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-primary font-bold block mb-1">Plans de Travail</span>
                <span className="text-sm text-slate-500">Planification stratégique et opérationnelle.</span>
              </div>
            </div>
          </div>
          <div className="mt-12 h-48 bg-slate-100 rounded-xl flex items-center justify-center overflow-hidden border border-slate-200">
            <img
              className="w-full h-full object-cover opacity-90"
              alt="Équipe collaborant"
              src="https://picsum.photos/seed/planning/800/400"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 2. Institutional & International Coordination */}
        <section className="md:col-span-5 bg-slate-900 text-white rounded-2xl p-8 md:p-10 flex flex-col shadow-xl">
          <div className="mb-8">
            <div className="bg-white/10 p-3 rounded-xl text-white mb-6 w-fit">
              <Globe size={24} />
            </div>
            <h2 className="text-2xl font-headline font-bold mb-4">Coordination Institutionnelle</h2>
            <p className="text-slate-300 font-body leading-relaxed">
              Point de contact stratégique entre les organisations publiques et privées à l'échelle internationale. Facilitation de partenariats multi-acteurs et alignement des intérêts.
            </p>
          </div>
          <div className="space-y-4 flex-grow">
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <Handshake size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-bold text-white">Interface Public-Privé</p>
                <p className="text-sm text-slate-400">Médiation et synergie entre secteurs.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <Globe size={20} className="text-primary mt-1 shrink-0" />
              <div>
                <p className="font-bold text-white">Relations Internationales</p>
                <p className="text-sm text-slate-400">Gestion de contextes multiculturels.</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <img
              className="rounded-xl h-32 w-full object-cover grayscale brightness-50"
              alt="Contexte mondial"
              src="https://picsum.photos/seed/global/800/300"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 3. Technologies & Coding */}
        <section className="md:col-span-8 bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="bg-primary/10 p-3 rounded-xl text-primary mb-6 w-fit">
                <Terminal size={24} />
              </div>
              <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">Technologies & Programmation</h2>
              <p className="text-on-surface-variant mb-8 font-body leading-relaxed">
                Maîtrise complète de la stack technologique moderne, de l'architecture logicielle au déploiement de modèles d'intelligence artificielle.
              </p>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'Python', 'Ruby', 'Full Stack'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface flex items-center gap-2 mb-6">
                    <Cpu size={22} className="text-primary" />
                    IA & Science des Données
                  </h3>
                  <div className="space-y-5 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        <span className="font-bold text-on-surface">Apprentissage Automatique :</span> Conception et entraînement de modèles prédictifs avancés.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        <span className="font-bold text-on-surface">Science des Données :</span> Analyse de données massives pour la prise de décision.
                      </p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://github.com/Baroka-wp/dive_ML" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-primary transition-all group w-full md:w-fit shadow-lg shadow-slate-200"
                >
                  <Github size={18} />
                  Explorer mes Google Colab
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Talent Development */}
        <section className="md:col-span-4 bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group border-2 border-primary/20">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-8"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Impact Social & Mentorat
            </motion.div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 p-4 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-3xl font-headline font-black tracking-tighter leading-none">
                Développement <br /> de Talents
              </h2>
            </div>
            
            <p className="text-slate-400 font-body mb-10 leading-relaxed text-lg">
              Catalyseur d'innovation et mentorat pour la nouvelle génération de talents technologiques.
            </p>

            <ul className="space-y-4">
              <li>
                <button 
                  onClick={openModal}
                  className="w-full flex items-center gap-4 p-4 bg-white/5 text-white rounded-2xl hover:bg-primary transition-all group/btn border border-white/10 shadow-sm active:scale-95"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover/btn:bg-white/20 transition-all duration-300">
                    <FileText size={20} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold">Rapport d'Impact</span>
                    <span className="text-[9px] opacity-50 uppercase tracking-wider font-bold">Africa Open Innovation Challenge</span>
                  </div>
                  <ExternalLink size={14} className="ml-auto opacity-40 group-hover/btn:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <a 
                  href="https://learnwith.irotoribaroka.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-4 p-4 bg-white/5 text-white rounded-2xl hover:bg-primary transition-all group/btn border border-white/10 shadow-sm active:scale-95"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover/btn:bg-white/20 transition-all duration-300">
                    <PlayCircle size={20} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold">Masterclass IA</span>
                    <span className="text-[9px] opacity-50 uppercase tracking-wider font-bold">Enregistrements INSTI 2023</span>
                  </div>
                  <ExternalLink size={14} className="ml-auto opacity-40 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 relative z-10 flex items-center justify-between">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">Innovation • Leadership</p>
            <Rocket size={18} className="text-primary animate-pulse" />
          </div>
        </section>
      </div>

      <div className="mt-32 text-center max-w-3xl mx-auto">
        <span className="text-primary/20 text-8xl font-serif leading-none block h-8">“</span>
        <blockquote className="text-3xl font-headline font-light text-on-surface leading-relaxed tracking-tight">
          L'excellence technique ne prend son sens que lorsqu'elle est au service d'une <span className="text-primary font-bold">coordination humaine</span> harmonieuse et d'un développement durable des talents.
        </blockquote>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Rapport d'Impact - Africa Open Innovation Challenge"
      >
        <div className="w-full h-full min-h-[70vh]">
          <iframe 
            src="https://drive.google.com/file/d/1QOpaJ-vOq18vRQGKOoZyFSlLi2pBkJDf/preview" 
            className="w-full h-full border-none"
            title="Rapport d'Impact PDF"
            allow="autoplay"
          />
        </div>
      </Modal>
    </motion.div>
  );
}

