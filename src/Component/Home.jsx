import React from "react";
import "../App.css";
import Avatar from "../assets/AvatarMaker.png";  // Import the image

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <div className="home-img">
                    <img src={Avatar} alt="Harsh Padiyar" />
                </div>
                <h2>Hi! I am a</h2>
                <h3>Harsh Padiyar</h3>
                <h2>And I'm a <span className="multiple-text">Frontend Developer</span></h2>
                <p>
                   I’m a passionate Frontend Developer and MERN stack specialist, focused on creating intuitive interfaces, seamless user experiences,
                    and efficient web applications. With expertise in ReactJS and Python, I specialize in building scalable, responsive solutions that
                    are both user-friendly and visually appealing. I’m constantly enhancing my skills to stay ahead in the ever-evolving world of web 
                    development and technology.
                </p>
                {/* Social Media Links */}
                <div className="social-media">
                    <a href="http://t.me/padiyarharsh" target="_blank" aria-label="Telegram"><i className="fa-brands fa-telegram"></i></a>
                    <a href="https://github.com/H4rryC0d3" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                    <a href="mailto:harshpadiyar10588@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/harsh-padiyar-b6ba46308" target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                {/* Resume Button */}
                <a href="https://drive.google.com/file/d/1ULXwACVvzgX561_O_cWFpRAEnLc2AK31/view?usp=drivesdk" target="_blank" className="btn">Download CV</a>
            </div>
        </section>
    );
};

export default Home;