import React from "react";
import { Link } from "react-router-dom";
import "./Style.css"
const NavBar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mx-auto"> 
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                            >
                            Home
                            {/* <a href="/">Home</a> */}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                    to="/about"
                                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                                >
                                About
                            </Link>
                            {/* <a href="/#about">About Me</a> */}
                        </li>
                        <li className="nav-item">
                            <Link
                                    to="/skills"
                                    className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
                                >
                                Skills
                            </Link>
                            {/* <a href="/#skils">Skills</a> */}
                        </li>
                        <li className="nav-item">
                            <Link
                                    to="/contact"
                                    className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                                >
                                Contact
                            </Link>
                            {/* <a href="/#contact">Contact</a> */}
                        </li>
                    </ul>
                </div> 
            </nav>
        </div>
    );
}

export default NavBar;