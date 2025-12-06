'use client';

import Image from 'next/image';
import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MailIcon,  } from 'lucide-react';
import upworkIcon from '@/public/images/uw.png';
const Upwork = () => {
  return <Image src={upworkIcon}  className='w-6 h-6' alt="Upwork"  />;
};
const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navigation = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },  
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ], []);

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/hoai-tn', 
      label: 'GitHub'   
    },
    {
      icon: Upwork,
      href: 'https://www.upwork.com/freelancers/~01d124102c4262bfad',
      label: 'Upwork'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/hoai-tran-878b7a244', 
      label: 'LinkedIn' 
    },
    {
      icon: MailIcon,
      href:"mailto:hoai.nart.dev@gmail.com",
      label:'Email'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigation]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="sidebar">
        <div>
          <div className="mb-12">
            <h1 className="text-2xl lg:text-4xl font-bold text-[var(--text-primary)] mb-3 leading-tight">
              Hoai Tran
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium text-[var(--accent-primary)] mb-6 tracking-wide">
              Software Developer
            </h2>
            <p className="text-[var(--text-muted)] text-base leading-relaxed">
              I build accessible, pixel-perfect digital experiences with modern technologies and clean code.
            </p>
          </div>

          <nav className="space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link block w-full text-left ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

      </div>


      <div className="email-link flex">
      {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={social.label}
          >
            <social.icon size={18} />
          </a>
        ))}
      </div>
    </>
  );
};

export default Sidebar; 