"use client";

import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactHero from '../components/ContactHero';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const Contact = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      <ContactHero />

      <section className="md:py-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Info side */}
            <div className="space-y-8">
              <motion.div {...fadeUp()}>
                <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Contact Details</p>
                <h2 className="text-4xl font-bold mb-4" style={{ color: "#0A0947" }}>Reach Us Directly</h2>
                <p className="text-lg text-gray-500">Every inquiry is handled personally. We&apos;re not a ticketing system — you talk to real people who understand technology.</p>
              </motion.div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "komusoft@gmail.com", href: "mailto:komusoft@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+256 765 916 207", href: "tel:+256765916207" },
                  { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: null },
                  { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8AM–6PM · Sat: 9AM–2PM", href: null },
                ].map((item, i) => (
                  <motion.div key={i} {...fadeUp(i * 0.08)}
                    className="flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-default"
                    style={{ background: "#f8fafc", border: "1px solid rgba(5,173,238,0.1)" }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #0A0947, #0d1575)" }}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="font-semibold hover:underline" style={{ color: "#05ADEE" }}>{item.value}</a>
                        : <p className="font-semibold text-gray-700">{item.value}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 24/7 support card */}
              <motion.div {...fadeUp(0.35)}
                className="relative overflow-hidden rounded-2xl p-6"
                style={{ background: "linear-gradient(135deg, #0A0947, #0d1575)" }}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-20"
                  style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                <MessageSquare className="w-8 h-8 mb-3" style={{ color: "#05ADEE" }} />
                <h3 className="text-lg font-bold text-white mb-2">24/7 Emergency Support</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Existing clients can reach our on-call engineers around the clock for critical issues.
                </p>
              </motion.div>

              {/* Social / map teaser */}
              <motion.div {...fadeUp(0.45)}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(5,173,238,0.15)", height: "180px", background: "linear-gradient(135deg, #e8f4fd, #f0f9ff)" }}>
                <div className="h-full flex flex-col items-center justify-center gap-2">
                  <MapPin className="w-8 h-8" style={{ color: "#05ADEE" }} />
                  <p className="font-semibold" style={{ color: "#0A0947" }}>Kampala, Uganda</p>
                  <p className="text-sm text-gray-400">East Africa&apos;s technology hub</p>
                </div>
              </motion.div>
            </div>

            {/* Full form */}
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
          </div>
        </div>
      </section>

      {/* ─── WHAT HAPPENS NEXT ─────────────────────────────────────── */}
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

      {/* ─── FAQ ────────────────────────────────────────────────────── */}
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
    </div>
  );
};

export default Contact;