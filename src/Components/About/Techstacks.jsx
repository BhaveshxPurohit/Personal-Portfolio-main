import React from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiC, SiDjango, SiFlask,
  SiReact, SiNextdotjs, SiNodedotjs, SiSpringboot, SiExpress, SiAmazonaws,
  SiGooglecloud, SiDocker, SiKubernetes, SiJenkins, SiGit, SiGithub, SiGitlab,
  SiTerraform, SiApachekafka, SiMysql, SiPostgresql, SiMongodb, SiOracle,
  SiGraphql, SiRedux, SiBootstrap, SiHtml5, SiCss3, SiJquery, SiFastapi,
  SiJira, SiPostman, SiPytest,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { PiFileSql, PiFileCode } from "react-icons/pi";
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
      { icon: <PiFileCode />, name: "XML/JSON" },
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
    <div className="section main">
      <h2 className="section__title different">Skills</h2>
      {categories.map((cat, idx) => (
        <div className="category-block" key={idx}>
          <h3>{cat.title}</h3>
          <div className="tech-grid">
            {cat.techs.map((tech, index) => (
              <div className="tech-item" key={index}>
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
