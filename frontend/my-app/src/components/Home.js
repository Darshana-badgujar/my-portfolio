
  import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <img src="/assets/darshanap.png" alt="Profile" className="profile-img" />

      <h1 className="home-heading">
        <Typewriter
          options={{
            strings: ["Hi, I'm a Full Stack Developer", "Darshana Badgujar"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <p className="home-subheading">
        I love building responsive and scalable web apps.
      </p>

      <div className="social-icons">
        <a
          href="https://github.com/Darshana-badgujar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https:/www.linkedin.com/in/darshana-badgujar-1302631a7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <Link to="/projects" className="home-button">
        View Projects
      </Link>
    </div>
  );
};

export default Home;
