'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Filter, Clock, Users, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

import { COURSES } from '@/data/courses';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');

  const danceStyles = ['Contemporary', 'Hip-Hop', 'Ballet', 'Bollywood', 'Salsa', 'Kathak'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const courses = COURSES;

  const toggleStyle = (style: string) => {
    setSelectedStyle(prev =>
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const toggleDifficulty = (difficulty: string) => {
    setSelectedDifficulty(prev =>
      prev.includes(difficulty) ? prev.filter(d => d !== difficulty) : [...prev, difficulty]
    );
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStyle = selectedStyle.length === 0 || selectedStyle.includes(course.style);
    const matchesDifficulty = selectedDifficulty.length === 0 || selectedDifficulty.includes(course.difficulty);
    const matchesPrice = priceRange === 'all' ||
      (priceRange === 'low' && course.price < 4000) ||
      (priceRange === 'medium' && course.price >= 4000 && course.price < 6000) ||
      (priceRange === 'high' && course.price >= 6000);

    return matchesSearch && matchesStyle && matchesDifficulty && matchesPrice;
  });

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore Our <span className="gradient-title">Courses</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find the perfect dance course to match your passion and skill level
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 sticky top-20 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#1A1A2E]/80 backdrop-blur-md border border-white/10 rounded-full focus:outline-none focus:border-primary text-white placeholder-gray-500 shadow-lg"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button className="md:hidden btn-primary flex items-center justify-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-64 space-y-6">
              {/* Dance Style Filter */}
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="font-bold text-lg mb-4 text-white">Dance Style</h3>
                <div className="space-y-2">
                  {danceStyles.map(style => (
                    <label key={style} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedStyle.includes(style) ? 'bg-primary border-primary' : 'border-gray-600 group-hover:border-primary'}`}>
                        {selectedStyle.includes(style) && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedStyle.includes(style)}
                        onChange={() => toggleStyle(style)}
                        className="hidden"
                      />
                      <span className={`${selectedStyle.includes(style) ? 'text-white' : 'text-gray-400'} group-hover:text-white transition-colors`}>{style}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="font-bold text-lg mb-4 text-white">Difficulty</h3>
                <div className="space-y-2">
                  {difficulties.map(difficulty => (
                    <label key={difficulty} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedDifficulty.includes(difficulty) ? 'bg-primary border-primary' : 'border-gray-600 group-hover:border-primary'}`}>
                        {selectedDifficulty.includes(difficulty) && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedDifficulty.includes(difficulty)}
                        onChange={() => toggleDifficulty(difficulty)}
                        className="hidden"
                      />
                      <span className={`${selectedDifficulty.includes(difficulty) ? 'text-white' : 'text-gray-400'} group-hover:text-white transition-colors`}>{difficulty}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <h3 className="font-bold text-lg mb-4 text-white">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'low', label: 'Under ₹4,000' },
                    { value: 'medium', label: '₹4,000 - ₹6,000' },
                    { value: 'high', label: 'Above ₹6,000' },
                  ].map(option => (
                    <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${priceRange === option.value ? 'border-primary' : 'border-gray-600 group-hover:border-primary'}`}>
                        {priceRange === option.value && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </div>
                      <input
                        type="radio"
                        name="price"
                        value={option.value}
                        checked={priceRange === option.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="hidden"
                      />
                      <span className={`${priceRange === option.value ? 'text-white' : 'text-gray-400'} group-hover:text-white transition-colors`}>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Course Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-400 font-medium">
                  Showing <span className="font-bold text-white">{filteredCourses.length}</span> courses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <div
                    key={course.id}
                    className="group glass-card rounded-2xl overflow-hidden shadow-xl card-3d border border-white/5"
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
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg font-medium">No courses found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSelectedStyle([]);
                      setSelectedDifficulty([]);
                      setPriceRange('all');
                      setSearchQuery('');
                    }}
                    className="mt-6 btn-primary btn-3d"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
