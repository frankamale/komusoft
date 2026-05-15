"use client";

import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

export function SupportCTA() {
  return (
    <div className="bg-[#0A0947] rounded-xl p-8 text-center">
      <HelpCircle className="w-12 h-12 text-white mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Can&apos;t find what you&apos;re looking for? Our support team is here to help you get the most out of Business Manager.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#05ADEE] text-white rounded-xl hover:bg-[#0496d5] transition-all font-semibold"
        >
          Contact Support
        </Link>
        <Link
          href="mailto:support@komusoft.com"
          className="px-6 py-3 bg-white text-[#0A0947] rounded-xl hover:bg-gray-100 transition-all font-semibold"
        >
          Email Us
        </Link>
      </div>
    </div>
  );
}