import React, { useState } from "react";
import "./Projects.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Image Carousel Component
const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="carousel-container">
      <img src={images[current]} alt={`slide-${current}`} className="carousel-img" />
      {images.length > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}><FaArrowLeft /></button>
          <button className="arrow right" onClick={nextSlide}><FaArrowRight /></button>
        </>
      )}
    </div>
  );
};

// Project Data
const projectData = [
  {
    title: "StockStream",
    description:
      "The project implements a cloud-native ELT pipeline that integrates Python and Alteryx with Azure Functions, Logic Apps, and Synapse Analytics to automate stock data processing, transformation, and storage for scalable financial analytics.",
    images: [
      "https://github.com/user-attachments/assets/90814de4-4e42-4201-afe3-d190d2ff3bc8",
      "https://github.com/user-attachments/assets/d0f9b085-7ea9-4c5b-b777-425d9a9e8c04",
      "https://github.com/user-attachments/assets/1aec262e-8a7c-4599-acc2-7e90772dcbc1",
    ],
    link: "https://github.com/BhaveshxPurohit/Cloud-Based-ELT-for-Stock-Data-Management-using-Python.git",
    category: "Data Analytics",
  },
  {
    title: "TuneSense",
    description:
      "This project explores Spotify user preferences, playlist behavior, and track patterns using NLP and machine learning in Python. Leveraging REST APIs, pandas, NumPy, and visualization tools, it uncovers musical trends and enriches listener experience.",
    images: [
      "https://raw.githubusercontent.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage/main/spotify%20(1).jpg",
    ],
    link: "https://github.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage.git",
    category: "Data Analytics",
  },
  {
    title: "Electrifying New York",
    description:
      "This project analyzes EV adoption, rebate distribution, and charging infrastructure across New York State using Python, SQL, and Tableau. It delivers interactive dashboards supporting data-driven policy decisions and sustainable mobility planning.",
    images: [
      "https://github.com/user-attachments/assets/76d3c845-e33f-4284-aa20-3264b6938e33",
      "https://github.com/user-attachments/assets/1f446df0-ce8a-4214-97d9-d936c26faf8f",
      "https://github.com/user-attachments/assets/805ab712-71a4-499e-9bab-944d639dec6c",
    ],
    link: "https://github.com/BhaveshxPurohit/EV-Adoption-and-Incentives-in-New-York-State",
    category: "Data Analytics",
  },
  {
    title: "Cooling Urban Heat Islands",
    description:
      "This project leverages AI and satellite imagery to predict Urban Heat Islands, using Python, TensorFlow, and Snowflake for data processing and Google Earth Engine for spatial insights, supporting EY’s sustainable urban cooling initiatives.",
    images: [
    "https://github.com/user-attachments/assets/16a49e6d-ce08-4071-85d3-06985999618e",
  ],
    link: "https://github.com/BhaveshxPurohit/Cooling-Urban-Heat-Islands",
    category: "Data Science",
  },
  {
    title: "PowerSmart SC",
    description:
      "PowerSmartSC is an interactive Shiny application that analyzes household data, hourly energy consumption, and weather patterns using R (tidyverse, xgboost) to predict peak demand and support blackout prevention through data-driven insights.",
    images: [
      "https://raw.githubusercontent.com/BhaveshxPurohit/Energy-Optimization-for-Peak-Demand-in-South-Carolina/main/energy.png",
    ],
    link: "https://github.com/BhaveshxPurohit/Energy-Optimization-for-Peak-Demand-in-South-Carolina.git",
    category: "Data Science",
  },
  {
    title: "CarePulse",
    description:
      "This project develops a healthcare data warehouse using Snowflake, dbt, and SQL to centralize and streamline ICU patient information, enabling hospital management to monitor performance, optimize resources, and generate actionable insights through Power BI.",
    images: [
      "https://github.com/user-attachments/assets/7b33dd29-14fb-4187-87a2-011fead05ad6",
      "https://github.com/user-attachments/assets/ea96f5f3-9518-4be7-a9b0-f814ed6d06b0",
      "https://github.com/user-attachments/assets/318143b3-2306-4797-806a-ba111f34f688",
    ],
    link: "https://github.com/BhaveshxPurohit/Optimizing-ICU-Management-with-Data-Warehousing",
    category: "Data Warehousing",
  },
];

// Category Filters
const categories = ["All", "Data Analytics", "Data Science", "Data Warehousing"];

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
                <ImageCarousel images={proj.images} />
              </div>
              <div className="project_information">
                <h2>{proj.title}</h2>
                <p>{proj.description}</p>
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
