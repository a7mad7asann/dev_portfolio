import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

console.log('DATABASE_URL:', process.env.DATABASE_URL)

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'file:./prisma/dev.db',
    },
  },
})

async function main() {
  // Clear existing data
  await prisma.project.deleteMany({})
  await prisma.stat.deleteMany({})
  await prisma.message.deleteMany({})

  // Seed Projects
  const projects = [
    {
      title: 'NeuroSync AI Platform',
      description: 'Enterprise AI dashboard with real-time neural network visualization and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      tags: 'React,TensorFlow,D3.js,WebGL',
      link: 'https://neurosync.demo',
      github: 'https://github.com/demo/neurosync',
    },
    {
      title: 'Quantum Finance Mobile',
      description: 'Revolutionary fintech app with blockchain integration and advanced portfolio management.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80',
      tags: 'React Native,Web3,GraphQL',
    },
    {
      title: 'CyberGuard Security Suite',
      description: 'Next-gen cybersecurity platform with threat intelligence and automated response systems.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
      tags: 'Vue.js,Python,Kubernetes',
    },
    {
      title: 'CloudVerse SaaS Platform',
      description: 'Multi-tenant cloud management platform with AI-powered infrastructure optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      tags: 'Next.js,TypeScript,Tailwind',
    },
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    })
  }

  // Seed Stats
  const stats = [
    { label: 'Projects Delivered', value: '150+', icon: 'Zap' },
    { label: 'Happy Clients', value: '98%', icon: 'Users' },
    { label: 'Awards Won', value: '24', icon: 'Award' },
    { label: 'Years Experience', value: '8+', icon: 'TrendingUp' },
  ]

  for (const stat of stats) {
    await prisma.stat.create({
      data: stat,
    })
  }

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
