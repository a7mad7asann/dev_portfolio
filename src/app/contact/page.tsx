'use client';

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navigation />
      <div className="max-w-7xl mx-auto pt-32 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Contact
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-3xl mb-12">
          Ready to start your next project? Let&apos;s talk.
        </p>
        <div className="max-w-xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0ea5e9] transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0ea5e9] transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#0ea5e9] transition-colors resize-none" />
            </div>
            <button className="w-full bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
