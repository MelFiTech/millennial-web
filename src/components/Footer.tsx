import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROPERTIES', href: '/properties' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      href: '#',
      icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
    },
    {
      name: 'Instagram',
      href: '#',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    {
      name: 'YouTube',
      href: '#',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
    }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Main Content */}
        <div className="mb-20 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-4 tracking-wide" style={{ fontFamily: 'var(--font-redhat)', letterSpacing: '-2px' }}>
              Start your property<br />journey now!
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Take the first step towards finding your dream home or perfect investment. Our
              expert team is here to guide you through every stage of your real estate journey.
            </p>
          </div>

          {/* Rotating Circle Logo */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 group">
            <div className="absolute inset-0 border-2 border-[#7FFF00] rounded-full animate-spin-slow group-hover:bg-[#7FFF00] transition-colors duration-30">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fill="#7FFF00" fontSize="8" className="group-hover:fill-black transition-colors duration-300">
                  <textPath href="#circlePath" startOffset="0%">
                    MILLENNIAL • MILLENNIAL • MILLENNIAL • MILLENNIAL
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#7FFF00] group-hover:text-black transition-colors duration-300 transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
              </svg>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-center md:text-left">
            <div className="text-gray-400 text-sm sm:text-base" style={{ fontFamily: 'var(--font-redhat)' }}>
              123 Elm Street, Suite 456 Cityville, State 78901<br />United States
            </div>
            <div className="text-gray-400 text-sm sm:text-base md:text-center" style={{ fontFamily: 'var(--font-redhat)' }}>
              +1 (234) 567 - 8901
            </div>
            <div className="text-gray-400 text-sm sm:text-base md:text-right" style={{ fontFamily: 'var(--font-redhat)' }}>
              hello@millennial.com
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            {/* Logo */}
            <div>
              <Image 
                src="/logo.svg"
                alt="Millennial Logo"
                width={90}
                height={24}
                className="w-24 sm:w-[108px]"
                priority
              />
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-8" style={{ fontFamily: 'var(--font-redhat)' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-sm sm:text-base hover:text-[#7FFF00] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex gap-4 sm:gap-6">
              {socialMedia.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#7FFF00] transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}