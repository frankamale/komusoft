import { ArrowRight, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="hero-surface min-h-screen flex items-center pt-20">
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
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.04] text-left">
                            Transforming Businesses Through {" "}
                            <span className="bg-linear-to-r from-brand to-brand-light bg-clip-text text-transparent">
                                Intelligent Software Solutions
                            </span>
                        </h1>

                        <p className="md:text-xl text-gray-300 leading-relaxed text-left">
                            Komusoft delivers powerful enterprise software, mobile applications, cloud platforms, and IT solutions
                            that help organizations operate smarter, faster, and more efficiently.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href={"/contact"} className="btn-primary group">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href={"/portfolio"} className="btn-secondary">
                                View Our Work
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                                <div className="text-3xl font-bold text-brand">15+</div>
                                <div className="text-sm text-gray-300">Years Experience</div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                                <div className="text-3xl font-bold text-brand">99+</div>
                                <div className="text-sm text-gray-300">Projects Delivered</div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-1">
                                    <Shield className="w-6 h-6 text-brand" />
                                </div>
                                <div className="text-sm text-gray-300 mt-1">Enterprise Grade Solutions</div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                                <div className="flex items-center gap-1">
                                    <TrendingUp className="w-6 h-6 text-brand" />
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
                                <div className="mt-1 text-2xl font-bold text-brand">99.9%</div>
                            </div>
                        </div>

                        <div className="absolute -z-10 top-8 right-8 w-full h-full bg-linear-to-br from-[#05ADEE]/20 to-transparent rounded-2xl blur-2xl"></div>
                    </div>
                </div>
            </div>

        </section>
    );
}
