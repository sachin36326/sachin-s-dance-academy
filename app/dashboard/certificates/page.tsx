'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Award, Download, Calendar, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

import { COURSES } from '@/data/courses';

export default function CertificatesPage() {
    const router = useRouter();
    const [downloading, setDownloading] = useState(false);
    const [studentName, setStudentName] = useState('Student Name');
    const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);

    useEffect(() => {
        // Fetch user data and enrolled courses from localStorage
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('sachinsdance_user');
            if (userStr) {
                try {
                    const user = JSON.parse(userStr);
                    if (user.name) {
                        setStudentName(user.name);
                    }
                } catch (e) {
                    console.error("Error parsing user data", e);
                }
            }

            const enrolledStr = localStorage.getItem('sachinsdance_enrolled');
            if (enrolledStr) {
                try {
                    setEnrolledCourseIds(JSON.parse(enrolledStr));
                } catch { }
            }
        }
    }, []);

    // Generate certificates for enrolled courses (mocking completion for now)
    const certificates = COURSES
        .filter(course => enrolledCourseIds.includes(course.id))
        .map(course => ({
            id: course.id,
            courseName: course.title,
            instructor: course.instructor,
            dateEarned: new Date().toISOString().split('T')[0], // Mock date
            grade: 'A', // Mock grade
            studentName: studentName,
        }));

    const handleDownload = async (cert: any) => {
        setDownloading(true);
        try {
            // Import libraries dynamically to avoid SSR issues
            const html2canvas = (await import('html2canvas')).default;
            const jsPDF = (await import('jspdf')).default;

            // Get the hidden certificate element
            const element = document.getElementById(`certificate-${cert.id}`);
            if (!element) return;

            // Make it visible temporarily for capture (wrapper handles this by being off-screen but visible to DOM)
            // Capture
            const canvas = await html2canvas(element, {
                scale: 2, // Higher quality
                backgroundColor: '#ffffff',
                logging: false,
                useCORS: true, // Important for images
            });

            const imgData = canvas.toDataURL('image/png');

            // A4 Landscape
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${cert.courseName.replace(/\s+/g, '_')}_Certificate.pdf`);
        } catch (error) {
            console.error('Download failed', error);
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => router.back()}
                            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6 text-white" />
                        </button>
                        <h1 className="text-3xl font-bold text-white">My Certificates</h1>
                    </div>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) => (
                        <div key={cert.id} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all group">
                            {/* Certificate Preview */}
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-white/5 border border-white/10">
                                {/* Decorative Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                    <Award className="w-16 h-16 text-accent mb-4 drop-shadow-lg" />
                                    <h3 className="text-xl font-serif font-bold text-white mb-1">{cert.courseName}</h3>
                                    <p className="text-gray-300 text-sm">Certificate of Completion</p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Course Instructor</p>
                                    <p className="text-white font-medium">{cert.instructor}</p>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center text-gray-400">
                                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                                        {new Date(cert.dateEarned).toLocaleDateString()}
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold">
                                        Grade: {cert.grade}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 pt-4 border-t border-white/10">
                                    <button
                                        onClick={() => handleDownload(cert)}
                                        disabled={downloading}
                                        className="flex-1 btn-primary py-2 text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        <Download className="w-4 h-4" />
                                        {downloading ? 'Downloading...' : 'Download'}
                                    </button>
                                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Empty State / Add New (Visual Filler) */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/5 border-dashed flex flex-col items-center justify-center text-center min-h-[400px] opacity-75 hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                            <Award className="w-8 h-8 text-gray-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Complete more courses</h3>
                        <p className="text-gray-400 max-w-xs mb-6">Finish your enrolled courses to earn more professional certificates.</p>
                        <Link href="/dashboard" className="text-primary hover:text-accent font-medium transition-colors">
                            Go to Dashboard
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hidden Certificate Templates for Generation */}
            <div className="fixed top-0 left-0 w-full h-0 overflow-hidden">
                {certificates.map((cert) => (
                    <div
                        key={`template-${cert.id}`}
                        id={`certificate-${cert.id}`}
                        className="w-[1123px] h-[794px] bg-white text-black relative p-0" // A4 landscape approx pixel size at 96dpi
                        style={{ fontFamily: "'Times New Roman', serif" }}
                    >
                        {/* Border/Frame */}
                        <div className="absolute inset-4 border-[10px] border-double border-[#6D28D9] h-full" />
                        <div className="absolute inset-8 border-[2px] border-[#F59E0B] h-[calc(100%-64px)] w-[calc(100%-64px)] origin-center" />

                        {/* Corner Ornaments (CSS shapes) */}
                        <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-[#6D28D9]" />
                        <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-[#6D28D9]" />
                        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-[#6D28D9]" />
                        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-[#6D28D9]" />

                        {/* Content */}
                        <div className="flex flex-col items-center justify-center h-full text-center p-20 z-10 relative">
                            {/* Logo/Header */}
                            <div className="mb-12 mt-4">
                                <h1 className="text-5xl font-bold text-[#6D28D9] mb-4 uppercase tracking-wide">Sachin's Dance Academy</h1>
                                <div className="h-1 w-32 bg-[#F59E0B] mx-auto mb-4" />
                                <p className="text-3xl text-[#1A1A2E] tracking-[0.3em] uppercase font-light">Certificate of Achievement</p>
                            </div>

                            <div className="my-4 w-full flex-1 flex flex-col justify-center items-center">
                                <p className="text-2xl text-gray-500 italic mb-8 font-serif">This is to certify that</p>

                                {/* Name Field */}
                                <div className="relative mb-8">
                                    <h2 className="text-6xl font-bold text-[#1A1A2E] px-12 pb-4 border-b-2 border-gray-400 font-serif min-w-[600px] inline-block capitalize">
                                        {cert.studentName}
                                    </h2>
                                </div>

                                <p className="text-2xl text-gray-500 italic mt-4 mb-4 font-serif">Has successfully completed the comprehensive course on</p>
                                <h3 className="text-5xl font-bold text-[#6D28D9] mb-4 font-serif">{cert.courseName}</h3>
                                <p className="text-xl text-gray-500 mt-2 italic">Demonstrating exceptional dedication, skill, and artistic expression.</p>
                            </div>

                            <div className="flex justify-between w-full mt-16 px-16 items-end">
                                {/* Instructor Signature */}
                                <div className="text-center w-64">
                                    <div className="h-20 flex items-end justify-center mb-2">
                                        <p className="text-4xl font-bold text-[#6D28D9] transform -rotate-3 leading-none" style={{ fontFamily: 'cursive' }}>
                                            {cert.instructor}
                                        </p>
                                    </div>
                                    <div className="border-t-2 border-black w-full" />
                                    <p className="text-sm text-gray-600 font-bold uppercase tracking-wider mt-2">Instructor Signature</p>
                                </div>

                                {/* Seal */}
                                <div className="text-center">
                                    <div className="relative -top-4">
                                        <img
                                            src="/certificate_seal.png"
                                            alt="Official Seal"
                                            className="w-40 h-40 object-contain mx-auto drop-shadow-md opacity-90"
                                            onError={(e) => {
                                                // Fallback if image fails - create a CSS seal
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                target.parentElement!.innerHTML = '<div class="w-32 h-32 rounded-full border-4 border-[#F59E0B] bg-gradient-to-br from-[#F59E0B] to-[#FFE4B5] flex items-center justify-center shadow-lg"><span class="text-[#6D28D9] font-bold text-xs uppercase text-center transform -rotate-12">Official<br/>Seal</span></div>';
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="text-center w-64">
                                    <div className="h-20 flex items-end justify-center mb-2">
                                        <p className="text-2xl font-semibold text-[#1A1A2E] leading-none">
                                            {new Date(cert.dateEarned).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                    </div>
                                    <div className="border-t-2 border-black w-full" />
                                    <p className="text-sm text-gray-600 font-bold uppercase tracking-wider mt-2">Date Issued</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
