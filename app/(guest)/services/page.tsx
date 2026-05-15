"use client";

import {
  Smartphone, Globe, Code, Lightbulb, Headphones,
  Shield, Cloud, Network, ArrowRight, Receipt,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import ServicesHero from "../components/ServicesHero";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
  viewport: { once: true },
});

const Services = () => {
  const services = [
    {
      icon: Receipt,
      title: "Efris Integration",
      tag: "Compliance",
      description:
        "Professional integration of EFRIS solutions with POS, ERP, accounting, and invoicing systems for compliant electronic fiscal receipting.",
      features: ["Retail Shops", "Restaurants & Bars", "Supermarkets", "Pharmacies"],
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      tag: "Mobile",
      description:
        "Native and cross-platform mobile apps for iOS and Android with seamless user experiences and offline capabilities.",
      features: ["iOS & Android", "Flutter", "Offline Support", "Push Notifications"],
    },
    {
      icon: Globe,
      title: "Web Development",
      tag: "Web",
      description:
        "Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance.",
      features: ["React & Next.js", "Progressive Web Apps", "Real-time Features", "SEO Optimized"],
    },
    {
      icon: Code,
      title: "Bespoke Software",
      tag: "Enterprise",
      description:
        "Custom enterprise software solutions tailored to your specific business requirements and workflows.",
      features: ["Custom Development", "API Integration", "Database Design", "Scalable Architecture"],
    },
    {
      icon: Lightbulb,
      title: "ICT Consultancy",
      tag: "Strategy",
      description:
        "Strategic IT consulting to optimise your technology infrastructure and develop comprehensive digital strategies.",
      features: ["Tech Assessment", "Digital Strategy", "Architecture Design", "Best Practices"],
    },
    {
      icon: Headphones,
      title: "IT Support",
      tag: "Support",
      description:
        "24/7 technical support and maintenance to keep your systems running smoothly without interruption.",
      features: ["24/7 Monitoring", "Rapid Response", "Preventive Maintenance", "System Updates"],
    },
    {
      icon: Shield,
      title: "IT Security Audit",
      tag: "Security",
      description:
        "Comprehensive security assessments and penetration testing to protect your digital assets and ensure compliance.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Compliance Audit", "Security Training"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      tag: "Cloud",
      description:
        "Scalable cloud infrastructure and migration services leveraging AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "Infrastructure Setup", "Auto Scaling", "Cost Optimisation"],
    },
    {
      icon: Network,
      title: "Systems Integration",
      tag: "Integration",
      description:
        "Seamless integration of disparate systems for unified business operations and improved data flow.",
      features: ["API Development", "Data Synchronisation", "Legacy Integration", "Middleware Solutions"],
    },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Deep dive into your needs, goals, and existing systems." },
    { step: "02", title: "Planning", description: "Strategic roadmap, architecture, and timeline design." },
    { step: "03", title: "Development", description: "Agile delivery with regular demos and feedback loops." },
    { step: "04", title: "Support", description: "Ongoing maintenance, monitoring, and optimisation." },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      <ServicesHero />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div className="text-center mb-16" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>
              What We Offer
            </p>
            <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>
              Built for Every Challenge
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl p-8 cursor-default overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid #e8edf2",
                  boxShadow: "0 2px 16px rgba(10,9,71,0.04)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(5,173,238,0.4)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(5,173,238,0.12)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#e8edf2";
                  e.currentTarget.style.boxShadow = "0 2px 16px rgba(10,9,71,0.04)";
                }}
              >
                {/* Hover background wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{ background: "linear-gradient(135deg, rgba(5,173,238,0.03) 0%, transparent 60%)" }} />

                {/* Top row: icon + tag */}
                <div className="relative flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(5,173,238,0.1)" }}
                  >
                    <service.icon className="w-7 h-7 transition-colors duration-300"
                      style={{ color: "#05ADEE" }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mt-1"
                    style={{ background: "rgba(10,9,71,0.06)", color: "#0A0947" }}
                  >
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 relative" style={{ color: "#0A0947" }}>
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 relative">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-7 relative">
                  {service.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#05ADEE" }} />
                      <span className="text-xs text-gray-500">{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <div className="relative flex items-center gap-2 text-sm font-semibold" style={{ color: "#05ADEE" }}>
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-b-3xl"
                  style={{ background: "linear-gradient(90deg, #05ADEE, #38d2f5)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d1168 60%, #0a3070 100%)" }}
      >
        {/* Radial centre glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(5,173,238,0.07) 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>
              Our Process
            </p>
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
                transition={{ delay: index * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
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

      {/* ─── WHY US STRIP ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" {...fadeUp()}>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>
              Why Komusoft
            </p>
            <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>
              The Difference We Make
            </h2>
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
                    ? "linear-gradient(135deg, #0A0947, #0d1575)"
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

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-[2.5rem] p-14 md:p-20"
            style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d1168 55%, #0a3070 100%)" }}
            {...fadeUp()}
          >
            {/* Glows */}
            <div className="absolute top-0 right-0 w-125 h-125 rounded-full pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 65%)", transform: "translate(30%, -40%)" }} />
            <div className="absolute bottom-0 left-0 w-75 h-75 rounded-full pointer-events-none opacity-10"
              style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(-30%, 40%)" }} />

            {/* Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }} />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-5" style={{ color: "#05ADEE" }}>
                Ready to start?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Let&apos;s Discuss <br />
                <span style={{
                  background: "linear-gradient(90deg, #05ADEE, #38d2f5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Your Project
                </span>
              </h2>
              <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
                Tell us about your requirements and we&apos;ll help you find the right solution — fast.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #05ADEE, #0496d5)",
                  boxShadow: "0 8px 32px rgba(5,173,238,0.3)",
                }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;