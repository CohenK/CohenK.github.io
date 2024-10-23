import "../styles/ProjectCardCompact.css"

interface props{
    project: {name:string,description:string,image:string,link:string,tags:string[]};
}

const ProjectCardCompact = ({project}:props) => {
    return(
        <div className="projectCardCompact">
            <img className="projectThumbnail" src={project.image}></img>
            <p className="projectName">{project.name}</p>
                <p className="projectDescription">{project.description}</p>
                <div className="tagContainer">
                    {project.tags.map((tag)=>{
                        return (
                            <li key={tag} className="tagItem">
                                {tag}
                            </li>
                        );
                    })}
                </div>
                <a className="projectLink" href={project.link} target="_blank">
                    <div className="projectLinkBox">{"VIEW >"}</div>
                </a>
        </div>
    );
};

export default ProjectCardCompact