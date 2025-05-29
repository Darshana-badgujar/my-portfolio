// import React from "react";

// const Skills = () => (
//   <div style={{ padding: "20px" }}>
//     <h1>Skills</h1>
//     <ul>
//       <li>HTML, CSS, JavaScript</li>
//       <li>React.js, Redux</li>
//       <li>Node.js, Express.js</li>
//       <li>MySQL, MongoDB</li>
//       <li>REST APIs, Git, GitHub</li>
//     </ul>
//   </div>
// );

// export default Skills;
// 
// ---------------
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { 
//   FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava, FaGithub 
// } from 'react-icons/fa';
// import { 
//   SiRedux, SiSpringboot, SiMysql, SiMongodb, SiExpress, SiPostman 
// } from 'react-icons/si';
// import './Skills.css';

// const skills = [
//   { name: 'HTML', icon: <FaHtml5 />, percent: 95, color: '#E34F26' },
//   { name: 'CSS', icon: <FaCss3Alt />, percent: 90, color: '#1572B6' },
//   { name: 'JavaScript', icon: <FaJs />, percent: 92, color: '#F7DF1E' },
//   { name: 'React.js', icon: <FaReact />, percent: 90, color: '#61DAFB' },
//   { name: 'Redux', icon: <SiRedux />, percent: 85, color: '#764ABC' },
//   { name: 'Java', icon: <FaJava />, percent: 88, color: '#007396' },
//   { name: 'Spring Boot', icon: <SiSpringboot />, percent: 80, color: '#6DB33F' },
//   { name: 'Hibernate', icon: <SiSpringboot />, percent: 75, color: '#59666C' },
//   { name: 'Node.js', icon: <FaNodeJs />, percent: 85, color: '#339933' },
//   { name: 'Express.js', icon: <SiExpress />, percent: 80, color: '#000000' },
//   { name: 'MySQL', icon: <SiMysql />, percent: 85, color: '#4479A1' },
//   { name: 'MongoDB', icon: <SiMongodb />, percent: 82, color: '#47A248' },
//   { name: 'REST APIs', icon: <SiPostman />, percent: 88, color: '#FF6C37' },
//   { name: 'Git', icon: <FaGitAlt />, percent: 90, color: '#F05032' },
//   { name: 'GitHub', icon: <FaGithub />, percent: 90, color: '#181717' },
// ];

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.5, ease: 'easeOut' },
//   },
// };

// const CircularProgress = ({ percentage, color }) => {
//   const radius = 50;
//   const stroke = 8;
//   const normalizedRadius = radius - stroke * 2;
//   const circumference = normalizedRadius * 2 * Math.PI;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <svg
//       height={radius * 2}
//       width={radius * 2}
//       className="circular-progress"
//     >
//       <circle
//         stroke="#ddd"
//         fill="transparent"
//         strokeWidth={stroke}
//         r={normalizedRadius}
//         cx={radius}
//         cy={radius}
//       />
//       <circle
//         stroke={color}
//         fill="transparent"
//         strokeWidth={stroke}
//         strokeLinecap="round"
//         strokeDasharray={`${circumference} ${circumference}`}
//         style={{ strokeDashoffset }}
//         r={normalizedRadius}
//         cx={radius}
//         cy={radius}
//         className="progress-bar"
//       />
//       <text
//         x="50%"
//         y="50%"
//         dy="0.3em"
//         textAnchor="middle"
//         fontSize="18px"
//         fill={color}
//         fontWeight="bold"
//       >
//         {percentage}%
//       </text>
//     </svg>
//   );
// };

// const Skills = () => {
//   return (
//     <Container className="skills-container py-5">
//       <motion.h2
//         className="text-center mb-5 skills-heading"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         🚀 My Skills & Tools
//       </motion.h2>

//       <Row className="g-4">
//         {skills.map((skill, index) => (
//           <Col key={index} xs={12} md={6} lg={4}>
//             <motion.div
//               className="skill-card h-100"
//               variants={itemVariants}
//               initial="hidden"
//               whileInView="visible"
//               whileHover={{ scale: 1.05 }}
//               viewport={{ once: true }}
//             >
//               <Card className="shadow text-center p-4 skill-box border-0">
//                 <div
//                   className="skill-icon mb-3"
//                   style={{ color: skill.color, fontSize: '3rem' }}
//                 >
//                   {skill.icon}
//                 </div>
//                 <Card.Title className="mb-3">{skill.name}</Card.Title>
//                 <CircularProgress percentage={skill.percent} color={skill.color} />
//               </Card>
//             </motion.div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Skills;



// 


