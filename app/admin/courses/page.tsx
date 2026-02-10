'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Settings,
  LogOut,
  Menu,
  X,
  Plus,
  Clock,
  TrendingUp,
  Edit,
  Trash2
} from 'lucide-react';

export default function AdminCourses() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    router.push('/admin/login');
  };

  const courses = [
    { 
      id: 1, 
      name: 'Hip Hop Basics', 
      instructor: 'Sachin Chauhan', 
      students: 45, 
      duration: '8 weeks', 
      price: '₹8,500',
      schedule: 'Mon, Wed, Fri - 6:00 PM',
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Contemporary Dance', 
      instructor: 'Shahbaaz Shaikh', 
      students: 32, 
      duration: '10 weeks', 
      price: '₹12,000',
      schedule: 'Tue, Thu - 7:00 PM',
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'Bharatanatyam', 
      instructor: 'Lakshmi Iyer', 
      students: 28, 
      duration: '12 weeks', 
      price: '₹15,000',
      schedule: 'Sat, Sun - 10:00 AM',
      status: 'Active'
    },
    { 
      id: 4, 
      name: 'Salsa Intermediate', 
      instructor: 'Divesh Singh', 
      students: 20, 
      duration: '6 weeks', 
      price: '₹7,000',
      schedule: 'Wed, Fri - 8:00 PM',
      status: 'Active'
    },
    { 
      id: 5, 
      name: 'Ballet Foundation', 
      instructor: 'Afrose Shaikh', 
      students: 18, 
      duration: '10 weeks', 
      price: '₹10,500',
      schedule: 'Mon, Thu - 5:00 PM',
      status: 'Upcoming'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Courses Management</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <nav className="p-6 space-y-2 mt-16 lg:mt-0">
            <Link
              href="/admin/dashboard"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              href="/admin/students"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">Students</span>
            </Link>
            <Link
              href="/admin/courses"
              className="flex items-center space-x-3 px-4 py-3 bg-admin/10 text-admin rounded-lg"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Courses</span>
            </Link>
            <Link
              href="/admin/schedule"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Schedule</span>
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Add Course Button */}
          <div className="mb-6 flex justify-end">
            <button className="flex items-center space-x-2 px-6 py-3 bg-admin text-white rounded-lg hover:bg-admin/90">
              <Plus className="w-5 h-5" />
              <span>Add New Course</span>
            </button>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{course.name}</h3>
                    <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {course.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Students Enrolled</span>
                    <span className="font-semibold text-gray-900">{course.students}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold text-admin">{course.price}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.schedule}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-admin text-admin rounded-lg hover:bg-admin/5">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
