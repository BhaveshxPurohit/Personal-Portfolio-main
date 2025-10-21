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
      "A cloud-native ELT pipeline that integrates Python and Alteryx with Azure Functions, Logic Apps, and Synapse Analytics to automate stock data processing, transformation, and storage for scalable financial analytics.",
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
      "Explores Spotify user preferences, playlist behavior, and track patterns using NLP and machine learning in Python. Leveraging REST APIs, pandas, NumPy, and visualization tools, it uncovers musical trends and enriches listener experience.",
    images: [
      "https://raw.githubusercontent.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage/main/spotify%20(1).jpg",
    ],
    link: "https://github.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage.git",
    category: "Data Analytics",
  },
  {
    title: "EV-lytics for NY",
    description:
      "Analyzes EV adoption, rebate distribution, and charging infrastructure across New York State using Python, SQL, and Tableau. It delivers interactive dashboards supporting data-driven policy decisions and sustainable mobility planning.",
    images: [
      "https://github.com/user-attachments/assets/76d3c845-e33f-4284-aa20-3264b6938e33",
      "https://github.com/user-attachments/assets/1f446df0-ce8a-4214-97d9-d936c26faf8f",
      "https://github.com/user-attachments/assets/805ab712-71a4-499e-9bab-944d639dec6c",
    ],
    link: "https://github.com/BhaveshxPurohit/EV-Adoption-and-Incentives-in-New-York-State",
    category: "Data Analytics",
  },
    {
    title: "CarePulse",
    description:
      "A healthcare data warehouse using Snowflake, dbt, and SQL to centralize and streamline ICU patient information, enabling hospital management to monitor performance, optimize resources, and generate actionable insights through Power BI.",
    images: [
      "https://github.com/user-attachments/assets/7b33dd29-14fb-4187-87a2-011fead05ad6",
      "https://github.com/user-attachments/assets/ea96f5f3-9518-4be7-a9b0-f814ed6d06b0",
      "https://github.com/user-attachments/assets/318143b3-2306-4797-806a-ba111f34f688",
    ],
    link: "https://github.com/BhaveshxPurohit/Optimizing-ICU-Management-with-Data-Warehousing",
    category: "Data Analytics",
  },
 {
  title: "AI Dashboard",
  description:
    "A full-stack AI dashboard using Next.js, TypeScript, and Vercel AI SDK for CRUD operations, image uploads, and real-time chatbot interactions powered by OpenAI structured outputs.",
  images: [
    "https://github.com/user-attachments/assets/abb24f0a-4e41-45b8-a240-fc21bd822895",
    "https://github.com/user-attachments/assets/b13d957c-9d37-4f6c-b967-f72ccd9b10f9",
  ],
  link: "https://github.com/BhaveshxPurohit/Clab-AI-Introductory-Assignment",
  category: "AI",
},
{
  title: "MindSage",
  description:
    "An AI-powered mental health platform using Next.js, MongoDB, and Google Generative AI to deliver real-time wellness insights, personalized recommendations, and interactive chat support through a modern, responsive dashboard.",
  images: [
    "https://github.com/user-attachments/assets/ba7485fa-38ad-4ee4-9456-4324a629d3e3",
    "https://github.com/user-attachments/assets/0dea74c9-790c-4e4d-b94a-72609664beb6",
    "https://github.com/user-attachments/assets/69dafb88-d81d-4a3b-b6b5-feb2bd21ebd2",
    "https://github.com/user-attachments/assets/4d445778-503e-41f4-94d4-fea0754fa362",
  ],
  link: "https://github.com/BhaveshxPurohit/Mind-Sage",
  category: "AI",
},
{
  title: "Jobnest",
  description:
    "A MERN-based job tracking platform offering real-time analytics, secure OAuth and JWT authentication, and an interactive UI for managing applications, improving user engagement, and increasing daily active users.",
  images: [
    "https://github.com/user-attachments/assets/3871bc53-3673-4cf6-93d0-d69d3f620dc7",
    "https://github.com/user-attachments/assets/8e5d20fd-0698-4527-ad54-4f0a88e66c23",
  ],
  link: "https://github.com/BhaveshxPurohit/JobNest",
  category: "Full Stack",
},
  {
  title: "AI Marketplace",
  description:
    "An AI-driven car discovery platform using Next.js, TypeScript, Prisma, and Gemini API to provide semantic search, image recognition, EMI calculations, test drive booking, and admin management in a responsive UI.",
  images: [
    // Add image URLs here
  ],
  link: "https://github.com/BhaveshxPurohit/AI-Marketplace",
  category: "AI",
},
  {
  title: "Campus Navigation",
  description:
    "An iOS app using Swift, SwiftUI, MapKit, and Firebase to provide real-time campus navigation, offline access, dynamic routing, and department-based lab search for enhanced user experience and precision.",
  images: [
    // Add image URLs here
  ],
  link: "https://github.com/BhaveshxPurohit/NavCampus",
  category: "Frontend",
},
{
  title: "Stock Trading Engine",
  description:
    "A high-performance Java trading engine with lock-free data structures, priority-based order matching, REST API, real-time market simulation, order book visualization, multithreading, and low-latency analytics for high-frequency trading.",
  images: [
    // Add image URLs here
  ],
  link: "https://github.com/BhaveshxPurohit/Stock-Trading-Engine",
  category: "Backend",
},
{
  title: "Inventory Management System",
  description:
    "A full-stack inventory dashboard using Next.js, Node.js, Prisma, Redux Toolkit, and Tailwind CSS with real-time visualization, secure AWS deployment (EC2, RDS, S3), and enterprise-grade state and API management.",
  images: [
    // Add image URLs here
  ],
  link: "https://github.com/BhaveshxPurohit/Inventory-Management-System",
  category: "Full Stack",
},
{
  title: "VelocityVault",
  description:
    "A secure banking application built with Python, Django, and PostgreSQL, offering comprehensive financial functionalities, real-time notifications, user authentication, AWS S3 storage, and scalable deployment with Celery and Redis for async processing.",
  images: [
    // Add image URLs here
  ],
  link: "https://github.com/BhaveshxPurohit/VelocityVault",
  category: "Backend",
},

];

// Category Filters
const categories = ["All", "AI", "Full Stack", "Frontend", "Backend", "Data Analytics"];

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
                <div className="view-code-container">
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
