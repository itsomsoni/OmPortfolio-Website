import React from "react";
import './Skills.css';

// We'll group your skills from your resume into categories
const skillCategories = [
    {
        title: "Back-End Languages & Frameworks",
        skills: ["C#", ".NET Web API", "ASP.NET", ".NET Framework"]
    },
    {
        title: "Front-End Technologies",
        skills: ["React", "JavaScript", "jQuery", "HTML5", "CSS3"]
    },
    {
        title: "Databases & ORMs",
        skills: ["SQL Server", "Entity Framework", "LINQ", "ADO.NET"]
    },
    {
        title: "Integration & Automation",
        skills: ["RESTful API Integration", "RPA", "Hangfire", "TickerQ", "SFTP (Renci.SshNet)"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["Azure App Services", "Git", "Azure DevOps Server (TFS)", "IIS"]
    }
];

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
                {skillCategories.map(category => (
                    <div className="skill-category" key={category.title}>
                        <h3>{category.title}</h3>
                        <div className="skills-list">
                            {category.skills.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;