"use client";

import CallToAction from "../components/CallToAction";
import AboutHero from "./components/AboutHero";
import OurStorySection from "./components/OurStorySection";
import ValuesSection from "./components/ValuesSection";
import ExpertiseSection from "./components/ExpertiseSection";

const About = () => {

  return (
    <div
      className="min-h-screen pt-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <AboutHero />
      <OurStorySection />
      <ValuesSection />
      <ExpertiseSection />
      <CallToAction />
    </div>
  );
};

export default About;