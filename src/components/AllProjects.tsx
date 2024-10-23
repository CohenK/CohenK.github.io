import React from 'react';
import "../styles/AllProjects.css";
import portfolio from "../public/data/portfolio.json";
import ProjectCardCompact from './ProjectCardCompact';
import "bootstrap/dist/css/bootstrap.css";

const AllProjects:React.FC = () =>{
    return(
        <section className="allProjects">
            <p className='allProjectsTitle'>All Projects</p>
            <div className='projectsList'>
                {portfolio.projects.map((project)=>{
                    return(
                        <ProjectCardCompact project={project}/>
                    );
                })}
            </div>
            <a href='/'>
                <div className='mainPageLink'>{"< BACK"}</div>
            </a>
        </section>
    );
};



export default AllProjects;