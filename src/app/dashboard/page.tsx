'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function DashboardOverview() {
  const stats = [
    {
      label: 'Total Revenue',
      value: '$124,500',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-[#0ea5e9] to-[#06b6d4]',
    },
    {
      label: 'Active Projects',
      value: '18',
      change: '+3',
      trend: 'up',
      icon: Zap,
      color: 'from-[#8b5cf6] to-[#a855f7]',
    },
    {
      label: 'New Clients',
      value: '24',
      change: '+18%',
      trend: 'up',
      icon: Users,
      color: 'from-[#ec4899] to-[#f43f5e]',
    },
    {
      label: 'Portfolio Views',
      value: '12.4K',
      change: '-2.4%',
      trend: 'down',
      icon: Eye,
      color: 'from-[#06b6d4] to-[#0ea5e9]',
    },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 4200 },
    { month: 'Feb', revenue: 5100 },
    { month: 'Mar', revenue: 4800 },
    { month: 'Apr', revenue: 6300 },
    { month: 'May', revenue: 7200 },
    { month: 'Jun', revenue: 8500 },
  ];

  const recentProjects = [
    {
      name: 'NeuroSync Dashboard Redesign',
      client: 'TechCorp Inc.',
      status: 'In Progress',
      progress: 75,
      dueDate: '2026-05-15',
    },
    {
      name: 'Mobile App UI/UX',
      client: 'StartupX',
      status: 'In Progress',
      progress: 45,
      dueDate: '2026-05-20',
    },
    {
      name: 'Brand Identity System',
      client: 'NovaBrand',
      status: 'Completed',
      progress: 100,
      dueDate: '2026-04-28',
    },
    {
      name: 'E-commerce Platform',
      client: 'ShopFlow',
      status: 'In Progress',
      progress: 30,
      dueDate: '2026-06-01',
    },
  ];

  const activities = [
    { action: 'New project created', detail: 'NeuroSync Dashboard Redesign', time: '2 hours ago' },
    { action: 'Payment received', detail: '$8,500 from TechCorp Inc.', time: '5 hours ago' },
    { action: 'Project delivered', detail: 'Brand Identity System', time: '1 day ago' },
    { action: 'New client onboarded', detail: 'StartupX joined', time: '2 days ago' },
  ];

  return (
    <div className="max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl mb-2 font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Dashboard Overview
        </h1>
        <p className="text-gray-400">Welcome back, Alex. Here&apos;s what&apos;s happening today.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9]/10 to-[#8b5cf6]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative backdrop-blur-xl bg-[#111827]/50 border border-white/10 rounded-2xl p-6 hover:border-[#0ea5e9]/50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl mb-1 font-bold">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Recent Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2 backdrop-blur-xl bg-[#111827]/50 border border-white/10 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl mb-1 font-bold">Revenue Overview</h3>
              <p className="text-sm text-gray-400">Monthly revenue for 2026</p>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#6b7280" strokeWidth={0} />
              <YAxis stroke="#6b7280" strokeWidth={0} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#111827',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0.5rem',
                  color: '#fff',
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#0ea5e9"
                strokeWidth={2}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="backdrop-blur-xl bg-[#111827]/50 border border-white/10 rounded-2xl p-6"
        >
          <h3 className="text-xl mb-6 font-bold">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0ea5e9] mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm mb-1">{activity.action}</div>
                  <div className="text-sm text-gray-400">{activity.detail}</div>
                  <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="backdrop-blur-xl bg-[#111827]/50 border border-white/10 rounded-2xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Active Projects</h3>
          <button className="text-sm text-[#0ea5e9] hover:text-white transition-colors">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-lg font-medium">{project.name}</h4>
                  {project.status === 'Completed' ? (
                    <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-lg">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-[#0ea5e9] bg-[#0ea5e9]/10 px-2 py-1 rounded-lg">
                      <Clock className="w-3 h-3" />
                      In Progress
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-400 mb-3">{project.client}</div>

                {/* Progress Bar */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-400 min-w-[3rem]">{project.progress}%</span>
                </div>
              </div>

              <div className="text-sm text-gray-400">Due: {project.dueDate}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
