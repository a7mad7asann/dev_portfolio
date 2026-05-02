import { prisma } from '@/lib/prisma';
import HomeClient from '@/components/HomeClient';

export default async function Home() {
  const projects = await prisma.project.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' },
  });

  const stats = await prisma.stat.findMany();

  // Mapping DB models to the expected UI format
  const formattedProjects = projects.map(p => ({
    id: p.id,
    title: p.title,
    category: p.tags.split(',')[0] || 'Web Design',
    description: p.description,
    image: p.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    gradient: 'from-[#0ea5e9] to-[#8b5cf6]', // Default gradient
    featured: true
  }));

  return <HomeClient projects={formattedProjects} stats={stats} />;
}
