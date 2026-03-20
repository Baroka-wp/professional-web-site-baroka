import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Linkedin, Github, Loader2, CheckCircle2, Phone, Star, GraduationCap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 py-24 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Intro Section */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.3em] border border-primary/20"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Contactez-moi
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-slate-900 leading-[0.9] tracking-tighter">
              Construisons <br />quelque chose <span className="text-primary italic">ensemble</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-md font-body">
              Vous recherchez un coordonnateur pour un projet d'envergure ou souhaitez-vous discuter d'ingénierie durable en Afrique ? Écrivez-moi.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="space-y-6">
            <a href="mailto:birotori@gmail.com" className="flex items-center p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:shadow-primary/5 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Mail size={32} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Écrivez-moi</p>
                <p className="text-2xl font-bold text-slate-900">birotori@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:shadow-primary/5 group">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mr-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <MapPin size={32} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Localisation</p>
                <p className="text-2xl font-bold text-slate-900">Abomey-Calavi, Bénin</p>
              </div>
            </div>
          </div>

          {/* Social Links & Affiliations */}
          <div className="pt-12 space-y-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Réseaux Professionnels</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/baroka/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-slate-900 text-white hover:bg-primary transition-all shadow-xl shadow-slate-200 font-bold text-sm"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Baroka-wp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 hover:border-primary hover:text-primary transition-all shadow-sm font-bold text-sm"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
            </div>
            
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Communauté & Leadership</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <Star size={24} />
                  </div>
                  <span className="font-bold text-sm text-slate-900 leading-tight">Pan-African Youth Global Summit</span>
                </div>
                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                    <GraduationCap size={24} />
                  </div>
                  <span className="font-bold text-sm text-slate-900 leading-tight">Alumni YALI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white p-12 md:p-20 rounded-[3.5rem] shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 relative z-10"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-headline font-black text-slate-900 mb-4">Message Envoyé !</h2>
                <p className="text-slate-500 mb-12 max-w-sm mx-auto">Merci pour votre message. Je reviendrai vers vous dans les plus brefs délais.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-primary transition-all"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1" htmlFor="name">Nom Complet</label>
                    <input
                      required
                      className="w-full px-8 py-6 bg-slate-50 border-2 border-transparent rounded-[2rem] focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-300 transition-all outline-none font-medium"
                      id="name"
                      placeholder="Jean Dupont"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1" htmlFor="email">Adresse Email</label>
                    <input
                      required
                      className="w-full px-8 py-6 bg-slate-50 border-2 border-transparent rounded-[2rem] focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-300 transition-all outline-none font-medium"
                      id="email"
                      placeholder="jean@exemple.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1" htmlFor="message">Votre Message</label>
                  <textarea
                    required
                    className="w-full px-8 py-6 bg-slate-50 border-2 border-transparent rounded-[2rem] focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-300 transition-all outline-none font-medium resize-none"
                    id="message"
                    placeholder="Parlez-moi de votre projet ou de votre vision..."
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-bold bg-red-50 p-4 rounded-2xl border border-red-100">
                    {errorMessage}
                  </p>
                )}

                <div className="pt-6">
                  <button
                    disabled={status === 'loading'}
                    className="w-full md:w-auto bg-primary text-white px-16 py-6 rounded-[2rem] font-bold text-xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                  >
                    {status === 'loading' ? (
                      <>
                        Envoi en cours...
                        <Loader2 size={24} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Envoyer le Message
                        <Send size={24} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-400 mt-8 font-medium italic">Je réponds généralement sous 24 à 48 heures ouvrables.</p>
                </div>
              </form>
            )}
          </div>
          
          {/* Decorative Map Placeholder */}
          <div className="mt-16 h-72 rounded-[3.5rem] overflow-hidden grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 relative group shadow-2xl shadow-slate-200 border border-slate-100">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              alt="Carte"
              src="https://picsum.photos/seed/benin/1200/400"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
              <div className="bg-white px-10 py-5 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={28} />
                </div>
                <span className="text-xl font-bold text-slate-900">Basé à Abomey-Calavi, Bénin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
