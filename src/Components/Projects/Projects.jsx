import React from "react";
import "./Projects.css";
import { FaPython, FaJava, FaHtml5 } from "react-icons/fa";
import { SiRstudio, SiJupyter, SiHtml5, SiTwitter, SiAlteryx, SiAzurefunctions, SiMicrosoftazure, SiTableau, SiPowerbi } from "react-icons/si";
import { DiDatabase } from "react-icons/di"; 
import { AiOutlineRobot } from "react-icons/ai"; 
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src="https://raw.githubusercontent.com/BhaveshxPurohit/Cloud-Based-ELT-for-Stock-Data-Management-using-Python/main/Stock%20(1).jpg" 
                  alt="Project Visualization" />

                </div>
              </div>
              <div className="project_information">
                <h2>Cloud-Based ELT for Stock Data Management using Python</h2>
                <p>
                This project harnesses Python and Alteryx for efficient data wrangling, coupled with a cloud-based ELT pipeline via Azure Functions, Logic Apps, and Azure Synapse Analytics for streamlined stock data handling. This setup automates data extraction, and transformation, and updates notifications, while Synapse Pipelines facilitate data refreshes and resource optimization. 
                </p>
                <div>
                  <FaPython />
                  <SiAlteryx />
                  <SiAzurefunctions />
                  <SiMicrosoftazure />
                  <SiPowerbi/>
                  
                
                  
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Cloud-Based-ELT-for-Stock-Data-Management-using-Python.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src="https://raw.githubusercontent.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage/main/spotify%20(1).jpg" 
                  alt="Project Visualization" />

                </div>
              </div>
              <div className="project_information">
                <h2>NLP Driven Insight into Spotify Usage</h2>
                <p>
                This project delves into user preferences, playlist creation, and track patterns to enrich music enjoyment. By uncovering insights, we aim to enhance the user experience and offer tailored recommendations, ultimately contributing to the dynamic landscape of digital music consumption.
                </p>
                <div>
                  <FaPython />
                  <SiJupyter />
                  <SiTableau />
                
                  
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/BhaveshxPurohit/Energy-Optimization-for-Peak-Demand-in-South-Carolina/main/energy.png"
                    alt="PowerSC Forecasting Residential Energy Usage Across South Carolina"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Energy Optimization for Peak Demand in South Carolina</h2>
                <p>
                PowerSC aims to tackle the challenge of managing electricity demand in South Carolina and nearby areas during peak summer months, focusing on preventing blackouts without building new infrastructure. By analyzing detailed house data, hourly energy usage, and weather patterns, the project seeks to understand consumption drivers and promote energy conservation among customers, aligning operational efficiency with environmental sustainability.
                </p>
                <div>
                  <SiRstudio />
             
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Energy-Optimization-for-Peak-Demand-in-South-Carolina.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
