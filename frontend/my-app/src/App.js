// import './App.css';
// import ContactForm from './ContactForm';

// function App() {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <ContactForm />
//     </div>
    
//   );
// }
// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
 import ContactForm from "./components/ContactForm";
 import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contactform" element={<ContactForm />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


