import Image from 'next/image';
import Header from './Header';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/house3.jpg"
            alt="Modern architectural building"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <Image
            src="/Gradient.png"
            alt="Gradient overlay"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-end pb-16">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-white text-[4.5rem] leading-[1.1] font-bold tracking-tight font-fraunces mb-5">
            DISCOVER YOUR DREAM<br />HOME TODAY
          </h2>
        </div>

        {/* Scroll Down Arrow */}
        <div className="mt-5">
          <div className="w-8 h-8 rounded-full border-2 border-[#7FFF00] flex items-center justify-center animate-bounce">
            <svg 
              className="w-4 h-4 text-[#7FFF00]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}