'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Navigation from './Navigation';

const iconMap: Record<string, any> = {
  Zap,
  Users,
  Award,
  TrendingUp,
};

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gradient: string;
  featured: boolean;
}

interface Stat {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export default function HomeClient({ projects, stats }: { projects: Project[], stats: Stat[] }) {
  const clients = ['Google', 'Meta', 'Apple', 'Microsoft', 'Tesla', 'Netflix'];

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <Navigation />

      {/* Floating Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#ec4899]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Premium Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#ec4899] rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0ea5e9]/20 to-transparent rounded-full blur-2xl scale-150"></div>
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#ec4899] rounded-full p-1 blur-sm"
                />
                <div className="relative w-40 h-40 mx-auto rounded-full border-4 border-[#080808] overflow-hidden shadow-2xl shadow-[#0ea5e9]/50">
                  <img
                    src="https://images.unsplash.com/photo-1768471125958-78556538fadc?w=400&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0ea5e9]/20 to-transparent"></div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 border-2 border-[#0ea5e9]/50 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-8xl lg:text-9xl mb-6 leading-tight font-bold"
          >
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Crafting The
            </span>
            <span className="block bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent animate-pulse">
              Future Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Elite UI/UX Designer & Creative Technologist specializing in award-winning digital experiences
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <Link
              href="/projects"
              className="group relative px-8 py-4 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Zap;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/10 to-[#8b5cf6]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative backdrop-blur-xl bg-[#111827]/50 border border-white/10 rounded-2xl p-8 hover:border-[#0ea5e9]/50 transition-colors">
                    <Icon className="w-10 h-10 text-[#0ea5e9] mb-4" />
                    <div className="text-4xl mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-bold">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-bold">
              Featured Work
            </h2>
            <p className="text-xl text-gray-400">Award-winning projects that push boundaries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="text-sm text-[#0ea5e9] mb-2">{project.category}</div>
                  <h3 className="text-3xl mb-4 font-bold">{project.title}</h3>
                  <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Case Study</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#0ea5e9] hover:text-white transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#ec4899] rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative backdrop-blur-xl bg-[#111827]/50 border border-white/10 rounded-3xl p-16">
              <h2 className="text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent font-bold">
                Let&apos;s Create Something Extraordinary
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to elevate your digital presence?
              </p>
              <Link
                href="/contact"
                className="group relative inline-block px-10 py-5 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2 text-white text-lg font-medium">
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
