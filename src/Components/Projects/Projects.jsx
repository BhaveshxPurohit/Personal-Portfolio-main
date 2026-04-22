import React, { useState } from "react";
import "./Projects.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageCarousel = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  if (!images.length) return <div className="no-image-placeholder">[ no preview ]</div>;

  return (
    <div className="carousel-container">
      <img src={images[current]} alt={`slide-${current}`} className="carousel-img" />
      {images.length > 1 && (
        <>
          <button className="arrow left" onClick={() => setCurrent((current - 1 + images.length) % images.length)}>
            <FaArrowLeft />
          </button>
          <button className="arrow right" onClick={() => setCurrent((current + 1) % images.length)}>
            <FaArrowRight />
          </button>
        </>
      )}
    </div>
  );
};

const projectData = [
  {
    title: "AI Dashboard",
    description: "A full-stack AI dashboard using Next.js, TypeScript, and Vercel AI SDK for CRUD operations, image uploads, and real-time chatbot interactions powered by OpenAI structured outputs.",
    images: [
      "https://github.com/user-attachments/assets/18cfc4ce-7c2f-436e-856c-8293644deef1",
      "https://github.com/user-attachments/assets/b13d957c-9d37-4f6c-b967-f72ccd9b10f9",
    ],
    link: "https://github.com/BhaveshxPurohit/AI-Dashboard",
    category: "AI",
  },
  {
    title: "MindSage",
    description: "An AI-powered mental health platform using Next.js, MongoDB, and Google Generative AI to deliver real-time wellness insights, personalized recommendations, and interactive chat support.",
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
    title: "StockStream",
    description: "A cloud-native ELT pipeline integrating Python and Alteryx with Azure Functions, Logic Apps, and Synapse Analytics to automate stock data processing for scalable financial analytics.",
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
    description: "Explores Spotify user preferences, playlist behavior, and track patterns using NLP and machine learning in Python, uncovering musical trends to enrich listener experience.",
    images: ["https://raw.githubusercontent.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage/main/spotify%20(1).jpg"],
    link: "https://github.com/BhaveshxPurohit/NLP-Driven-Insights-into-Spotify-Usage.git",
    category: "Data Analytics",
  },
  {
    title: "EV-lytics for NY",
    description: "Analyzes EV adoption, rebate distribution, and charging infrastructure across New York State using Python, SQL, and Tableau for data-driven policy decisions.",
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
    description: "A healthcare data warehouse using Snowflake, dbt, and SQL to centralize ICU patient information, enabling hospital management to monitor performance and generate actionable insights.",
    images: [
      "https://github.com/user-attachments/assets/7b33dd29-14fb-4187-87a2-011fead05ad6",
      "https://github.com/user-attachments/assets/ea96f5f3-9518-4be7-a9b0-f814ed6d06b0",
      "https://github.com/user-attachments/assets/318143b3-2306-4797-806a-ba111f34f688",
    ],
    link: "https://github.com/BhaveshxPurohit/Optimizing-ICU-Management-with-Data-Warehousing",
    category: "Data Analytics",
  },
  {
    title: "Jobnest",
    description: "A MERN-based job tracking platform offering real-time analytics, secure OAuth and JWT authentication, and an interactive UI for managing applications.",
    images: [
      "https://github.com/user-attachments/assets/3871bc53-3673-4cf6-93d0-d69d3f620dc7",
      "https://github.com/user-attachments/assets/8e5d20fd-0698-4527-ad54-4f0a88e66c23",
    ],
    link: "https://github.com/BhaveshxPurohit/JobNest",
    category: "Full Stack",
  },
  {
    title: "AI Marketplace",
    description: "An AI-driven car discovery platform using Next.js, TypeScript, Prisma, and Gemini API with semantic search, image recognition, EMI calculations, and test drive booking.",
    images: [],
    link: "https://github.com/BhaveshxPurohit/AI-Marketplace",
    category: "AI",
  },
  {
    title: "Campus Navigation",
    description: "An iOS app using Swift, SwiftUI, MapKit, and Firebase for real-time campus navigation, offline access, dynamic routing, and department-based lab search.",
    images: [],
    link: "https://github.com/BhaveshxPurohit/NavCampus",
    category: "Frontend",
  },
  {
    title: "Stock Trading Engine",
    description: "A high-performance Java trading engine with lock-free data structures, priority-based order matching, real-time market simulation, and low-latency analytics for HFT.",
    images: [],
    link: "https://github.com/BhaveshxPurohit/Stock-Trading-Engine",
    category: "Backend",
  },
  {
    title: "Inventory Management",
    description: "A full-stack inventory dashboard using Next.js, Node.js, Prisma, Redux Toolkit, and Tailwind CSS with real-time visualization and secure AWS deployment.",
    images: [],
    link: "https://github.com/BhaveshxPurohit/Inventory-Management-System",
    category: "Full Stack",
  },
  {
    title: "VelocityVault",
    description: "A secure banking application with Python, Django, and PostgreSQL offering real-time notifications, authentication, AWS S3 storage, and async processing via Celery and Redis.",
    images: [],
    link: "https://github.com/BhaveshxPurohit/VelocityVault",
    category: "Backend",
  },
];

const categories = ["All", "AI", "Full Stack", "Frontend", "Backend", "Data Analytics"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = selectedCategory === "All"
    ? projectData
    : projectData.filter((p) => p.category === selectedCategory);

  return (
    <div className="section projects-wrap" data-aos="fade-up">
      <h2 className="section__title">
        Featured <span className="different">Projects</span>
      </h2>
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
        {filtered.map((proj, i) => (
          <div className="project-card" key={i}>
            <ImageCarousel images={proj.images} />
            <div className="project-info">
              <div className="project-top">
                <span className="project-title">{proj.title}</span>
                <span className="project-category">{proj.category}</span>
              </div>
              <p className="project-desc">{proj.description}</p>
              <div className="project-footer">
                <a href={proj.link} target="_blank" rel="noreferrer">
                  <button className="btns">View Code</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
