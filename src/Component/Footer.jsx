import React from "react";
import "../App.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Designed &amp; Built by <strong>Harsh Padiyar</strong></p>
                <p>Copyright &copy; 2025 | All Rights Reserved</p>
            </div>
            <div className="back-to-top">
                <a href="#home"><i className="fa-solid fa-chevron-up"></i></a>
            </div>
        </footer>
    );
};

export default Footer;