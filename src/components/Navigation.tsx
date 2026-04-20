import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-accent">
            Portfolio
          </Link>
          <ul className="flex gap-8 text-sm md:text-base">
            <li><a href="#about" className="hover:text-accent smooth-transition">About</a></li>
            <li><a href="#projects" className="hover:text-accent smooth-transition">Projects</a></li>
            <li><a href="#cv" className="hover:text-accent smooth-transition">CV</a></li>
            <li><a href="#contact" className="hover:text-accent smooth-transition">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
