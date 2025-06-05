import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="space-y-8">
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          I&apos;m a developer passionate about crafting{' '}
          <span className="highlight">accessible, pixel-perfect</span> user
          interfaces that blend thoughtful design with robust engineering. My
          favorite work lies at the intersection of design and development,
          creating experiences that not only look great but are meticulously
          built for performance and usability.
        </p>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Currently, I&apos;m a{' '}
          <span className="highlight">Senior Full-Stack Developer</span>{' '}
          specializing in modern web technologies. I contribute to the creation
          and maintenance of web applications that power businesses, ensuring
          our platforms meet web standards and best practices to deliver an
          exceptional user experience.
        </p>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          In the past, I&apos;ve had the opportunity to develop software across
          a variety of settings — from{' '}
          <span className="highlight">advertising agencies</span> and{' '}
          <span className="highlight">large corporations</span> to{' '}
          <span className="highlight">start-ups</span> and{' '}
          <span className="highlight">small digital product studios</span>.
          Additionally, I also released a{' '}
          <a
            href="#"
            className="company-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            comprehensive video course
          </a>{' '}
          a few years ago, guiding learners through building modern web
          applications.
        </p>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          In my spare time, I&apos;m usually coding side projects, reading tech
          blogs, hanging out with family, or exploring new technologies and
          frameworks.
        </p>

        <div className="mt-12">
          <p className="text-[var(--text-secondary)] mb-6 text-lg font-medium">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'React',
              'Vue',
              'Express',
              'C#/.NET',
              'Next.js',
              'Nuxt.js',
              'MySql',
              'PostgreSQL',
              'MongoDB',
              'AWS',
              'Docker',
              'GraphQL',
              'Redis',
              'Git',
            ].map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-[var(--glass-bg)] border-[var(--border-accent)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-black font-mono text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Card className="mt-12 bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-sm">
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
        </Card>
      </div>
    </section>
  );
};

export default About;
