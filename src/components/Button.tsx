interface ButtonProps {
  text: string;
  className?: string;
}

export default function Button({ text, className }: ButtonProps) {
  return (
    <button className={`inline-flex items-center gap-3 border-2 border-[#7FFF00] text-[#7FFF00] px-8 py-4 rounded-full w-fit hover:bg-[#7FFF00] hover:text-black transition-all duration-300 group ${className}`}>
      <span className="font-medium font-redhat tracking-wide">{text}</span>
      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  );
}