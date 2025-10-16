import React from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiC, SiDjango, SiFlask,
  SiReact, SiNextdotjs, SiNodedotjs, SiSpringboot,
  SiAmazonaws, SiGooglecloud, SiMicrosoftazure, SiDocker, SiKubernetes,
  SiJenkins, SiGitlab, SiTerraform, SiMysql, SiPostgresql, SiMongodb,
  SiOracle, SiSnowflake, SiApachespark, SiApacheairflow,
  SiGraphql, SiRedux, SiBootstrap, SiHtml5, SiCss3, SiJquery, SiFastapi,
  SiPostman, SiPytest, SiJira,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./Techstacks.css";

const categories = [
  {
    title: "💻 Languages",
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
    title: "🧰 Frameworks & Libraries",
    techs: [
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
    ],
  },
  {
    title: "☁️ Cloud & Infrastructure",
    techs: [
      { icon: <SiAmazonaws />, name: "AWS" },
      { icon: <SiGooglecloud />, name: "GCP" },
      { icon: <SiMicrosoftazure />, name: "Azure" },
    ],
  },
  {
    title: "🐳 DevOps & Tools",
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
    title: "🗄️ Databases & Analytics",
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
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
