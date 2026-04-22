import React, { useState } from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus,
  SiDjango, SiFlask, SiReact, SiNextdotjs, SiNodedotjs, SiSpringboot,
  SiAmazonaws, SiGooglecloud, SiMicrosoftazure, SiDocker, SiKubernetes,
  SiJenkins, SiGitlab, SiTerraform, SiMysql, SiPostgresql, SiMongodb,
  SiOracle, SiSnowflake, SiApachespark, SiApacheairflow, SiFastapi,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./Techstacks.css";

const allCategories = [
  {
    label: "Languages",
    techs: [
      { icon: <SiPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiMysql />, name: "SQL" },
    ],
  },
  {
    label: "Frameworks",
    techs: [
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
    ],
  },
  {
    label: "Cloud",
    techs: [
      { icon: <SiAmazonaws />, name: "AWS" },
      { icon: <SiGooglecloud />, name: "GCP" },
      { icon: <SiMicrosoftazure />, name: "Azure" },
    ],
  },
  {
    label: "DevOps",
    techs: [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiJenkins />, name: "Jenkins" },
      { icon: <SiGitlab />, name: "GitLab CI" },
      { icon: <SiTerraform />, name: "Terraform" },
      { icon: <SiApacheairflow />, name: "Airflow" },
    ],
  },
  {
    label: "Databases",
    techs: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiOracle />, name: "Oracle" },
      { icon: <SiSnowflake />, name: "Snowflake" },
      { icon: <SiApachespark />, name: "Spark" },
    ],
  },
];

export const Techstacks = () => {
  const [active, setActive] = useState("Languages");
  const current = allCategories.find((c) => c.label === active);

  return (
    <div className="section skills-wrap" data-aos="fade-up">
      <h2 className="section__title">
        <span className="different">Skills</span> &amp; Tech Stack
      </h2>
      <div className="skills-categories">
        {allCategories.map((cat) => (
          <button
            key={cat.label}
            className={`skills-cat-btn ${active === cat.label ? "active" : ""}`}
            onClick={() => setActive(cat.label)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="tech-grid">
        {current.techs.map((tech, i) => (
          <div className="tech-item" key={i}>
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
