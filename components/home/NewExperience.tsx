'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, MapPin, Calendar, Award, Briefcase } from 'lucide-react';

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <Card className="bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-sm hover:bg-[var(--glass-hover)] transition-all duration-300 group">
      <CardContent className="p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
              {experience.position}
            </h3>
            <div className="flex items-center gap-2 text-[var(--accent-primary)] font-semibold text-lg mb-3">
              <Briefcase size={18} />
              {experience.company}
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[var(--text-muted)] text-sm">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span className="font-mono">{experience.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{experience.location}</span>
              </div>
              <Badge
                variant="outline"
                className="text-xs bg-[var(--glass-bg)] border-[var(--accent-primary)] text-[var(--accent-primary)]"
              >
                {experience.type}
              </Badge>
            </div>
          </div>
        </div>

        {/* Main Description */}
        <div className="space-y-4 mb-6">
          <ul className="space-y-2">
            {experience.description.map((item: string, index: number) => (
              <li
                key={index}
                className="flex items-start text-[var(--text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--accent-primary)] mr-3 mt-1 text-sm flex-shrink-0">
                  ▹
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Achievements */}
        <div className="mb-6">
          <h4 className="text-[var(--text-primary)] font-semibold mb-3 flex items-center gap-2 text-sm">
            <Award size={14} className="text-[var(--accent-secondary)]" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.recognition.map((item: string, index: number) => (
              <li
                key={index}
                className="flex items-start text-[var(--text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--accent-secondary)] mr-3 mt-1 text-sm flex-shrink-0">
                  ★
                </span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="pt-4 border-t border-[var(--glass-border)]">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-[var(--glass-bg)] border-[var(--border-accent)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-black font-mono text-xs transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const NewExperience = () => {
  const experiences = [
    {
      id: 'ins-enco',
      company: 'INS-ENCO Ltd.',
      position: 'Fullstack Developer',
      duration: 'JAN 2020 -  Now',
      location: 'Germany (Remote from Vietnam)',
      type: 'Full-time',
      description: [
        'Developed and maintained a full-stack investment project using Vue, React, .NET, and Express, focusing on both frontend and backend aspects.',
        'Built backend infrastructure with .NET for data processing and created API modules for seamless communication between frontend and backend.',
        'Improved problem-solving and task organization skills while learning from skilled professionals using Scrum methodology.',
      ],
      recognition: [
        'Developed the frontend of a project from the ground up over five years, evolving it into a mature product with over 1,000 users and generating more than $400,000 in revenue.',
        'Became a core team member with decision-making authority for projects',
        'Shared insights and contributed to positive team dynamics',
      ],
      technologies: [
        'Vue.js',
        'React.js',
        '.NET',
        'Express.js',
        'Cypress',
        'Jest',
        'Scrum',
      ],
    },
    {
      id: 'upwork',
      company: 'Upwork',
      position: 'Web Developer (Freelancer)',
      duration: 'AUG 2022 - Present',
      location: 'Remote Worldwide',
      type: 'Freelance',
      link: 'https://www.upwork.com/freelancers/~01d124102c4262bfad',
      description: [
        'Achieved Top Rated badge status and completed 22 jobs with 100% job success rate on Upwork platform.',
        'Developed dynamic and responsive user interfaces using React, Next.js, and Vue, delivering seamless user experiences.',
      ],
      recognition: [
        'Achieved Top Rated badge talent status with 100% job success rate (22 completed jobs)',
        'Resolved complex technical challenges, improving project efficiency and functionality',
        'Consistently met project deadlines and milestones, ensuring on-time delivery',
        'Received positive feedback and high ratings from clients for quality work and exceptional service',
      ],
      technologies: [
        'Vue.js',
        'React.js',
        'Laravel',
        'Node.js',
        'API Integration',
        'Responsive Design',
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title flex items-center justify-center mb-12">
        <span className="text-[var(--accent-primary)] font-mono text-lg mr-2">
          01.
        </span>
        Work Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default NewExperience;
