import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: ['React.js', 'Vue', 'Next.js', 'Nuxt.js', 'TypeScript', 'JavaScript (ES6+)']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'C#/.NET', 'Python', 'GraphQL', 'REST APIs']
    },
    {
      category: 'Databases',
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma']
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Docker', 'CI/CD', 'Vercel', 'Netlify']
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman']
    }
  ];

  return (
    <section id="about" className="section">
      <div className="space-y-8">
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          I&apos;m a passionate <span className="highlight">Full-Stack Developer</span> with{' '}
          <span className="highlight">5+ years of experience</span> building modern web applications. 
          My journey started with curiosity about how websites work, and it evolved into a deep love 
          for creating <span className="highlight">clean, efficient, and scalable solutions</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
