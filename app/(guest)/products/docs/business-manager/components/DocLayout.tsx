"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { docNav, docBase, type DocNavItem } from "./docNav";

interface DocLayoutProps {
  title: string;
  subtitle: string;
  current: string;
  children: React.ReactNode;
  prev?: DocNavItem;
  next?: DocNavItem;
}

export function DocLayout({ title, subtitle, current, children, prev, next }: DocLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href={docBase} className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href={docBase} className="hover:text-[#05ADEE]">Business Manager</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">{current}</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4">
            <Link href={docBase} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
              <p className="text-gray-600">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-6">
              {docNav.map((group) => (
                <div key={group.group}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">{group.group}</p>
                  <ul className="space-y-1">
                    {group.items.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className={`block text-sm rounded-md px-3 py-1.5 transition-colors ${
                              active
                                ? "bg-[#05ADEE]/10 text-[#05ADEE] font-medium"
                                : "text-gray-600 hover:text-[#05ADEE] hover:bg-gray-50"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          <div className="min-w-0">
            <div>
              {children}

              {(prev || next) && (
                <div className="mt-12 grid sm:grid-cols-2 gap-4 border-t border-gray-200 pt-8">
                  {prev ? (
                    <Link
                      href={prev.href}
                      className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-sm transition-all"
                    >
                      <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-[#05ADEE]" />
                      <span>
                        <span className="block text-xs text-gray-500">Previous</span>
                        <span className="block font-medium text-gray-900 group-hover:text-[#05ADEE]">{prev.label}</span>
                      </span>
                    </Link>
                  ) : <span />}
                  {next && (
                    <Link
                      href={next.href}
                      className="group flex items-center justify-end gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#05ADEE] hover:shadow-sm transition-all text-right"
                    >
                      <span>
                        <span className="block text-xs text-gray-500">Next</span>
                        <span className="block font-medium text-gray-900 group-hover:text-[#05ADEE]">{next.label}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#05ADEE]" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
