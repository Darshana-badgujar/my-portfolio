// import React from "react";
// import './About.css';

// const About = () => (
//   <div style={{ padding: "20px" }}>
//     <h1>About Me</h1>
//     <p>
//       I'm a passionate web developer with experience in building full-stack
//       applications using React.js, Node.js, and MySQL. I love creating
//       responsive and user-friendly websites.
//     </p>
//   </div>
// );

// export default About;


// 

// import React from 'react';
// import { Container, Row, Col, Image, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import { Typewriter } from 'react-simple-typewriter';
// import './About.css';

// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.3,
//       duration: 0.8,
//       ease: 'easeOut',
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.6, ease: 'easeOut' },
//   },
// };

// const imageVariants = {
//   hidden: { opacity: 0, scale: 0.8, rotate: -5 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     rotate: 0,
//     transition: { duration: 0.8, ease: 'easeOut' },
//   },
// };

// const About = () => {
//   return (
//     <Container className="about-container">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <Row className="align-items-center mb-5">
//           <Col md={6}>
//             <motion.div
//               variants={imageVariants}
//               whileHover={{ scale: 1.05, rotate: 2 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <Image
//                 src="/assets/darshana2.png"
//                 alt="About"
//                 fluid
//                 rounded
//                 className="about-image"
//               />
//             </motion.div>
//           </Col>
//           <Col md={6}>
//             <motion.h2 className="about-heading" variants={itemVariants}>
//               <Typewriter
//                 words={[
//                   'Hi, I’m Darshana 👋',
//                   'A Full-Stack Developer 💻',
//                   'Welcome to My Portfolio! 🚀',
//                 ]}
//                 loop={true}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={60}
//                 deleteSpeed={40}
//                 delaySpeed={1500}
//               />
//             </motion.h2>
//             <motion.p className="about-text" variants={itemVariants}>
//             I am a passionate and dedicated software developer who recently completed the
// Post Graduate Diploma in Advanced Computing (PG-DAC). With a strong foundation in programming, software development, and problem-solving. I am aspired to pursue career opportunities with a prominent organization, which recognizes my potential and effectively utilizes and nurtures my analytical and technical skills. 
//  Throughout my PG-DAC course, I gained hands-on experience in various technologies
// and tools, including Java, .NET, Web development, MySQL database, and software
// engineering principles. I am interested in full-stack projects, and working on innovative solutions that address real-world challenges. My goal is to continuously learn and grow in the tech industry, contributing effectively to the teams and projects I participate in.
//             </motion.p>

//             <motion.div variants={itemVariants}>
//               <a
//                 href="/assets/DarshanaBadgujarResume0.pdf"
//                 download="DarshanaBadgujarResume0.pdf"
//                 className="resume-button"
//               >
//                 <Button variant="primary" size="lg">
//                   📄 Download Resume
//                 </Button>
//               </a>
//             </motion.div>
//           </Col>
//         </Row>
//       </motion.div>
//     </Container>
//   );
// };

// export default About;




import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './About.css';

const About = () => {
  return (
    <Container className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="about-inner"
      >
        {/* Left: Image Section */}
        <motion.div
          className="about-image-section"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src="/assets/darshana2.png"
            alt="Darshana"
            className="about-image"
          />
        </motion.div>

        {/* Right: Text + Resume */}
        <motion.div
          className="about-text-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="about-heading">
            <Typewriter
              words={[
                'Hi, I’m Darshana 👋',
                'A Full-Stack Developer 💻',
                'Welcome to My Portfolio! 🚀',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="about-text">
            I am a passionate and dedicated software developer who recently completed the Post Graduate Diploma in Advanced Computing (PG-DAC). With a strong foundation in programming, software development, and problem-solving, I aspire to join a company that recognizes my potential and nurtures my analytical and technical skills.
            <br /><br />
            I’ve worked with Java, .NET, Web development, MySQL, and software engineering principles. I'm particularly interested in full-stack projects and building innovative, real-world solutions. My goal is to continuously learn and contribute effectively to every team I join.
          </p>

          <a
            href="/assets/DarshanaBadgujarResume0.pdf"
            download="DarshanaBadgujarResume0.pdf"
            className="resume-button"
          >
            <button>📄 Download Resume</button>
          </a>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;

