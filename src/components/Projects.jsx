import React from "react";
import Spin from "react-reveal/Spin";
import { motion } from "framer-motion"; // Import Framer Motion
import homify from "../../public/homify.jpg";
import calc from "../../public/calculater.png";
import weather from "../../public/weather.png";
 import portfolio from "../../public/portfolio.png";

const projectData = [
  {
    id: 1,
    title: "Homify - A Platform For Booking Stays",
    category: "Full Stack",
    technologies: ["Node", "Express", "JavaScript", "MongoDB", "Postman", "Bootstrap"],
    image: homify,
    link: "https://github.com/ankurmishra48/HomiFy.git",
  },
  {
    id: 2,
    title: "Personal PortFolio",
    category: "Frontend",
    technologies: ["ReactJs", "Node" ,"TailwindCss"],
    image: portfolio,
    link: "https://github.com/ankurmishra48/Personal-PortFolio.git",
  },
  {
    id: 3,
    title: "Investment Calculator",
    category: "Frontend",
    technologies: ["ReactJs", "Node"],
    image: calc,
    link: "https://github.com/ankurmishra48/InvestMentCalculaterByReact.git",
  },
  {
    id: 4,
    title: "Weather App by React",
    category: "Frontend",
    technologies: ["React", "Node", "Material UI"],
    image: weather,
    link: "https://www.linkedin.com/posts/ankur-mishra-7367851b9_weatherapp-react-react-activity-7279387297681231872-ImTG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLWkdoB8vbaylPmSo74e0rFNoV5HsxC-uA",
  },
  {
    id: 5,
    title: "Sorting Visualizer",
    category: "DSA",
    technologies: ["C", "OpenGL"],
    image: "https://th.bing.com/th/id/OIP.jAj2_Dq0DMbKPd-frCZzZAHaFm?w=768&h=581&rs=1&pid=ImgDetMain",
    link: "https://github.com/ankurmishra48/SortingVisualizer.git",
  },
  {
    id: 6,
    title: "Student Management System",
    category: "Full Stack",
    technologies: ["HTML", "CSS", "Java", "SQL"],
    image: "https://1.bp.blogspot.com/-32LSjkNQD7Q/X4lDX7XyZsI/AAAAAAAAKAM/vmtadshhnsU3KxDnD55qC3E9WQGLgv59ACLcBGAsYHQ/s1366/Screenshot%2B%2528179%2529.png",
    link: "https://github.com/ankurmishra48/CODSOFT-StudentManagementSystem.git",
  },
];

const Projects = () => {
  return (
    <div name="Projects" className="container mx-auto px-6 py-12" id="projects">
      <h2 className="text-center text-4xl font-bold text-gray-900 uppercase">
        Top Recent Projects
      </h2>
      <hr className="w-48 mx-auto border-t-4 border-teal-500 my-6" />
      <p className="text-center text-gray-700 max-w-2xl mx-auto text-lg">
        Explore some of my recent projects, covering Full Stack, Frontend, and DSA.
      </p>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 mt-10">
        <Spin>
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform hover:translate-y-[-5px] hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover aspect-[4/3]"
                />
                <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-5 text-center flex-grow">
                <h6 className="text-xl font-semibold text-gray-800 uppercase">
                  {project.title}
                </h6>

                {/* Technologies Used */}
                <div className="flex flex-wrap justify-center mt-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-yellow-300 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full m-1 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  className="inline-block mt-5 px-5 py-2 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition shadow-lg"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </Spin>
      </div>
    </div>
  );
};

export default Projects;
