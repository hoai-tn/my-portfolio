'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Experience {
  id: string;
  filename: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  link?: string;
  description: string[];
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 'ins-enco',
    filename: 'ins-enco.tsx',
    company: 'INS-ENCO Ltd.',
    position: 'Fullstack Developer',
    duration: 'Jul 2020 — Feb 2026',
    location: 'Germany',
    type: 'Full-time',
    description: [
      'Architected and scaled a full-stack investment platform serving 1,000+ users',
      'Engineered robust .NET backend services for real-time data processing',
      'Designed RESTful APIs powering seamless frontend-backend communication',
      'Led Agile/Scrum ceremonies and mentored junior developers',
    ],
    achievements: [
      'Built frontend from scratch — scaled to $400K+ revenue over 5 years',
      'Promoted to core team member with architectural decision authority',
      'Established CI/CD pipelines and automated testing standards',
    ],
    technologies: ['Vue.js', 'React', '.NET', 'Express', 'Cypress', 'Jest'],
  },
  {
    id: 'upwork',
    filename: 'upwork.tsx',
    company: 'Upwork',
    position: 'Web Developer',
    duration: 'Aug 2022 — Present',
    location: 'Remote',
    type: 'Freelance',
    link: 'https://www.upwork.com/freelancers/~01d124102c4262bfad',
    description: [
      'Top Rated freelancer with 100% job success across 22+ projects',
      'Delivered high-performance apps using React, Next.js, and Vue',
      'Managed full project lifecycles from scoping to post-launch support',
    ],
    achievements: [
      'Top Rated badge — top tier of Upwork talent pool',
      'Solved challenges previous developers could not resolve',
      'Perfect 5-star rating with repeat client relationships',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Laravel', 'Node.js', 'TypeScript'],
  },
];

const SyntaxLine = ({
  lineNum,
  children,
  indent = 0,
  delay = 0,
}: {
  lineNum: number;
  children: React.ReactNode;
  indent?: number;
  delay?: number;
}) => (
  <motion.div
    className="flex font-mono text-xs sm:text-sm leading-6 sm:leading-7 group/line"
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay }}
  >
    <span className="w-8 sm:w-10 text-right pr-2 sm:pr-4 text-[var(--text-dimmed)] select-none shrink-0 group-hover/line:text-[var(--text-muted)] transition-colors text-xs">
      {lineNum}
    </span>
    <span style={{ paddingLeft: `${indent * 20}px` }}>{children}</span>
  </motion.div>
);

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--accent-primary)]">{children}</span>
);

const TypeName = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#e5c07b]">{children}</span>
);

const StringVal = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--accent-tertiary)]">{children}</span>
);

const Comment = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--text-dimmed)] italic">{children}</span>
);

const Decorator = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--accent-secondary)]">{children}</span>
);

const Punct = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--text-muted)]">{children}</span>
);

