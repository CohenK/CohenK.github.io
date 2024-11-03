import "../styles/Introduction.css";
import { forwardRef} from "react";
import myInfo from "../public/data/myInfo.json";

interface props{
  id: string;
}

const Introduction = forwardRef<HTMLElement, props>(({id}, ref) => {
    return (
      <section ref={ref} id={id} className="Introduction">
        <p className="quoteFirst">Opportunities are for</p>
        <div className="heroBackground">
          <div className="pictureBackground">
            <img id={id} className="myPicture" src={myInfo.myPicture}/>
          </div>
          <div className="heroText">
            <p className="introText">
              Hello, I'm <span className="name"> Cohen Kang </span>,<br/>
              a <span>software developer</span> <br/>
              driven by <span> passion </span>
            </p>
            <p className="callToAction">
            Let's talk about your next project!
            </p>
          </div>
        </div>
        <p className="quoteSecond"> those who are prepared</p>
        
      </section>
    );
  });
  
  export default Introduction;