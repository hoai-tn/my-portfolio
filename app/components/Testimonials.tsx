import Link from "next/link";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "An lih",
      quote: `Hoai is a great developer who is able to debug well and get
            the code working. I highly recommend him`,
      quoteUrl:
        "https://www.linkedin.com/posts/ho%C3%A0i-tr%E1%BA%A7n-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7033977486610767872-pC5v?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "Terasa Truda",
      quote: `Great job - very thorough, efficient, hard working. Good
        experience with Vue.js. Thanks a lot for your help.`,
      quoteUrl:
        "https://www.linkedin.com/posts/ho%C3%A0i-tr%E1%BA%A7n-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7082646245206364160-H4lP?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "Paul Hammant",
      quote: `React Component with Storybook+Cypress tests quickly
        developed by Hoai. Nx build system and Jests tests, too.`,
      quoteUrl:
        "https://www.linkedin.com/posts/ho%C3%A0i-tr%E1%BA%A7n-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7002594357673431040-Mxgb?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "Uzodimma Chiapa",
      quote: `Works at his own pace, I would say if I wasn&apos;t in a
        rush and if he could work full time, I would continue to
        work with him. He is a good developer.`,
      quoteUrl:
        "https://www.linkedin.com/posts/ho%C3%A0i-tr%E1%BA%A7n-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7094611396075630592-lAK9?utm_source=share&utm_medium=member_desktop",
    },
  ];
  return (
    <section id="testimonials" className="mx-auto py-20">
      <div className="text-center">
        <h2 className="text-2xl">Testimonials</h2>
        <p className="italic">People{"'"}s Positive Impressions of Me:</p>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 lg:gap-y-0 gap-x-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="rounded shadow-lg p-4 bg-[#2d2e2ef0]"
          >
            <Link
              passHref
              rel="noopener noreferrer"
              target="_blank"
              href={item.quoteUrl}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <img src="/images/star.svg" alt="start" width={20} />
                      <img src="/images/star.svg" alt="start" width={20} />
                      <img src="/images/star.svg" alt="start" width={20} />
                      <img src="/images/star.svg" alt="start" width={20} />
                      <img src="/images/star.svg" alt="start" width={20} />
                    </div>
                    <i>{item.name}</i>
                  </div>
                  <p className="mt-4">
                    <q>{item.quote}</q>
                  </p>
                </div>
                <div className="text-xl font-semibold mt-5">Upwork</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
