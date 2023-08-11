import Image from "next/image";
import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Cupola",
      imgUrl: "/images/cupola.png",
      descriptions: `
        Cupola is a specialized platform with a distinct emphasis on serving architecture firms. What sets Cupola apart is its dedicated approach to addressing a common pain point in the industry – the laborious task of manually integrating data from various software platforms.
        
        Traditionally, architecture firms utilize multiple software tools and platforms for different aspects of their projects, such as design, project management, collaboration, and documentation. However, these disparate tools often don't communicate seamlessly with each other, leading to inefficiencies and the need for time-consuming manual workarounds.`,
      techs: ["React.js", "TypeScript", "MUI", "Cypress", "Jest", "Storybook"],
    },
    {
      name: "Copy Trade Market",
      imgUrl: "/images/ctm-project.png",
      descriptions: `CTM, which stands for Copy Trade Marker, is a platform that enables users to engage in copy trading, a practice in the financial markets where traders can replicate the trading strategies and activities of experienced and successful traders. Copy trading allows less experienced traders to benefit from the expertise of more skilled traders without needing to make trading decisions themselves.

        In the context of CTM, the platform provides a marketplace where experienced traders can share their trading strategies, allowing other users to subscribe to and automatically copy their trades. `,
      techs: ["Vue.js", ".Net", "Mysql", "MT4 API", "Mock", "Cypress"],
    },
    {
      name: "HT Branch",
      imgUrl: "/images/ht-branch.png",
      descriptions: `HT-Branch introduces a new dimension to the concept of a shopping cart, revolutionizing the way we browse, select, and purchase items online. At its core, HT-Branch reimagines the traditional online shopping cart by integrating cutting-edge technologies to enhance the entire shopping experience.

        Unlike conventional shopping carts that are often static and isolated, HT-Branch takes inspiration from the dynamic nature of branches in the natural world. Just as branches diverge and offer a multitude of choices, HT-Branch creates a similar branching path of opportunities as you explore products and make purchasing decisions.`,
      techs: ["Vue.js", "Tailwind", "Node.js","Google OAuth","PayPal APIs", "MongoDB"],
    },
  ];
  return (
    <section id="projects" className="mx-auto pt-20">
      <div className="text-center">
        <h2 className="text-2xl">Projects</h2>
        <p className="italic">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="mt-5">
        {projects.map((e, index) => {
          return (
            <div
              key={index}
              className={`md:flex ${
                index % 2 == 0 || "md:flex-row-reverse"
              } mb-5 p-[10px] rounded shadow-lg bg-[#2d2e2ef0]`}
            >
              <div className="basis-1/2 flex flex-col justify-between p-4 ">
                <img
                  src={e.imgUrl}
                  alt="upwork"
                  height="300"
                  className="h-[350px]"
                />
              </div>
              <div className="basis-1/2 p-4 ">
                <div className="flex flex-col justify-between h-full">
                  <div className="main-project-card">
                    <h4 className="text-xl font-semibold">{e.name}</h4>
                    <p className="mt-5">{e.descriptions}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4 ">
                    {e.techs.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-gray-600 px-4 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
