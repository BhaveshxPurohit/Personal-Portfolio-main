import React, { useState } from "react";
import "./Projects.css";
import { FaPython } from "react-icons/fa";
import {
  SiRstudio,
  SiJupyter,
  SiAlteryx,
  SiAzurefunctions,
  SiMicrosoftazure,
  SiTableau,
  SiPowerbi,
} from "react-icons/si";

// Project Data
const projectData = [
  {
    title: "Cloud-Based ELT for Stock Data Management using Python",
    description:
      "This project harnesses Python and Alteryx for efficient data wrangling, coupled with a cloud-based ELT pipeline via Azure Functions, Logic Apps, and Azure Synapse Analytics for streamlined stock data handling. This setup automates data extraction, and transformation, and updates notifications, while Synapse Pipelines facilitate data refreshes and resource optimization.",
    imgSrc:
      "https://raw.githubusercontent.com/BhaveshxPurohit/Cloud-Based-ELT-for-Stock-Data-Management-using-Python/main/Stock%20(1).jpg",
    icons: [
      <FaPython key="python" />,
      <SiAlteryx key="alteryx" />,
      <SiAzurefunctions key="azurefunc" />,
      <SiMicrosoftazure key="azure" />,
      <SiPowerbi key="powerbi" />,
    ],
    link: "https://github.com/BhaveshxPurohit/Cloud-Based-ELT-for-Stock-Data-Management-using-Python.git",
    category: "Cloud",
  },
  {
    title: "NLP Driven Insight into Spotify Usage",
    description:
      "This project delves into user preferences, playlist creation, and track patterns to enrich music enjoyment. By uncovering insights, we aim to enhance the user experience and offer tailored recommendations, ultimately contributing to the dynamic landscape of digital music consumption.",
    imgSrc:
      "https://raw.githubusercontent.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage/main/spotify%20(1).jpg",
    icons: [
      <FaPython key="python" />,
      <SiJupyter key="jupyter" />,
      <SiTableau key="tableau" />,
    ],
    link: "https://github.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage.git",
    category: "Data Science",
  },
  {
    title: "Energy Optimization for Peak Demand in South Carolina",
    description:
      "PowerSC aims to tackle the challenge of managing electricity demand in South Carolina and nearby areas during peak summer months, focusing on preventing blackouts without building new infrastructure. By analyzing detailed house data, hourly energy usage, and weather patterns, the project seeks to understand consumption drivers and promote energy conservation among customers, aligning operational efficiency with environmental sustainability.",
    imgSrc:
      "https://raw.githubusercontent.com/BhaveshxPurohit/Energy-Optimization-for-Peak-Demand-in-South-Carolina/main/energy.png",
    icons: [<SiRstudio key="rstudio" />],
    link: "https://github.com/BhaveshxPurohit/Energy-Optimization-for-Peak-Demand-in-South-Carolina.git",
    category: "Dashboards",
  },
];

// Categories
const categories = ["All", "Cloud", "Data Science", "Dashboards"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <div className="section">
      <h2 className="section__title different">Projects</h2>

      <div className="project-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="allProjects">
        {filteredProjects.map((proj, index) => (
          <div className="projects_container" key={index}>
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={proj.imgSrc} alt={proj.title} />
                </div>
              </div>
              <div className="project_information">
                <h2>{proj.title}</h2>
                <p>{proj.description}</p>
                <div>{proj.icons.map((icon, i) => <span key={i}>{icon}</span>)}</div>
                <div>
                  <a href={proj.link} target="_blank" rel="noreferrer">
                    <span className="btns onbt">View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
