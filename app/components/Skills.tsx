import Image from "next/image";
import React from "react";

const Skills = () => {
  const skills = [
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
    { image: "js.svg", text: "javascript" },
  ];
  return (
    <section>
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
              src={`/images/${item.image}`}
              width={90}
              height={90}
              alt="javascript"
            />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
