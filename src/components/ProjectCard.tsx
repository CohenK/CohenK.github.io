import "../styles/ProjectCard.css"

interface props{
    side: string,
    project: {name:string,description:string,image:string,link:string,tags:string[]};
}

const ProjectText = ({project}:props) => {
    return(
        <div className="projectText">
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

export const ProjectCard = ({project, side}:props) => {
    return(
        <div className={`projectCard ${side}`}>
            {side === 'left'? ProjectText({project, side}):<img className="projectThumbnail" src={project.image}></img>}
            {side ==='left'? <img className="projectThumbnail" src={project.image}></img>:ProjectText({project,side})}
        </div>
    );
};