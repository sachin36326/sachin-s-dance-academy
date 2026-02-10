'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'subscribed'>('idle');

  const handleSubscribe = () => {
    if (!email) return;
    // Simulate API call
    setTimeout(() => {
      setStatus('subscribed');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000); // Reset after 3 secs
    }, 500);
  };

  return (
    <footer className="relative bg-[#050508] text-white overflow-hidden">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      {/* Background Glows */}
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Sachin's Dance</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Academy</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your passion into performance. Join India's premier online dance community and learn from the masters.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'All Courses', href: '/courses' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Student Login', href: '/login' },
                { label: 'Admin Access', href: '/admin/login' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors flex items-center space-x-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dance Styles */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Popular Styles</h4>
            <ul className="space-y-3">
              {['Contemporary', 'Hip-Hop & Breaking', 'Classical Ballet', 'Bollywood', 'Salsa & Latin', 'Kathak'].map((style) => (
                <li key={style} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {style}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest choreography trends and offers.
            </p>
            <div className="space-y-3">
              {status === 'subscribed' ? (
                <div className="w-full bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3 text-green-400 flex items-center space-x-2 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Subscribed Successfully!</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="w-full btn-primary btn-3d rounded-lg"
                  >
                    Subscribe
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sachin's Dance Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
