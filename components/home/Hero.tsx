'use client';

import Link from 'next/link';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  const danceImages = [
    '/images/s3.jpg',
    'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=800&fit=crop',
    '/images/s11.jpg',
    'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=800&fit=crop',
    'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&h=800&fit=crop',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % danceImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Animated Background with Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Dancing Silhouettes/Images - Enhanced Mask */}
      <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-screen">
        {danceImages.map((img, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out w-full h-full lg:w-1/2 lg:left-1/2 ${index === currentImage ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            style={{
              top: '0%',
              right: '0%',
              // width: '100%', // Removed to let classes handle width
              // height: '100%', // Removed to let classes handle height
              backgroundImage: `url(${img})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1), transparent)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1), transparent)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full mb-6 animate-slide-up border-primary/30">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-light text-sm font-medium tracking-wide">India's #1 Online Dance Academy</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-light mb-6 animate-slide-up leading-tight drop-shadow-lg">
              Where Movement
              <br />
              <span className="gradient-title">Meets Mastery</span>
            </h1>

            <p className="text-xl md:text-2xl text-silver mb-8 max-w-2xl animate-slide-up font-light" style={{ animationDelay: '0.2s' }}>
              Transform your passion into performance with India's premier online dance academy.
              Learn from world-class instructors, anytime, anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/courses"
                className="btn-primary flex items-center space-x-2 btn-3d"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setShowDemo(true)}
                className="btn-secondary flex items-center space-x-2 btn-3d"
              >
                <Play className="w-5 h-5 text-accent" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {[
                { number: '10K+', label: 'Active Students' },
                { number: '50+', label: 'Expert Instructors' },
                { number: '100+', label: 'Dance Courses' },
                { number: '4.9', label: 'Student Rating' },
              ].map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-xl text-center border-white/5">
                  <div className="text-3xl font-bold mb-1 gradient-text">{stat.number}</div>
                  <div className="text-xs text-silver uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Spacer for background visuals */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 opacity-50">
        <div className="w-6 h-10 border-2 border-silver rounded-full flex justify-center">
          <div className="w-1 h-2 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Video Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setShowDemo(false)}>
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10" onClick={e => e.stopPropagation()}>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/sq0oCPLGWLU?rel=0&modestbranding=1"
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
