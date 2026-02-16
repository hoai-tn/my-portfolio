import React from 'react';

const About = () => {
  const techStack = [
    'React', 'Next.js', 'Vue', 'TypeScript', 'Node.js',
    'C#/.NET', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">
        <span className="text-[var(--accent-primary)] font-mono text-xl mr-2">00.</span>
        About Me
      </h2>

      <div className="space-y-6">
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          I&apos;m a passionate <span className="highlight">Full-Stack Developer</span> with{' '}
          <span className="highlight">5+ years of experience</span> building modern web applications.
          My journey started with curiosity about how websites work, and it evolved into a deep love
          for creating <span className="highlight">clean, efficient, and scalable solutions</span>.
        </p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="skill-tag">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
