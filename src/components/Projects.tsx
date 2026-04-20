export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Generative Diffusion Models for EV Charging Forecasting',
      description: 'Built a probabilistic time-series forecasting framework using conditional diffusion models and Transformer-based denoising to predict EV session departure, dwell time, and energy demand.',
      tags: ['Python', 'ML', 'Diffusion Models', 'Transformers'],
      link: '#',
      github: 'https://github.com/MANASIJESTE',
    },
    {
      id: 2,
      title: 'EcoAutoVision: CO2-Aware AutoML Workflow',
      description: 'Developed a CO2-aware AutoML workflow for vision models using proxy-based candidate ranking, multi-objective hyperparameter optimization, and dynamic training policies to reduce GPU usage and emissions.',
      tags: ['Python', 'AutoML', 'Optimization', 'Sustainability'],
      link: 'https://github.com/MANASIJESTE/AutoML_HPO_Project',
      github: 'https://github.com/MANASIJESTE/AutoML_HPO_Project',
    },
    {
      id: 3,
      title: 'Two-Point IoT Authentication System',
      description: 'Built a two-factor IoT-based security system using Python ML, Google Firebase, ESP32 microcontroller, and Android app. Published as IEEE conference paper.',
      tags: ['Python', 'IoT', 'Firebase', 'Android'],
      link: '#',
      github: 'https://github.com/MANASIJESTE',
    },
    {
      id: 4,
      title: 'Remote Bootloading for NXP Controllers',
      description: 'Developed remote bootloading workflow for NXP controllers in C/C++ using S32 Design Studio and Modbus communication for battery-management-system applications in electric vehicles.',
      tags: ['C/C++', 'Embedded', 'Modbus', 'NXP'],
      link: '#',
      github: 'https://github.com/MANASIJESTE',
    },
    {
      id: 5,
      title: 'Smart Stretcher Patient Monitoring System',
      description: 'Developed complete UI for a contactless, non-invasive patient monitoring system for ambulance applications using Python, PySpark, and real-time processing.',
      tags: ['Python', 'PySpark', 'Healthcare', 'Real-time'],
      link: '#',
      github: 'https://github.com/MANASIJESTE',
    },
    {
      id: 6,
      title: 'Image Telemetry & Control Systems',
      description: 'Developed Python algorithms for image compression, data splitting, and real-time telemetry integration. Includes motorized autofocus for surveillance and control-based systems.',
      tags: ['Python', 'Image Processing', 'Control Systems', 'Telemetry'],
      link: '#',
      github: 'https://github.com/MANASIJESTE',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-primary p-6 rounded-lg hover:border-accent border border-transparent smooth-transition"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.link}
                  className="text-accent hover:underline"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github}
                  className="text-accent hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
