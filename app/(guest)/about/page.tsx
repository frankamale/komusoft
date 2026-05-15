"use client";

import {
  Target,
  Users,
  Award,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Globe2,
} from "lucide-react";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import Image from "next/image";
import { GrTechnology, GrUser } from "react-icons/gr";
import { FaIndustry } from "react-icons/fa";
import AboutHero from "../components/AboutHero";

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


  return (
    <div className="min-h-screen pt-20 " style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <AboutHero />

      <section className="py-24 bg-white">
        <motion.div
          className="py-20 bg-linear-to-br from-blue-50 to-indigo-50 px-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs uppercase tracking-[0.25em] font-semibold mb-4"
                style={{ color: "#05ADEE" }}
              >
                Our Story
              </p>

              <h2 className="text-4xl font-bold mb-8" style={{ color: "#0A0947" }}>
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
                  solutions that align with customer goals and operational needs.
                </p>
                <p>
                  Komusoft operates with a win-win philosophy built on trust,
                  commitment, and long-term partnerships. Our professionals bring
                  extensive experience implementing multi-sector digital solutions
                  across healthcare, government, enterprise, and development
                  organizations.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-5">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "50+", label: "Projects Delivered" },
                  { value: "100%", label: "Client Focus" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, #f0f9ff 0%, #e0f5ff 100%)",
                      border: "1px solid rgba(5,173,238,0.15)",
                    }}
                  >
                    <div className="text-3xl font-bold mb-2" style={{ color: "#0A0947" }}>
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="rounded-[2rem] overflow-hidden "
                style={{ border: "1px solid rgba(5,173,238,0.2)" }}
              >
                <Image
                  src="/about_image.png"
                  alt="Komusoft team"
                  className="w-full object-cover"
                  style={{ height: "600px" }}
                  width={500}
                  height={600}
                />
              </div>

              {/* Floating card */}
              <div
                className="absolute -bottom-6 -left-6 rounded-3xl p-6 w-56 shadow-xl"
                style={{
                  background: "white",
                  border: "1px solid rgba(5,173,238,0.15)",
                }}
              >
                <p className="text-3xl font-bold mb-1" style={{ color: "#05ADEE" }}>
                  12+ Years
                </p>
                <p className="text-gray-500 text-sm">Delivering innovative digital solutions.</p>
              </div>

              {/* Decorative accent */}
              <div
                className="absolute -top-6 -right-6 w-28 h-28 rounded-3xl -z-10"
                style={{ background: "linear-gradient(135deg, #0A0947, #05ADEE)", opacity: 0.12 }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0947 0%, #0d1168 60%, #0a3070 100%)" }}
      >
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(5,173,238,0.08) 0%, transparent 70%)" }}
        />

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <p
              className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
              style={{ color: "#05ADEE" }}
            >
              Our Values
            </p>
            <h2 className="text-4xl font-bold text-white">What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-3xl p-8 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(5,173,238,0.2)" }}
                >
                  <value.icon className="w-7 h-7" style={{ color: "#05ADEE" }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e8f4fd 50%, #f0faff 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>
                Expertise
              </p>
              <h2 className="text-4xl font-bold mb-6" style={{ color: "#0A0947" }}>
                Deep Technical Knowledge
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our team combines technical expertise, strategic thinking, and industry experience to build
                scalable and secure digital solutions.
              </p>

              <div className="space-y-4">
                {[
                  "Full-stack web & mobile development",
                  "Enterprise system integration",
                  // "Cybersecurity & compliance",
                  "Quality assurance & testing",
                  "24/7 technical support",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:shadow-md cursor-default"
                    style={{ background: "white", border: "1px solid rgba(5,173,238,0.12)" }}
                    whileHover={{ x: 4 }}
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#05ADEE" }} />
                    <span className="text-gray-700">{item}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100" style={{ color: "#05ADEE" }} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Technologies", value: "20+", icon: <GrTechnology /> },
                { label: "Team Members", value: "15+", icon: <GrUser /> },
                { label: "Industries", value: "8+", icon: <FaIndustry /> },
                { label: "Countries", value: "3+", icon: <Globe2 /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, #0A0947, #0d1168)"
                        : "white",
                    border: "1px solid rgba(5,173,238,0.15)",
                  }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl 
            ${index % 2 === 0
                          ? " text-[#05ADEE]"
                          : " text-[#0A0947]"
                        }`}
                    >
                      {stat.icon}
                    </div>
                  </div>

                  {/* Value */}
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{ color: index % 2 === 0 ? "#05ADEE" : "#0A0947" }}
                  >
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div
                    className="text-sm font-medium"
                    style={{
                      color:
                        index % 2 === 0
                          ? "rgba(255,255,255,0.7)"
                          : "#6b7280",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
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