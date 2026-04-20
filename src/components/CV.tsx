export default function CV() {
  return (
    <section id="cv" className="py-20 bg-primary px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Experience & Education
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Experience</h3>
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">Master Thesis Student</h4>
                  <span className="text-gray-400">10/2025 - Present</span>
                </div>
                <p className="text-accent mb-2">Fraunhofer ISE, Freiburg, Germany</p>
                <p className="text-gray-300 text-sm">
                  Developing AI-based probabilistic forecasting models for EV charging with focus on uncertainty calibration and operational performance.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">Student Research Assistant</h4>
                  <span className="text-gray-400">01/2024 - 10/2025</span>
                </div>
                <p className="text-accent mb-2">Fraunhofer ISE, Freiburg, Germany</p>
                <p className="text-gray-300 text-sm">
                  Researched V2X systems and smart EV charging optimization. Built forecasting models and applied MILP optimization for charging schedules.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">Systems Engineer</h4>
                  <span className="text-gray-400">07/2022 - 09/2023</span>
                </div>
                <p className="text-accent mb-2">Honeywell Automation India Ltd, Pune</p>
                <p className="text-gray-300 text-sm">
                  Programmed and simulated HVAC control systems. Delivered automation solutions for infrastructure projects including Sydney Airport.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">Research Intern</h4>
                  <span className="text-gray-400">01/2022 - 07/2022</span>
                </div>
                <p className="text-accent mb-2">Automotive Research Association of India (ARAI)</p>
                <p className="text-gray-300 text-sm">
                  Contributed to battery management system development and remote bootloading systems for NXP controllers.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Education</h3>
            <div className="space-y-6">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">M.Sc. in Embedded Systems Engineering</h4>
                  <span className="text-gray-400">10/2023 - Present</span>
                </div>
                <p className="text-accent mb-2">Albert-Ludwigs-Universität Freiburg, Germany</p>
                <p className="text-gray-300 text-sm">
                  Specialization in AI | Grade: 2.4 | Focus on AI-based systems, smart charging, and renewable energy optimization.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">B.Tech. in Instrumentation and Control Engineering</h4>
                  <span className="text-gray-400">08/2018 - 07/2022</span>
                </div>
                <p className="text-accent mb-2">Vishwakarma Institute of Technology, Pune, India</p>
                <p className="text-gray-300 text-sm">
                  Grade: 1.2 | Coursework: Control Systems, Embedded Systems, IoT, Robotics, Machine Learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/resume.pdf" 
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg hover:bg-blue-600 smooth-transition font-semibold"
          >
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
}
