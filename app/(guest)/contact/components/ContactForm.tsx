"use client";

import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const ContactForm = () => {
  return (
    <motion.div {...fadeUp(0.1)}
      className="rounded-3xl p-8 lg:p-10 shadow-2xl"
      style={{ border: "1px solid rgba(5,173,238,0.12)" }}>
      <h2 className="text-3xl font-bold mb-2" style={{ color: "#0A0947" }}>Tell Us About Your Project</h2>
      <p className="text-gray-400 mb-8 text-sm">Fill in the details below and we&apos;ll respond within 24 hours.</p>
      <form className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Full Name *</label>
            <input type="text" placeholder="John Doe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all text-gray-800" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Email *</label>
            <input type="email" placeholder="john@example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all text-gray-800" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Phone</label>
            <input type="tel" placeholder="+256 700 000 000"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all text-gray-800" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Company</label>
            <input type="text" placeholder="Your company"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all text-gray-800" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Service Interested In</label>
          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all text-gray-700">
            <option>Select a service…</option>
            {["Mobile Applications", "Web Development", "Bespoke Software", "Cloud Solutions", "ICT Consultancy", "IT Support", "Security Audit", "Efris Integration", "Systems Integration"].map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Budget Range</label>
          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all text-gray-700">
            <option>Select a range…</option>
            {["Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet"].map(r => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Message *</label>
          <textarea rows={5} placeholder="Describe your project, goals, and any specific requirements..."
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all resize-none text-gray-800" />
        </div>
        <button type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          style={{ background: "linear-gradient(135deg, #05ADEE, #0496d5)", boxShadow: "0 8px 28px rgba(5,173,238,0.3)" }}>
          Send Message
          <Send className="w-4 h-4" />
        </button>
        <p className="text-xs text-gray-400 text-center">We&apos;ll respond within 24 hours · No spam, ever</p>
      </form>
    </motion.div>
  );
};

export default ContactForm;