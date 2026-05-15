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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

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
    <div
      className="min-h-screen pt-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <AboutHero />

      {/* ─── OUR STORY ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          {...fadeUp()}
        >
          {/* Section label */}
          <div className="mb-10 sm:mb-16">
            <p
              className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
              style={{ color: "#05ADEE" }}
            >
              Our Story
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: "#0A0947" }}
            >
              Building Technology That Drives Growth
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Text column */}
            <div>
              <div className="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Established in 2012, Komusoft Solutions is a private limited
                  company managed by highly experienced IT professionals offering
                  consulting services in software development, infrastructure
                  management, security design, quality assurance, and
                  implementation.
                </p>
                <p>
                  Our team of office-based staff and expert consultants is
                  dedicated to delivering tailor-made software solutions that
                  align with customer goals and operational needs.
                </p>
                <p>
                  Komusoft operates with a win-win philosophy built on trust,
                  commitment, and long-term partnerships — implementing
                  multi-sector digital solutions across healthcare, government,
                  enterprise, and development organisations.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "50+", label: "Projects Delivered" },
                  { value: "100%", label: "Client Focus" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #f0f9ff 0%, #e0f5ff 100%)",
                      border: "1px solid rgba(5,173,238,0.15)",
                    }}
                  >
                    <div
                      className="text-2xl sm:text-3xl font-bold mb-1"
                      style={{ color: "#0A0947" }}
                    >
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 leading-tight">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image column */}
            <div className="relative mt-6 lg:mt-0">
              {/* Decorative accent — hidden on small screens to avoid overflow */}
              <div
                className="hidden sm:block absolute -top-5 -right-5 w-24 h-24 rounded-2xl -z-10"
                style={{
                  background: "linear-gradient(135deg, #0A0947, #05ADEE)",
                  opacity: 0.12,
                }}
              />

              <div
                className="rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl"
                style={{ border: "1px solid rgba(5,173,238,0.2)" }}
              >
                <Image
                  src="/about_image.png"
                  alt="Komusoft team"
                  className="w-full object-cover"
                  /* clamp keeps it proportional from mobile → desktop */
                  style={{ height: "clamp(220px, 42vw, 540px)" }}
                  width={600}
                  height={540}
                  priority
                />
              </div>

              {/* Floating card — flows below image on mobile, overlaps on desktop */}
              <div
                className="mt-4 sm:absolute sm:mt-0 sm:-bottom-6 sm:-left-6 rounded-2xl p-4 sm:p-6 sm:w-52 shadow-lg"
                style={{
                  background: "white",
                  border: "1px solid rgba(5,173,238,0.15)",
                }}
              >
                <p
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{ color: "#05ADEE" }}
                >
                  12+ Years
                </p>
                <p className="text-gray-500 text-sm">
                  Delivering innovative digital solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── VALUES ──────────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0947 0%, #0d1168 60%, #0a3070 100%)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(5,173,238,0.08) 0%, transparent 70%)",
          }}
        />

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          {...fadeUp()}
        >
          <div className="text-center mb-10 sm:mb-16">
            <p
              className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
              style={{ color: "#05ADEE" }}
            >
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Drives Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(5,173,238,0.2)" }}
                >
                  <value.icon
                    className="w-6 h-6"
                    style={{ color: "#05ADEE" }}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── EXPERTISE ───────────────────────────────────────────── */}
      <section
        className="py-12 sm:py-16 md:py-24 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #f0f9ff 0%, #e8f4fd 50%, #f0faff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div>
              <p
                className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
                style={{ color: "#05ADEE" }}
              >
                Expertise
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6"
                style={{ color: "#0A0947" }}
              >
                Deep Technical Knowledge
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our team combines technical expertise, strategic thinking, and
                industry experience to build scalable and secure digital
                solutions.
              </p>

              <div className="space-y-3">
                {[
                  "Full-stack web & mobile development",
                  "Cloud infrastructure & DevOps",
                  "Enterprise system integration",
                  "Quality assurance & testing",
                  "24/7 technical support",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-md cursor-default"
                    style={{
                      background: "white",
                      border: "1px solid rgba(5,173,238,0.12)",
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <CheckCircle2
                      className="w-5 h-5 shrink-0"
                      style={{ color: "#05ADEE" }}
                    />
                    <span className="text-sm sm:text-base text-gray-700">
                      {item}
                    </span>
                    <ArrowRight
                      className="w-4 h-4 ml-auto shrink-0 opacity-30"
                      style={{ color: "#05ADEE" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="hidden md:grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
              {[
                { label: "Technologies", value: "20+", icon: <GrTechnology /> },
                { label: "Team Members", value: "15+", icon: <GrUser /> },
                { label: "Industries", value: "8+", icon: <FaIndustry /> },
                { label: "Countries", value: "3+", icon: <Globe2 /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, #0A0947, #0d1168)"
                        : "white",
                    border: "1px solid rgba(5,173,238,0.15)",
                  }}
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-3xl ${index % 2 === 0 ? "text-[#05ADEE]" : "text-[#0A0947]"
                        }`}
                    >
                      {stat.icon}
                    </div>
                  </div>
                  <div
                    className="text-3xl sm:text-4xl font-bold mb-1"
                    style={{ color: index % 2 === 0 ? "#05ADEE" : "#0A0947" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs sm:text-sm font-medium"
                    style={{
                      color:
                        index % 2 === 0 ? "rgba(255,255,255,0.65)" : "#6b7280",
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