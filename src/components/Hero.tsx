export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-primary px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hi, I'm <span className="text-accent">Manasi Jeste</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Automation Engineer | Data Analyst | ML & Embedded Systems
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Master's student in Embedded Systems Engineering passionate about AI, automation, and renewable energy solutions. 
          Building intelligent systems for smart charging, energy optimization, and autonomous control.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 smooth-transition font-semibold"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white smooth-transition font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
