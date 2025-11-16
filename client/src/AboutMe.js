import React from "react";
import './AboutMe.css'

function AboutMe(){
    return(
        <section className="about-me-section">
            <div className="about-me-content">
                <h1>Om Soni</h1>
                <h2>.NET Developer</h2>
                <p className="professional-summary">
                    As a .NET Developer with over 4 years of experience, my focus is on building and automating high-impact enterprise applications. 
                    I'm passionate about improving back-end systems and have a proven track record of using C#, .NET Web API, and API Integration 
                    to deliver measurable results. My work has led to 100% automation of a critical data-transfer process and significant 
                    efficiency gains in task scheduling and compliance.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;