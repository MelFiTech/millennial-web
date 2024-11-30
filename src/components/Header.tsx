'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      
      // Update background when scrolled past threshold
      setHasScrolled(currentScrollY > 50);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // When menu opens, prevent scrolling
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full px-4 sm:px-8 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={39}
            className="w-[150px] sm:w-[217px]"
            priority
          />
        </Link>

        {/* Hamburger Menu */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white z-50"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Full Screen Menu */}
      <div 
        className={`fixed inset-0 bg-gray-950 z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          <Link 
            href="/" 
            className="text-white text-4xl sm:text-6xl font-bold hover:scale-110 transition-transform font-redhat tracking-[-2px]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <button 
            onClick={() => scrollToSection('whatwedo')}
            className="text-white text-4xl sm:text-6xl font-bold hover:scale-110 transition-transform font-redhat tracking-[-2px]"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-white text-4xl sm:text-6xl font-bold hover:scale-110 transition-transform font-redhat tracking-[-2px]"
          >
            Properties
          </button>
          <Button 
            text="CONTACT US" 
            className="mt-8 !border-white !text-white hover:!bg-white hover:!text-black text-sm sm:text-base"
          />
        </div>
      </div>
    </>
  );
}