import React, { useState, useEffect } from 'react'
import "../styles/Skills.css";
import skills from "../public/data/skills.json";

interface props{
  id: string,
  activeComponent: string
}

const Skills = React.forwardRef<HTMLElement, props>(({id, activeComponent}, ref) => {
  const [seen, setSeen] = useState(false);
  useEffect(()=>{
    if(activeComponent === "Skills"){setSeen(true)};
  },[activeComponent])


  return (
    <section ref={ref} id={id} className="SkillsPage">
      <p className="skillTitle">Skills that I have picked up</p>
      <div className={"skillList"}>
        {skills.skills.map((item) => {
          return (
            <li key={item[1]} className={`${seen === true? "skill":"hide"}`}>
                <img className="skillLogo" src={item[1]} />
                <p className="skillName">{item[0]}</p>
            </li>
          );
        })}
      </div>
    </section>
  );
});

export default Skills;
