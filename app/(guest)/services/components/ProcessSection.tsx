"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const ProcessSection = () => {
  const process = [
    { step: "01", title: "Discovery", description: "Deep dive into your needs, goals, and existing systems." },
    { step: "02", title: "Planning", description: "Strategic roadmap, architecture, and timeline design." },
    { step: "03", title: "Development", description: "Agile delivery with regular demos and feedback loops." },
    { step: "04", title: "Support", description: "Ongoing maintenance, monitoring, and optimisation." },
  ];

  return (
    <section
      className="md:py-24 py-12 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d1168 60%, #0a3070 100%)" }}
    >
      {/* Radial centre glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(5,173,238,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div className="text-center md:mb-16 mb-8" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Our Process</p>
          <h2 className="text-4xl font-bold text-white">How We Work</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            A proven methodology that ensures successful project delivery every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-14 left-[12.5%] right-[12.5%] h-px hidden md:block"
            style={{ background: "linear-gradient(90deg, transparent, rgba(5,173,238,0.5), rgba(5,173,238,0.5), transparent)" }} />

          {process.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
              viewport={{ once: true }}
              className="relative text-center group"
            >
              <div
                className="w-28 h-28 rounded-full flex flex-col items-center justify-center mx-auto mb-7 relative z-10 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(5,173,238,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="text-2xl font-bold" style={{ color: "#05ADEE" }}>{phase.step}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;