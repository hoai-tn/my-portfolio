"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ExternalLink,
  Quote,
  ChevronLeft,
  ChevronRight,
  Verified,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = React.useState<SwiperType | null>(null);

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
      name: "Paul Hammant",
      quote: `React Component with Storybook+Cypress tests quickly developed by Hoai. Nx build system and Jests tests, too.`,
      rating: 5,
      platform: "Upwork",
      quoteUrl:
        "https://www.linkedin.com/posts/hoai-tran-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7094611396075630592-0MHa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyvg1wBGFv8eyadswo8OCRyuCRVY4pi2ds",
    },
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
      name: "Uzodimma Chiapa",
      quote: `Works at his own pace, I would say if I wasn't in a rush and if he could work full time, I would continue to work with him. He is a good developer.`,
      rating: 5,
      platform: "Upwork",
      quoteUrl:
        "https://www.linkedin.com/posts/hoai-tran-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7094611396075630592-0MHa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyvg1wBGFv8eyadswo8OCRyuCRVY4pi2ds",
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
          Feedback from clients and collaborators who have worked with me on
          various projects.
        </p>
      </div>

      <div className="relative">
        {/* Custom Navigation Buttons */}
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] p-3 rounded-full text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[rgba(0,212,255,0.1)] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 hidden md:flex items-center justify-center"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => swiperRef?.slideNext()}
          className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] p-3 rounded-full text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[rgba(0,212,255,0.1)] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 hidden md:flex items-center justify-center"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={setSwiperRef}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2.2}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="pb-12">
              <Card className="bg-[var(--glass-bg)] border-[var(--glass-border)] backdrop-blur-sm group hover:-translate-y-2 transition-all duration-300 h-full">
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
                  </div>

                  <div className="flex-grow">
                    <div className="relative mb-4">
                      <Quote
                        size={20}
                        className="text-[var(--accent-primary)] mb-2"
                      />
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding: 20px 0;
        }

        .testimonials-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .testimonials-swiper .swiper-slide {
          width: 100%;
          height: auto;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
        }

        .testimonials-swiper .swiper-slide > * {
          width: 100%;
        }

        /* Center slide (active) - Full visibility */
        .testimonials-swiper .swiper-slide-active {
          transform: scale(1.05);
          opacity: 1;
          z-index: 10;
        }

        /* Side slides - Reduced visibility */
        .testimonials-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.35;
          transform: scale(0.9);
        }

        /* Prev/Next slides specific styling */
        .testimonials-swiper .swiper-slide-prev,
        .testimonials-swiper .swiper-slide-next {
          opacity: 0.35;
        }

        /* Custom Pagination Styles */
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
          position: relative;
          margin-top: 30px;
        }

        .testimonials-swiper .swiper-pagination-bullet {
          background: var(--text-muted);
          opacity: 0.5;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          background: var(--accent-primary);
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }

        /* Hover effects for non-active slides */
        .testimonials-swiper .swiper-slide:not(.swiper-slide-active):hover {
          opacity: 0.6;
          transform: scale(0.95);
          cursor: pointer;
        }

        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .testimonials-swiper .swiper-slide-active {
            transform: scale(1);
          }

          .testimonials-swiper .swiper-slide:not(.swiper-slide-active) {
            opacity: 0.2;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1023px) {
          .testimonials-swiper .swiper-slide-active {
            transform: scale(1.03);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
