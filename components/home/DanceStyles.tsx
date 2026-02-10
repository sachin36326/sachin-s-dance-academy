'use client';

import { Music, Zap, Heart, Sparkles, Flame, Crown } from 'lucide-react';

export default function DanceStyles() {
  const styles = [
    {
      icon: Heart,
      name: 'Contemporary',
      description: 'Express emotions through fluid movements',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      name: 'Hip-Hop',
      description: 'Urban street dance with attitude',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Crown,
      name: 'Ballet',
      description: 'Classical elegance and grace',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Sparkles,
      name: 'Bollywood',
      description: 'Vibrant Indian cinema dance',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Flame,
      name: 'Salsa',
      description: 'Passionate Latin rhythms',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Music,
      name: 'Kathak',
      description: 'Traditional Indian classical',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Dance <span className="gradient-title">Styles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From classical to contemporary, discover the perfect style that resonates with your soul
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-2xl p-8 shadow-xl hover-lift cursor-pointer overflow-hidden border border-white/5"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${style.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <style.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{style.name}</h3>
                <p className="text-gray-400">{style.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
