'use client';

import Link from 'next/link';
import { Clock, Users, Star, TrendingUp } from 'lucide-react';

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: 'Contemporary Dance Masterclass',
      instructor: 'Shahbaaz Shaikh',
      style: 'Contemporary',
      difficulty: 'Intermediate',
      price: 4999,
      duration: '8 weeks',
      students: 1250,
      rating: 4.9,
      thumbnail: '/images/s3.jpg',
      popular: true,
    },
    {
      id: 2,
      title: 'Hip-Hop Fundamentals',
      instructor: 'Sachin Chauhan',
      style: 'Hip-Hop',
      difficulty: 'Beginner',
      price: 3999,
      duration: '6 weeks',
      students: 2100,
      rating: 4.8,
      thumbnail: '/images/s11.jpg',
      popular: true,
    },
    {
      id: 3,
      title: 'Classical Ballet Technique',
      instructor: 'Afrose Shaikh',
      style: 'Ballet',
      difficulty: 'Advanced',
      price: 5999,
      duration: '12 weeks',
      students: 850,
      rating: 5.0,
      thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800',
      popular: false,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Splashes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-title">Courses</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start your dance journey with our most popular courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group glass-card rounded-2xl overflow-hidden shadow-2xl card-3d border border-white/5"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />

                {course.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg pointer-events-none">
                    <TrendingUp className="w-3 h-3" />
                    <span>Popular</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-sm font-semibold text-white pointer-events-none">
                  {course.style}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-400">{course.difficulty}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-white">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">by <span className="text-gray-300">{course.instructor}</span></p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-2xl font-bold text-white">₹{course.price.toLocaleString()}</span>
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-6 py-2 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm group-hover:border-secondary/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-block btn-primary btn-3d"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
