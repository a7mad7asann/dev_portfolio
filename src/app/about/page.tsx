'use client';

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navigation />
      <div className="max-w-7xl mx-auto pt-32 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          I am a creative technologist pushing the boundaries of digital experiences. 
          Expert in React, Next.js, and modern web technologies.
        </p>
      </div>
    </div>
  );
}