// import React from 'react';
// import './Skills.css';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava, FaGithub } from 'react-icons/fa';
// import { SiRedux, SiSpringboot, SiMysql, SiMongodb, SiExpress, SiPostman } from 'react-icons/si';

// const skills = [
//   { name: 'HTML', icon: <FaHtml5 />, color: '#e34c26', desc: 'Markup for structuring content' },
//   { name: 'CSS', icon: <FaCss3Alt />, color: '#2965f1', desc: 'Styling the web beautifully' },
//   { name: 'JavaScript', icon: <FaJs />, color: '#f0db4f', desc: 'Logic and interaction on web' },
//   { name: 'React.js', icon: <FaReact />, color: '#61DBFB', desc: 'Modern UI with components' },
//   { name: 'Redux', icon: <SiRedux />, color: '#764abc', desc: 'State management for apps' },
//   { name: 'Java', icon: <FaJava />, color: '#f89820', desc: 'Object-oriented backend language' },
//   { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f', desc: 'Framework for Java APIs' },
//   { name: 'Node.js', icon: <FaNodeJs />, color: '#3c873a', desc: 'Backend with JavaScript' },
//   { name: 'Express.js', icon: <SiExpress />, color: '#000000', desc: 'Backend routing and APIs' },
//   { name: 'MySQL', icon: <SiMysql />, color: '#00758f', desc: 'Relational database system' },
//   { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D', desc: 'NoSQL document database' },
//   { name: 'REST APIs', icon: <SiPostman />, color: '#ff6c37', desc: 'APIs for client-server apps' },
//   { name: 'Git', icon: <FaGitAlt />, color: '#f1502f', desc: 'Version control system' },
//   { name: 'GitHub', icon: <FaGithub />, color: '#333', desc: 'Git repo hosting platform' }
// ];

// const Skills = () => {
//   return (
//     <div className="skills-container">
//       <h2 className="skills-heading">🚀 My Skills & Tools</h2>
//       <div className="skills-grid">
//         {skills.map((skill, idx) => (
//           <div key={idx} className="skill-card">
//             <div className="card-front">
//               <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
//               <div className="card-title">{skill.name}</div>
//             </div>
//             <div className="card-back">
//               <p>{skill.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from 'react';
import './Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaJava, FaGithub
} from 'react-icons/fa';
import {
  SiRedux, SiSpringboot, SiMysql, SiMongodb,
  SiExpress, SiPostman
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#e34c26', desc: 'Markup for structuring content', percent: 90 },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#2965f1', desc: 'Styling the web beautifully', percent: 85 },
  { name: 'JavaScript', icon: <FaJs />, color: '#f0db4f', desc: 'Logic and interaction on web', percent: 80 },
  { name: 'React.js', icon: <FaReact />, color: '#61DBFB', desc: 'Modern UI with components', percent: 85 },
  { name: 'Redux', icon: <SiRedux />, color: '#764abc', desc: 'State management for apps', percent: 75 },
  { name: 'Java', icon: <FaJava />, color: '#f89820', desc: 'Object-oriented backend language', percent: 90 },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f', desc: 'Framework for Java APIs', percent: 80 },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#3c873a', desc: 'Backend with JavaScript', percent: 85 },
  { name: 'Express.js', icon: <SiExpress />, color: '#000000', desc: 'Backend routing and APIs', percent: 80 },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758f', desc: 'Relational database system', percent: 85 },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D', desc: 'NoSQL document database', percent: 75 },
  { name: 'REST APIs', icon: <SiPostman />, color: '#ff6c37', desc: 'APIs for client-server apps', percent: 80 },
  { name: 'Git', icon: <FaGitAlt />, color: '#f1502f', desc: 'Version control system', percent: 90 },
  { name: 'GitHub', icon: <FaGithub />, color: '#333', desc: 'Git repo hosting platform', percent: 90 }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">🚀 My Skills & Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div className="card-front">
              <div className="circular-progress">
                <svg className="progress-ring" width="80" height="80">
                  <circle
                    className="progress-ring__background"
                    stroke="#eee"
                    strokeWidth="8"
                    fill="transparent"
                    r="32"
                    cx="40"
                    cy="40"
                  />
                  <circle
                    className="progress-ring__circle"
                    stroke={skill.color}
                    strokeWidth="8"
                    fill="transparent"
                    r="32"
                    cx="40"
                    cy="40"
                    strokeDasharray={2 * Math.PI * 32}
                    strokeDashoffset={2 * Math.PI * 32 * (1 - skill.percent / 100)}
                  />
                </svg>
                <span className="percent-text">{skill.percent}%</span>
                <div className="center-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
              </div>
              <div className="card-title">{skill.name}</div>
            </div>
            <div className="card-back">
              <p>{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

