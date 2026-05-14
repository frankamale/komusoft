import React from 'react'
import { Target, Users, Award, Lightbulb, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';


const About = () => {

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering businesses through technology innovation and digital transformation"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Your success is our success. We build lasting partnerships, not just projects"
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Enterprise-grade solutions with rigorous testing and quality assurance"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and best practices"
    }
  ];

  const milestones = [
    { year: "2012", title: "Founded", description: "Komusoft Solutions established in Kampala" },
    { year: "2015", title: "First Major Project", description: "Delivered UN digital platforms" },
    { year: "2018", title: "Healthcare Solutions", description: "Launched LIMS for Ministry of Health" },
    { year: "2020", title: "Cloud Expansion", description: "Introduced cloud-based business solutions" },
    { year: "2024", title: "50+ Projects", description: "Serving clients across multiple sectors" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-4">
              About Komusoft
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pioneering Digital Transformation in East Africa
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Since 2012, we&apos;ve been delivering world-class software solutions that empower
              organizations to operate smarter, scale faster, and achieve more.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Established in 2012 as private limited company company managed by highly experienced information technology professionals and offers consulting services in the areas of Software Development, IT Infrastructure Management, Security Infrastructure design, Quality Assurance and implementation.
                </p>
                <p>
                  Comprised of both office-based staff and team of expert consultants who are dedicated to providing software solutions that are tailor made to match customer aspirations.
                </p>
                <p>
                  Komusoft philosophy rotates around on a win-win mindset, mutual trust, commitment and the sharing of risks and rewards to benefit customers directly. Our professionals have several hundred person-years of experience consulting with organizations and implementing multi sectoral applications
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl font-bold text-[#05ADEE] mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl font-bold text-[#05ADEE] mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl font-bold text-[#05ADEE] mb-2">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/about_image.png"
                alt="Our Story"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-3">
              Our Values
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#05ADEE]/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#05ADEE]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-3">
              Our Journey
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                    }`}
                >
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                    <div className="inline-block p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all">
                      <div className="text-sm text-[#05ADEE] font-semibold mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#05ADEE] rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-3">
                Expertise
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Deep Technical Knowledge
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team brings together diverse expertise across modern technologies
                and industry best practices.
              </p>

              <div className="space-y-4">
                {[
                  "Full-stack web & mobile development",
                  "Cloud infrastructure & DevOps",
                  "Enterprise system integration",
                  "Cybersecurity & compliance",
                  "Quality assurance & testing",
                  "24/7 technical support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#05ADEE] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Technologies", value: "20+" },
                { label: "Team Members", value: "15+" },
                { label: "Industries", value: "8+" },
                { label: "Countries", value: "3+" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all"
                >
                  <div className="text-5xl font-bold text-[#05ADEE] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



export default About