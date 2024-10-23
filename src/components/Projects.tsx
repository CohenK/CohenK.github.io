import React, { useEffect, useState } from 'react'
import { ProjectCard } from './ProjectCard';
import ProjectCardCompact from './ProjectCardCompact';
import portfolio from "../public/data/portfolio.json";
import "../styles/Projects.css"

interface props{
    id: string;
}

const Projects = React.forwardRef<HTMLElement, props>(({id},ref)=>{    
    const projects = portfolio.projects.slice(0,3);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);

    const updateScreenWidth = () =>{
        setIsDesktop(window.innerWidth > 800);
        console.log(`window is being resized, current window width: ${window.innerWidth}`)
    }

    useEffect(()=>{
        window.addEventListener("resize", updateScreenWidth);
        const observer = new IntersectionObserver((cards)=>{
            cards.forEach((card)=>{
                if(card.isIntersecting){
                    card.target.classList.add("animate");
                }
            }, {threshold: 0.3});
        });

        const targets = document.querySelectorAll(".projectCard");
        targets.forEach(target => observer.observe(target));

        return () => {
            window.removeEventListener("resize",updateScreenWidth);
            targets.forEach(target => observer.unobserve(target));
          };
    });

    return(
        <section className="projects" id={id} ref={ref}>
            <p className="projectTitle">Some projects that I have worked on</p>
            <div className="projectList">
            {projects.map((project, index) => {
                return (
                    isDesktop?
                    ((index % 2)? <ProjectCard side="left" project={project}/>: <ProjectCard side="right" project={project}/>):
                    (<ProjectCardCompact project={project}/>)
                );
            })}
            </div>
            <a className='linkContainer' href='/projects/'>
                <div className='allProjectsLink'>{"View all projects >"}</div>
            </a>
        </section>
    );})

export default Projects;