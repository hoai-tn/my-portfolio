import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="mx-auto pt-20">
      <div className="text-center">
        <h2 className="text-2xl">Work Experience</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0  gap-x-10 mt-4">
        <div className="basis-1/2 bg-[#2d2e2ef0] shadow rounded p-4">
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
            <ul className="list-inside list-disc px-2">
              <li>
                Created and maintained an investment project that involves both
                frontend and backend(Vue.js, .NET).
              </li>
              <li>
                Leveraged .NET framework to build the backend infrastructure,
                enabling robust data processing, storage, and retrieval
              </li>
              <li>
                Developed end-to-end tests for the Vue.js frontend using the
                Cypress testing framework.
              </li>
              <li>
                Implemented unit tests for the .NET backend using the Moq
                testing framework.
              </li>
              <li>
                Worked on various API modules on the backend, enabling seamless
                communication between the frontend and backend of the investment
                project.
              </li>
              <li>
                Create some .NET and Nodejs tools to get data from API and then
                process it according to customer requirements.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <p className="font-bold">Recognition and Gains:</p>
            <ul className="list-inside list-disc px-2">
              {/* <li>Solve almost most of all customer requirements.</li> */}
              <li>
                Learn a way to handle data and devised efficient strategies for
                data management.
              </li>
              <li>
                Ensured frontend reliability by crafting comprehensive
                end-to-end Cypress tests, and fortified backend integrity
                through meticulous Moq unit tests.
              </li>
              <li> Shared insights, contributing to positive team dynamics.</li>
              <li>Organizing tasks, solving problems</li>
              {/* <li>
                Engineered purpose-specific tools in .NET and Nodejs,
                effectively gathering and processing API data to align with
                diverse customer requisites.
              </li> */}
              {/* <li>Work Independently</li> */}
            </ul>
          </div>
        </div>
        <div className="basis-1/2 bg-[#2d2e2ef0] shadow rounded p-4">
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
            <ul className="list-inside list-disc px-2">
              <li>
                Building dynamic and responsive user interfaces using React.js,
                Next.js, and Vue.js to deliver seamless user experiences.
              </li>
              <li>
                Creating and maintaining web applications with a focus on
                performance, scalability, and cross-browser compatibility.
              </li>
              <li>
                Integrating frontend interfaces with backend APIs to facilitate
                smooth data exchange and enhance overall application
                functionality.
              </li>
              <li>
                Developing end-to-end tests for web applications using Cypress
                to ensure functionality, reliability, and optimal performance.
              </li>
              <li>
                Providing regular updates on project progress, discussing
                requirements, and addressing client feedback promptly.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <p className="font-bold">Recognition and Gains:</p>
            <ul className="list-inside list-disc px-2">
              <li>I got Top Rated talent and 19 jobs done well successfully.</li>
              <li>
                Successfully resolved complex technical challenges, resulting in
                improved project efficiency and functionality.
              </li>
              <li>
                Consistently met project deadlines and milestones, ensuring
                on-time delivery and client satisfaction.
              </li>
              <li>
                Consistently received positive feedback and high ratings from
                clients for delivering quality work and exceptional service.
              </li>
              <li>
                Worked closely with clients to understand their unique needs and
                tailor solutions to align with their business goals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
