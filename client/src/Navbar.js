import React from "react";
import "./Navbar.css";

function Navbar() {
  // This function handles the smooth scrolling
  const scrollToSection = (sectionId) => {
    // Find the element on the page with the matching ID
    const section = document.getElementById(sectionId);
    if (section) {
      // Tell the browser to smoothly scroll to that section
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">Om Soni</span>
        <ul className="nav-menu">
          <li className="nav-item">
            <span className="nav-link" onClick={() => scrollToSection("about")}>
              About
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
