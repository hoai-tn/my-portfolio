import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NewContact = () => {
  return (
    <section id="contact" className="section">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[var(--accent-primary)] text-base font-mono mb-6">
          <span className="text-[var(--accent-primary)] font-mono text-lg mr-2">04.</span>
          What&apos;s Next?
        </p>
        
        <h2 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
          Get In Touch
        </h2>
        
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-12 max-w-lg mx-auto">
          Although I&apos;m not currently looking for any new opportunities, my inbox is 
          always open. Whether you have a question or just want to say hi, I&apos;ll 
          try my best to get back to you!
        </p>
        
        <Button
          asChild
          size="lg"
          className="bg-transparent border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] font-mono text-sm uppercase tracking-wider hover:bg-[var(--accent-primary)] hover:text-black transition-all duration-300 rounded-full px-8 py-6"
        >
          <a href="mailto:hoai.nart.dev@example.com">
            Say Hello
          </a>
        </Button>
      </div>

    </section>
  );
};

export default NewContact; 