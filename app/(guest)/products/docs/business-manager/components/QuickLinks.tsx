"use client";

import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

interface QuickLink {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  download?: boolean;
}

interface QuickLinksProps {
  quickLinks: QuickLink[];
}

export function QuickLinks({ quickLinks }: QuickLinksProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((link, index) => {
          const commonClasses = "bg-white rounded-xl p-4 border border-gray-200 hover:border-[#05ADEE] hover:shadow-lg transition-all text-center";

          if (link.download) {
            return (
              <a
                key={index}
                href={link.path}
                download
                className={commonClasses}
              >
                <link.icon className="w-8 h-8 text-[#05ADEE] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-sm text-gray-600">{link.description}</p>
              </a>
            );
          }

          return (
            <Link
              key={index}
              href={link.path}
              className={commonClasses}
            >
              <link.icon className="w-8 h-8 text-[#05ADEE] mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">{link.title}</h3>
              <p className="text-sm text-gray-600">{link.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}