import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, Send, User, Briefcase, Loader2, CheckCircle2, MessageSquare, Plus, X } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  created_at: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/testimonials');
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to fetch testimonials");
      }
      const data = await response.json();
      setTestimonials(data);
    } catch (error: any) {
      console.error("Error fetching testimonials:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', role: '', content: '', rating: 5 });
        fetchTestimonials();
        setTimeout(() => {
          setSuccess(false);
          setIsModalOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm rounded-full text-primary text-[10px] font-black uppercase tracking-[0.3em] border border-slate-100 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Recommandations
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-slate-900 leading-[0.9] tracking-tighter mb-8"
          >
            Ils ont fait <br />confiance à <span className="text-primary italic">l'expertise</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-body"
          >
            Découvrez les retours d'expérience de mes collaborateurs et clients. Chaque projet est une opportunité de créer un impact durable et mesurable.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="animate-spin text-primary" size={48} />
            <p className="text-slate-400 font-medium animate-pulse">Chargement des témoignages...</p>
          </div>
        ) : error ? (
          <div className="text-center py-32 bg-red-50 rounded-[3rem] border border-dashed border-red-200">
            <X size={64} className="mx-auto text-red-200 mb-6" />
            <p className="text-red-500 font-medium text-lg">Une erreur est survenue lors de la récupération des témoignages.</p>
            <p className="text-red-400 text-sm mt-2">{error}</p>
            <button 
              onClick={fetchTestimonials}
              className="mt-6 px-6 py-2 bg-red-100 text-red-600 rounded-full font-bold hover:bg-red-200 transition-colors"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {testimonials.length === 0 ? (
                <div className="col-span-full text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
                  <Quote size={64} className="mx-auto text-slate-100 mb-6" />
                  <p className="text-slate-400 font-medium text-lg">Aucune recommandation pour le moment.</p>
                  <p className="text-slate-300 text-sm mt-2">Soyez le premier à partager votre expérience !</p>
                </div>
              ) : (
                testimonials.map((t, index) => (
                  <motion.div
                    key={t.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative flex flex-col h-full"
                  >
                    <div className="absolute top-6 right-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                      <Quote size={80} fill="currentColor" />
                    </div>
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < t.rating ? 'text-yellow-400' : 'text-slate-100'}
                          fill={i < t.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed mb-8 font-body italic flex-grow">
                      "{t.content}"
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-primary font-black text-lg border border-slate-100">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 leading-tight">{t.name}</h4>
                        <p className="text-xs text-slate-400 font-black uppercase tracking-wider mt-1">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        )}

        {/* CTA Button */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center gap-4 px-10 py-6 bg-slate-900 text-white rounded-full font-black text-lg shadow-2xl hover:bg-primary transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">Laisser une recommandation</span>
            <Plus size={24} className="relative z-10 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </motion.div>
      </section>

      {/* Recommendation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors z-20"
              >
                <X size={24} className="text-slate-400" />
              </button>

              <div className="p-10 md:p-12">
                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-3xl font-headline font-black text-slate-900 mb-4">Merci infiniment !</h3>
                      <p className="text-slate-500 text-lg">Votre recommandation a été enregistrée et sera visible prochainement.</p>
                    </motion.div>
                  ) : (
                    <div key="form">
                      <div className="mb-10">
                        <h2 className="text-3xl font-headline font-black text-slate-900 mb-2">Votre recommandation</h2>
                        <p className="text-slate-500">Partagez votre avis sur notre collaboration.</p>
                      </div>

                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 flex items-center gap-2">
                            <User size={12} /> Nom et Prénom
                          </label>
                          <input
                            required
                            className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-300 transition-all outline-none font-medium"
                            placeholder="Ex: Jean Dupont"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 flex items-center gap-2">
                            <Briefcase size={12} /> Poste / Entreprise
                          </label>
                          <input
                            className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-300 transition-all outline-none font-medium"
                            placeholder="Ex: Directeur Marketing @ TechCorp"
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 flex items-center gap-2">
                            <MessageSquare size={12} /> Recommandation
                          </label>
                          <textarea
                            required
                            className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-300 transition-all outline-none font-medium resize-none"
                            placeholder="Décrivez votre expérience..."
                            rows={4}
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                          ></textarea>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setFormData({ ...formData, rating: star })}
                                className={`transition-all ${formData.rating >= star ? 'text-yellow-400 scale-110' : 'text-slate-200 hover:text-yellow-200'}`}
                              >
                                <Star size={20} fill={formData.rating >= star ? 'currentColor' : 'none'} />
                              </button>
                            ))}
                          </div>
                          
                          <button
                            disabled={submitting}
                            className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center gap-3 disabled:opacity-50"
                            type="submit"
                          >
                            {submitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={18} />}
                            Envoyer
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
