import { Building2, ShoppingBag, HeartPulse, Truck, FlaskConical, Database, ArrowRight } from 'lucide-react';

import Link from 'next/link';
import PartnersCarousel from '../components/PartnersCarousel';
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
      <section className="relative py-32 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-4">
              Our Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Proven Track Record of Success
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Mission-critical systems delivered across multiple industries,
              serving government, NGOs, and private enterprises
            </p>
          </div>
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