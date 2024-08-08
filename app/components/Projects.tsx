"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Projects = () => {
  const projects = [
    {
      name: "CTM (Copy Trade Market)",
      imgUrls: [
        "/images/ctm-project3.png",
        "/images/ctm-project.png",
        "/images/ctm-project2.png",
        "/images/ctm-project1.png",
        "/images/ctm-project4.png",
      ],
      descriptions: `CTM, which stands for Copy Trade Marker, is a platform that enables users to engage in copy trading, a practice in the financial markets where traders can replicate the trading strategies and activities of experienced and successful traders. <br> Copy trading allows less experienced traders to benefit from the expertise of more skilled traders without needing to make trading decisions themselves.
       <br> In the context of CTM, the platform provides a marketplace where experienced traders can share their trading strategies, allowing other users to subscribe to and automatically copy their trades.`,
      techs: ["Vue.js", ".Net", "Mysql", "MT4 API", "Mock", "Cypress"],
    },
    {
      name: "Clouthub",
      imgUrls: [
        "/images/clouthub.png",
        "/images/clouthub1.png",
        "/images/clouthub2.png",
        "/images/clouthub3.png",
        "/images/clouthub4.png",
      ],
      descriptions: `Clouthub is a social networking website that connects people in new and meaningful ways. It focuses on community engagement, allowing users to share their experiences, thoughts, and media easily.
    <br>
      Clouthub aims to create real connections and a positive online environment. It uses advanced algorithms to show content that matches users' interests, encouraging healthy interactions.<br> On Clouthub, users can join discussions, create and join groups, and stay updated with the latest trends and news, all within a user-friendly interface.`,
      techs: ["Vue.js", "Tailwind", "Node.js", "GraphQL ", "MongoDB"],
    },
    {
      name: "Cupola software",
      imgUrls: ["/images/cupola.png"],
      descriptions: `Cupola Software is a project management tool that streamlines task management, team collaboration, and project planning. It features task creation, real-time chat, file sharing, Gantt charts, resource allocation, time tracking, and detailed reporting, ensuring projects are completed on time and within budget.`,
      techs: ["React.js", "TypeScript", "MUI", "Cypress", "Jest", "Storybook"],
    },

    {
      name: "HT Branch",
      imgUrls: [
        "/images/ht-branch.png",
      ],
      descriptions: `HT-Branch introduces a new dimension to the concept of a shopping cart, revolutionizing the way we browse, select, and purchase items online.<br>
      At its core, HT-Branch reimagines the traditional online shopping cart by integrating cutting-edge technologies to enhance the entire shopping experience.<br>
      Unlike conventional shopping carts that are often static and isolated, HT-Branch takes inspiration from the dynamic nature of branches in the natural world.<br>
      Just as branches diverge and offer a multitude of choices, HT-Branch creates a similar branching path of opportunities as you explore products and make purchasing decisions.`,
      techs: [
        "Vue.js",
        "Tailwind",
        "Node.js",
        "Google OAuth",
        "PayPal APIs",
        "MongoDB",
      ],
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
                index % 2 === 0 || "md:flex-row-reverse"
              } mb-5 p-[10px] rounded shadow-lg bg-[#2d2e2ef0]`}
            >
              <div className="basis-1/2 flex flex-col justify-between p-4 ">
                <Carousel
                  showThumbs={false}
                  infiniteLoop
                  useKeyboardArrows
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="custom-prev-arrow"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        className="custom-next-arrow"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    )
                  }
                >
                  {e.imgUrls.map((imgUrl, idx) => (
                    <div key={idx}>
                      <img
                        src={imgUrl}
                        alt={`${e.name} screenshot ${idx + 1}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="basis-1/2 p-4">
                <div className="flex flex-col justify-between h-full">
                  <div className="main-project-card">
                    <h4 className="text-xl font-semibold">{e.name}</h4>
                    <p
                      className="mt-5"
                      dangerouslySetInnerHTML={{ __html: e.descriptions }}
                    ></p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
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
