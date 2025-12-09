import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();
    const currentHash = location.hash;

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/#home">sindyvaness</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item nav-item">
                        <HashLink className={`nav-link ${currentHash === "#home" ? "active" : ""}`} smooth to="/#home">Home</HashLink>
                    </li>
                    <li class="nav-item">
                        <HashLink className={`nav-link ${currentHash === "#projects" ? "active" : ""}`} smooth to="/#projects">Projects</HashLink>
                    </li>
                    <li class="nav-item">
                        <HashLink className={`nav-link ${currentHash === "#experience" ? "active" : ""}`} smooth to="/#experience">Experience</HashLink>
                    </li>
                    <li class="nav-item">
                        <HashLink className={`nav-link ${currentHash === "#education" ? "active" : ""}`} smooth to="/#education">Education</HashLink>
                    </li>
                    <li class="nav-item">
                        <HashLink className={`nav-link ${currentHash === "#contact" ? "active" : ""}`} smooth to="/#contact">Contact</HashLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About
                    </a>
                    <ul class="dropdown-menu">
                        {/* <li><a class="dropdown-item" href="#">About Me</a></li>
                        <li><a class="dropdown-item" href="#">About this Site</a></li> */}
                        <li><a class="dropdown-item" href="assests/Resume-SysEng-Sindy-Montano.pdf" target="_blank" rel="noopener noreferrer">Resume Download <i class="bi bi-box-arrow-down"></i></a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;