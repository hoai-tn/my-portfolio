"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isShowSideBar, setShowSideBar] = useState<Boolean>(false);

  return (
    <section className="sticky top-0 z-10 bg-[#2d2e2ef0]">
      <div className="md:container md:mx-auto flex p-[8px] items-center">
        <div className="text-2xl font-bold">{"<HT/>"}</div>
        <div className="ml-auto gap-x-[55px] hidden md:flex">
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#about">About</a>
          </div>
          <div>
            <a href="#tech-stack">Tech Stack</a>
          </div>

          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="ml-auto block md:hidden">
          <Image
            onClick={() => setShowSideBar(true)}
            src="/images/menu-icon.png"
            width={30}
            height={30}
            alt="menu"
          />
        </div>
      </div>
      <div className="border-b md:border-0 border-b-[#3f3f3f]"></div>

      <div className="relative">
        {isShowSideBar && (
          <div
            className="fixed inset-0 z-10 bg-white bg-opacity-25 transition-opacity"
            onClick={() => setShowSideBar(false)}
          ></div>
        )}

        <div
          className={`
        fixed top-0 left-0 bg-[#292828] w-[80vw] sm:w-[45vw] h-full z-40 ease-in-out duration-300 ${
          isShowSideBar ? "translate-x-[0]" : "translate-x-[-100%]"
        }
      `}
        >
          <div
            className="flex justify-between p-[8px] h-[48px]"
            onClick={() => setShowSideBar(false)}
          >
            <div className="text-2xl font-bold">{"<HT/>"}</div>
            <Image
              onClick={() => setShowSideBar(true)}
              src="/images/close-icon.png"
              width={30}
              height={30}
              alt="close"
            />
          </div>
          <div className="border-b md:border-0 border-b-[#3f3f3f]"></div>

          <div className="mt-5 px-2">
            <div>
              <a className="py-2 block" href="#home">
                Home
              </a>
            </div>
            <div>
              <a className="py-2 block" href="#about">
                About
              </a>
            </div>
            <div>
              <a className="py-2 block" href="#tech-stack">
                Tech Stack
              </a>
            </div>
            <div>
              <a className="py-2 block" href="#testimonials">
                Testimonials
              </a>
            </div>
            <div>
              <a className="py-2 block" href="#projects">
                Projects
              </a>
            </div>
            <div>
              <a className="py-2 block" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
