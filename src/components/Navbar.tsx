import React, { useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#stories', label: 'কাহিনীসমূহ' },
    { href: '#governor', label: 'ব্যাংক গভর্নর' },
    { href: '#courtroom', label: 'লাই ডিটেক্টর' },
    { href: '#traffic', label: 'ট্রাফিক ম্যাট্রিক্স' },
    { href: '#sos', label: 'এসওএস সুরক্ষা' },
    { href: '#ask-ai', label: 'প্রশ্নোত্তর' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#060913]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5">
        {/* Brand wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Cpu className="w-4 h-4 text-slate-950" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent font-extrabold">
            VISION BANGLA AI
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 hidden xs:inline-block">
            ভিশন বাংলা
          </span>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="মোবাইল মেনু"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#070b16] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
