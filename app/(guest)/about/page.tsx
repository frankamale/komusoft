"use client";

import {
  Target,
  Users,
  Award,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering businesses through technology innovation and digital transformation.",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description:
        "Your success is our success. We build lasting partnerships, not just projects.",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "Enterprise-grade solutions with rigorous testing and quality assurance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Staying ahead with cutting-edge technologies and best practices.",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Founded",
      description: "Komusoft Solutions established in Kampala.",
    },
    {
      year: "2015",
      title: "First Major Project",
      description: "Delivered digital platforms for UN agencies.",
    },
    {
      year: "2018",
      title: "Healthcare Solutions",
      description: "Launched LIMS solutions for the Ministry of Health.",
    },
    {
      year: "2020",
      title: "Cloud Expansion",
      description: "Introduced cloud-based business solutions.",
    },
    {
      year: "2024",
      title: "50+ Projects",
      description: "Serving clients across multiple sectors.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50 py-28">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#05ADEE20,transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#05ADEE] font-semibold mb-5">
              About Komusoft
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Pioneering Digital Transformation in East Africa
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Since 2012, we’ve been delivering world-class software solutions
              that empower organizations to operate smarter, scale faster, and
              achieve more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#05ADEE] font-semibold mb-4">
                Our Story
              </p>

              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Building Technology That Drives Growth
              </h2>

              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p>
                  Established in 2012, Komusoft Solutions is a private limited
                  company managed by highly experienced information technology
                  professionals offering consulting services in software
                  development, IT infrastructure management, security
                  infrastructure design, quality assurance, and implementation.
                </p>

                <p>
                  Our team is made up of office-based staff and expert
                  consultants dedicated to delivering tailor-made software
                  solutions that align with customer goals and operational
                  needs.
                </p>

                <p>
                  Komusoft operates with a win-win philosophy built on trust,
                  commitment, and long-term partnerships. Our professionals
                  bring extensive experience implementing multi-sector digital
                  solutions across healthcare, government, enterprise, and
                  development organizations.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "50+", label: "Projects Delivered" },
                  { value: "100%", label: "Client Focus" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl font-bold text-[#05ADEE] mb-2">
                      {item.value}
                    </div>

                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/about.jpg"
                  alt="Komusoft team"
                  className="w-full h-150 object-cover"
                  width={500}
                  height={600}
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 w-56">
                <p className="text-3xl font-bold text-[#05ADEE] mb-1">
                  12+ Years
                </p>
                <p className="text-gray-600 text-sm">
                  Delivering innovative digital solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-24 bg-linear-to-br from-slate-50 to-cyan-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.25em] text-[#05ADEE] font-semibold mb-3">
              Our Values
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#05ADEE]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-[#05ADEE]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Expertise */}
      <section className="py-24 bg-linear-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#05ADEE] font-semibold mb-3">
                Expertise
              </p>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Deep Technical Knowledge
              </h2>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our team combines technical expertise, strategic thinking, and
                industry experience to build scalable and secure digital
                solutions.
              </p>

              <div className="space-y-5">
                {[
                  "Full-stack web & mobile development",
                  "Cloud infrastructure & DevOps",
                  "Enterprise system integration",
                  "Cybersecurity & compliance",
                  "Quality assurance & testing",
                  "24/7 technical support",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#05ADEE] mt-0.5 shrink-0" />

                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Technologies", value: "20+" },
                { label: "Team Members", value: "15+" },
                { label: "Industries", value: "8+" },
                { label: "Countries", value: "3+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-[#05ADEE] mb-3">
                    {stat.value}
                  </div>

                  <div className="text-gray-600 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default About;