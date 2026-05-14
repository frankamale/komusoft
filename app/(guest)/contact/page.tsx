import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-[#05ADEE] font-semibold mb-4">
              Get In Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let&apos;s Build Something Great Together
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your business with innovative technology?
              Our team is here to help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600">
                  Reach out through any of these channels, and we&apos;ll get back to you
                  within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                  <div className="w-12 h-12 bg-[#05ADEE] rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:komusoft@gmail.com" className="text-[#05ADEE] hover:underline">
                      komusoft@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                  <div className="w-12 h-12 bg-[#05ADEE] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+256765916207" className="text-[#05ADEE] hover:underline">
                      +256 765 916 207
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                  <div className="w-12 h-12 bg-[#05ADEE] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Kampala, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                  <div className="w-12 h-12 bg-[#05ADEE] rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#0A0947] rounded-2xl text-white">
                <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-300">
                  Emergency support available for existing clients around the clock
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all"
                    placeholder="+256 700 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all">
                    <option>Select a service</option>
                    <option>Mobile Applications</option>
                    <option>Web Development</option>
                    <option>Bespoke Software</option>
                    <option>Cloud Solutions</option>
                    <option>IT Consultancy</option>
                    <option>IT Support</option>
                    <option>Security Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#05ADEE] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] hover:shadow-2xl hover:shadow-[#05ADEE]/50 transition-all flex items-center justify-center gap-2 font-semibold"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We&apos;ll respond to your inquiry within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Happens Next?
              </h2>
              <p className="text-lg text-gray-600">
                Here&apos;s our typical process after you reach out
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Initial Response",
                  description: "We'll get back to you within 24 hours to acknowledge your inquiry"
                },
                {
                  step: "02",
                  title: "Discovery Call",
                  description: "Schedule a consultation to discuss your needs and requirements in detail"
                },
                {
                  step: "03",
                  title: "Proposal",
                  description: "Receive a detailed proposal with timeline, budget, and approach"
                },
                {
                  step: "04",
                  title: "Kickoff",
                  description: "Once approved, we'll begin your project with a formal kickoff meeting"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-200"
                >
                  <div className="shrink-0 w-12 h-12 bg-[#05ADEE]/10 rounded-xl flex items-center justify-center font-bold text-[#05ADEE]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



export default Contact