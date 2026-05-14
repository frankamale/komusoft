import React from 'react'
import { Users, Lightbulb, Shield } from 'lucide-react'

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-3">
                        Why Choose Us
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Sets Us Apart
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our commitment to excellence drives every project we undertake
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Users,
                            title: "Customer Focus",
                            description: "Emphasizing client satisfaction by fostering long-term relationships and delivering tailored solutions."
                        },
                        {
                            icon: Lightbulb,
                            title: "Innovation & Expertise",
                            description: "Utilizing experience to remain at the forefront of industry trends through the implementation of cutting-edge technology."
                        },
                        {
                            icon: Shield,
                            title: "Quality Assurance",
                            description: "Providing robust and dependable software products to ensure optimal performance and reliability."
                        }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-gray-50 rounded-3xl border border-gray-200 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
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
            </div>
        </section>
    )
}