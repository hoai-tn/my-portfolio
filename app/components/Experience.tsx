import React from "react";
import CustomList from "./CustomList";
import Link from "next/link";
import Image from "next/image";

const ExperienceCard = ({
  title,
  company,
  date,
  location,
  logo,
  link,
  contents,
  responsibilities,
  recognition,
}: any) => (
  <article className="basis-1/2 bg-[#262a2a78] shadow rounded p-4">
    <header>
      <div className="flex justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <i className="font-[600]">{company}</i>
      <div className="mt-2">
        {link && (
          <Link
            passHref
            rel="noopener noreferrer"
            target="_blank"
            href={link}
            className="text-blue-500 underline"
          >
            My Upwork profile
          </Link>
        )}
      </div>
    </header>
    <div className="flex items-center mt-2">
      <div className="basis-1/2">
        <p>{date}</p>
      </div>
      {location && (
        <div className="flex items-center gap-x-1">
          <Image
            src="/images/location.svg"
            alt={`${company} location`}
            width={20}
            height={20}
          />
          <p>{location}</p>
        </div>
      )}
      {logo && <Image src={logo} alt="company logo" width={100} height={100} />}
    </div>
    <section className="mt-4 space-y-4">
      {contents?.map((paragraph: any, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  </article>
);

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "INS-ENCO Ltd., Germany",
      date: "JAN 2020 - FEB 2025",
      location: "Viet Nam",
      contents: [
        "I developed and maintained a full-stack investment project using Vue, React, .NET, and Express, focusing on both frontend and backend aspects. I built backend infrastructure with .NET for data processing and created API modules for seamless communication between the frontend and backend.",
        "Additionally, I developed e2e and unit tests with Cypress and Jest, and worked closely with the team to resolve technical challenges. As a core team member, I made key decisions for frontend projects, contributed to positive team dynamics, and improved my problem-solving and task organization skills while learning from skilled professionals. I also used Scrum boards for efficient project management.",
      ],
      responsibilities: [
        "Created and maintained an investment project that involves both FE and BE (Vue, React, .NET and Express).",
        "Leveraged .NET framework to build the backend infrastructure, enabling robust data processing, storage, and retrieval.",
        "Worked on various API modules on the backend, enabling seamless communication between the frontend and backend of the investment project.",
        "Developed e2e and jest tests using Cypress and Jest testing framework.",
        "Collaborated with the team to identify and resolve technical challenges, ensuring project efficiency and functionality.",
      ],
      recognition: [
        "Become a core team member and can make decisions for frontend projects.",
        "Shared insights and contributed to positive team dynamics.",
        "Learned logical thinking in software development from skilled professionals.",
        "Improved problem-solving and task organization skills.",
        "Have used Scrum boards for projects management.",
      ],
    },
    {
      title: "Web Developer(Freelancer)",
      company:
        "Awarded Top Rated badge and completed 22 jobs with 100% job success rate on Upwork",
      date: "AUG 2022 - current",
      logo: "/images/upwork.svg",
      link: "https://www.upwork.com/freelancers/~01d124102c4262bfad",
      contents: [
        "Developed dynamic and responsive user interfaces using React, Next.js, and Vue, delivering seamless user experiences while integrating frontend interfaces with backend APIs to ensure smooth data exchange and optimal functionality. Provided regular project updates, addressed client feedback promptly, and collaborated closely with clients to tailor solutions to their business goals.",
        "Resolved complex technical challenges, enhancing project efficiency and functionality, and received high ratings and positive feedback for delivering quality work and exceptional service.",
      ],
      responsibilities: [
        "Building dynamic and responsive user interfaces using React, Next, and Vue to deliver seamless user experiences.",
        "Integrating frontend interfaces with backend APIs to smooth data exchange and enhance overall application functionality.",
        "Creating and maintaining web applications with a focus on performance, scalability, and cross-browser compatibility.",
        "Providing regular updates on project progress, discussing requirements, and addressing client feedback promptly.",
      ],
      recognition: [
        "Achieved Top Rated badge talent status and completed 22 jobs with 100% job success rate.",
        "Resolved complex technical challenges, improving project efficiency and functionality.",
        "Consistently met project deadlines and milestones, ensuring on-time delivery and client satisfaction.",
        "Received positive feedback and high ratings from clients for delivering quality work and exceptional service.",
        "Collaborated with clients to understand their needs and tailored solutions to align with their business goals.",
      ],
    },
  ];

  return (
    <section id="experience" className="mx-auto pt-20">
      <header className="text-center">
        <h2 className="text-2xl">Work Experience</h2>
      </header>
      <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-10 mt-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
