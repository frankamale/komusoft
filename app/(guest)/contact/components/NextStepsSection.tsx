"use client";

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const NextStepsSection = () => {
  return (
    <section className="md:py-24 py-12 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d1168 60%, #0a3070 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(5,173,238,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Next Steps</p>
          <h2 className="text-4xl font-bold text-white">What Happens After You Reach Out</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="absolute top-10 left-[12%] right-[12%] h-px hidden md:block"
            style={{ background: "linear-gradient(90deg, transparent, rgba(5,173,238,0.4), rgba(5,173,238,0.4), transparent)" }} />
          {[
            { step: "01", title: "Initial Response", description: "We acknowledge your inquiry within 24 hours and assign a dedicated point of contact." },
            { step: "02", title: "Discovery Call", description: "A free consultation to deeply understand your needs, constraints, and goals." },
            { step: "03", title: "Detailed Proposal", description: "You receive a clear scope, timeline, and budget breakdown — no surprises." },
            { step: "04", title: "Project Kickoff", description: "Once aligned, we onboard your team and begin delivering with agile sprints." },
          ].map((item, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} className="relative text-center group">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(5,173,238,0.35)", backdropFilter: "blur(8px)" }}>
                <span className="text-lg font-bold" style={{ color: "#05ADEE" }}>{item.step}</span>
              </div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextStepsSection;