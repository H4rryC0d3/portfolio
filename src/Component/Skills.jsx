import React from "react";
import "../App.css";

// Import images correctly
import html from "../assets/HTML.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/exjs.png";
import mongo from "../assets/mongo.png";
import python from "../assets/python.png";
import bootstrap from "../assets/Boot.png";
import tailwind from "../assets/tailwind.png";

const skills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: react, name: "ReactJS" },
    { img: node, name: "Node.js" },
    { img: express, name: "Express.js" },
    { img: mongo, name: "MongoDB" },
    { img: python, name: "Python" },
    { img: bootstrap, name: "Bootstrap" },
    { img: tailwind, name: "Tailwind" }
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="main-text">
                <h2 className="heading">My <span>Skills</span></h2>
            </div>
            <div className="skill-main">
                <div className="skill-center">
                    <div className="skill-grid">
                        {skills.map((skill, index) => (
                            <div className="skill-item" key={index}>
                                <img src={skill.img} alt={skill.name} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;