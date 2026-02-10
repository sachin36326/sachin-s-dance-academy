'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();
  const itemCount = items.length;

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  // Logic: Show background if scrolled OR if NOT on home page (ensures visibility)
  const showBackground = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showBackground
          ? 'glass-nav py-3'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-900 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                Sachin's Dance
              </h1>
              <span className="text-xs text-gray-400 tracking-wide uppercase">Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-gray-300'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/cart" className="relative p-2 text-gray-300 hover:text-white transition group">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link
              href="/login"
              className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-white transition"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link href="/courses" className="btn-primary text-sm px-6 py-2.5 shadow-lg shadow-primary/25">
              Explore Courses
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050508]/95 backdrop-blur-xl border-t border-white/10 animate-fade-in absolute top-[70px] left-0 right-0 z-40 h-screen">
          <div className="px-4 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium transition-colors ${pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                href="/cart"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 py-2 text-gray-300 hover:text-white"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart ({itemCount})</span>
              </Link>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-white"
              >
                Login
              </Link>
              <Link
                href="/courses"
                onClick={() => setIsOpen(false)}
                className="block btn-primary text-center w-full py-3"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
