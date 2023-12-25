import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="mx-auto">
      <h2 className="text-2xl text-center">About me</h2>
      <div className="flex flex-col md:flex-row justify-between gap-x-20 pt-10">
        <div className="md:basis-2/5">
          <img
            className=" w-full object-fill"
            src="/images/avatar1.jpg"
            alt="javascript"
          />
        </div>

        <div className="md:basis-3/5">
          <h4 className="text-xl font-semibold">
            I am a skilled web developer with a strong expertise in Vue.js and
            React.js technologies
          </h4>
          <p className="mt-3">
            With a passion for front-end development, I have actively
            contributed to the web development community and built
            user-friendly, responsive, and visually appealing web applications.
          </p>
          <p className="mt-3">
            Having gained extensive experience in Vue.js and React.js, I deeply
            understand component-based architecture, state management, and
            modern JavaScript frameworks. My proficiency in these technologies
            allows me to create interactive and dynamic user interfaces that
            enhance the overall user experience.
          </p>
          <p className="mt-3">
            With a strong foundation in HTML, CSS, and JavaScript, I am adept at
            implementing responsive design principles, ensuring seamless
            functionality across different devices and screen sizes. My
            attention to detail and commitment to delivering high-quality code
            make me valuable in any development project.
          </p>
          <p className="mt-3">
            I complement my development skills with a strong foundation in unit
            testing and end-to-end testing using tools like Jest for unit tests
            and Cypress for comprehensive testing. This ensures that not only
            are my applications feature-rich and visually compelling, but they
            also meet high standards of reliability and performance.
          </p>
          <p className="mt-3">
            In addition to my technical proficiency, I am a continuous learner
            who values personal growth and professional development. I actively
            seek opportunities to enhance my skill set and stay open to
            exploring new technologies and frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
