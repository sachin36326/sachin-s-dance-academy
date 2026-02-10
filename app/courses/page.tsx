'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Filter, Clock, Users, Star, TrendingUp, X } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';

import { COURSES } from '@/data/courses';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

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
    <main className="min-h-screen bg-[#050508] text-white selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">Courses</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Find the perfect dance course to match your passion and skill level
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Search & Filters Bar */}
      <section className="py-8 sticky top-20 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={300}>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-md group-hover:opacity-30 transition-opacity" />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <input
                  type="text"
                  placeholder="Search courses or instructors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-[#1A1A2E]/90 backdrop-blur-xl border border-white/10 rounded-full focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 shadow-2xl relative z-10 transition-all"
                />
              </div>

              {/* Filter Button (Mobile) */}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="md:hidden btn-primary flex items-center justify-center space-x-2 py-4"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Filters (Desktop & Mobile Drawer) */}
            <div className={`
                fixed inset-0 z-50 bg-black/90 backdrop-blur-xl lg:static lg:bg-transparent lg:backdrop-blur-none lg:z-auto lg:w-72 space-y-8 p-6 lg:p-0 transition-transform duration-300 overflow-y-auto lg:overflow-visible
                ${showMobileFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
              <div className="lg:hidden flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Filters</h2>
                <button onClick={() => setShowMobileFilters(false)} className="p-2 rounded-full bg-white/10">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Dance Style Filter */}
              <div className="glass-card p-6 rounded-3xl border border-white/5 shadow-xl">
                <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  Dance Style
                </h3>
                <div className="space-y-3">
                  {danceStyles.map(style => (
                    <label key={style} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-300 ${selectedStyle.includes(style) ? 'bg-primary border-primary scale-110' : 'border-gray-600 group-hover:border-primary'}`}>
                        {selectedStyle.includes(style) && <div className="w-2 h-2 bg-white rounded-sm" />}
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedStyle.includes(style)}
                        onChange={() => toggleStyle(style)}
                        className="hidden"
                      />
                      <span className={`${selectedStyle.includes(style) ? 'text-white font-medium' : 'text-gray-400'} group-hover:text-white transition-colors`}>{style}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="glass-card p-6 rounded-3xl border border-white/5 shadow-xl">
                <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-secondary rounded-full" />
                  Difficulty
                </h3>
                <div className="space-y-3">
                  {difficulties.map(difficulty => (
                    <label key={difficulty} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-300 ${selectedDifficulty.includes(difficulty) ? 'bg-secondary border-secondary scale-110' : 'border-gray-600 group-hover:border-secondary'}`}>
                        {selectedDifficulty.includes(difficulty) && <div className="w-2 h-2 bg-white rounded-sm" />}
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedDifficulty.includes(difficulty)}
                        onChange={() => toggleDifficulty(difficulty)}
                        className="hidden"
                      />
                      <span className={`${selectedDifficulty.includes(difficulty) ? 'text-white font-medium' : 'text-gray-400'} group-hover:text-white transition-colors`}>{difficulty}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="glass-card p-6 rounded-3xl border border-white/5 shadow-xl">
                <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  Price Range
                </h3>
                <div className="space-y-3">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'low', label: 'Under ₹4,000' },
                    { value: 'medium', label: '₹4,000 - ₹6,000' },
                    { value: 'high', label: 'Above ₹6,000' },
                  ].map(option => (
                    <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${priceRange === option.value ? 'border-accent scale-110' : 'border-gray-600 group-hover:border-accent'}`}>
                        {priceRange === option.value && <div className="w-2.5 h-2.5 bg-accent rounded-full" />}
                      </div>
                      <input
                        type="radio"
                        name="price"
                        value={option.value}
                        checked={priceRange === option.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="hidden"
                      />
                      <span className={`${priceRange === option.value ? 'text-white font-medium' : 'text-gray-400'} group-hover:text-white transition-colors`}>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Mobile Only: Apply Filters Button */}
              <div className="lg:hidden pt-4">
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full btn-primary py-4 rounded-xl font-bold"
                >
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Course Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-400 font-medium">
                  Showing <span className="font-bold text-white text-lg">{filteredCourses.length}</span> courses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => (
                  <FadeIn key={course.id} delay={index * 100}>
                    <div
                      className="group glass-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.3)] transition-all duration-500 border border-white/5 flex flex-col h-full bg-[#0A0A12]"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A12] via-transparent to-transparent opacity-90" />

                        {course.popular && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-1 shadow-lg pointer-events-none">
                            <TrendingUp className="w-3 h-3" />
                            <span>Popular</span>
                          </div>
                        )}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-white pointer-events-none uppercase tracking-wider">
                          {course.style}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 relative flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md uppercase tracking-wide">{course.difficulty}</span>
                          <div className="flex items-center space-x-1 bg-white/5 px-2 py-1 rounded-full">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-bold text-white">{course.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-1">by <span className="text-gray-200 font-medium">{course.instructor}</span></p>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-6 mt-auto">
                          <div className="flex items-center space-x-1.5">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Users className="w-4 h-4 text-gray-400" />
                            <span>{course.students.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                          <div>
                            <span className="text-2xl font-bold text-white">₹{course.price.toLocaleString()}</span>
                          </div>
                          <Link
                            href={`/courses/${course.id}`}
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25"
                          >
                            View Course
                          </Link>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <FadeIn>
                  <div className="text-center py-24 glass-card rounded-3xl border border-white/5">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                      We couldn't find any courses matching your filters. Try adjusting your search or criteria.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedStyle([]);
                        setSelectedDifficulty([]);
                        setPriceRange('all');
                        setSearchQuery('');
                      }}
                      className="btn-primary px-8 py-3 rounded-full hover:scale-105 transition-transform"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
