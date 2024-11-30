'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Projects() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((projectRef) => {
        if (!projectRef) return;
        
        const rect = projectRef.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        
        if (scrollPercent > 0 && scrollPercent < 1) {
          projectRef.style.transform = `translateY(${scrollPercent * 50}px)`;
          projectRef.style.opacity = Math.min(1, scrollPercent * 1.5).toString();
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "6 ROOM DELUXE BUNGALOW",
      description: "Our architecture services are designed enhance the functionality & flow of your space, while also ensuring it is visually stunning. We meticulously consider spatial dynamics to craft interiors that are not only beautiful but also highly practical.",
      specs: [
        "6 Rooms",
        "4 Bathrooms", 
        "2 Boys Quarters",
        "Spacious Compound"
      ],
      image: "/house1.jpg"
    },
    {
      title: "LANDSCAPE DESIGN", 
      description: "Landscape design shapes cities and neighborhoods to be functional, attractive, and sustainable. It integrates architecture, public spaces, and infrastructure to improve quality of life, enhance connectivity, and promote walkability.",
      specs: [
        "Site analysis",
        "Concept development",
        "Design refinement",
        "Detailed planning",
        "Implementation & oversight"
      ],
      image: "/house2.jpg"
    }
  ];

  return (
    <section className="bg-black py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-[#7FFF00] text-[#7FFF00]">
              <span className="text-[#7FFF00] text-xl">✧</span>
              <span className="text-sm font-medium font-fraunces">OUR PROJECTS</span>
            </div>
          </div>

          {/* Title */}
          <div className="max-w-2xl">
            <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide font-fraunces">
              TRANSFORMING SPACE WITH CUTTING-EDGE ARCHITECTURAL SOLUTIONS
            </h3>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={(el: HTMLDivElement | null) => {
                if (projectRefs.current) {
                  projectRefs.current[index] = el;
                }
              }}
              className="flex flex-col md:grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#7FFF00]/20 transition-all duration-300"
              style={{
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              <div className="order-1 md:order-none p-8 md:p-16 flex flex-col justify-between">
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-black uppercase font-redhat tracking-wide">
                    {project.title}
                  </h3>
                  <div className="text-gray-600 font-redhat leading-relaxed">
                    {project.description}
                  </div>
                  <ul className="space-y-4">
                    {project.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 group">
                        <span className="text-[#7FFF00] text-xl group-hover:scale-125 transition-transform">•</span>
                        <span className="font-redhat text-gray-800">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12">
                  <button className="inline-flex items-center gap-3 bg-[#7FFF00] text-black px-8 py-4 rounded-full w-fit hover:bg-[#66CC00] transition-all duration-300 group">
                    <span className="font-medium font-redhat tracking-wide">VIEW DETAILS</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="order-2 md:order-none relative aspect-[4/3] h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{objectFit: 'cover', objectPosition: 'center'}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}