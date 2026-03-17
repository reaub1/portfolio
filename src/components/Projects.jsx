import './Projects.css';

const projects = [
  {
    title: 'Arkanoid',
    description: 'Classic Arkanoid brick-breaking game implemented in C with SDL2. Includes collision detection, levels, and score tracking.',
    stack: ['C', 'SDL2'],
    github: null,
  },
  {
    title: 'OniDefense',
    description: 'Tower Defense game built with Unity, applying multiple Design Patterns (Strategy, Observer, Factory) for a modular game architecture.',
    stack: ['C#', 'Unity', 'Design Patterns'],
    github: null,
  },
  {
    title: 'Ant Colony Simulation',
    description: 'Object-oriented simulation of an ant colony in Java. Ants navigate a grid using pheromone-based pathfinding to find food sources.',
    stack: ['Java', 'OOP'],
    github: null,
  },
  {
    title: 'Shell Project',
    description: 'Reproduced a POSIX-compliant shell in C, supporting pipes, redirections, environment variables, and basic built-in commands.',
    stack: ['C', 'Systems', 'Linux'],
    github: null,
  },
  {
    title: 'QuizApp',
    description: 'Android mobile application for quiz-based learning. Features multiple categories, score tracking, and a clean Material Design UI.',
    stack: ['Java', 'Android Studio', 'XML'],
    github: null,
  },
  {
    title: 'Portfolio',
    description: 'This portfolio — a single-page React application with animations, sticky navigation, and responsive design. Built from scratch with vanilla CSS.',
    stack: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/reaub1/portfolio',
  },
  {
    title: 'CrossyRoad',
    description: 'Crossy Road-like game developed with Unity in June 2024. Engineering school project featuring procedural generation and obstacle avoidance mechanics.',
    stack: ['Unity', 'C#'],
    github: null,
  },
];

const stackColors = {
  C: '#a8b4ff',
  'C#': '#9b59b6',
  'C++': '#c0392b',
  Java: '#e67e22',
  Python: '#3498db',
  JavaScript: '#f1c40f',
  React: '#61dafb',
  SDL2: '#2ecc71',
  Unity: '#666666',
  'Design Patterns': '#8e44ad',
  'Android Studio': '#27ae60',
  XML: '#e74c3c',
  Linux: '#f39c12',
  Systems: '#7f8c8d',
  OOP: '#16a085',
  CSS: '#2980b9',
};

const Projects = () => {
  return (
    <section className="projects-section fade-in" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-card-footer">
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span
                    className="stack-badge"
                    key={tech}
                    style={{ background: stackColors[tech] ? stackColors[tech] + '33' : 'rgba(100,108,255,0.15)', borderColor: stackColors[tech] || '#646cff' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github ? (
                <a
                  className="project-github-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub - ${project.title}`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                    <path d="M12 0.297C5.37 0.297 0 5.667 0 12.297c0 5.292 3.438 9.788 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.613-4.042-1.613-.546-1.385-1.333-1.755-1.333-1.755-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.838 1.233 1.91 1.233 3.22 0 4.609-2.803 5.625-5.475 5.92.43.372.815 1.103.815 2.222 0 1.606-.015 2.896-.015 3.289 0 .319.216.694.825.576C20.565 22.082 24 17.584 24 12.297 24 5.667 18.63 0.297 12 0.297z"/>
                  </svg>
                  GitHub
                </a>
              ) : (
                <span className="card-github-private">Private repo</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
