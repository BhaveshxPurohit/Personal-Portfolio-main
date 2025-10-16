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
            <p> I am a Full Stack Engineer specializing in designing and implementing scalable backend systems, RESTful APIs, and distributed architectures using Python, Java, and modern JavaScript frameworks. My expertise spans cloud deployment, automation, and system optimization, with a strong command of AWS, Azure, and GCP services for building resilient, high-performance applications. </p>
            <p> I have extensive experience working with microservices, containerization (Docker, Kubernetes), and CI/CD pipelines to ensure seamless integration, deployment, and continuous delivery. My background also includes designing data-driven systems leveraging PostgreSQL, MongoDB, Redis, and Snowflake, as well as implementing real-time event processing using Kafka and Celery.</p>
            <p>Beyond backend engineering, I develop interactive frontends using React, Next.js, and TypeScript — blending design precision with functional excellence. I am deeply passionate about AI-driven development, integrating tools such as LangChain, OpenAI APIs, and RAG pipelines to automate workflows, accelerate coding efficiency, and enhance decision-making.</p>
            <p>Driven by a problem-solving mindset, I aim to build systems that are secure, efficient, and maintainable, combining robust architecture with clean, testable code. I value collaborative development, enjoy mentoring peers, and continuously seek opportunities to innovate through technology and intelligent automation.</p>
            <p>Welcome to my portfolio, here, you’ll find some of the work I’m most proud of and a glimpse into how I approach building software that matters.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
