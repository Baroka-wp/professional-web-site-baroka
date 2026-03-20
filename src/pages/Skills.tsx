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
      className="max-w-7xl mx-auto px-6 py-24 md:py-32"
    >
      <header className="mb-32 relative">
        <div className="absolute -left-12 top-0 text-[12rem] font-black text-slate-50 leading-none select-none pointer-events-none hidden lg:block">
          EXPERT
        </div>
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Vision & Savoir-faire
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-headline font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
            Expertise & <br />
            <span className="text-primary">Compétences</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-body leading-relaxed max-w-2xl mb-12">
            Une approche holistique combinant la rigueur de la gestion de projet, la vision stratégique internationale et l'excellence technique.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Gestion de Projet', target: '01' },
              { label: 'Coordination', target: '02' },
              { label: 'Tech & IA', target: '03' },
              { label: 'Impact Social', target: '04' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  const element = document.getElementById(item.target);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:border-primary hover:text-primary hover:shadow-xl transition-all active:scale-95"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="space-y-40">
        {/* 01. Project Management & Coordination */}
        <section id="01" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline font-black text-primary/20">01</span>
                <div className="h-px flex-grow bg-slate-100" />
              </div>
              <h2 className="text-4xl font-headline font-black text-slate-900 mb-6 tracking-tight">
                Gestion de Projet <br />& Coordination
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Expertise avérée dans le pilotage de projets complexes, garantissant le respect des délais, des budgets et des objectifs stratégiques par des méthodologies agiles éprouvées.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Network size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Agile & Scrum</h3>
                  <p className="text-sm text-slate-500">Optimisation continue des cycles de développement et de livraison.</p>
                </div>
                <div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Plans Stratégiques</h3>
                  <p className="text-sm text-slate-500">Planification opérationnelle rigoureuse et suivi d'indicateurs clés.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  alt="Équipe collaborant"
                  src="https://res.cloudinary.com/baroka/image/upload/v1774038983/interior-lamp_u1effr.jpg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl text-white">
                    <p className="text-sm font-medium opacity-80 mb-1">Impact Projet</p>
                    <p className="text-xl font-bold">Coordination de plus de 15 projets d'envergure internationale.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Institutional & International Coordination */}
        <section id="02" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 aspect-[4/3] lg:aspect-square">
                <img
                  className="w-full h-full object-cover opacity-40 grayscale"
                  alt="Contexte mondial"
                  src="https://picsum.photos/seed/global/800/800"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe size={120} className="text-primary/20 animate-pulse" />
                </div>
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                    <Globe size={32} />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline font-black text-primary/20">02</span>
                <div className="h-px flex-grow bg-slate-100" />
              </div>
              <h2 className="text-4xl font-headline font-black text-slate-900 mb-6 tracking-tight">
                Coordination <br />Institutionnelle
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Point de contact stratégique entre les organisations publiques et privées à l'échelle internationale. Facilitation de partenariats multi-acteurs et alignement des intérêts.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Handshake size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Interface Public-Privé</h3>
                    <p className="text-slate-500 leading-relaxed">Médiation et création de synergies durables entre les secteurs institutionnels et les entreprises technologiques.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Relations Internationales</h3>
                    <p className="text-slate-500 leading-relaxed">Gestion de contextes multiculturels complexes et représentation stratégique auprès d'organismes mondiaux.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Technologies & Coding */}
        <section id="03" className="relative">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-6xl font-headline font-black text-white/10">03</span>
                    <div className="h-px flex-grow bg-white/10" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-headline font-black text-white mb-8 tracking-tight">
                    Technologies & <br />Programmation
                  </h2>
                  <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                    Maîtrise complète de la stack technologique moderne, de l'architecture logicielle au déploiement de modèles d'intelligence artificielle.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-12">
                    {['JavaScript', 'Python', 'Ruby', 'React', 'Node.js', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest hover:bg-primary hover:border-primary transition-all cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <Cpu size={24} className="text-primary" />
                      IA & Science des Données
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                        <p className="text-slate-300"><span className="text-white font-bold">Machine Learning :</span> Conception de modèles prédictifs et génératifs.</p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                          <CheckCircle2 size={16} />
                        </div>
                        <p className="text-slate-300"><span className="text-white font-bold">Data Analysis :</span> Traitement de données massives pour l'aide à la décision.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="bg-slate-800/50 border border-white/10 rounded-[2.5rem] p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-8">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 text-xs font-mono text-slate-500 uppercase tracking-widest">Terminal Output</span>
                      </div>
                      <div className="font-mono text-sm text-slate-300 space-y-2 mb-12">
                        <p className="text-primary">$ baroka --expertise</p>
                        <p className="text-green-400">{">"} Loading full_stack_capabilities...</p>
                        <p className="text-green-400">{">"} Initializing AI_models...</p>
                        <p className="text-slate-500">// Architecture logicielle robuste</p>
                        <p className="text-slate-500">// Scalabilité et Performance</p>
                        <p className="text-white mt-4">Expertise confirmée en développement d'applications critiques et systèmes intelligents.</p>
                      </div>
                    </div>
                    
                    <a 
                      href="https://github.com/Baroka-wp/dive_ML" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl text-sm font-bold hover:bg-white hover:text-slate-900 transition-all group shadow-xl shadow-primary/20"
                    >
                      <Github size={20} />
                      Explorer mes Google Colab
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04. Talent Development */}
        <section id="04" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-headline font-black text-primary/20">04</span>
                <div className="h-px flex-grow bg-slate-100" />
              </div>
              <h2 className="text-4xl font-headline font-black text-slate-900 mb-6 tracking-tight">
                Développement <br />de Talents
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Catalyseur d'innovation et mentorat pour la nouvelle génération de talents technologiques. Un engagement profond pour l'impact social par l'éducation.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={openModal}
                  className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-[2rem] hover:border-primary hover:shadow-2xl transition-all group text-left"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                    <FileText size={24} />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-slate-900">Rapport d'Impact</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Africa Open Innovation Challenge</p>
                  </div>
                  <ExternalLink size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                </button>

                <a 
                  href="https://learnwith.irotoribaroka.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-[2rem] hover:border-primary hover:shadow-2xl transition-all group text-left"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                    <PlayCircle size={24} />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-slate-900">Masterclass IA</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Enregistrements INSTI 2023</p>
                  </div>
                  <ExternalLink size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative p-12 bg-primary rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px] flex flex-col justify-end">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
                    alt="Mentorat"
                    src="https://picsum.photos/seed/mentor/800/600"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute top-12 left-12">
                  <GraduationCap size={80} className="text-white/20" />
                </div>
                <div className="relative z-10 text-white">
                  <h3 className="text-5xl font-headline font-black mb-6 leading-none">Mentorat & <br />Transmission</h3>
                  <p className="text-xl opacity-90 max-w-md leading-relaxed">
                    Accompagner les innovateurs de demain pour transformer des idées en solutions concrètes à fort impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-48">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-black text-slate-900 mb-4 tracking-tight">Stack Technologique</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Un aperçu rapide des outils et langages que je maîtrise au quotidien.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'Agile', level: 'Expert', icon: '🔄' },
            { name: 'React', level: 'Expert', icon: '⚛️' },
            { name: 'Python', level: 'Expert', icon: '🐍' },
            { name: 'Node.js', level: 'Avancé', icon: '🟢' },
            { name: 'PostgreSQL', level: 'Avancé', icon: '🐘' },
            { name: 'Ruby', level: 'Avancé', icon: '💎' },
            { name: 'Docker', level: 'Intermédiaire', icon: '🐳' },
            { name: 'TensorFlow', level: 'Avancé', icon: '🧠' },
            { name: 'Git', level: 'Expert', icon: '🌿' },
            { name: 'Cloudflare', level: 'Avancé', icon: '☁️' },
            { name: 'TypeScript', level: 'Expert', icon: '📘' },
            { name: 'Tailwind', level: 'Expert', icon: '🎨' }
          ].map((skill) => (
            <div key={skill.name} className="p-6 bg-white border border-slate-100 rounded-2xl text-center hover:shadow-xl hover:border-primary transition-all group">
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{skill.icon}</div>
              <p className="font-bold text-slate-900 text-sm mb-1">{skill.name}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-48 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 rounded-full mb-12">
          <span className="text-primary text-6xl font-serif leading-none">“</span>
        </div>
        <blockquote className="text-4xl md:text-5xl font-headline font-light text-slate-900 leading-[1.1] tracking-tight mb-12">
          L'excellence technique ne prend son sens que lorsqu'elle est au service d'une <span className="text-primary font-black">coordination humaine</span> harmonieuse.
        </blockquote>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
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

