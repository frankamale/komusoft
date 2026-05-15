"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Why Komusoft</p>
          <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>The Difference We Make</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "12+", label: "Years of Expertise", sub: "Deep domain knowledge" },
            { value: "50+", label: "Projects Delivered", sub: "On time, on budget" },
            { value: "8+", label: "Industries Served", sub: "Health, Gov, Finance & more" },
            { value: "24/7", label: "Support Coverage", sub: "Always here when you need us" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-3xl p-8 text-center transition-shadow duration-300 hover:shadow-xl"
              style={{
                background: i % 2 === 1
                  ? "linear-gradient(135deg, #0A0947, #0d1168)"
                  : "linear-gradient(135deg, #f0f9ff, #e6f6fe)",
                border: "1px solid rgba(5,173,238,0.12)",
              }}
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: i % 2 === 1 ? "#05ADEE" : "#0A0947" }}
              >
                {item.value}
              </div>
              <div
                className="font-semibold mb-1 text-sm"
                style={{ color: i % 2 === 1 ? "rgba(255,255,255,0.85)" : "#0A0947" }}
              >
                {item.label}
              </div>
              <div
                className="text-xs"
                style={{ color: i % 2 === 1 ? "rgba(255,255,255,0.45)" : "#9ca3af" }}
              >
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;