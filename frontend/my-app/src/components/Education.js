


import React from "react";
import "./Education.css";

const educationData = [
  {
    year: "2024 - 2025",
    title: "Post Graduate Diploma in Advanced Computing",
    institution: "CDAC, Indore",
  },
  {
    year: "2021 - 2024",
    title: "B.Tech in Computer Science and Engineering",
    institution: "Sandip Foundation, Nashik",
  },
  {
    year: "2019 - 2021",
    title: "Diploma in Electronics Engineering",
    institution: "Government Polytechnic, Mumbai",
  },
  {
    year: "2017 - 2019",
    title: "Junior College (Science Stream)",
    institution: "Indirabai Lalwani Jr. College, Jamner",
  },
  {
    year: "2016 - 2017",
    title: "Secondary School",
    institution: "New English School, Jamner",
  },
];

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">My Education</h2>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div className="edu-entry" key={index}>
            <div className="edu-year">{item.year}</div>
            <div className="edu-title">{item.title}</div>
            <div className="edu-institution">{item.institution}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
