"use client";

import ContactHero from './components/ContactHero';
import ContactInfoSection from './components/ContactInfoSection';
import ContactForm from './components/ContactForm';
import NextStepsSection from './components/NextStepsSection';
import FAQSection from './components/FAQSection';



const Contact = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      <ContactHero />

      <section className="md:py-24 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactInfoSection />
            <ContactForm />
          </div>
        </div>
      </section>

      <NextStepsSection />
      <FAQSection />
    </div>
  );
};

export default Contact;