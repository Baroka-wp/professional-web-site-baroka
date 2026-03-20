import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    company: 'GLOBODAI Software',
    period: '2022 — 2025',
    role: 'Développeur Principal & Chef de Projet',
    description: 'Direction technique et pilotage de projets logiciels d\'envergure, assurant la transition numérique et l\'excellence opérationnelle.',
    tags: ['Management', 'Architecture Logicielle'],
    color: 'border-primary'
  },
  {
    company: 'ProSuite Africa',
    period: '2023 — 2024',
    role: 'Coordinateur Local & Développeur Principal',
    description: 'Coordination des opérations locales et développement de solutions sur mesure pour le marché africain francophone.',
    tags: ['Coordination Locale', 'Fullstack'],
    color: 'border-primary-container'
  },
  {
    company: 'ADNJ Japan',
    period: '2020 — Présent',
    role: 'Coordinateur de Projet',
    description: 'Gestion des initiatives de l\'Africa Diaspora Network Japan, favorisant les ponts culturels et économiques entre le Japon et l\'Afrique.',
    tags: ['Relations Publiques', 'Engagement de la diaspora'],
    color: 'border-tertiary-container'
  },
  {
    company: 'Africa Samurai Consulting',
    period: '2018 — Présent',
    role: 'Directeur Général',
    description: 'Leadership stratégique et supervision de l\'Africa Open Innovation Challenge, catalysant l\'entrepreneuriat technologique.',
    tags: ['Conseil Stratégique', 'Open Innovation'],
    color: 'border-primary'
  },
  {
    company: 'Itt4africa',
    period: '2015 — 2016',
    role: 'Chef de Projet',
    description: 'Gestion de projets technologiques visant à améliorer la connectivité et les services IT sur le continent.',
    tags: ['Gestion IT', 'Afrique Tech'],
    color: 'border-secondary'
  }
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-6 py-16 md:py-24"
    >
      <section className="mb-24 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20"
        >
          Parcours & Impact
        </motion.div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface mb-8 leading-tight tracking-tight">
          Mon Parcours <br /><span className="text-primary">Professionnel</span>
        </h1>
        <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Une trajectoire ancrée dans l'innovation technologique, le leadership stratégique et le développement panafricain.
        </p>
      </section>

      <div className="relative space-y-16">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-16 text-right' : 'justify-start pl-16 text-left'}`}>
              <div className="space-y-2">
                <span className="text-primary font-black text-sm tracking-[0.2em] uppercase opacity-50">{exp.period}</span>
                <h3 className="font-headline text-3xl font-bold text-on-surface group-hover:text-primary transition-colors">{exp.company}</h3>
              </div>
            </div>

            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-white border-2 border-slate-200 rounded-full -translate-x-1/2 z-10 shadow-xl flex items-center justify-center group-hover:border-primary transition-all duration-500">
              <div className="w-3 h-3 bg-slate-200 rounded-full group-hover:bg-primary transition-all duration-500"></div>
            </div>

            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pl-12 md:pl-16' : 'pr-12 md:pr-16 pl-12 md:pl-0'}`}>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group-hover:-translate-y-1">
                <span className="md:hidden text-primary font-black text-xs tracking-[0.2em] uppercase mb-3 block opacity-50">{exp.period}</span>
                <h4 className="font-headline text-2xl font-bold text-on-surface mb-4">{exp.role}</h4>
                <p className="text-on-surface-variant mb-8 font-body leading-relaxed text-lg">{exp.description}</p>
                <div className="flex flex-wrap gap-3">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] rounded-full font-bold uppercase tracking-widest border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* NHK Video Section */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mt-40 mb-24"
      >
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface mb-6 tracking-tight">
            Rayonnement <span className="text-primary">International</span>
          </h2>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Reportage NHK World : Découvrez mon engagement pour l'innovation et le renforcement des liens technologiques entre le Japon et l'Afrique.
          </p>
        </div>
        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-100">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/TGKhrOFIjjY"
            title="NHK World Reportage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      <div className="mt-32 p-16 rounded-[3rem] bg-slate-900 text-white text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 relative z-10 tracking-tight">Prêt à collaborer ?</h2>
        <p className="font-body text-xl mb-12 opacity-70 relative z-10 max-w-xl mx-auto leading-relaxed">Transformons vos visions technologiques en réalités opérationnelles à fort impact.</p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-12 py-5 bg-primary text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-primary/40 transition-all relative z-10 group active:scale-95 text-lg"
        >
          Me contacter
          <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
        </Link>
      </div>
    </motion.div>
  );
}
