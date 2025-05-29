
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/education">Education</Link>

    <Link to="/contactform">Contact</Link>
  </nav>
);

export default Navbar;
