import Image from "next/image";
import React from "react";

const Skills = () => {
  const skills = [
    { image: "js.svg", text: "javascript" },
    { image: "icon-typescript.svg", text: "Typescript" },
    { image: "vue.svg", text: "Vue.js" },
    { image: "icon-react.svg", text: "React.js" },
    { image: "Next.svg", text: "Next.js" },
    { image: "nuxt.svg", text: "Nuxt.js" },
    { image: "pinia.svg", text: "Pinia" },
    { image: "icon-sass.svg", text: "Sass" },
    { image: "icon-tailwindcss.svg", text: "Tailwindcss" },
    { image: "icon-nodejs.svg", text: "Node.js" },
    { image: "icon-express.svg", text: "Express.js" },
    { image: "icon-mongodb.svg", text: "MongoDB" },
    { image: "mysql.svg", text: "MySql" },
    { image: "icon-cypress.svg", text: "Cypress" },
    { image: "jest.svg", text: "Jest.js" },
    { image: "icon-git.svg", text: "Git" },
  ];
  return (
    <section id="tech-stack" className="mt-20">
      <div className="text-center">
        <h2 className="text-2xl">My Tech Stack</h2>
        <p className="italic">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6  md:grid-cols-8 gap-y-10 md:gap-x-[70px] mt-5">
        {skills.map((item, index: Number) => (
          <div key={index} className="mx-auto text-center">
            <Image
            className="hover:scale-110 transition-all"
              style={{ height: 90 }}
              src={`/images/${item.image}`}
              width={90}
              height={90}
              alt="javascript"
            />
            <p className="mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
