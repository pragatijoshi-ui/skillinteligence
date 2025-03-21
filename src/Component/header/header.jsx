import React, { useState } from "react";
import "./header.scss";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    // Toggle the mobile menu visibility
    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Set the active link
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <header className="header d-flex justify-content-between align-items-center p-12">
            <div className="logo">MyLogo</div>
            <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
                <ul className="p-0 mb-0 header-nav">
                    <li>
                        <a
                            href="#"
                            className={`text-decoration-none font-18 be-vietnam-pro-regular ${activeLink === "home" ? "active" : ""}`}
                            onClick={() => handleLinkClick("home")}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-decoration-none font-18 be-vietnam-pro-regular ${activeLink === "about" ? "active" : ""}`}
                            onClick={() => handleLinkClick("about")}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-decoration-none font-18 be-vietnam-pro-regular ${activeLink === "services" ? "active" : ""}`}
                            onClick={() => handleLinkClick("services")}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-decoration-none font-18 be-vietnam-pro-regular ${activeLink === "contact" ? "active" : ""}`}
                            onClick={() => handleLinkClick("contact")}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                {isMobileMenuOpen ? "X" : "☰"}
            </div>
        </header>
    );
};

export default Header;
