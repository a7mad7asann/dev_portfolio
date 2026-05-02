'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BarChart3,
  MessageSquare,
  Settings,
  Sparkles,
  LogOut,
  Home,
  FolderKanban,
  Tag,
  FileText,
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { path: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { path: '/dashboard/projects', label: 'Projects', icon: FolderKanban },
    { path: '/dashboard/categories', label: 'Categories', icon: Tag },
    { path: '/dashboard/content', label: 'Content', icon: FileText },
    { path: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
    { path: '/dashboard/messages', label: 'Messages', icon: MessageSquare },
    { path: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 min-h-screen border-r border-white/10 backdrop-blur-xl bg-[#0a0a0a]/80 p-6 fixed left-0 top-0"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mb-12 group">
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

          {/* Navigation */}
          <nav className="space-y-2 mb-12">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative block group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="dashboardNav"
                      className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/20 to-[#8b5cf6]/20 border border-[#0ea5e9]/50 rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors">
                    <item.icon
                      className={`w-5 h-5 ${
                        isActive ? 'text-[#0ea5e9]' : 'text-gray-400 group-hover:text-white'
                      }`}
                    />
                    <span
                      className={`${
                        isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                      } transition-colors`}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
            >
              <Home className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </Link>
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white w-full">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>

          {/* User Profile */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] flex items-center justify-center font-bold">
                  <span>A</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="truncate font-medium">Alex Morgan</div>
                  <div className="text-sm text-gray-400 truncate">alex@apex.design</div>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
