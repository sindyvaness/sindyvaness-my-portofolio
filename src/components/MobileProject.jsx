import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MobileProject = () => {
    
    const { state } = useLocation();
    const { project } = state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="mbp-container">
            <div className="mbp-body">
                <div className="mbp-video">
                    <div className="video">
                        <video
                            src={project.video}
                            autoPlay 
                            loop 
                            muted
                            controls
                            />
                    </div>
                </div>
                <div className="mbp-description">
                    <div className="mbp-title">{project.title}</div>
                    <p>{project.description}
                    </p>
                    <p><i class="bi bi-code-square"></i><strong>Technologies:</strong></p>
                    <ul>
                        { 
                            project.technologies.map( tech => (
                                <li>{tech}</li>
                            ))
                        }
                    </ul>
                    <p><i class="bi bi-cloud-download"></i><strong>External Resources:</strong>
                        <ul>
                            { 
                                project.externalResources.map( item => (
                                    <li>{
                                        item.link ? 
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text || "None"}</a>
                                        :
                                            "None"
                                    }</li>
                                ))
                            }
                        </ul>
                    </p>
                    <p><i class="bi bi-gear"></i><strong>Main Features:</strong></p>
                    <ul>
                        { 
                            project.mainFeatures.map( item => (
                                <li>{item}</li>
                            ))
                        }
                    </ul>
                    <div>
                        <p><i class="bi bi-lightning"></i><strong>Feature Features and improvements:</strong></p>
                        <ul>
                            { 
                                project.future.map( item => (
                                    <li>{item || "None"}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <p><i class="bi bi-github"></i>
                            <strong><a 
                                href={project.gitHub.url || "https://github.com/sindyvaness"}
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                               {project.gitHub.text || "No provided"}
                            </a></strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MobileProject;