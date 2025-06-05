import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const NewProjects = () => {
  const projects = [
    {
      title: 'Build a Spotify Connected App',
      description: 'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
      technologies: ['React', 'Express', 'Spotify API', 'Node.js'],
      github: 'https://github.com/your-username/spotify-app',
      external: 'https://spotify-course.com',
      featured: true
    },
    {
      title: 'Spotify Profile',
      description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      technologies: ['React', 'Express', 'Spotify API', 'Heroku'],
      github: 'https://github.com/your-username/spotify-profile',
      external: 'https://spotify-profile-app.herokuapp.com',
      featured: true
    },
    {
      title: 'Halcyon Theme',
      description: 'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Currently has 100k+ installations across all platforms.',
      technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm'],
      github: 'https://github.com/your-username/halcyon-theme',
      external: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode',
      featured: true
    },
    {
      title: 'Portfolio Website v4',
      description: 'An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks. Clean, minimal design with smooth animations and transitions.',
      technologies: ['Gatsby', 'Styled Components', 'Netlify'],
      github: 'https://github.com/your-username/portfolio-v4',
      external: 'https://brittanychiang.com',
      featured: false
    },
    {
      title: 'OctoProfile',
      description: 'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and recent activity.',
      technologies: ['Next.js', 'Chart.js', 'GitHub API'],
      github: 'https://github.com/your-username/octoprofile',
      external: 'https://octoprofile.vercel.app',
      featured: false
    },
    {
      title: 'Google Keep Clone',
      description: 'A simple Google Keep clone built with React and Firebase. Features include creating, editing, deleting, and searching notes with real-time synchronization.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/your-username/google-keep-clone',
      external: 'https://keep-clone-demo.netlify.app',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section">
      <h2 className="section-title flex items-center">
        <span className="text-[var(--accent-primary)] font-mono text-lg mr-2">02.</span>
        Some Things I&apos;ve Built
      </h2>

      {/* Featured Projects */}
      <div className="space-y-24 mb-24">
        {featuredProjects.map((project, index) => (
          <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <Card className="bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-sm overflow-hidden group hover:border-[var(--border-accent)] transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-[var(--accent-primary)] text-lg font-medium relative z-10">Project Preview</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
              <Badge variant="secondary" className="bg-[var(--glass-bg)] border-[var(--border-accent)] text-[var(--accent-primary)] font-mono text-xs mb-4">
                Featured Project
              </Badge>
              
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                <a href={project.external} className="company-link" target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              
              <Card className="bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-sm mb-6 lg:relative lg:z-10">
                <CardContent className="p-6">
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
              
              <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-[var(--glass-border)] text-[var(--text-muted)] font-mono text-xs hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                <a
                  href={project.github}
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--glass-bg)]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.external}
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors p-2 rounded-lg hover:bg-[var(--glass-bg)]"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="External Link"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Notable Projects */}
      <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-12 text-center">
        Other Noteworthy Projects
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <Card key={index} className="bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-sm group hover:border-[var(--border-accent)] hover:-translate-y-2 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="text-[var(--accent-primary)]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors p-1 rounded-lg hover:bg-[var(--glass-bg)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.external}
                    className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors p-1 rounded-lg hover:bg-[var(--glass-bg)]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External Link"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <CardTitle className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                <a href={project.external} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <CardDescription className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {project.description}
              </CardDescription>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-[var(--glass-border)] text-[var(--text-muted)] font-mono text-xs hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewProjects; 