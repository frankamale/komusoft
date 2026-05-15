"use client";

import {
  Building2, ShoppingBag, HeartPulse, Truck,
  FlaskConical, Database,
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const FeaturedProjectsSection = () => {
  const projects = [
    {
      icon: Building2,
      client: "United Nations",
      title: "Various Digital Platforms",
      description: "Multiple web and mobile platforms for UN operations in East Africa, supporting field operations, data collection, and program management across multiple countries.",
      industry: "International Development",
      year: "2015–Present",
      impact: ["Multi-country deployment", "Real-time data collection", "Mobile-first design"],
      tags: ["Web", "Mobile", "Cloud", "Multi-platform"],
      gradient: "linear-gradient(135deg, #0A0947, #1a3a8a)",
      accent: "#05ADEE",
    },
    {
      icon: ShoppingBag,
      client: "Mega Standard Supermarket",
      title: "Retail Operations Management",
      description: "Comprehensive POS, inventory, and business management platform handling multi-location retail operations with real-time synchronisation.",
      industry: "Retail",
      year: "2019",
      impact: ["Multi-location support", "Offline capabilities", "Inventory automation"],
      tags: ["POS", "Inventory", "Analytics", "Retail"],
      gradient: "linear-gradient(135deg, #0d3170, #0a5080)",
      accent: "#38d2f5",
    },
    {
      icon: HeartPulse,
      client: "Lifecare Diagnostics",
      title: "Diagnostic Systems (LIMS)",
      description: "Laboratory information management system with automated workflows, result delivery, and quality control for medical diagnostics.",
      industry: "Healthcare",
      year: "2018",
      impact: ["Automated workflows", "Quality assurance", "Fast turnaround"],
      tags: ["Healthcare", "LIMS", "Automation"],
      gradient: "linear-gradient(135deg, #0A0947, #0a3b6e)",
      accent: "#05ADEE",
    },
    {
      icon: Truck,
      client: "APONYE Uganda Ltd",
      title: "Weighbridge Management",
      description: "Automated weighbridge system with real-time data capture, reporting, and integration capabilities for logistics operations.",
      industry: "Logistics",
      year: "2020",
      impact: ["IoT integration", "Real-time monitoring", "Automated reporting"],
      tags: ["IoT", "Automation", "Integration"],
      gradient: "linear-gradient(135deg, #0d1575, #0a4060)",
      accent: "#38d2f5",
    },
    {
      icon: FlaskConical,
      client: "Ministry of Energy",
      title: "Petroleum Laboratory LIMS",
      description: "Quality control and testing management platform for petroleum laboratory operations with compliance tracking and full audit trails.",
      industry: "Government",
      year: "2021",
      impact: ["Regulatory compliance", "Quality control", "Audit trails"],
      tags: ["LIMS", "Quality Control", "Compliance"],
      gradient: "linear-gradient(135deg, #0A0947, #081e5e)",
      accent: "#05ADEE",
    },
    {
      icon: Database,
      client: "Uganda Communications Commission",
      title: "Data Repository Platform",
      description: "Centralised data management and reporting system for telecommunications regulatory data with advanced analytics and API access.",
      industry: "Telecommunications",
      year: "2022",
      impact: ["Data centralisation", "Advanced analytics", "API access"],
      tags: ["Data Management", "Reporting", "API"],
      gradient: "linear-gradient(135deg, #0d2060, #0a4070)",
      accent: "#38d2f5",
    },
  ];

  return (
    <section className=" md:py-24 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp()}>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Case Studies</p>
          <h2 className="text-4xl font-bold" style={{ color: "#0A0947" }}>Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} {...fadeUp((index % 2) * 0.1)}
              whileHover={{ y: -8 }}
              className="group rounded-3xl overflow-hidden cursor-default transition-all duration-300"
              style={{ border: "1px solid #e8edf2", boxShadow: "0 2px 16px rgba(10,9,71,0.04)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(5,173,238,0.35)"; e.currentTarget.style.boxShadow = "0 24px 60px rgba(5,173,238,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8edf2"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(10,9,71,0.04)"; }}>

              {/* Card header */}
              <div className="relative h-52 flex items-center justify-center p-8"
                style={{ background: project.gradient }}>
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                  style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(5,173,238,0.2)", border: "1px solid rgba(5,173,238,0.3)" }}>
                  <project.icon className="w-10 h-10" style={{ color: "#05ADEE" }} />
                </div>
                {/* Year badge */}
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: "rgba(5,173,238,0.15)", border: "1px solid rgba(5,173,238,0.3)", color: project.accent }}>
                  {project.year}
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#05ADEE" }}>{project.client}</p>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#0A0947" }}>{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Impact */}
                <div className="space-y-1.5 mb-5">
                  {project.impact.map((item, ii) => (
                    <div key={ii} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#05ADEE" }} />
                      <span className="text-xs text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags + industry */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, ti) => (
                    <span key={ti} className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: "rgba(10,9,71,0.05)", color: "#0A0947" }}>{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid #f0f4f8" }}>
                  <span className="text-xs text-gray-400">
                    Industry: <span className="font-semibold text-gray-600">{project.industry}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;