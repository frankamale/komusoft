"use client";

import Link from 'next/link';

export function Breadcrumb() {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Documentation</Link>
          <span>/</span>
          <span className="text-[#05ADEE]">Business Manager</span>
        </div>
      </div>
    </div>
  );
}