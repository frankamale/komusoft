"use client";

import { Building2, ShoppingBag, HeartPulse, Truck, FlaskConical, Database, ArrowRight } from 'lucide-react';

import Link from 'next/link';
import PartnersCarousel from '../components/PartnersCarousel';
import { motion } from 'framer-motion';
const Portfolio = () => {

  const projects = [
    {
      icon: Building2,
      client: "United Nations",
      title: "Various Digital Platforms",
      description: "Multiple web and mobile platforms for UN operations in East Africa, supporting field operations, data collection, and program management across multiple countries.",
      industry: "International Development",
      impact: ["Multi-country deployment", "Real-time data collection", "Mobile-first design"],
      tags: ["Web", "Mobile", "Cloud", "Multi-platform"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShoppingBag,
      client: "Mega Standard Supermarket",
      title: "Retail Operations Management",
      description: "Comprehensive POS, inventory, and business management platform handling multi-location retail operations with real-time synchronization.",
      industry: "Retail",
      impact: ["Multi-location support", "Offline capabilities", "Inventory automation"],
      tags: ["POS", "Inventory", "Analytics", "Retail"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: HeartPulse,
      client: "Lifecare Diagnostics",
      title: "Diagnostic Systems",
      description: "Laboratory information management system with automated workflows, result delivery, and quality control for medical diagnostics.",
      industry: "Healthcare",
      impact: ["Automated workflows", "Quality assurance", "Fast turnaround"],
      tags: ["Healthcare", "LIMS", "Automation"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Truck,
      client: "APONYE Uganda Ltd",
      title: "Weighbridge Management",
      description: "Automated weighbridge system with real-time data capture, reporting, and integration capabilities for logistics operations.",
      industry: "Logistics",
      impact: ["IoT integration", "Real-time monitoring", "Automated reporting"],
      tags: ["IoT", "Automation", "Integration"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FlaskConical,
      client: "Ministry of Energy",
      title: "Laboratory Management",
      description: "Quality control and testing management platform for petroleum laboratory operations with compliance tracking.",
      industry: "Government",
      impact: ["Regulatory compliance", "Quality control", "Audit trails"],
      tags: ["LIMS", "Quality Control", "Compliance"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Database,
      client: "Uganda Communications Commission",
      title: "Data Repository Platform",
      description: "Centralized data management and reporting system for telecommunications regulatory data with advanced analytics.",
      industry: "Telecommunications",
      impact: ["Data centralization", "Advanced analytics", "API access"],
      tags: ["Data Management", "Reporting", "API"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-32 min"
        style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d0f5e 40%, #0a2a6e 70%, #0c4a8a 100%)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-150 h-150 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-100 h-100 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(-40%, 40%)" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span
                className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: "rgba(5,173,238,0.15)",
                  border: "1px solid rgba(5,173,238,0.4)",
                  color: "#05ADEE",
                }}
              >
                Our Portfolio
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-[1.05] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white">Proven Track Record </span>
              <span
                style={{
                  background: "linear-gradient(90deg, #05ADEE, #38d2f5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                of Success
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-12"
              style={{ color: "rgba(255,255,255,0.65)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
            >
              Mission-critical systems delivered across multiple industries,
              serving government, NGOs, and private enterprises
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#05ADEE] mb-2">50+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#05ADEE] mb-2">8+</div>
              <div className="text-sm text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#05ADEE] mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#05ADEE] mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-[#05ADEE] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`relative h-48 bg-linear-to-br ${project.color} p-8 flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <project.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-sm font-semibold text-[#05ADEE] mb-2">
                    {project.client}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.impact.map((item, iIndex) => (
                      <div key={iIndex} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-[#05ADEE] rounded-full"></div>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-gray-500">
                    Industry: <span className="font-semibold text-gray-700">{project.industry}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-3">
              Industries
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Diverse Sector Experience
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Healthcare",
              "Retail",
              "Government",
              "NGOs",
              "Logistics",
              "Telecommunications",
              "Manufacturing",
              "Education"
            ].map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#05ADEE] hover:shadow-lg transition-all text-center"
              >
                <div className="font-semibold text-gray-900">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersCarousel />

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#0A0947] p-12 md:p-16">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#05ADEE] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations who trust Komusoft to deliver mission-critical systems
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-2xl hover:shadow-[#05ADEE]/50 transition-all"
                >
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio