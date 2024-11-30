import Ticker from './Ticker';

export default function WhatWeDo() {
  const images = [
    { src: "/house1.jpg", alt: "House project 1" },
    { src: "/house2.jpg", alt: "House project 2" },
    { src: "/house3.jpg", alt: "House project 3" },
    { src: "/house4.jpg", alt: "House project 4" },
    { src: "/house5.jpg", alt: "House project 5" },
    { src: "/house6.jpg", alt: "House project 6" },
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-[#7FFF00] text-[#7FFF00]">
              <span className="text-[#7FFF00] text-xl">✧</span>
              <span className="text-sm font-medium">What we do</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-3xl mb-12">
            <h3 className="text-white text-4xl font-black lowercase leading-tight tracking-wide" style={{ fontFamily: 'var(--font-redhat)', letterSpacing: '-2px' }}>
              WE SPECIALIZE IN TURNING VISIONS INTO REALITY,
              WITH PORTFOLIO OF INNOVATIVE & PRECISELY CRAFTED ARCHITECTURAL & INTERIOR DESIGNS.
            </h3>
          </div>

          {/* Image Ticker */}
          <div className="w-full mb-12">
            <Ticker images={images} speed={1} />
          </div>
        </div>
      </div>
    </section>
  );
}