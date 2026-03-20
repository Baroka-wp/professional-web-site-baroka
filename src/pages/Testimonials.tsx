import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, Send, User, Briefcase, Loader2, CheckCircle2, MessageSquare } from 'lucide-react';

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
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
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
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
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
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Left Side: Intro & Form */}
        <div className="lg:col-span-5 space-y-16">
          <div className="space-y-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.3em] border border-primary/20"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Témoignages
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-slate-900 leading-[0.9] tracking-tighter">
              Votre avis <br />compte <span className="text-primary italic">énormément</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-md font-body">
              Partagez votre expérience de collaboration ou laissez une recommandation. Votre feedback aide à construire un impact durable.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
            
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8 relative z-10"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-headline font-black text-slate-900 mb-2">Merci !</h3>
                  <p className="text-slate-500">Votre recommandation a été ajoutée avec succès.</p>
                </motion.div>
              ) : (
                <form key="form" className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1 flex items-center gap-2">
                      <User size={14} /> Nom Complet
                    </label>
                    <input
                      required
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-300 transition-all outline-none font-medium"
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1 flex items-center gap-2">
                      <Briefcase size={14} /> Poste / Entreprise
                    </label>
                    <input
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-300 transition-all outline-none font-medium"
                      placeholder="CEO @ TechAfrica"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1 flex items-center gap-2">
                      <MessageSquare size={14} /> Votre Recommandation
                    </label>
                    <textarea
                      required
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-primary focus:bg-white text-slate-900 placeholder:text-slate-300 transition-all outline-none font-medium resize-none"
                      placeholder="Partagez votre expérience..."
                      rows={4}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 ml-1">Note</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className={`transition-all ${formData.rating >= star ? 'text-yellow-400 scale-110' : 'text-slate-200'}`}
                        >
                          <Star size={24} fill={formData.rating >= star ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    disabled={submitting}
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    type="submit"
                  >
                    {submitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                    Publier ma recommandation
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Testimonials List */}
        <div className="lg:col-span-7">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="animate-spin text-primary" size={48} />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              <AnimatePresence>
                {testimonials.length === 0 ? (
                  <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                    <Quote size={48} className="mx-auto text-slate-200 mb-4" />
                    <p className="text-slate-400 font-medium">Aucun témoignage pour le moment. Soyez le premier !</p>
                  </div>
                ) : (
                  testimonials.map((t, index) => (
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative"
                    >
                      <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                        <Quote size={64} fill="currentColor" />
                      </div>
                      
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < t.rating ? 'text-yellow-400' : 'text-slate-100'}
                            fill={i < t.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>

                      <p className="text-xl text-slate-700 leading-relaxed mb-8 font-body italic relative z-10">
                        "{t.content}"
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-lg">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{t.name}</h4>
                          <p className="text-sm text-slate-400 font-medium">{t.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
