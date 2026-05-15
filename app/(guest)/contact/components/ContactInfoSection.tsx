"use client";

import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const, delay },
  viewport: { once: true },
});

const ContactInfoSection = () => {
  return (
    <div className="space-y-8">
      <motion.div {...fadeUp()}>
        <p className="text-xs uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: "#05ADEE" }}>Contact Details</p>
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#0A0947" }}>Reach Us Directly</h2>
        <p className="text-lg text-gray-500">Every inquiry is handled personally. We&apos;re not a ticketing system — you talk to real people who understand technology.</p>
      </motion.div>

      <div className="space-y-4">
        {[
          { icon: Mail, label: "Email", value: "komusoft@gmail.com", href: "mailto:komusoft@gmail.com" },
          { icon: Phone, label: "Phone", value: "+256 765 916 207", href: "tel:+256765916207" },
          { icon: MapPin, label: "Location", value: "Kampala, Uganda", href: null },
          { icon: Clock, label: "Office Hours", value: "Mon–Fri: 8AM–6PM · Sat: 9AM–2PM", href: null },
        ].map((item, i) => (
          <motion.div key={i} {...fadeUp(i * 0.08)}
            className="flex items-start gap-5 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-default"
            style={{ background: "#f8fafc", border: "1px solid rgba(5,173,238,0.1)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #0A0947, #0d1575)" }}>
              <item.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
              {item.href
                ? <a href={item.href} className="font-semibold hover:underline" style={{ color: "#05ADEE" }}>{item.value}</a>
                : <p className="font-semibold text-gray-700">{item.value}</p>}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 24/7 support card */}
      <motion.div {...fadeUp(0.35)}
        className="relative overflow-hidden rounded-2xl p-6"
        style={{ background: "linear-gradient(135deg, #0A0947, #0d1575)" }}>
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #05ADEE 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <MessageSquare className="w-8 h-8 mb-3" style={{ color: "#05ADEE" }} />
        <h3 className="text-lg font-bold text-white mb-2">24/7 Emergency Support</h3>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
          Existing clients can reach our on-call engineers around the clock for critical issues.
        </p>
      </motion.div>
      {/* Social / map teaser */}
      {/* <motion.div {...fadeUp(0.45)}
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(5,173,238,0.15)", height: "180px", background: "linear-gradient(135deg, #e8f4fd, #f0f9ff)" }}>
        <div className="h-full flex flex-col items-center justify-center gap-2">
          <MapPin className="w-8 h-8" style={{ color: "#05ADEE" }} />
          <p className="font-semibold" style={{ color: "#0A0947" }}>Kampala, Uganda</p>
          <p className="text-sm text-gray-400">East Africa&apos;s technology hub</p>
        </div>
      </motion.div> */} 
    </div>
  );
};

export default ContactInfoSection;