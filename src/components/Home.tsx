import "../styles/Home.css";
import CascadeWaves from "../components/cascadeWaves.tsx";

function Home() {
  return (
    <section className="HomePage">
      <div className="main">
        <p className="greeting">Welcome!</p>
        <p className="details">
          I have created this website to display my portfolio and to also show
          you more about myself. If you have any suggestions on the site, please
          let me know. You can find out more on how to contact me under the
          contact tab. I hope you enjoy your stay! &#128513;
        </p>
      </div>
      <div className="bot">
        <CascadeWaves />
      </div>
    </section>
  );
}

export default Home;
