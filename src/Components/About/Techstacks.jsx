import React from "react";
import "./Techstacks.css";

// Icons for each technology
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSpringboot,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiTerraform,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiOracle
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">

          {/* Languages */}
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>JavaScript</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>TypeScript</h5>
          </div>
          <div>
            <SiCplusplus />
            <h5>C++</h5>
          </div>
          <div>
            <PiFileSql />
            <h5>SQL</h5>
          </div>

          {/* Frameworks & Libraries */}
          <div>
            <SiDjango />
            <h5>Django</h5>
          </div>
          <div>
            <SiFlask />
            <h5>Flask</h5>
          </div>
          <div>
            <SiReact />
            <h5>React.js</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Next.js</h5>
          </div>
          <div>
            <SiNodedotjs />
            <h5>Node.js</h5>
          </div>
          <div>
            <SiSpringboot />
            <h5>Spring Boot</h5>
          </div>

          {/* Cloud & Infrastructure */}
          <div>
            <SiAmazonaws />
            <h5>AWS</h5>
          </div>
          <div>
            <SiGooglecloud />
            <h5>GCP</h5>
          </div>
          <div>
            <SiMicrosoftazure />
            <h5>Azure</h5>
          </div>

          {/* DevOps & Tools */}
          <div>
            <SiDocker />
            <h5>Docker</h5>
          </div>
          <div>
            <SiKubernetes />
            <h5>Kubernetes</h5>
          </div>
          <div>
            <SiJenkins />
            <h5>Jenkins</h5>
          </div>
          <div>
            <SiGitlab />
            <h5>GitLab CI</h5>
          </div>
          <div>
            <SiTerraform />
            <h5>Terraform</h5>
          </div>

          {/* Databases */}
          <div>
            <SiMysql />
            <h5>MySQL</h5>
          </div>
          <div>
            <SiPostgresql />
            <h5>PostgreSQL</h5>
          </div>
          <div>
            <SiMongodb />
            <h5>MongoDB</h5>
          </div>
          <div>
            <SiOracle />
            <h5>Oracle</h5>
          </div>
        </div>
      </div>
    </>
  );
};
