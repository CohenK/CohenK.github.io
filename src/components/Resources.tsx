import "../styles/Resources.css";
import myInfo from "../public/data/myInfo.json";

interface props{
  id:string;
}

const Resources = ({id}:props) => {
  return (
    <section id={id} className="ResourcesPage">
        {myInfo.resources.map((item) => {
          return (
            <div className="resourceListItem">
              <p className="hidden">{item[0]}</p>
              <a className="resourceListLink" href={item[1]} target="_blank">
                <div className="iconContainer">
                  <img className="resourceIcon" src={item[3]}></img>
                </div>
              </a>
            </div>
          );
        })}
    </section>
  );
};

export default Resources;