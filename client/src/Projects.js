import React, { useState } from "react";
import "./Projects.css";

// This is an array of your project objects
const myProjects = [
    {
        title: "Secure Data Transfer Automation",
        description: "Designed and built a secure automation workflow to replace a manual data transfer process. This involved integrating external partner APIs and using secure SFTP (C# Renci.SshNet) to create a new workflow.",
        outcome: "The new system removed 100% of all manual processing from the data-entry lifecycle.",
        technologies: ["C#", ".NET", "RESTful API", "SFTP"]
    },
    {
        title: "RPA Compliance Bot",
        description: "Led the development and deployment of an RPA bot to handle a core, time-sensitive compliance task that was previously handled manually and was prone to human error.",
        outcome: "Reduced the average processing time by 73% (from 15 to 4 minutes) and eliminated all manual data entry errors.",
        technologies: ["RPA", "C#"]
    },
    {
        title: "Recruitment & Compliance Module",
        description: "Given full ownership to build and deploy a new recruitment module. The system automated all back-end compliance checks by integrating external data verification APIs.",
        outcome: "The new module successfully cut the time-to-hire by 20%.",
        technologies: ["ASP.NET", "C#", "SQL Server", "External APIs"]
    }
];

function Projects() {
    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {/* This .map() loops over your array and creates a card for each project */}
                {myProjects.map(project => (
                    <div className="project-card" key={project.title}>
                        <h3>{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <p className="project-outcome"><strong>Outcome:</strong> {project.outcome}</p>
                        <div className="project-tech">
                            {project.technologies.map(tech => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;