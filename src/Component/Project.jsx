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
        description: "This is a web design project focused on responsive layouts and modern UI principles.",
        link: "https://foodie-spot-kappa.vercel.app/"
    },
    {
        img: furniture,
        title: "Furniture",
        description: "This is a web design project focused on responsive layouts and modern UI principles.",
        link: "https://furniture-web-phi.vercel.app/"
    },
    {
        img: healthhub,
        title: "HealthHub",
        description: "This project focuses on creating modern, responsive websites with emphasis on UX/UI design.",
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
        description: "This is a web design project focused on responsive layouts and modern UI principles.",
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