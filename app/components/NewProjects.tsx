import React from "react";
import {
  Github,
  ExternalLink,
  Folder,
  Award,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const NewProjects = () => {
  interface ProjectImpact {
    [key: string]: string;
  }

  interface ProjectSkillCategories {
    [category: string]: string[];
  }

  interface Project {
    title: string;
    description: string;
    impact: ProjectImpact;
    technologies: string[];
    skillCategories: ProjectSkillCategories;
    images: string[];
    github?: string;
    external: string;
    featured: boolean;
    isLightTheme?: boolean;
    complexity: string;
    role: string;
  }

  const projects: Project[] = [
    {
      title: "Copy Trade Market",
      description:
        "Enterprise-grade fintech platform serving 1,000+ active traders with real-time copy trading capabilities. Built with microservices architecture handling millions of transactions daily, featuring advanced risk management, automated portfolio rebalancing.",
      impact: {
        users: "1,000+ Active Traders",
        volume: "$6M+ Trading Volume",
      },
      technologies: [
        "Vue.js",
        ".NET",
        "MySQL",
        "Micro Service",
        "Redis",
        // 'RabbitMQ',
        "MT4 API",
        "Cypress",
        "NUnit",
      ],
      skillCategories: {
        frontend: ["Vue.js"],
        backend: [".NET", "Micro Service", "MT4 API"],
        database: ["MySQL", "Redis"],
        // messaging: ['RabbitMQ'],
        testing: ["Cypress", "NUnit"],
      },
      images: [
        "/images/ctm-project3.png",
        "/images/ctm-project.png",
        "/images/ctm-project2.png",
        "/images/ctm-project1.png",
        "/images/ctm-project4.png",
      ],
      github: "https://github.com/your-username/ctm-platform",
      external: "https://ctm-platform.com",
      featured: true,
      complexity: "Professional",
      role: "Full-Stack Developer",
    },
    {
      title: "CloutHub",
      description:
        "A modern social networking platform where people connect and share content. Built features like real-time messaging, content feeds, and user profiles to help people build meaningful relationships and stay connected with their communities.",
      impact: {},
      technologies: ["Vue.js", "Tailwind CSS", "Node.js", "GraphQL", "MongoDB"],
      skillCategories: {
        frontend: ["Vue.js", "Tailwind CSS"],
        backend: ["Node.js", "GraphQL"],
        database: ["MongoDB"],
        architecture: ["Real-time Systems", "AI Integration"],
      },
      images: [
        "/images/clouthub.png",
        "/images/clouthub1.png",
        "/images/clouthub2.png",
        "/images/clouthub3.png",
        "/images/clouthub4.png",
      ],
      github: "https://github.com/your-username/clouthub",
      external: "https://new.clouthub.com/",
      featured: true,
      isLightTheme: true,
      complexity: "Enterprise",
      role: "Frontend Developer",
    },
    {
      title: "Swap Scanner",
      description:
        "Professional trading analytics platform providing real-time arbitrage opportunities across 50+ brokers. Engineered high-frequency data processing system with sub-second latency, helping traders identify profitable swap rate differentials and optimize their trading strategies with precision.",
      impact: {
        brokers: "50+ Brokers Monitored",
        latency: "<1s Response Time",
        accuracy: "99.5% Data Accuracy",
      },
      technologies: [
        "Next.js",
        ".NET",
        "MySQL",
        "Micro Service",
        "Redis",
        "RabbitMQ",
        "MT4 API",
      ],
      skillCategories: {
        frontend: ["Next.js"],
        backend: [".NET", "Micro Service", "MT4 API"],
        database: ["MySQL", "Redis"],
        messaging: ["RabbitMQ"],
        performance: ["High-Frequency Processing"],
      },
      images: [
        "/images/sap/dashboard-1.png",
        "/images/sap/dashboard-2.png",
        "/images/sap/dashboard-3.png",
        "/images/sap/home.png",
        "/images/sap/pricing.png",
      ],
      github: "https://github.com/your-username/ctm-platform",
      external: "https://ctm-platform.com",
      featured: true,
      complexity: "Enterprise",
      role: "Full-Stack Developer",
    },
    {
      title: "YesWeBook",
      description:
        "Industry-leading CRM solution transforming Vietnam's beauty sector with 500+ salons onboarded. Delivered measurable ROI through Google Maps integration, intelligent scheduling, and automated customer engagement, resulting in 40% booking increase and 30% improved retention rates.",
      impact: {
        bookings: "+40% Online Bookings",
        retention: "+30% Customer Retention",
      },
      technologies: [
        "Vue.js",
        "Laravel",
        "Mysql",
        "Google Maps API",
        "SMS Gateway",
        "Email Service",
        "Redis",
      ],
      skillCategories: {
        frontend: ["Vue.js"],
        backend: ["Laravel"],
        database: ["Mysql", "Redis"],
        integrations: ["Google Maps API", "SMS Gateway", "Email Service"],
      },
      images: [
        "/images/ywb/feat1.png",
        "/images/ywb/feat2.png",
        "/images/ywb/feat3.png",
      ],
      external: "https://yeswebook.vn",
      featured: true,
      complexity: "Enterprise",
      role: "Full-Stack Developer",
    },
    {
      title: "BrightSup",
      description:
        "Modern web application built with cutting-edge technologies, focusing on user experience and performance optimization. Implemented responsive design principles and interactive features to deliver a seamless digital experience.",
      impact: {
        performance: "95+ Lighthouse Score",
        engagement: "Enhanced User Experience",
      },
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      skillCategories: {
        frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        performance: ["Optimization", "SEO"],
      },
      images: ["/images/bright/bright1.png", "/images/bright/bright1.png"],
      external: "https://www.brightsup.com/",
      featured: true,
      complexity: "Professional",
      role: "Frontend Developer",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  const getSkillCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      frontend: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      backend: "bg-green-500/20 text-green-300 border-green-500/30",
      database: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      messaging: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      testing: "bg-red-500/20 text-red-300 border-red-500/30",
      integrations: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      architecture: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      performance: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      methodology: "bg-teal-500/20 text-teal-300 border-teal-500/30",
      ux: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    };
    return (
      colors[category] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
    );
  };

  return (
    <section id="projects" className="section py-20 sm:py-16">
      <div className="text-center mb-16">
        <h2 className="section-title">
          <span className="text-[var(--accent-primary)] font-mono text-xl mr-2">
            02.
          </span>
          Some Things I&apos;ve Built
        </h2>
        <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
          A showcase of enterprise-grade applications and innovative solutions
          that have driven real business impact and served thousands of users
          worldwide.
        </p>
      </div>

      {/* --- Featured Projects --- */}
      <div className="space-y-16">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            <div
              className={`lg:col-span-7 group ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Card className="bg-transparent border-[var(--glass-border)] overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, imgIndex) => (
                        <CarouselItem key={imgIndex}>
                          <div className="aspect-[16/10] relative">
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${
                                imgIndex + 1
                              }`}
                              fill
                              className="object-contain transition-all duration-300 group-hover:scale-105"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.images.length > 1 && (
                      <>
                        <CarouselPrevious
                          className={cn(
                            "left-4 bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/80 hover:text-black",
                            project.isLightTheme &&
                              "bg-black/60 text-white hover:bg-black/60 hover:text-white"
                          )}
                        />
                        <CarouselNext
                          className={cn(
                            "right-4 bg-[var(--glass-bg)] border-[var(--glass-border)] text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/80 hover:text-black",
                            project.isLightTheme &&
                              "bg-black/60 text-white hover:bg-black/60 hover:text-white"
                          )}
                        />
                      </>
                    )}
                  </Carousel>
                </CardContent>
              </Card>
            </div>

            <div
              className={`lg:col-span-5 relative ${
                index % 2 === 1 ? "lg:order-1 text-left" : "text-right"
              }`}
            >
              <div
                className={`flex items-center gap-2 mb-2 ${
                  index % 2 === 1 ? "justify-start" : "justify-end"
                }`}
              >
                <p className="font-mono text-sm text-[var(--accent-primary)]">
                  Featured Project
                </p>
                <Badge
                  variant="outline"
                  className="text-xs border-[var(--accent-primary)] text-[var(--accent-primary)]"
                >
                  {project.complexity}
                </Badge>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-1">
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent-primary)] transition-colors"
                >
                  {project.title}
                </a>
              </h3>

              <p
                className={`text-sm text-[var(--text-muted)] mb-3 font-mono ${
                  index % 2 === 1 ? "text-left" : "text-right"
                }`}
              >
                {project.role}
              </p>

              <div className="bg-[var(--bg-tertiary)] border border-[var(--glass-border)] rounded-md p-4 shadow-lg mb-4 text-left">
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Impact Metrics */}
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {Object.entries(project.impact).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-1 text-xs">
                      <TrendingUp
                        size={10}
                        className="text-[var(--accent-primary)]"
                      />
                      <span className="text-[var(--accent-primary)] font-semibold">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Skills in One Section */}
              <div
                className={`mb-4 ${
                  index % 2 === 1 ? "text-left" : "text-right"
                }`}
              >
                <div
                  className={`flex flex-wrap gap-1 ${
                    index % 2 === 1 ? "justify-start" : "justify-end"
                  }`}
                >
                  {Object.entries(project.skillCategories).map(
                    ([category, skills]) =>
                      skills.map((skill) => (
                        <Badge
                          key={`${category}-${skill}`}
                          variant="outline"
                          className={`text-xs px-2 py-1 ${getSkillCategoryColor(
                            category
                          )}`}
                        >
                          {skill}
                        </Badge>
                      ))
                  )}
                </div>
              </div>

              <div
                className={`flex gap-4 ${
                  index % 2 === 1 ? "justify-start" : "justify-end"
                }`}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="External Link"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProjects;
