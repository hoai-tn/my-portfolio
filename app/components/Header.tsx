import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="bg-[#2d2e2ef0] px-2">
      <div className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-12 mb-[30px] md:py-[100px] ">
        <div className="md:col-span-8 md:pr-[100px]">
          <h2 className="text-3xl font-bold">I am Hoai!</h2>
          <p>
            I&rsquo;m a full-stack developer (Vue.js, React.js & Node.js). I am
            not satisfied with my skill and working hard towards a higher skill.
            I have been developing web applications for over 4 years. I aim to
            make high-quality works with 100% effort for all customers.
          </p>
          <div className="flex mt-10 gap-x-5">
            <div>
              <a href="https://github.com/hoai-tn" target="_blank">
                <Image
                  className="rounded-full"
                  src="/images/github.svg"
                  width={30}
                  height={30}
                  alt="github"
                />
              </a>
            </div>
            <div>
              <a
                href="https://join.skype.com/invite/w5sgObSf7lGV"
                target="_blank"
              >
                <Image
                  className="rounded-full"
                  src="/images/skype.svg"
                  width={30}
                  height={30}
                  alt="close"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ho%C3%A0i-tr%E1%BA%A7n-878b7a244/"
                target="_blank"
              >
                <Image
                  className="rounded-full"
                  src="/images/in.svg"
                  width={30}
                  height={30}
                  alt="close"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="mx-auto flex">
            <div className=" w-[200px] h-[200px] rounded-full bg-gradient-to-b from-pink-500 to-blue-500 p-1">
              <Image
                className="rounded-full"
                src="/images/avatar.jpg"
                width={200}
                height={200}
                alt="close"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
