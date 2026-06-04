"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const faqs = [
  {
    q: "What products and services does Komusoft offer?",
    a: "We build custom software and offer ready-made business systems: Business Manager (offline-ready POS, inventory and accounting), Business Assistant (cloud platform with an offline mobile app) and the Hybrid Solution. We also provide EFRIS integration, web and mobile development, cloud solutions, ICT consultancy and IT support.",
  },
  {
    q: "Are your systems EFRIS compliant?",
    a: "Yes. Business Manager and Business Assistant are URA EFRIS-ready, and we also integrate EFRIS into existing POS, ERP, accounting and invoicing systems for compliant electronic fiscal receipting.",
  },
  {
    q: "Do your systems work offline or without reliable internet?",
    a: "Yes. Business Manager runs fully offline on a local network (LAN), and Business Assistant includes an offline mobile app for POS terminals that syncs automatically when a connection returns.",
  },
  {
    q: "How quickly can you start a project?",
    a: "Typically within 1-2 weeks of signing off a proposal, depending on scope and team availability.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Small projects take 4-8 weeks, mid-size 2-4 months, and enterprise systems 4-12 months. We provide accurate timelines after the discovery call.",
  },
  {
    q: "Do you work with clients outside Uganda?",
    a: "Yes. We've delivered solutions across East Africa and work with international NGOs and agencies.",
  },
  {
    q: "Can you migrate our existing data and integrate with other tools?",
    a: "Yes. We import data from your current systems and connect to third-party services through APIs and integrations, so you keep your history and existing workflows.",
  },
  {
    q: "Do you provide training and post-launch support?",
    a: "Absolutely. We train your team during rollout and provide SLA-based maintenance packages, with support available for all production systems.",
  },
  {
    q: "How much does it cost?",
    a: "Business Assistant Cloud has transparent monthly plans (with or without EFRIS), and custom software is quoted after a discovery call. Contact us for a tailored quote or to book a demo.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const FAQSection = () => {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="md:py-24 py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>FAQ</p>
          <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>Common Questions</h2>
          <p className="text-gray-500 mt-3">Tap a question to see the answer.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open.has(i);
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <motion.div
                key={i}
                {...fadeUp(i * 0.05)}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: "#f8fafc",
                  border: isOpen ? "1px solid rgba(5,173,238,0.4)" : "1px solid rgba(5,173,238,0.1)",
                }}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center gap-4 p-6 text-left cursor-pointer"
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(5,173,238,0.1)" }}
                    >
                      <span className="text-xs font-bold" style={{ color: "#05ADEE" }}>Q</span>
                    </span>
                    <span className="flex-1 font-bold" style={{ color: "#0A0947" }}>{faq.q}</span>
                    <ChevronDown
                      className="w-5 h-5 shrink-0 transition-transform duration-300"
                      style={{ color: "#05ADEE", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pl-[4.5rem] text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
