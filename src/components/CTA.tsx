import Image from 'next/image';

export default function CTA() {
  return (
    <section className="relative h-[600px] bg-black">
      <div className="relative w-full h-full">
        {/* Background Image */}
        <Image
          src="/image.jpg"
          alt="Modern architectural interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Logo */}
          <div className="bg-white rounded-full p-6 mb-6">
            <Image
              src="/logo1.svg"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>

          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-4 tracking-wide font-fraunces">
            Ready to bring your visions to life?
          </h2>
          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-8 tracking-wide font-fraunces">
            Let&apos;s bring your visions to life
          </h3>

          {/* Button */}
          <button className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#7FFF00] text-white hover:bg-[#7FFF00] hover:text-black transition-all duration-300">
            <span className="font-medium text-sm md:text-base">GET IN TOUCH</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}