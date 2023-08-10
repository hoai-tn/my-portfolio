import Link from "next/link";
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="mx-auto py-20">
      <div className="text-center">
        <h2 className="text-2xl">Testimonials</h2>
        <p className="italic">People{"'"}s Positive Impressions of Me:</p>
      </div>
      <div className="mt-5 flex gap-x-4">
        <div className="basis-1/3 rounded shadow p-4 bg-[#60606063]">
          <Link
            passHref
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/posts/ho%C3%A0i-tr%E1%BA%A7n-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7031077269951451136-4yrq?utm_source=share&utm_medium=member_desktop"
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
                  <i>An Lih</i>
                </div>
                <p className="mt-4">
                  <q>
                    Hoai is a great developer who is able to debug well and get
                    the code working. I highly recommend him
                  </q>
                </p>
              </div>
              <div className="text-xl font-semibold">Upwork</div>
            </div>
          </Link>
        </div>
        <div className="basis-1/3 rounded shadow p-4 bg-[#60606063]">
          <Link
            passHref
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/posts/ho%C3%A0i-tr%E1%BA%A7n-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7094611396075630592-lAK9?utm_source=share&utm_medium=member_desktop"
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
                  <i>Terasa Truda</i>
                </div>
                <p className="mt-4">
                  <q>
                    Great job - very thorough, efficient, hard working. Good
                    experience with Vue.js. Thanks a lot for your help.
                  </q>
                </p>
              </div>
              <div className="text-xl mt-5 font-semibold">Upwork</div>
            </div>
          </Link>
        </div>
        <div className="basis-1/3 rounded shadow p-4 bg-[#60606063]">
          <Link
            passHref
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/posts/ho%C3%A0i-tr%E1%BA%A7n-878b7a244_see-how-i-can-get-your-project-done-on-upwork-activity-7002594357673431040-Mxgb?utm_source=share&utm_medium=member_desktop"
          >
            <div className="flex flex-col justify-between">
              <div className="h-full">
                <div className="flex justify-between">
                  <div className="flex">
                    <img src="/images/star.svg" alt="start" width={20} />
                    <img src="/images/star.svg" alt="start" width={20} />
                    <img src="/images/star.svg" alt="start" width={20} />
                    <img src="/images/star.svg" alt="start" width={20} />
                    <img src="/images/star.svg" alt="start" width={20} />
                  </div>
                  <i>Paul Hammant</i>
                </div>
                <p className="mt-4">
                  <q>
                    Works at his own pace, I would say if I wasn&apos;t in a
                    rush and if he could work full time, I would continue to
                    work with him. He is a good developer.
                  </q>
                </p>
              </div>
              <div className="text-xl mt-5 font-semibold">Upwork</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
