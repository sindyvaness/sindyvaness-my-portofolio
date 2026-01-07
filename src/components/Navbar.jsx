import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";
import ThisSiteNavItem from './about/ThisSiteNavItem';


const Navbar = () => {
    const location = useLocation();
    const currentHash = location.hash;

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#home">sindyvaness</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item nav-item" key="home">
                        <HashLink className={`nav-link ${currentHash === "#home" ? "active" : ""}`} smooth to="/#home">Home</HashLink>
                    </li>
                    <li className="nav-item" key="projects">
                        <HashLink className={`nav-link ${currentHash === "#projects" ? "active" : ""}`} smooth to="/#projects">Projects</HashLink>
                    </li>
                    <li className="nav-item" key="experience">
                        <HashLink className={`nav-link ${currentHash === "#experience" ? "active" : ""}`} smooth to="/#experience">Experience</HashLink>
                    </li>
                    <li className="nav-item" key="education">
                        <HashLink className={`nav-link ${currentHash === "#education" ? "active" : ""}`} smooth to="/#education">Education</HashLink>
                    </li>
                    <li className="nav-item" key="contact">
                        <HashLink className={`nav-link ${currentHash === "#contact" ? "active" : ""}`} smooth to="/#contact">Contact</HashLink>
                    </li>
                    <li className="nav-item dropdown" key="about">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About
                        </a>
                        <ul className="dropdown-menu">
                            <ThisSiteNavItem></ThisSiteNavItem>
                            {/* <li><a className="dropdown-item" href="#">This Site</a></li> */}
                            {/* <li><a className="dropdown-item" href="#">Sindy Montano</a></li> */}
                        </ul>
                    </li>
                    <li className="nav-item">
                        {/* <HashLink className="nav-link" smooth to="/#contact">Contact</HashLink> */}
                        <a className="nav-link" href="assests/Resume-SysEng-Sindy-Montano.pdf" target="_blank" rel="noopener noreferrer">Resume <i className="bi bi-box-arrow-down"></i></a>
                    </li>
                </ul>
                </div>
                <div className='social-media'>
                    <a className="nav-link" href="https://www.linkedin.com/in/sindy-vanessa-montano/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a className="nav-link" href="https://github.com/sindyvaness" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    <a className="nav-link" href="https://learn.microsoft.com/en-us/users/sindyvanessamontao-9072/transcript/d4ye3am310lyrpw?tab=credentials-tab" target="_blank" rel="noopener noreferrer"><i className="bi bi-microsoft"></i></a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;