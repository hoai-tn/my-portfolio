import Image from "next/image";
import React from "react";

const AboutMe = () => {
  const paragraphs = [
    "As a full-stack developer, I bring a robust set of skills across both frontend and backend technologies, including Vue.js, React, and Node.js.",
    "Having gained extensive experience in Vue.js and React.js, I deeply understand component-based architecture, state management, and modern JavaScript frameworks. My proficiency in these technologies allows me to create interactive and dynamic user interfaces that enhance the overall user experience.",
    "With Node.js, I integrate with various databases, such as MongoDB or SQL databases, to handle data storage, retrieval, and manipulation effectively. This enables me to build APIs that interact seamlessly with backend data sources.",
    "My expertise extends beyond just coding to encompass a strong foundation in unit and end-to-end testing. I utilize tools like Jest for precise unit tests and Cypress for comprehensive testing, ensuring that my applications are not only feature-rich and visually compelling but also reliable and high-performing.",
    "In addition to my technical proficiency, I am a continuous learner who values personal growth and professional development. I actively seek opportunities to enhance my skill set and stay open to exploring new technologies and frameworks.",
  ];

  return (
    <section id="about" className="mx-auto">
      <h2 className="text-2xl text-center">About me</h2>
      <div className="flex flex-col md:flex-row justify-between gap-x-20 pt-10">
        <div className="md:basis-2/5">
          <img
            className="w-full object-cover h-[496px] rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 opacity-50"
            src="/images/about-me.jpg"
            alt="javascript"
          />
        </div>

        <div className="md:basis-3/5">
          <h4 className="text-xl font-semibold">
            I am a skilled web developer with strong expertise in Vue, React,
            and Node.js
          </h4>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mt-3">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
