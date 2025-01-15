import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                Hi, I'm Abdurrahman, an entry-level Frontend Developer
                passionate about creating clean, responsive, and engaging web
                experiences. While I am currently exploring job opportunities, I
                have developed a solid foundation in HTML, CSS, and JavaScript,
                and I'm proficient in using frameworks and libraries like React
                and Tailwind CSS. I am also familiar with the Sass, allowing me
                to write more efficient and maintainable stylesheets. I’m
                constantly learning and improving my skills to stay up-to-date
                with the latest trends in web development. My goal is to work on
                projects that challenge me, expand my knowledge, and allow me to
                contribute to a team with my passion for clean and
                well-structured code. Take a look at some of my work below, and
                feel free to reach out if you have any opportunities or
                collaborations in mind!
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] h-32 ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Person"
          />
        </div>
      </div>
    </div>
  );
}
