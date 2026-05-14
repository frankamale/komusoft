import { ArrowRight, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-[#0A0947] via-[#0e1552] to-[#0A0947] pt-20">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-72 h-72 bg-[#05ADEE] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#05ADEE] rounded-full filter blur-3xl"></div>
            </div>
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#05ADEE 1px, transparent 1px), linear-gradient(90deg, #05ADEE 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            ></div>

            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(5, 173, 238, 0.1) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Transforming Businesses Through{' '}
                            <span className="bg-linear-to-r from-[#05ADEE] to-[#38bdf8] bg-clip-text text-transparent">
                                Intelligent Software Solutions
                            </span>
                        </h1>

                        <p className="md:text-xl text-gray-300 leading-relaxed">
                            Komusoft delivers powerful enterprise software, mobile applications, cloud platforms, and IT solutions
                            that help organizations operate smarter, faster, and more efficiently.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="group md:px-8 px-4 md:py-4 py-2 bg-linear-to-r from-[#05ADEE] to-[#0ea5e9] text-white rounded-lg hover:shadow-2xl hover:shadow-[#05ADEE]/50 transition-all flex items-center gap-2">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="md:px-8 px-4 md:py-4 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all">
                                View Our Work
                            </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                                <div className="text-3xl font-bold text-[#05ADEE]">10+</div>
                                <div className="text-sm text-gray-300">Years Experience</div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                                <div className="text-3xl font-bold text-[#05ADEE]">50+</div>
                                <div className="text-sm text-gray-300">Projects Delivered</div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-1">
                                    <Shield className="w-6 h-6 text-[#05ADEE]" />
                                </div>
                                <div className="text-sm text-gray-300 mt-1">Enterprise Grade</div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-1">
                                    <TrendingUp className="w-6 h-6 text-[#05ADEE]" />
                                </div>
                                <div className="text-sm text-gray-300 mt-1">Trusted Partner</div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block relative">
                        <div className="relative z-10">
                            <Image src="/hero_image.png" alt="Komusoft Solutions" width={600} height={600} className="rounded-2xl" />
                            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-2xl backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold text-gray-800">Systems Online</span>
                                </div>
                                <div className="mt-1 text-2xl font-bold text-[#05ADEE]">99.9%</div>
                            </div>
                        </div>

                        <div className="absolute -z-10 top-8 right-8 w-full h-full bg-linear-to-br from-[#05ADEE]/20 to-transparent rounded-2xl blur-2xl"></div>
                    </div>
                </div>
            </div>

            {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent"></div> */}
        </section>
    );
}
