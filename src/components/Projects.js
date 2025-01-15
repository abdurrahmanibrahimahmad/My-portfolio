import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "Pizza Restaurant",
    github: "https://github.com/abdurrahmanibrahimahmad/Fast-react-pizza",
    liveDemo: "https://fast-react-pizza-dev.vercel.app",
    imageSrc: "https://img.freepik.com/premium-photo/delicious-pizza-with-tomatoes-leaf-lemon-pepper-dark-background-with-fire-effect-ai-generated_600260-939.jpg",
    used: "ReactJS, TailwindCSS",
    description:
      "A dynamic pizza ordering website built with React and some third-party libraries, featuring real-time location tracking, an interactive menu, and API integration for seamless ordering ",
  },
  {
    id: 2,
    name: "Shopping List",
    github: "https://github.com/abdurrahmanibrahimahmad/Fast-react-pizza",
    liveDemo: "https://shopping-lists-lac.vercel.app/",
    imageSrc: "https://th.bing.com/th/id/R.9ecf172601d56d940b985ee0e62ed829?rik=U0jFUkLmnxBuQg&pid=ImgRaw&r=0",
    used: "ReactJS, CSS",
    description:
      "A simple and intuitive shopping list app built with React, allowing users to create, manage, and track their shopping lists with ease. It features smooth item addition, deletion, and real-time updates.",
  },
  {
    id: 3,
    name: "My Blogs",
    github: "https://github.com/abdurrahmanibrahimahmad/atomic-blog",
    liveDemo: "https://atomic-blog-698w.vercel.app/",
    imageSrc: "./blog1.png",

    used: "ReactJS, CSS",
    description:
      "A simple and modern blog application built with React, featuring dynamic content rendering and smooth navigation. It allows users to create, view, and manage blog posts with ease.",
  },
  {
    id: 4,
    name: "Eat n Split",
    github: "https://github.com/abdurrahmanibrahimahmad/eat-n-split",
    liveDemo: "https://eat-n-split-teal-kappa.vercel.app/",
    imageSrc: "./bill.png",
    used: "ReactJS, CSS",
    description:
      "This website is a simple and intuitive app that allows users to split restaurant bills among friends. It calculates individual shares, including tips, and helps users easily manage and track their expenses.",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 grid grid-rows-1 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <a
                href={project.liveDemo}
                className="aspect-h-1 flex items-center justify-center aspect-w-1 w-full  rounded-md aspect-none group-hover:brightness-75 duration-300 delay-100 h-80 rounded-t-2xl "
              >
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full"
                />
              </a>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <span>
                      <span aria-hidden="true" className="absolute" />
                      {project.name}
                    </span>
                  </h3>
                  <p className="mt-1 mb-2 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                  <div className="space-x-10 mt-5">
                    <a
                      href={project.liveDemo}
                      className="btn btn-outline btn-square cursor-pointer"
                    >
                      <svg
                        width="800px"
                        height="800px"
                        className="h-8 w-8"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="3"
                        stroke="#000000"
                        fill="currentColor"
                      >
                        <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6" />
                        <path d="M37.86,51.1A47,47,0,0,1,32,56.7" />
                        <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85" />
                        <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24" />
                        <line x1="10.37" y1="19.9" x2="53.75" y2="19.9" />
                        <line x1="32" y1="6.99" x2="32" y2="56.7" />
                        <line x1="11.05" y1="45.48" x2="37.04" y2="45.48" />
                        <line x1="7.14" y1="32.46" x2="56.86" y2="31.85" />
                        <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z" />
                      </svg>
                    </a>
                    <a
                      href={project.github}
                      className="btn btn-outline btn-square cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-16 flex justify-center">
          <button className="btn btn-outline">View More</button>
        </div> */}
      </div>
    </div>
  );
}
