'use client';

import { Users, Award, BookOpen, Star } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Students',
      color: 'text-primary',
    },
    {
      icon: Award,
      number: '50+',
      label: 'Expert Instructors',
      color: 'text-secondary',
    },
    {
      icon: BookOpen,
      number: '100+',
      label: 'Dance Courses',
      color: 'text-accent',
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Average Rating',
      color: 'text-amber-400',
    },
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card text-center p-6 rounded-2xl shadow-xl hover-lift border border-white/5"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 shadow-lg shadow-white/5 backdrop-blur-sm border border-white/10`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
