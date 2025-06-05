'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const NewExperience = () => {
  const experiences = [
    {
      id: 'klaviyo',
      company: 'Klaviyo',
      position: 'Senior Frontend Engineer, Accessibility',
      duration: '2024 — Present',
      description: [
        'Build and maintain critical components used to construct Klaviyo\'s frontend, across the whole product.',
        'Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
        'Ensure our platform meets web accessibility standards and best practices to deliver an inclusive user experience.'
      ],
      technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
    },
    {
      id: 'upstatement',
      company: 'Upstatement',
      position: 'Lead Engineer',
      duration: '2018 — 2024',
      description: [
        'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects.',
        'Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
        'Work with clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, and more.'
      ],
      technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'WordPress', 'PHP']
    },
    {
      id: 'apple',
      company: 'Apple',
      position: 'UI Engineer Co-op',
      duration: 'July — Dec 2017',
      description: [
        'Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music\'s embeddable web player widget.',
        'Implemented user authorization and full song playback functionality.',
        'Collaborated with design and product teams to deliver pixel-perfect implementations.'
      ],
      technologies: ['MusicKit.js', 'Ember', 'SCSS', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title flex items-center">
        <span className="text-[var(--accent-primary)] font-mono text-lg mr-2">01.</span>
        Experience
      </h2>

      <Tabs defaultValue="klaviyo" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-1 lg:w-64 lg:h-auto bg-transparent border-l border-[var(--glass-border)] p-0">
          {experiences.map((exp) => (
            <TabsTrigger
              key={exp.id}
              value={exp.id}
              className="justify-start text-left font-mono text-sm data-[state=active]:bg-[var(--glass-bg)] data-[state=active]:text-[var(--accent-primary)] data-[state=active]:border-l-2 data-[state=active]:border-l-[var(--accent-primary)] border-l-2 border-l-transparent text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[var(--glass-bg)] rounded-none px-6 py-3"
            >
              {exp.company}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="lg:ml-8 mt-8 lg:mt-0">
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="mt-0">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    {exp.position}{' '}
                    <span className="text-[var(--accent-primary)]">
                      @ <a href="#" className="company-link">{exp.company}</a>
                    </span>
                  </h3>
                  
                  <p className="text-[var(--text-muted)] text-sm font-mono">
                    {exp.duration}
                  </p>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-[var(--text-secondary)]">
                      <span className="text-[var(--accent-primary)] mr-4 mt-1 text-sm">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-[var(--glass-bg)] border-[var(--border-accent)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-black font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
};

export default NewExperience; 