import React from 'react'
import { Hero } from './components/HeroSection'
import { WhyChooseUs } from './components/WhyChooseUs'
import PartnersCarousel from './components/PartnersCarousel'
import CallToAction from './components/CallToAction'
import { ArrowRight, Code2, Globe2,  Shield } from 'lucide-react'
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <Hero />
            <section className="md:py-20 py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-3">
                            What We Do
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Full-Stack Digital Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From concept to deployment, we deliver technology that drives results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Code2,
                                title: "Custom Software",
                                description: "Bespoke enterprise systems tailored to your unique business processes and requirements"
                            },
                            {
                                icon: Globe2,
                                title: "Cloud Platforms",
                                description: "Scalable cloud infrastructure and SaaS solutions for modern businesses"
                            },
                            {
                                icon: Shield,
                                title: "Secure & Reliable",
                                description: "Enterprise-grade security with 24/7 monitoring and support"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white rounded-3xl border border-gray-200 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-[#05ADEE]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#05ADEE] transition-colors">
                                    <feature.icon className="w-7 h-7 text-[#05ADEE] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-xl transition-all"
                        >
                            Explore All Services
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            <PartnersCarousel />

            <CallToAction />

        </div>
    )
}

export default Home