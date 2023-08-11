import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto pb-20">
      <div className="text-center">
        <h2 className="text-2xl">Contact</h2>
        <p className="italic">
          So you{"'"}re looking for a developer to help you make the quality
          products?
        </p>
      </div>
      <div className="flex mt-10 gap-x-5 justify-center items-center">
        <div>
          <a href="https://github.com/hoai-tn" target="_blank">
            <Image
              className="rounded-full"
              src="/images/github.svg"
              width={50}
              height={50}
              alt="github"
            />
          </a>
        </div>
        <div>
          <a href="https://join.skype.com/invite/w5sgObSf7lGV" target="_blank">
            <Image
              className="rounded-full"
              src="/images/skype.svg"
              width={50}
              height={50}
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
              width={50}
              height={50}
              alt="close"
            />
          </a>
        </div>
        <div>
          <a href="mailto:hoaitran2599@gmail.com">
            <Image
              className="rounded-full"
              src="/images/email.svg"
              width={60}
              height={60}
              alt="close"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
