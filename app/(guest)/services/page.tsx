import { Smartphone, Globe, Code, Lightbulb, Headphones, Shield, Cloud, Network, ArrowRight, Receipt } from 'lucide-react';
import Link from 'next/link';

const Services = () => {

  const services = [
    {
      icon: Receipt,
      title: "Efris Integration",
      description: "Professional integration of EFRIS solutions with POS, ERP, accounting, and invoicing systems to ensure compliant electronic fiscal receipting and smooth tax reporting workflows.", features: ["Retail Shops", "Restaurants and bars", "Supermarkets", "Pharmacies"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android with seamless user experiences and offline capabilities.",
      features: ["iOS & Android", "Flutter", "Offline Support", "Push Notifications"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance.",
      features: ["React & Next.js", "Progressive Web Apps", "Real-time Features", "SEO Optimized"]
    },
    {
      icon: Code,
      title: "Bespoke Software",
      description: "Custom enterprise software solutions tailored to your specific business requirements and workflows.",
      features: ["Custom Development", "API Integration", "Database Design", "Scalable Architecture"]
    },
    {
      icon: Lightbulb,
      title: "ICT Consultancy",
      description: "Strategic IT consulting to optimize your technology infrastructure and develop comprehensive digital strategies.",
      features: ["Tech Assessment", "Digital Strategy", "Architecture Design", "Best Practices"]
    },
    {
      icon: Headphones,
      title: "IT Support",
      description: "24/7 technical support and maintenance to keep your systems running smoothly without interruption.",
      features: ["24/7 Monitoring", "Rapid Response", "Preventive Maintenance", "System Updates"]
    },
    {
      icon: Shield,
      title: "IT Security Audit",
      description: "Comprehensive security assessments and penetration testing to protect your digital assets and ensure compliance.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Compliance Audit", "Security Training"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses leveraging AWS, Azure, and Google Cloud.",
      features: ["Cloud Migration", "Infrastructure Setup", "Auto Scaling", "Cost Optimization"]
    },
    {
      icon: Network,
      title: "Systems Integration",
      description: "Seamless integration of disparate systems for unified business operations and improved data flow.",
      features: ["API Development", "Data Synchronization", "Legacy Integration", "Middleware Solutions"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-4">
              Our Services
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              End-to-End Technology Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From concept to deployment, we provide comprehensive IT services
              that drive business growth and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-[#05ADEE] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#05ADEE]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#05ADEE] transition-colors">
                  <service.icon className="w-7 h-7 text-[#05ADEE] group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#05ADEE] rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="text-[#05ADEE] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-3">
              Our Process
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and challenges" },
              { step: "02", title: "Planning", description: "Strategic roadmap and architecture design" },
              { step: "03", title: "Development", description: "Agile development with regular updates" },
              { step: "04", title: "Support", description: "Ongoing maintenance and optimization" }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-[#05ADEE]/10 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#0A0947] p-12 md:p-16">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#05ADEE] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s Discuss Your Project
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Tell us about your requirements and we&apos;ll help you find the right solution
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-2xl hover:shadow-[#05ADEE]/50 transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Services