import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const NewProjects = () => {
  const projects = [
    {
      title: 'CTM (Copy Trade Market)',
      description:
        'A platform for copy trading, allowing users to replicate the strategies of successful traders. It provides a marketplace for traders to share strategies, enabling subscribers to automatically copy their trades.',
      technologies: [
        'Vue.js',
        '.NET',
        'MySQL',
        'Micro Service',
        'Redis',
        'RabbitMQ',
        'MT4 API',
        'Cypress',
      ],
      images: [
        '/images/ctm-project3.png',
        '/images/ctm-project.png',
        '/images/ctm-project2.png',
        '/images/ctm-project1.png',
        '/images/ctm-project4.png',
      ],
      github: 'https://github.com/your-username/ctm-platform',
      external: 'https://ctm-platform.com',
      featured: true,
    },
    {
      title: 'CloutHub',
      description:
        'A social network focused on community engagement and meaningful connections. It uses advanced algorithms to personalize content and foster positive interactions through groups and discussions.',
      technologies: ['Vue.js', 'Tailwind CSS', 'Node.js', 'GraphQL', 'MongoDB'],
      images: [
        '/images/clouthub.png',
        '/images/clouthub1.png',
        '/images/clouthub2.png',
        '/images/clouthub3.png',
        '/images/clouthub4.png',
      ],
      github: 'https://github.com/your-username/clouthub',
      external: 'https://clouthub.com',
      featured: true,
      isLightTheme: true,
    },
    {
      title: 'SAP (Swap Scanner)',
      description:
        "It's a tool that helps you find profitable opportunities in Forex and crypto trading by comparing swap rates from different brokers in real time.",
      technologies: [
        'Next.js',
        '.NET',
        'MySQL',
        'Micro Service',
        'Redis',
        'RabbitMQ',
        'MT4 API',
      ],
      images: [
        '/images/sap/dashboard-1.png',
        '/images/sap/dashboard-2.png',
        '/images/sap/dashboard-3.png',
        '/images/sap/home.png',
        '/images/sap/pricing.png',
      ],
      github: 'https://github.com/your-username/ctm-platform',
      external: 'https://ctm-platform.com',
      featured: true,
    },
    {
      title: 'Cupola Software',
      description:
        'A project management tool to streamline task management, team collaboration, and project planning. Features include real-time chat, Gantt charts, time tracking, and detailed reporting.',
      technologies: [
        'React.js',
        'TypeScript',
        'Material-UI',
        'Cypress',
        'Jest',
      ],
      images: ['/images/cupola.png'],
      github: 'https://github.com/your-username/cupola-software',
      external: 'https://cupola-software.com',
      featured: true,
    },
    {
      title: 'HT Branch',
      description:
        'An innovative e-commerce shopping cart that reimagines the user experience by creating dynamic, branching paths for product exploration and purchasing decisions, inspired by natural branching structures.',
      technologies: [
        'Vue.js',
        'Tailwind CSS',
        'Node.js',
        'Google OAuth',
        'PayPal APIs',
      ],
      images: ['/images/ht-branch.png'],
      github: 'https://github.com/your-username/ht-branch',
      external: 'https://ht-branch.com',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="section-title">
          <span className="text-[var(--accent-primary)] font-mono text-xl mr-2">
            02.
          </span>
          Some Things I&apos;ve Built
        </h2>
      </div>

      {/* --- Featured Projects --- */}
      <div className="space-y-28">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center"
          >
            <div
              className={`md:col-span-6 group ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}
            >
              <Card className="bg-transparent border-[var(--glass-border)] overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="aspect-video relative">
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${
                                imgIndex + 1
                              }`}
                              fill
                              className="object-cover transition-all duration-300 group-hover:scale-105"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.images.length > 1 && (
                      <>
                        <CarouselPrevious
                          className={cn(
                            'left-4 bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/80 hover:text-black',
                            project.isLightTheme &&
                              'bg-black/60 text-white hover:bg-black/60 hover:text-white'
                          )}
                        />
                        <CarouselNext
                          className={cn(
                            'right-4 bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/80 hover:text-black',
                            project.isLightTheme &&
                              'bg-black/60 text-white hover:bg-black/60 hover:text-white'
                          )}
                        />
                      </>
                    )}
                  </Carousel>
                </CardContent>
              </Card>
            </div>

            <div
              className={`md:col-span-4 relative ${
                index % 2 === 1 ? 'md:order-1 text-left' : 'text-right'
              }`}
            >
              <p className="font-mono text-sm text-[var(--accent-primary)] mb-2">
                Featured Project
              </p>
              <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-4">
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  {project.title}
                </a>
              </h3>
              <div className="bg-[var(--bg-tertiary)] border border-[var(--glass-border)] rounded-md p-6 shadow-lg mb-6 text-left">
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div
                className={`flex flex-wrap gap-x-4 gap-y-2 mb-6 ${
                  index % 2 === 1 ? 'justify-start' : 'justify-end'
                }`}
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[var(--text-muted)] font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                className={`flex gap-4 ${
                  index % 2 === 1 ? 'justify-start' : 'justify-end'
                }`}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="External Link"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Other Noteworthy Projects --- */}
      <div className="text-center mt-32 mb-16">
        <h3 className="text-3xl font-bold text-[var(--text-primary)]">
          Other Noteworthy Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project) => (
          <Card
            key={project.title}
            className="bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-sm group hover:-translate-y-2 transition-all duration-300 flex flex-col"
          >
            <CardHeader className="flex-row justify-between items-center text-[var(--text-muted)]">
              <Folder size={40} className="text-[var(--accent-primary)]" />
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  <Github size={20} />
                </a>
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="External Link"
                    className="hover:text-[var(--accent-primary)] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <CardTitle className="text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </CardTitle>
              <CardDescription className="text-[var(--text-secondary)] leading-relaxed">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[var(--text-muted)] font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;
