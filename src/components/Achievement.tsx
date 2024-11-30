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
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <RetroGrid
          position="center"
          blur={0.8} // Increased blur for smoother animation
          speed={0.5} // Reduced speed for smoother motion
          lines={16} // Reduced number of lines to prevent glitches
          cellSize={50} // Increased cell size for better performance
          lineWidth={1.5} // Slightly thicker lines for better visibility
          lineColor="rgba(127, 255, 0, 0.15)" // Reduced opacity for smoother look
          animate={true}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-black uppercase tracking-wide font-fraunces">
            OUR<br />
            ACHIEVEMENT
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="border border-gray-800 bg-black/50 backdrop-blur-sm p-6 flex flex-col items-center text-center rounded-lg hover:border-[#7FFF00] transition-colors duration-300"
            >
              <span className="text-white text-6xl font-black mb-4" style={{ fontFamily: 'var(--font-redhat)' }}>
                {achievement.number}
              </span>
              <span className="text-gray-400 text-lg whitespace-pre-line">
                {achievement.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}