'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Piyush More',
      role: 'Contemporary Dancer',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'Sachins Dance Academy transformed my dancing. The instructors are world-class and the platform is so easy to use. I went from beginner to performing on stage in just 6 months!',
    },
    {
      name: 'Minesh Shah',
      role: 'Hip-Hop Enthusiast',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'The hip-hop courses here are incredible. I love how I can learn at my own pace and the video quality is amazing. Best investment I made in my dance journey!',
    },
    {
      name: 'Sheetal Shekawat',
      role: 'Ballet Student',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'As someone with no prior dance experience, I was nervous. But the beginner courses are so well-structured and supportive. Now I am confident and loving every moment!',
    },
  ];

  return (
    <section className="py-20 relative bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student <span className="gradient-gold">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from our amazing community of dancers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative glass-card rounded-2xl p-8 shadow-xl card-3d border border-white/5"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-16 h-16 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 relative z-10 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-accent/20"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                ></div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-secondary">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
