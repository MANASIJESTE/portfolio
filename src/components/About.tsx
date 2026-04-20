import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg border-2 border-accent">
              <Image
                src="/ID-Photo.jpg"
                alt="Manasi Mahendra Jeste"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a Master's student in Embedded Systems Engineering with a strong foundation in automation, 
              machine learning, and intelligent data analysis. I combine hands-on experience in programming, 
              sensors, and control systems with research in AI and optimization.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My expertise spans from low-level embedded programming to high-level ML model development, 
              with a focus on practical applications in electric vehicles, renewable energy, and smart systems.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I'm passionate about solving real-world problems through intelligent automation and data-driven insights, 
              contributing to sustainable and efficient technology solutions.
            </p>
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-accent">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 mb-2">Programming</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>Python</li>
                    <li>C / C++</li>
                    <li>MATLAB/Simulink</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">AI & Systems</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>Machine Learning</li>
                    <li>Embedded Systems</li>
                    <li>IoT & Control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
