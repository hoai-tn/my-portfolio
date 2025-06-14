import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "An lih",
      quote: `Hoai is a great developer who is able to debug well and get the code working. I highly recommend him`,
      rating: 5,
      platform: "Upwork",
      quoteUrl:
        "https://www.linkedin.com/posts/hoai-tran-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7339564490201407488-S7hR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyvg1wBGFv8eyadswo8OCRyuCRVY4pi2ds",
    },
    {
      name: "Terasa Truda",
      quote: `Great job - very thorough, efficient, hard working. Good experience with Vue.js. Thanks a lot for your help.`,
      rating: 5,
      platform: "Upwork",
      quoteUrl:
        "https://www.linkedin.com/posts/hoai-tran-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7082646245206364160-5x8j?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyvg1wBGFv8eyadswo8OCRyuCRVY4pi2ds",
    },
    {
      name: "Paul Hammant",
      quote: `React Component with Storybook+Cypress tests quickly developed by Hoai. Nx build system and Jests tests, too.`,
      rating: 5,
      platform: "Upwork",
      quoteUrl:
        "https://www.linkedin.com/posts/hoai-tran-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7094611396075630592-0MHa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyvg1wBGFv8eyadswo8OCRyuCRVY4pi2ds",
    },
    {
      name: "Uzodimma Chiapa",
      quote: `Works at his own pace, I would say if I wasn't in a rush and if he could work full time, I would continue to work with him. He is a good developer.`,
      rating: 5,
      platform: "Upwork",
      quoteUrl:
        "https://www.linkedin.com/posts/hoai-tran-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7094611396075630592-0MHa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyvg1wBGFv8eyadswo8OCRyuCRVY4pi2ds",
    },
  ];

  return (
    <section id="testimonials" className="section py-10 sm:py-14">
      <div className="text-center mb-16">
        <h2 className="section-title">
          <span className="text-[var(--accent-primary)] font-mono text-xl mr-2">
            03.
          </span>
          What People Say
        </h2>
        <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
          Feedback from clients and collaborators who have worked with me on various projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-sm group hover:-translate-y-2 transition-all duration-300 h-full"
          >
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[var(--accent-primary)] text-[var(--accent-primary)]"
                    />
                  ))}
                </div>
            
                  <Image
                    src="/images/uw.png"
                    alt="Upwork"
                    width={28}
                    height={28}
                    className="rounded-sm"
                  />
                  <span className="sr-only">Upwork</span>
              </div>

              <div className="flex-grow">
                <div className="relative mb-4">
                  <Quote size={20} className="text-[var(--accent-primary)] mb-2" />
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--glass-border)]">
                <div>
                  <p className="text-[var(--text-primary)] font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[var(--text-muted)] text-xs font-mono">
                    Client
                  </p>
                </div>
                <Link
                  href={testimonial.quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <ExternalLink size={16} />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
