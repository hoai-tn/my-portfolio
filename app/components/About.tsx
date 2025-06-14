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

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Throughout my career, I&apos;ve worked across diverse industries — from{' '}
          <span className="highlight">fintech platforms</span> and{' '}
          <span className="highlight">social networks</span> to{' '}
          <span className="highlight">e-commerce solutions</span>. Each project taught me something new 
          and fueled my <span className="highlight">endless curiosity</span> for emerging technologies 
          and best practices.
        </p>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          What drives me? The thrill of <span className="highlight">solving complex problems</span> and 
          seeing ideas come to life through code. I&apos;m always eager to{' '}
          <span className="highlight">learn new technologies</span>, contribute to meaningful projects, 
          and collaborate with teams that share my passion for{' '}
          <span className="highlight">building exceptional digital experiences</span>.
        </p>

        {/* <div className="mt-12">
          <p className="text-[var(--text-secondary)] mb-8 text-lg font-medium">
            Here are the technologies I&apos;ve been working with:
          </p>
          
          <div className="space-y-6">
            {techCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-3">
                <h4 className="text-[var(--accent-primary)] font-semibold text-sm uppercase tracking-wider font-mono">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-[var(--glass-bg)] border-[var(--border-accent)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-black font-mono text-xs transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <Card className="mt-12 bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-lg font-bold text-black">
                H
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] font-semibold mb-2">
                  Let&apos;s build something amazing together!
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  I&apos;m always interested in hearing about new projects and
                  opportunities. Whether you&apos;re a company looking to hire,
                  or you&apos;re a fellow developer who wants to collaborate,
                  let&apos;s connect!
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </section>
  );
};

export default About;
