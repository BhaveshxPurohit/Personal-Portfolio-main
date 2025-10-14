import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Bhavesh.jpg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <section id="about">
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          About <span className="different">Me</span>
        </h2>
        <div className={`introduction ${themename}`}>
          <div className="introduction_logocontainer">
            <img src={profilePic} alt="Bhavesh Purohit" />
          </div>
          <div className="introduction_datacontainer">
            <p> Full-Stack & Data Engineer with 3 Years of expertise in Python, SQL, Spark, and Cloud-Native Architecture for High-Performance ETL, API, and Analytics Systems. </p>
            <p> My journey began with curiosity for how data moves, scales, and powers decisions, and evolved into a passion for building cloud-native architectures, ETL pipelines, and API-driven ecosystems that make technology faster, smarter, and more reliable. I’ve engineered solutions across the stack using Python, SQL, Spark, Django, React.js, Next.js, and Kubernetes, deploying resilient applications on AWS and GCP.</p>
            <p>I thrive at the intersection of software engineering and data analytics, where I can design microservices that process millions of records, optimize API throughput, and enable real-time insights for business and financial systems. Whether refining performance bottlenecks or automating workflows, my focus remains the same, building solutions that scale with impact and precision.</p>
            <p>Beyond code, I’m deeply motivated by continuous learning and the pursuit of technical excellence, exploring modern frameworks, experimenting with distributed systems, and collaborating with teams who value innovation and measurable outcomes. I’m always open to connecting with professionals who share a vision for using data and software to solve real-world challenges and drive meaningful change.</p>
            <p>Welcome to my portfolio, here, you’ll find some of the work I’m most proud of and a glimpse into how I approach building software that matters.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
