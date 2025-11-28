import { useState } from "react";
import carrousel1 from "../assets/images/hero/carrousel-1.jpg";

const Projects = () => {
    const [showModal, setShowModal] = useState(false);

    return(
        <div className="projects" id="projects">
            <h2 className="subtitles">Projects</h2>
            <div className="d-flex justify-content-between flex-wrap row-gap-3 projects-container">
                <div className="card project-item">
                    <img src={carrousel1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a className="btn btn-primary" onClick={() => setShowModal(true)}>Go somewhere</a>
                    </div>
                </div>

                <div className="card project-item">
                    <img src={carrousel1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div className="card project-item">
                    <img src={carrousel1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div className="card project-item">
                    <img src={carrousel1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;