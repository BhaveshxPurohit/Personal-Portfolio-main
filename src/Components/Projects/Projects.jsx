import React from "react";
import "./Projects.css";
import { FaPython, FaJava, FaHtml5 } from "react-icons/fa";
import { SiRstudio, SiJupyter, SiHtml5, SiTwitter, SiAlteryx, SiAzurefunctions, SiMicrosoftazure } from "react-icons/si";
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
                <img src="https://raw.githubusercontent.com/BhaveshxPurohit/Automated-Stock-Data-Management/784b6e43001a6cfe4689b01b2877ef068d248c80/Asset.png" 
                  alt="Project Visualization" />

                </div>
              </div>
              <div className="project_information">
                <h2>Automated Stock Data Management</h2>
                <p>
                This project harnesses Python and Alteryx for efficient data wrangling, coupled with a cloud-based ELT pipeline via Azure Functions, Logic Apps, and Azure Synapse Analytics for streamlined stock data handling. This setup automates data extraction, and transformation, and updates notifications, while Synapse Pipelines facilitate data refreshes and resource optimization. 
                </p>
                <div>
                  <FaPython />
                  <SiAlteryx />
                  <SiAzurefunctions />
                  <SiMicrosoftazure />
                  <DiDatabase />
                  
                
                  
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Automated-Stock-Data-Management.git"
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
                    src="https://raw.githubusercontent.com/BhaveshxPurohit/Analyzing-NYC-Green-Taxi-Trips/43b2b5cea9ef37fb15c2018492bb4bb76bdfb3b1/Asset.png"
                    alt="Analyzing-NYC-Green-Taxi-Trips"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Analyzing NYC Green Taxi Trips</h2>
                <p>
                A study on NYC Green Taxi Trip Data (Jan 2022 - Jan 2023) uses machine learning to predict fares and find profitable pickup spots, extending service beyond Manhattan and airports. This aims to optimize earnings for drivers and improve service quality for passengers, enhancing efficiency in the taxi industry.
                </p>
                <div>
                  <SiRstudio />
                  <SiJupyter />
                  
                  
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Analyzing-NYC-Green-Taxi-Trips.git "
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
                    src="https://raw.githubusercontent.com/BhaveshxPurohit/Analyzing-Social-Media-Sentiment/c9b5eed9b6780bbf32b2febbc70112e9f9e7d571/Asset.png"
                    alt="Analyzing-Social-Media-Sentiment"
                   />
                </div>
              </div>
              <div className="project_information">
                <h2>Analyzing Social Media Sentiment</h2>
                <p>
                This study analyzes 1.6 million tweets, employing advanced techniques like text mining, sentiment analysis, and hierarchical clustering. It aims to uncover patterns in user behavior and sentiment, offering insights applicable to various domains such as marketing and societal sentiment analysis.
                </p>
                <div>
                  <SiRstudio />
                  <SiTwitter />
                  <SiJupyter />
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Analyzing-Social-Media-Sentiment.git"
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
                <img src="https://raw.githubusercontent.com/BhaveshxPurohit/Exploring-Spotify-with-Natural-Language-Processing/f0bebf3cb54c409c9d4aca81b73c3b52ce4df191/Asset.png" alt="Project Visualization" />

                </div>
              </div>
              <div className="project_information">
                <h2>Exploring Spotify with Natural Language Processing</h2>
                <p>
                This project delves into user preferences, playlist creation, and track patterns to enrich music enjoyment. By uncovering insights, we aim to enhance the user experience and offer tailored recommendations, ultimately contributing to the dynamic landscape of digital music consumption.
                </p>
                <div>
                  <FaPython />
                  <SiJupyter />
                
                  
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Exploring-Spotify-with-Natural-Language-Processing.git"
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

          <div className="projects_container world_bank" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/BhaveshxPurohit/Triumph-of-Trinity-A-Three-Card-Game-Project/0d8a8511df6093ec5b21a8ddc438297d8b4425d7/Asset.png"
                    alt="Triumph of Trinity A Three Card Game Project"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Triumph of Trinity A Three Card Game Project</h2>
                <p>
                A card game that blends strategy, skill, and a bit of luck. Players enter lobbies to challenge others, aiming to outsmart their opponents with tactical card play. The game tracks detailed player stats, including wins, losses, and financial performance, offering a rich and competitive experience for card game lovers.
                </p>
                <div>
                  
                  <FaPython />
                  <FaJava />
                  <DiDatabase />
                  <FaHtml5 />
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/Triumph-of-Trinity-A-Three-Card-Game-Project.git"
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
                    src="https://raw.githubusercontent.com/BhaveshxPurohit/PowerSC-Forecasting-Residential-Energy-Usage-Across-South-Carolina/ba43e3caebafebc4d748cb48bb39a79556b29e82/Asset.png"
                    alt="PowerSC Forecasting Residential Energy Usage Across South Carolina"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PowerSC</h2>
                <p>
                PowerSC aims to tackle the challenge of managing electricity demand in South Carolina and nearby areas during peak summer months, focusing on preventing blackouts without building new infrastructure. By analyzing detailed house data, hourly energy usage, and weather patterns, the project seeks to understand consumption drivers and promote energy conservation among customers, aligning operational efficiency with environmental sustainability.
                </p>
                <div>
                  <SiRstudio />
             
                </div>
                <div>
                  <a
                    href="https://github.com/BhaveshxPurohit/PowerSC.git"
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
