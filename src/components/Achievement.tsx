"use client";

import RetroGrid from "./magicui/retro-grid";

export default function Achievement() {
  const achievements = [
    {
      number: "16+",
      text: "Years of\nExperience"
    },
    {
      number: "25+",  
      text: "Partners Around\nWorld"
    },
    {
      number: "180K",
      text: "Happy"
    },
    {
      number: "120+",
      text: "Expert\nTeams"
    }
  ];

  return (
    <section className="relative bg-black py-12 md:py-20 overflow-hidden">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <RetroGrid
          position="center"
          blur={0.8}
          speed={0.5}
          lines={16}
          cellSize={50}
          lineWidth={1.5}
          lineColor="rgba(127, 255, 0, 0.15)"
          animate={true}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Title */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide font-fraunces">
            OUR<br />
            ACHIEVEMENT
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="border border-gray-800 bg-black/50 backdrop-blur-sm p-4 md:p-6 flex flex-col items-center text-center rounded-lg hover:border-[#7FFF00] transition-colors duration-300"
            >
              <span className="text-white text-4xl md:text-6xl font-black mb-2 md:mb-4" style={{ fontFamily: 'var(--font-redhat)' }}>
                {achievement.number}
              </span>
              <span className="text-gray-400 text-base md:text-lg whitespace-pre-line">
                {achievement.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}