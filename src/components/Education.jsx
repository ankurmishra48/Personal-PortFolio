import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const educationData = [
  {
    degree: "MCA - Computers",
    year: "2024 - Present",
    institution: "Vellore Institute of Technology",
    grade: "CGPA: 8.1/10",
  },
  {
    degree: "BCA - Computers",
    year: "2021 - 2024",
    institution: "Dr Ram Manohar Lohia Avadh University, Faizabad",
    grade: "78.1%",
  },
  {
    degree: "BA",
    year: "2019 - 2022",
    institution: "Indira Gandhi National Open University",
    grade: "64%",
  },
  {
    degree: "12th",
    year: "2019",
    institution: "Modern Science College, Jogapur Pratapgarh",
    grade: "78.4%",
  },
  {
    degree: "10th",
    year: "2017",
    institution: "S C B I Vidyalaya Ishipur, Pratapgarh",
    grade: "84.0%",
  },
];

const Education = () => {
  return (
    <>
      <div name="Education" className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={edu.year}
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {edu.institution}
              </h4>
              <p>{edu.grade}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
