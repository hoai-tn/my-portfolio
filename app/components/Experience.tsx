import React from "react";
import CustomList from "./CustomList";

const Experience = () => {
  return (
    <section id="experience" className="mx-auto pt-20">
      <div className="text-center">
        <h2 className="text-2xl">Work Experience</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 gap-x-10 mt-4">
        <div className="basis-1/2 bg-[#262a2a78] shadow rounded p-4">
          <div className="text-xl font-semibold">Fullstack developer</div>
          <i className="font-semibold">Insenco LTD</i>
          <div className="flex">
            <div className="basis-1/2">
              <p>JAN 2020 - current</p>
            </div>
            <div className="flex gap-x-1">
              <img src="/images/location.svg" alt="location" width={20} />
              <p>Viet Nam</p>
            </div>
          </div>
          <div className="mt-2">
            <p className="font-bold">Main responsibilities:</p>
            <CustomList
              items={[
                "Created and maintained an investment project that involves both frontend and backend(Vue.js, .NET).",
                "Leveraged .NET framework to build the backend infrastructure, enabling robust data processing, storage, and retrieval",
                "Developed end-to-end tests for the Vue.js frontend using the Cypress testing framework.",
                "Implemented unit tests for the .NET backend using the Moq testing framework.",
                "Worked on various API modules on the backend, enabling seamless communication between the frontend and backend of the investment project.",
                "Create some .NET and Nodejs tools to get data from API and then process it according to customer requirements.",
              ]}
            />
          </div>
          <div className="mt-2">
            <p className="font-bold">Recognition and Gains:</p>
            <CustomList
              items={[
                "Learn a way to handle data and devised efficient strategies for data management.",
                "Ensured frontend reliability by crafting comprehensive end-to-end Cypress tests, and fortified backend integrity through meticulous Moq unit tests.",
                "Shared insights, contributing to positive team dynamics.",
                "Organizing tasks, solving problems",
              ]}
            />
          </div>
        </div>
        <div className="basis-1/2 bg-[#262a2a78] shadow rounded p-4">
          <div className="text-xl font-semibold">Web developer</div>
          <i className="font-semibold">Upwork</i>
          <div className="flex items-center">
            <div className="basis-1/2">
              <p>AUG 2022 - current</p>
            </div>
            <img src="/images/upwork.svg" alt="upwork" width={100} />
          </div>
          <div className="mt-2">
            <p className="font-bold">Main responsibilities:</p>
            <CustomList
              items={[
                "Building dynamic and responsive user interfaces using React.js, Next.js, and Vue.js to deliver seamless user experiences.",
                "Creating and maintaining web applications with a focus on performance, scalability, and cross-browser compatibility.",
                "Integrating frontend interfaces with backend APIs to facilitate smooth data exchange and enhance overall application functionality.",
                "Developing end-to-end tests for web applications using Cypress to ensure functionality, reliability, and optimal performance.",
                "Providing regular updates on project progress, discussing requirements, and addressing client feedback promptly.",
              ]}
            />
          </div>
          <div className="mt-2">
            <p className="font-bold">Recognition and Gains:</p>
            <CustomList
              items={[
                "I got Top Rated talent and 19 jobs done well successfully.",
                "Successfully resolved complex technical challenges, resulting in improved project efficiency and functionality.",
                "Consistently met project deadlines and milestones, ensuring on-time delivery and client satisfaction.",
                "Consistently received positive feedback and high ratings from clients for delivering quality work and exceptional service.",
                "Worked closely with clients to understand their unique needs and tailor solutions to align with their business goals.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;