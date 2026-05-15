"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Mega Standard Supermarket", role: "Retail Chain, Kampala", quote: "Business Manager transformed our multi-location stock control. We went from daily stock discrepancies to near-zero errors." },
    { name: "Lifecare Diagnostics", role: "Healthcare, Uganda", quote: "The workflow automation alone saved our lab team hours every day. Turnaround times improved dramatically." },
  ];

  return (
    <section className="md:py-24 sm:py-20 py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Client Voices</p>
          <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>Trusted by Leading Organisations</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} {...fadeUp(i * 0.12)}
              className="relative rounded-3xl p-8"
              style={{ background: "#f8fafc", border: "1px solid rgba(5,173,238,0.1)" }}>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#05ADEE" }} />)}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #0A0947, #05ADEE)" }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0A0947" }}>{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;