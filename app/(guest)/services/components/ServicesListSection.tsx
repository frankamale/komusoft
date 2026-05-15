"use client";

import {
  Smartphone, Globe, Code, Lightbulb, Headphones,
  Shield, Cloud, Network, ArrowRight, Receipt,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const ServicesListSection = () => {
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

  return (
    <section className="md:py-24 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div className="text-center md:mb-16 mb-8" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>What We Offer</p>
          <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>Built for Every Challenge</h2>
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
  );
};

export default ServicesListSection;