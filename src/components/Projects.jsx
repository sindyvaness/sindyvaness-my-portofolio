import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects.json";

const Projects = () => {
    const navigate = useNavigate();
    
    const redirectProject = (project) => {
        // const selectedProject = projects.filter( x => x.id === id);  
        
        if (project.type === 'mobile') {
            navigate("/mobile-project", {
                state: { project }
            });   
        }
        else if (project.type === 'web') {
            navigate("/web-project", {
                state: { project }
            }); 
        }
    };

    return(
        <div className="projects" id="projects">
            <h2 className="subtitles">Projects</h2>
            <div className="d-flex justify-content-between row-gap-3 projects-container">
                {projects.map(project => (
                    <div className={ project.type === "mobile" ? "card project-item" : "card project-item web-project-card"} key={project.name}>
                        <img src={project.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">{project.title}</h6>
                            <p className="card-text">{project.mainTechnology} base Application</p>
                            <button className="btn" onClick={() => redirectProject(project)}>
                                See More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;