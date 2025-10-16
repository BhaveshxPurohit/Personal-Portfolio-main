import React, { useEffect, useRef, useState } from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiC, SiDjango, SiFlask,
  SiReact, SiNextdotjs, SiNodedotjs, SiSpringboot, SiExpress, SiAmazonaws,
  SiGooglecloud, SiDocker, SiKubernetes, SiJenkins, SiGit, SiGithub, SiGitlab,
  SiTerraform, SiApachekafka, SiMysql, SiPostgresql, SiMongodb, SiOracle,
  SiGraphql, SiRedux, SiBootstrap, SiHtml5, SiCss3, SiJquery, SiFastapi,
  SiJira, SiPostman, SiVercel, SiJson, SiXml, SiTestinglibrary, SiPytest,
  SiMockito
} from "react-icons/si";
import { FaArrowLeft, FaArrowRight, FaJava } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import "./Techstacks.css";

const categories = [
  {
    title: "Programming Languages",
    techs: [
      { icon: <SiC />, name: "C" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <PiFileSql />, name: "SQL" },
      { icon: <SiMongodb />, name: "NoSQL" },
    ],
  },
  {
    title: "Frontend",
    techs: [
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
      { icon: <SiJquery />, name: "jQuery" },
      { icon: <SiJson />, name: "JSON" },
      { icon: <SiXml />, name: "XML" },
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <SiRedux />, name: "Redux" },
      { icon: <SiFastapi />, name: "FastAPI" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
    ],
  },
  {
    title: "Cloud",
    techs: [
      { icon: <SiAmazonaws />, name: "AWS" },
      { icon: <SiGooglecloud />, name: "GCP" },
    ],
  },
  {
    title: "Tools & Technologies",
    techs: [
      { icon: <SiPytest />, name: "PyTest" },
      { icon: <SiMockito />, name: "Mockito" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiJira />, name: "Jira" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <SiGitlab />, name: "GitLab" },
      { icon: <SiTerraform />, name: "Terraform" },
      { icon: <SiApachekafka />, name: "Kafka" },
      { icon: <SiGraphql />, name: "GraphQL" },
    ],
  },
  {
    title: "Database",
    techs: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiOracle />, name: "Oracle" },
    ],
  },
];

export const Techstacks = () => {
  return (
    <div className="section main" data-aos="fade-right">
      <h2 className="section__title different">Skills</h2>
      {categories.map((cat, idx) => (
        <CarouselRow key={idx} title={cat.title} techs={cat.techs} />
      ))}
    </div>
  );
};

const CarouselRow = ({ title, techs }) => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const scroll = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 30);
    return () => clearInterval(scroll);
  }, [paused]);

  const handlePause = (direction) => {
    if (!scrollRef.current) return;
    const distance = 200; // how far to move per click
    scrollRef.current.scrollLeft += direction === "left" ? -distance : distance;
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  return (
    <div className="category-block">
      <h3>{title}</h3>
      <div className="carousel-container">
        <button className="arrow-btn" onClick={() => handlePause("left")}>
          <FaArrowLeft />
        </button>
        <div className="carousel" ref={scrollRef}>
          {techs.map((tech, index) => (
            <div className="tech-item" key={index}>
              {tech.icon}
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
        <button className="arrow-btn" onClick={() => handlePause("right")}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};
