'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Camera,
    Save,
    Loader2,
    ArrowLeft,
    Calendar,
    Award,
    BookOpen
} from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function ProfilePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // Mock User State - In real app, fetch from auth context/API
    const [user, setUser] = useState({
        name: 'Student Name',
        email: 'student@example.com',
        phone: '+91 98765 43210',
        location: 'Mumbai, India',
        bio: 'Passionate dancer looking to master contemporary and hip-hop styles.',
        joinDate: '2025-01-01',
        coursesEnrolled: 4,
        certificates: 1,
    });

    useEffect(() => {
        // Try to load user name from local storage if available to be consistent with other pages
        const storedUser = typeof window !== 'undefined' ? localStorage.getItem('sachinsdance_user') : null;
        if (storedUser) {
            // Just a simple mock integration
            try {
                const parsed = JSON.parse(storedUser);
                if (parsed.name) setUser(prev => ({ ...prev, name: parsed.name, email: parsed.email || prev.email }));
            } catch { }
        }
    }, []);

    const handleSave = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Update local storage
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem('sachinsdance_user');
            const currentUser = storedUser ? JSON.parse(storedUser) : {};
            const updatedUser = {
                ...currentUser,
                name: user.name,
                email: user.email,
                phone: user.phone,
                location: user.location,
                bio: user.bio
            };
            localStorage.setItem('sachinsdance_user', JSON.stringify(updatedUser));

            // Dispatch a storage event so other components can update if needed (optional)
            window.dispatchEvent(new Event('storage'));
        }

        setLoading(false);
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-dark">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => router.back()}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6 text-white" />
                        </button>
                        <h1 className="text-3xl font-bold text-white">My Profile</h1>
                    </div>
                    {!isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="btn-secondary px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Profile Card */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="glass-panel p-8 rounded-2xl border border-white/10 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative inline-block mb-4">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${user.name}&background=random&size=256`}
                                        alt="Profile"
                                        className="w-full h-full rounded-full border-4 border-[#050508] object-cover"
                                    />
                                </div>
                                <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white shadow-lg hover:bg-primary/80 transition-colors">
                                    <Camera className="w-4 h-4" />
                                </button>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
                            <p className="text-gray-400 text-sm mb-6">Student Member</p>

                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 bg-white/5 py-2 px-4 rounded-full inline-flex">
                                <Calendar className="w-4 h-4" />
                                <span>Member since {new Date(user.joinDate).getFullYear()}</span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-panel p-4 rounded-xl border border-white/10 text-center hover:border-primary/30 transition-colors">
                                <BookOpen className="w-8 h-8 text-accent mx-auto mb-2" />
                                <span className="block text-2xl font-bold text-white">{user.coursesEnrolled}</span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Courses</span>
                            </div>
                            <div className="glass-panel p-4 rounded-xl border border-white/10 text-center hover:border-primary/30 transition-colors">
                                <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
                                <span className="block text-2xl font-bold text-white">{user.certificates}</span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Certificates</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details Form */}
                    <div className="lg:col-span-2">
                        <div className="glass-panel p-8 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <User className="w-5 h-5 mr-2 text-primary" />
                                Personal Information
                            </h3>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            <input
                                                type="text"
                                                value={user.name}
                                                disabled={!isEditing}
                                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border ${isEditing ? 'border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary' : 'border-white/10'} text-white placeholder-gray-500 focus:outline-none transition-all`}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            <input
                                                type="email"
                                                value={user.email}
                                                disabled={!isEditing} // Email usually shouldn't be edited easily
                                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 cursor-not-allowed"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            <input
                                                type="tel"
                                                value={user.phone}
                                                disabled={!isEditing}
                                                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border ${isEditing ? 'border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary' : 'border-white/10'} text-white placeholder-gray-500 focus:outline-none transition-all`}
                                            />
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Location</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            <input
                                                type="text"
                                                value={user.location}
                                                disabled={!isEditing}
                                                onChange={(e) => setUser({ ...user, location: e.target.value })}
                                                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border ${isEditing ? 'border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary' : 'border-white/10'} text-white placeholder-gray-500 focus:outline-none transition-all`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Bio</label>
                                    <textarea
                                        rows={4}
                                        value={user.bio}
                                        disabled={!isEditing}
                                        onChange={(e) => setUser({ ...user, bio: e.target.value })}
                                        className={`w-full p-4 rounded-xl bg-white/5 border ${isEditing ? 'border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary' : 'border-white/10'} text-white placeholder-gray-500 focus:outline-none transition-all resize-none`}
                                    />
                                </div>

                                {/* Save Button */}
                                {isEditing && (
                                    <div className="flex justify-end pt-4 border-t border-white/10">
                                        <button
                                            onClick={() => setIsEditing(false)}
                                            className="px-6 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors mr-3"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSave}
                                            disabled={loading}
                                            className="btn-primary px-8 py-2 rounded-full flex items-center space-x-2"
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    <span>Saving...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Save className="w-4 h-4" />
                                                    <span>Save Changes</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
