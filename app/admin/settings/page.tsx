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
  Bell,
  Lock,
  Globe,
  CreditCard,
  Mail,
  TrendingUp,
  Save
} from 'lucide-react';

export default function AdminSettings() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const handleLogout = () => {
    router.push('/admin/login');
  };

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
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
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
              className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
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
              className="flex items-center space-x-3 px-4 py-3 bg-admin/10 text-admin rounded-lg"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Settings Tabs */}
          <div className="bg-white rounded-xl shadow-sm mb-6">
            <div className="flex border-b overflow-x-auto">
              <button
                onClick={() => setActiveTab('general')}
                className={`px-6 py-4 font-medium whitespace-nowrap ${
                  activeTab === 'general'
                    ? 'text-admin border-b-2 border-admin'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                General
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`px-6 py-4 font-medium whitespace-nowrap ${
                  activeTab === 'notifications'
                    ? 'text-admin border-b-2 border-admin'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Notifications
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`px-6 py-4 font-medium whitespace-nowrap ${
                  activeTab === 'security'
                    ? 'text-admin border-b-2 border-admin'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Security
              </button>
              <button
                onClick={() => setActiveTab('payment')}
                className={`px-6 py-4 font-medium whitespace-nowrap ${
                  activeTab === 'payment'
                    ? 'text-admin border-b-2 border-admin'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Payment
              </button>
            </div>
          </div>

          {/* General Settings */}
          {activeTab === 'general' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">General Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Academy Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Sachin's Dance Academy"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    defaultValue="info@sachin's dance.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="123 Dance Street, Mumbai, Maharashtra 400001"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin"
                  />
                </div>
                <button className="flex items-center space-x-2 px-6 py-3 bg-admin text-white rounded-lg hover:bg-admin/90">
                  <Save className="w-5 h-5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          )}

          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive email updates about new enrollments</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-admin rounded" />
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium text-gray-900">Class Reminders</p>
                    <p className="text-sm text-gray-600">Get notified before classes start</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-admin rounded" />
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium text-gray-900">Payment Alerts</p>
                    <p className="text-sm text-gray-600">Notifications for successful payments</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-admin rounded" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900">Weekly Reports</p>
                    <p className="text-sm text-gray-600">Receive weekly summary reports</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-admin rounded" />
                </div>
                <button className="flex items-center space-x-2 px-6 py-3 bg-admin text-white rounded-lg hover:bg-admin/90 mt-6">
                  <Save className="w-5 h-5" />
                  <span>Save Preferences</span>
                </button>
              </div>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Security Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin"
                  />
                </div>
                <button className="flex items-center space-x-2 px-6 py-3 bg-admin text-white rounded-lg hover:bg-admin/90">
                  <Lock className="w-5 h-5" />
                  <span>Update Password</span>
                </button>
              </div>
            </div>
          )}

          {/* Payment Settings */}
          {activeTab === 'payment' && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currency
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin">
                    <option value="INR">Indian Rupee (₹)</option>
                    <option value="USD">US Dollar ($)</option>
                    <option value="EUR">Euro (€)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Gateway
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin">
                    <option value="razorpay">Razorpay</option>
                    <option value="paytm">Paytm</option>
                    <option value="stripe">Stripe</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter bank account number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter IFSC code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-admin"
                  />
                </div>
                <button className="flex items-center space-x-2 px-6 py-3 bg-admin text-white rounded-lg hover:bg-admin/90">
                  <Save className="w-5 h-5" />
                  <span>Save Payment Settings</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
