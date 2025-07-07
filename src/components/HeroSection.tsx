// src/components/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-4 bg-white">
      {/* Avatar Image */}
      <div className="w-24 h-24 mb-4">
        <Image
          src="/images/profile.jpg" // ✅ Place your image in public/avatar.png
          alt="Nitesh Avatar"
          width={96}
          height={96}
          className="rounded-full object-cover h-full w-full"
        />
      </div>

      {/* Intro */}
      <h2 className="text-lg font-medium text-gray-700 mb-2">
        Hi, I&apos;m Nitesh <span className="text-yellow-500">🤘</span>
      </h2>

      {/* Main Heading with underline */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-6">
        <span className="relative inline-block">
          <span className="relative z-10">Building</span>
          <span className="absolute left-0 bottom-1 h-2 w-full bg-cyan-200 z-0 rounded-sm blue-bar"></span>
        </span>{' '}
        digital products, brands, and experience.
      </h1>

      {/* Subtext */}
      <p className="max-w-xl text-base sm:text-lg text-gray-600 mb-8">
        A <span className="font-semibold">Full-Stack Developer</span> and
        <span className="font-semibold"> UI/UX Enthusiast</span> from India.
        <br />
        I specialize in clean code, smart design, and smooth web experiences.
      </p>

      <a href="#about" className="mt-10 animate-bounce">
        <svg
          className="w-6 h-6 mx-auto text-gray-500 hover:text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>

    </section>
  );
}

