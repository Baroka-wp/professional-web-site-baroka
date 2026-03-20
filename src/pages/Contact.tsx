import { motion } from 'motion/react';
import { Mail, Globe, MapPin, Send, Star, GraduationCap, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 py-16 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Intro Section */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest border border-primary/20"
            >
              Contactez-moi
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
              Construisons <br />quelque chose <span className="text-primary italic">ensemble</span>.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-md font-body">
              Vous recherchez un coordonnateur pour un projet d'envergure ou souhaitez-vous discuter d'ingénierie durable en Afrique ? Écrivez-moi.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 gap-6">
            <a href="mailto:birotori@gmail.com" className="flex items-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Écrivez-moi</p>
                <p className="text-xl font-bold text-on-surface">birotori@gmail.com</p>
              </div>
            </a>
            <a href="https://irotoribaroka.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Globe size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Site Web</p>
                <p className="text-xl font-bold text-on-surface">irotoribaroka.com</p>
              </div>
            </a>
            <div className="flex items-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Localisation</p>
                <p className="text-xl font-bold text-on-surface">Abomey-Calavi, Bénin</p>
              </div>
            </div>
          </div>

          {/* Social Links & Affiliations */}
          <div className="pt-8 space-y-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Réseaux Professionnels</p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-slate-900 text-white hover:bg-primary transition-all shadow-lg shadow-slate-200 font-bold text-sm">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a href="#" className="flex items-center gap-3 px-8 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm font-bold text-sm">
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Communauté & Leadership</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <Star size={20} />
                  </div>
                  <span className="font-bold text-sm text-on-surface leading-tight">Pan-African Youth Global Summit</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <GraduationCap size={20} />
                  </div>
                  <span className="font-bold text-sm text-on-surface leading-tight">Alumni YALI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1" htmlFor="name">Nom Complet</label>
                  <input
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] focus:border-primary focus:bg-white text-on-surface placeholder:text-slate-300 transition-all outline-none font-medium"
                    id="name"
                    placeholder="Jean Dupont"
                    type="text"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1" htmlFor="email">Adresse Email</label>
                  <input
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] focus:border-primary focus:bg-white text-on-surface placeholder:text-slate-300 transition-all outline-none font-medium"
                    id="email"
                    placeholder="jean@exemple.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1" htmlFor="subject">Sujet</label>
                <div className="relative">
                  <select
                    className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] focus:border-primary focus:bg-white text-on-surface transition-all outline-none font-medium appearance-none cursor-pointer"
                    id="subject"
                  >
                    <option>Demande de Projet</option>
                    <option>Intervention / Conférence</option>
                    <option>Consultation</option>
                    <option>Autre</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                    <Send size={16} className="rotate-90" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1" htmlFor="message">Votre Message</label>
                <textarea
                  className="w-full px-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] focus:border-primary focus:bg-white text-on-surface placeholder:text-slate-300 transition-all outline-none font-medium resize-none"
                  id="message"
                  placeholder="Parlez-moi de votre projet ou de votre vision..."
                  rows={6}
                ></textarea>
              </div>
              <div className="pt-6">
                <button
                  className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-[1.5rem] font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 active:scale-95"
                  type="submit"
                >
                  Envoyer le Message
                  <Send size={22} />
                </button>
                <p className="text-xs text-slate-400 mt-6 font-medium italic">Je réponds généralement sous 24 à 48 heures ouvrables.</p>
              </div>
            </form>
          </div>
          
          {/* Decorative Map Placeholder */}
          <div className="mt-12 h-64 rounded-[3rem] overflow-hidden grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 relative group shadow-2xl shadow-slate-200 border border-slate-100">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              alt="Carte"
              src="https://picsum.photos/seed/benin/1200/400"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
              <div className="bg-white px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border border-slate-100">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <span className="text-lg font-bold text-on-surface">Basé à Abomey-Calavi, Bénin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
