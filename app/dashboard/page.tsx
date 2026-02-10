'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Calendar,
  PlayCircle,
  LogOut,
  User,
  Settings
} from 'lucide-react';

import { COURSES } from '@/data/courses';

export default function StudentDashboard() {
  const router = useRouter();
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);

  useEffect(() => {
    // Check authentication
    const userStr = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_user') : null;
    if (!userStr) {
      router.push('/login');
      return;
    }

    // Load enrolled courses
    const enrolledStr = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_enrolled') : null;
    if (enrolledStr) {
      try {
        setEnrolledCourseIds(JSON.parse(enrolledStr));
      } catch { }
    }
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('sachinsdance_user');
      localStorage.removeItem('sachinsdance_enrolled');
    }
    router.push('/login');
  };

  // derived state for enrolled courses with mock progress
  const enrolledCourses = COURSES
    .filter(course => enrolledCourseIds.includes(course.id))
    .map(course => ({
      ...course,
      progress: Math.floor(Math.random() * 100), // Mock progress for now
      nextLesson: 'Next Lesson Placeholder',
      completedLessons: Math.floor((Math.random() * course.totalLessons) / 2)
    }));

  const totalEnrolled = enrolledCourses.length;
  const avgProgress = totalEnrolled > 0
    ? Math.round(enrolledCourses.reduce((acc, curr) => acc + curr.progress, 0) / totalEnrolled)
    : 0;

  const upcomingClasses = [
    { title: 'Contemporary Dance - Live Session', time: 'Today, 6:00 PM', instructor: 'Priya Sharma' },
    { title: 'Hip-Hop Practice', time: 'Tomorrow, 5:00 PM', instructor: 'Rahul Verma' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sachin's Dance</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/dashboard/profile" className="text-gray-600 hover:text-primary">
                <User className="w-6 h-6" />
              </Link>
              <Link href="/dashboard/settings" className="text-gray-600 hover:text-primary">
                <Settings className="w-6 h-6" />
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Student!</h1>
          <p className="text-gray-600">Continue your dance journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Enrolled Courses</p>
                <p className="text-3xl font-bold text-gray-900">{totalEnrolled}</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Hours Learned</p>
                <p className="text-3xl font-bold text-gray-900">{totalEnrolled * 12}</p>
              </div>
              <div className="bg-secondary/10 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Certificates</p>
                <p className="text-3xl font-bold text-gray-900">0</p>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-accent" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Avg Progress</p>
                <p className="text-3xl font-bold text-gray-900">{avgProgress}%</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Courses */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
              <Link href="/courses" className="text-primary hover:underline">
                Browse More
              </Link>
            </div>

            <div className="space-y-6">
              {enrolledCourses.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No courses yet</h3>
                  <p className="text-gray-600 mb-6">Start your dance journey by enrolling in a course</p>
                  <Link href="/courses" className="btn-primary inline-block">
                    Browse Courses
                  </Link>
                </div>
              ) : (
                enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div
                        className="w-full md:w-48 h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${course.thumbnail})` }}
                      />
                      <div className="flex-1 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">by {course.instructor}</p>

                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-semibold text-primary">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary rounded-full h-2 transition-all duration-300"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            <p>{course.completedLessons} of {course.totalLessons} lessons</p>
                            <p className="font-medium text-gray-900 mt-1">Next: {course.nextLesson}</p>
                          </div>
                          <Link
                            href={`/dashboard/courses/${course.id}`}
                            className="flex items-center space-x-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <PlayCircle className="w-5 h-5" />
                            <span>Continue</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Classes */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-gray-900">Upcoming Classes</h3>
              </div>
              <div className="space-y-4">
                {upcomingClasses.map((cls, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-gray-900">{cls.title}</p>
                    <p className="text-sm text-gray-600">{cls.time}</p>
                    <p className="text-sm text-gray-500">{cls.instructor}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/courses"
                  className="block w-full text-center py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
                >
                  Browse Courses
                </Link>
                <Link
                  href="/dashboard/certificates"
                  className="block w-full text-center py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-all"
                >
                  My Certificates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
