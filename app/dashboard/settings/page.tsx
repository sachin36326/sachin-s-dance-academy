'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { User, Bell, Shield, Lock, CreditCard, LogOut, Moon, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('profile');

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('sachinsdance_user');
        }
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <nav className="flex flex-col">
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`flex items-center space-x-3 px-6 py-4 text-left transition-colors ${activeTab === 'profile' ? 'bg-primary/5 text-primary border-l-4 border-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <User className="w-5 h-5" />
                                    <span className="font-medium">Profile</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('notifications')}
                                    className={`flex items-center space-x-3 px-6 py-4 text-left transition-colors ${activeTab === 'notifications' ? 'bg-primary/5 text-primary border-l-4 border-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <Bell className="w-5 h-5" />
                                    <span className="font-medium">Notifications</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('security')}
                                    className={`flex items-center space-x-3 px-6 py-4 text-left transition-colors ${activeTab === 'security' ? 'bg-primary/5 text-primary border-l-4 border-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <Shield className="w-5 h-5" />
                                    <span className="font-medium">Security</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('billing')}
                                    className={`flex items-center space-x-3 px-6 py-4 text-left transition-colors ${activeTab === 'billing' ? 'bg-primary/5 text-primary border-l-4 border-primary' : 'text-gray-600 hover:bg-gray-50'}`}
                                >
                                    <CreditCard className="w-5 h-5" />
                                    <span className="font-medium">Billing</span>
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center space-x-3 px-6 py-4 text-left text-red-600 hover:bg-red-50 transition-colors mt-auto border-t"
                                >
                                    <LogOut className="w-5 h-5" />
                                    <span className="font-medium">Sign Out</span>
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm p-8">
                            {activeTab === 'profile' && (
                                <div className="space-y-8 animate-fade-in">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h2>
                                        <div className="flex items-center space-x-6 mb-8">
                                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-400">
                                                S
                                            </div>
                                            <button className="btn-primary">Change Avatar</button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                                <input type="text" defaultValue="Student User" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-gray-900" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                                <input type="email" defaultValue="student@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-gray-900" />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-gray-900" placeholder="Tell us about your dance journey..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-6 border-t flex justify-end">
                                        <button className="btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'notifications' && (
                                <div className="space-y-6 animate-fade-in">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
                                    {['Email notifications for new courses', 'Course progress updates', 'New promotional offers', 'Instructor announcements'].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between py-4 border-b last:border-0">
                                            <span className="text-gray-700 font-medium">{item}</span>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'security' && (
                                <div className="space-y-6 animate-fade-in">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                                        <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-gray-900" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                        <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-gray-900" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                                        <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-gray-900" />
                                    </div>
                                    <div className="pt-4">
                                        <button className="btn-primary">Update Password</button>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'billing' && (
                                <div className="space-y-6 animate-fade-in text-center py-12">
                                    <CreditCard className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900">No Payment Methods</h3>
                                    <p className="text-gray-500">You haven't saved any payment methods yet.</p>
                                    <button className="btn-secondary text-primary border-primary mt-4">Add Payment Method</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
