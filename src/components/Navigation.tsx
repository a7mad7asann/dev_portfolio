'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-[#080808]/80 border border-white/10 rounded-2xl px-8 py-4 shadow-2xl shadow-[#0ea5e9]/20">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                APEX
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path ||
                  (link.path === '/dashboard' && pathname.startsWith('/dashboard'));

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="relative px-6 py-2.5 rounded-lg overflow-hidden group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/20 to-[#8b5cf6]/20 border border-[#0ea5e9]/50"
                        style={{ borderRadius: '0.5rem' }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors ${
                      isActive
                        ? 'text-[#0ea5e9]'
                        : 'text-gray-400 group-hover:text-white'
                     }`}>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
