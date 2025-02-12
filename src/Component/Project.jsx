import React from "react";
import "../App.css";

// Import images correctly
import foodiespot from "../assets/foodiespot.png";
import furniture from "../assets/furniture.png";
import healthhub from "../assets/HealthHub.png";
import textutils from "../assets/TextUtils.png";
import portfolio from "../assets/Portfolio.png";
import todolist from "../assets/Todolist.png";

const projects = [
    {
        img: foodiespot, // Use imported variable
        title: "FoodieSpot",
        description: "FoodieSpot is a full-stack web application built with the MERN stack, designed to provide a seamless and dynamic food discovery experience for users.",
        link: "https://foodie-spot-kappa.vercel.app/"
    },
    {
        img: furniture,
        title: "Furniture",
        description: "Furniture Website is a responsive web application built with React.js, offering a seamless browsing experience for exploring and purchasing stylish furniture.",
        link: "https://furni-craft-web-app.vercel.app/"
    },
    {
        img: healthhub,
        title: "HealthHub",
        description: "HealthHub is a responsive web application built with HTML, CSS, and JavaScript, designed to manage patient records and appointments efficiently.",
        link: "https://health-hub-khaki.vercel.app/"
    },
    {
        img: textutils,
        title: "TextUtils",
        description: "TextUtils is a responsive web application built with React.js, designed to analyze and manipulate text efficiently.",
        link: "https://textutils-one-eta.vercel.app/"
    },
    {
        img: portfolio,
        title: "Portfolio",
        description: "Portfolio is a responsive web application built with React.js, showcasing my skills, projects, and experiences in an interactive and visually appealing way.",
        link: "https://personal-portfolios-three.vercel.app/"
    },
    {
        img: todolist,
        title: "Todo List",
        description: "This is a simple and responsive to-do list app for task management.",
        link: "https://todos-list-eta-brown.vercel.app/"
    }
];

const Projects = () => {
    return (
        <section className="project" id="project">
            <h2 className="heading">My <span>Projects</span></h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="project-box" key={index}>
                        <img src={project.img} alt={`${project.title} Screenshot`} />
                        <div className="project-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className="project-buttons">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-regular fa-share-from-square"></i> Visit Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
