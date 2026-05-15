"use client";

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const FAQSection = () => {
  return (
    <section className="md:py-24 py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>FAQ</p>
          <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>Common Questions</h2>
        </motion.div>
        <div className="space-y-4">
          {[
            { q: "How quickly can you start a project?", a: "Typically within 1–2 weeks of signing off a proposal, depending on scope and team availability." },
            { q: "Do you work with clients outside Uganda?", a: "Yes — we've delivered solutions across East Africa and work with international NGOs and agencies." },
            { q: "What's your typical project timeline?", a: "Small projects (4–8 weeks), mid-size (2–4 months), enterprise (4–12 months). We provide accurate timelines after the discovery call." },
            { q: "Do you offer post-launch support?", a: "Absolutely. We provide SLA-based maintenance packages and 24/7 emergency support for all production systems." },
          ].map((faq, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)}
              className="rounded-2xl p-6 transition-all duration-200 hover:shadow-md"
              style={{ background: "#f8fafc", border: "1px solid rgba(5,173,238,0.1)" }}>
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(5,173,238,0.1)" }}>
                  <span className="text-xs font-bold" style={{ color: "#05ADEE" }}>Q</span>
                </div>
                <div>
                  <p className="font-bold mb-2" style={{ color: "#0A0947" }}>{faq.q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;