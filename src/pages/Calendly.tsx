import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Calendly() {
  return (
    <>
      <SEO
        title="Prendre rendez-vous"
        description="Réservez un créneau avec Irotori Baroka via Calendly."
        canonical="https://baroka.com/calendly"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 sm:px-6 py-6 sm:py-8 md:py-10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-3xl shadow-2xl shadow-slate-200/70 overflow-hidden">
            <div className="px-6 sm:px-8 py-6 border-b border-slate-100 bg-white/80 backdrop-blur">
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-2">
                Rendez-vous
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-slate-900">
                Calendly - Irotori Baroka
              </h1>
            </div>

            <iframe
              title="Calendly - Prendre rendez-vous"
              src="https://calendly.com/baroka/connecting-meeting?hide_gdpr_banner=1"
              className="w-full h-[78vh] min-h-[720px]"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