const EditorContent = ({ exp }: { exp: Experience }) => {
  let line = 1;
  const baseDelay = 0.05;

  return (
    <div className="py-4 px-3 sm:px-4 overflow-x-auto">
      {/* Import statement */}
      <SyntaxLine lineNum={line++} delay={baseDelay * 0}>
        <Keyword>import</Keyword> <Punct>{'{ '}</Punct>
        <TypeName>Developer</TypeName>
        <Punct>{' }'}</Punct> <Keyword>from</Keyword>{' '}
        <StringVal>&quot;@/career&quot;</StringVal>
        <Punct>;</Punct>
      </SyntaxLine>

      <SyntaxLine lineNum={line++} delay={baseDelay * 1}>
        <span> </span>
      </SyntaxLine>

      {/* Interface */}
      <SyntaxLine lineNum={line++} delay={baseDelay * 2}>
        <Comment>{'// '}{exp.company} — {exp.location}</Comment>
      </SyntaxLine>

      <SyntaxLine lineNum={line++} delay={baseDelay * 3}>
        <Keyword>const</Keyword> <TypeName>role</TypeName>
        <Punct>:</Punct> <TypeName>Role</TypeName> <Punct>=</Punct>{' '}
        <Punct>{'{'}</Punct>
      </SyntaxLine>

      <SyntaxLine lineNum={line++} indent={1} delay={baseDelay * 4}>
        <span className="text-[var(--text-secondary)]">position</span>
        <Punct>:</Punct> <StringVal>&quot;{exp.position}&quot;</StringVal>
        <Punct>,</Punct>
      </SyntaxLine>

      <SyntaxLine lineNum={line++} indent={1} delay={baseDelay * 5}>
        <span className="text-[var(--text-secondary)]">duration</span>
        <Punct>:</Punct> <StringVal>&quot;{exp.duration}&quot;</StringVal>
        <Punct>,</Punct>
      </SyntaxLine>

      <SyntaxLine lineNum={line++} indent={1} delay={baseDelay * 6}>
        <span className="text-[var(--text-secondary)]">type</span>
        <Punct>:</Punct> <StringVal>&quot;{exp.type}&quot;</StringVal>
        <Punct>,</Punct>
      </SyntaxLine>

      {exp.link && (
        <SyntaxLine lineNum={line++} indent={1} delay={baseDelay * 7}>
          <span className="text-[var(--text-secondary)]">profile</span>
          <Punct>:</Punct>{' '}
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-primary)] underline decoration-[var(--accent-primary)]/30 hover:decoration-[var(--accent-primary)] transition-colors"
          >
            &quot;View on {exp.company}&quot;
          </a>
          <Punct>,</Punct>
        </SyntaxLine>
      )}

      <SyntaxLine lineNum={line++} delay={baseDelay * 8}>
        <Punct>{'}'}</Punct>
        <Punct>;</Punct>
      </SyntaxLine>

      <SyntaxLine lineNum={line++} delay={baseDelay * 9}>
        <span> </span>
      </SyntaxLine>

      {/* Responsibilities */}
      <SyntaxLine lineNum={line++} delay={baseDelay * 10}>
        <Comment>{"// What I do"}</Comment>
      </SyntaxLine>

      <SyntaxLine lineNum={line++} delay={baseDelay * 11}>
        <Keyword>const</Keyword> <TypeName>responsibilities</TypeName>
        <Punct> = [</Punct>
      </SyntaxLine>

      {exp.description.map((item, i) => (
        <SyntaxLine
          key={`desc-${i}`}
          lineNum={line++}
          indent={1}
          delay={baseDelay * (12 + i)}
        >
          <StringVal>&quot;{item}&quot;</StringVal>
          <Punct>,</Punct>
        </SyntaxLine>
      ))}

      <SyntaxLine lineNum={line++} delay={baseDelay * (12 + exp.description.length)}>
        <Punct>];</Punct>
      </SyntaxLine>

      <SyntaxLine lineNum={line++} delay={baseDelay * (13 + exp.description.length)}>
        <span> </span>
      </SyntaxLine>

      {/* Achievements */}
      <SyntaxLine lineNum={line++} delay={baseDelay * (14 + exp.description.length)}>
        <Decorator>@achievements</Decorator>
      </SyntaxLine>

      {exp.achievements.map((item, i) => (
        <SyntaxLine
          key={`ach-${i}`}
          lineNum={line++}
          indent={0}
          delay={baseDelay * (15 + exp.description.length + i)}
        >
          <Comment>{'// ★ '}{item}</Comment>
        </SyntaxLine>
      ))}

      <SyntaxLine
        lineNum={line++}
        delay={baseDelay * (15 + exp.description.length + exp.achievements.length)}
      >
        <span> </span>
      </SyntaxLine>

      {/* Tech stack */}
      <SyntaxLine
        lineNum={line++}
        delay={baseDelay * (16 + exp.description.length + exp.achievements.length)}
      >
        <Keyword>type</Keyword> <TypeName>Stack</TypeName> <Punct>=</Punct>
      </SyntaxLine>

      {exp.technologies.map((tech, i) => (
        <SyntaxLine
          key={`tech-${i}`}
          lineNum={line++}
          indent={1}
          delay={
            baseDelay * (17 + exp.description.length + exp.achievements.length + i)
          }
        >
          {i > 0 && <Punct>| </Punct>}
          <StringVal>&quot;{tech}&quot;</StringVal>
          {i === exp.technologies.length - 1 && <Punct>;</Punct>}
        </SyntaxLine>
      ))}
    </div>
  );
};

const NewExperience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section">
      <h2 className="section-title flex items-center justify-center mb-12">
        <span className="text-[var(--accent-primary)] font-mono text-lg mr-2">
          01.
        </span>
        Work Experience
      </h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="rounded-xl overflow-hidden border border-[var(--glass-border)] bg-[#0d1117] shadow-2xl"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[var(--glass-border)]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[var(--text-dimmed)] text-xs font-mono">
            ~/career/experience
          </span>
          <div className="w-14" />
        </div>

        {/* Tab bar */}
        <div className="flex bg-[#0d1117] border-b border-[var(--glass-border)]">
          {experiences.map((exp, index) => (
            <button
              key={exp.id}
              onClick={() => setActiveTab(index)}
              className={`
                relative px-3 sm:px-5 py-2.5 text-xs sm:text-sm font-mono transition-colors duration-200
                border-r border-[var(--glass-border)]
                ${
                  activeTab === index
                    ? 'bg-[#161b22] text-[var(--text-primary)]'
                    : 'bg-[#0d1117] text-[var(--text-dimmed)] hover:text-[var(--text-muted)] hover:bg-[#161b22]/50'
                }
              `}
            >
              <span className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={
                    activeTab === index
                      ? 'text-[#3178c6]'
                      : 'text-[var(--text-dimmed)]'
                  }
                >
                  <path
                    d="M3 3h18v18H3V3z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="6"
                    y="17"
                    fontSize="12"
                    fontWeight="bold"
                    fill="currentColor"
                  >
                    TS
                  </text>
                </svg>
                {exp.filename}
              </span>
              {activeTab === index && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent-primary)]"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Editor content */}
        <div className="min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <EditorContent exp={experiences[activeTab]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 bg-[#161b22] border-t border-[var(--glass-border)] text-xs font-mono text-[var(--text-dimmed)]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-tertiary)]" />
              TypeScript React
            </span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-4">
            <span>
              {experiences[activeTab].technologies.length} dependencies
            </span>
            <span>
              Ln {activeTab === 0 ? '1' : '1'}, Col 1
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewExperience;
