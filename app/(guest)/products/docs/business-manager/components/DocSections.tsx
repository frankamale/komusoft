"use client";

import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';

interface Doc {
  title: string;
  path: string;
  description: string;
  icon: LucideIcon;
  time: string;
}

interface Section {
  title: string;
  icon: LucideIcon;
  description: string;
  docs: Doc[];
}

interface DocSectionsProps {
  docSections: Section[];
}

export function DocSections({ docSections }: DocSectionsProps) {
  return (
    <div className="space-y-8 mb-12">
      {docSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <section.icon className="w-6 h-6 text-[#05ADEE]" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
            {section.docs.map((doc, docIndex) => (
              <Link
                key={docIndex}
                href={doc.path}
                className="group bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#05ADEE] hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <doc.icon className="w-5 h-5 text-[#05ADEE] mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#05ADEE] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{doc.time}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}