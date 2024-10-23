import React from "react";
import "../styles/About.css";
import myInfo from "../public/data/myInfo.json"

interface props{
  id: string;
}

const About = React.forwardRef<HTMLElement, props>(({id}, ref) => {
  return (
    <section ref={ref} id={id} className="AboutPage">
      <p className="aboutTitle">about me</p>
      <p className="aboutMe">{myInfo.aboutMe}</p>
      <p className="hobbies">
        Whenever I'm not working on projects I like to pursue a mix of
      </p>
      <div className="hobbyList" id="list">
        {myInfo.hobbies.map((item, index) => {
          return (
            <div className={`hobbyContainer ${index % 2 ===0?"left":"right"}`}>
              {index % 2 ===0?<img className="hobbyImg" src={item[2]}/>:
              <div className="hobbyDetails" key={item[0]}>
                <p className="more">"{item[1]}"</p>
                <u className={`hobbyName ${index % 2 ===0?"left":"right"}`}>{item[0]}</u>
              </div>}
              {index % 2 === 0?
              <div className="hobbyDetails" key={item[0]}>
                <p className="more">"{item[1]}"</p>
                <u className={`hobbyName ${index % 2 ===0?"left":"right"}`}>{item[0]}</u>
              </div>:<img className="hobbyImg" src={item[2]}/>}
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default About;
