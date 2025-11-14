import React from 'react';
import './Projects.css'; // We'll re-use the same CSS file

// This is an updated array based on your detailed resume
const myProjects = [
    {
        title: "Secure Data Transfer Automation",
        description: "Designed a secure automation solution for high-volume data transfers. This involved integrating external partner APIs and using secure SFTP (C# Renci.SshNet) to create a new workflow.",
        outcome: "Removed 100% of all manual processing from the data-entry lifecycle.",
        technologies: ["C#", ".NET", "RESTful API", "SFTP (Renci.SshNet)"]
    },
    {
        title: "Compliance Task Automation (RPA)",
        description: "Led the development and deployment of an RPA bot to handle a core, time-sensitive compliance task. This bot got rid of manual data entry errors.",
        outcome: "Reduced the average processing time from 15 minutes to under 4 minutes (a 73% gain).",
        technologies: ["RPA", "C#"]
    },
    {
        title: "Recruitment Module Automation",
        description: "Built and deployed a new recruitment module from start to finish. The system automated all the back-end compliance checks by integrating external data verification APIs.",
        outcome: "Cut the time-to-hire by 20%.",
        technologies: ["ASP.NET", "C#", "SQL Server", "External APIs"]
    },
    {
        title: "Core System Development & Optimization",
        description: "Was a core developer for new modules in the company's main data processing system, integrating new features and optimizing back-end processes.",
        outcome: "Reduced processing time by 25% and cut manual work for the operations team by 30%.",
        technologies: ["C#", "ASP.NET", "SQL Server", "LINQ"]
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