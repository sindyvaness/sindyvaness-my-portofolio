import projects from "../../data/projects.json";
import { useNavigate } from "react-router-dom";

const ThisSiteNavItem = () => {
    const navigate = useNavigate();
    const project = projects.filter( x => x.title === "sindyvaness.com")[0];

    const redirectProject = () => {
        navigate("/web-project", {
            state: { project }
        }); 
    
    };

    return(
        <li><a className="dropdown-item"  onClick={() => redirectProject()} >This Site</a></li>
    );
};

export default ThisSiteNavItem