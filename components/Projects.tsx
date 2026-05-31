const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with React and Next.js',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Full-stack application with real-time features',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Mobile-first design with responsive components',
      tags: ['React Native', 'TypeScript', 'Firebase'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="bg-white">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group p-6 border border-gray-200 rounded-lg hover:border-accent hover:shadow-lg transition"
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 group-hover:from-accent group-hover:to-blue-700 transition"></div>
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-secondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-sm rounded-full text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
