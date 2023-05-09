import "../styles/Home.css";
import React from "react";
import { useState } from "react";
// import AnimatedCascadeWaves from "../components/animatedCascadeWaves.tsx";

function Home() {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);

  React.useEffect(() => {
    const parallax_el = document.querySelectorAll(
      ".parallax"
    ) as NodeListOf<HTMLElement>;

    window.addEventListener("mousemove", (e) => {
      setXValue(e.clientX - window.innerWidth / 2);
      setYValue(e.clientY - window.innerHeight / 2);
    });
    return () => {
      parallax_el.forEach((item) => {
        let speedX: number = Number(item.dataset.speedx);
        let speedY: number = Number(item.dataset.speedy);
        item.style.transform = `translateX(${-xValue * speedX}px) translateY(${
          -yValue * speedY
        }px)`;
      });
    };
  }, [xValue, yValue]);
  return (
    <section className="HomePage">
      <div data-speedx="0.25" data-speedy="0.1" className="text parallax">
        <p className="greeting">Welcome!</p>
        <p className="details">
          I have created this website to display my portfolio and to also show
          you more about myself. If you have any suggestions on the site, please
          let me know. You can find out more on how to contact me under the
          contact tab. I hope you enjoy your stay! &#128513;
        </p>
      </div>
      <div className="bot">
        <svg
          data-speedx="0.3"
          data-speedy="0.2"
          height="50em"
          className="svg1 parallax"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="130 0 1440 300"
        >
          <path
            className="path1"
            d="M0,160L21.8,138.7C43.6,117,87,75,131,58.7C174.5,43,218,53,262,74.7C305.5,96,349,128,393,149.3C436.4,171,480,181,524,176C567.3,171,611,149,655,128C698.2,107,742,85,785,69.3C829.1,53,873,43,916,80C960,117,1004,203,1047,208C1090.9,213,1135,139,1178,96C1221.8,53,1265,43,1309,69.3C1352.7,96,1396,160,1418,192L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
        <svg
          data-speedx="0.25"
          data-speedy="0.17"
          height="55em"
          className="svg2 parallax"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="130 0 1440 290"
        >
          <path
            className="path2"
            d="M0,160L21.8,170.7C43.6,181,87,203,131,218.7C174.5,235,218,245,262,218.7C305.5,192,349,128,393,122.7C436.4,117,480,171,524,192C567.3,213,611,203,655,181.3C698.2,160,742,128,785,138.7C829.1,149,873,203,916,192C960,181,1004,107,1047,74.7C1090.9,43,1135,53,1178,96C1221.8,139,1265,213,1309,240C1352.7,267,1396,245,1418,234.7L1440,224L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
        <svg
          data-speedx="0.2"
          data-speedy="0.15"
          height="40em"
          className="svg3 parallax"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="130 0 1440 340"
        >
          <path
            className="path3"
            d="M0,224L17.1,208C34.3,192,69,160,103,160C137.1,160,171,192,206,208C240,224,274,224,309,192C342.9,160,377,96,411,90.7C445.7,85,480,139,514,176C548.6,213,583,235,617,208C651.4,181,686,107,720,112C754.3,117,789,203,823,245.3C857.1,288,891,288,926,277.3C960,267,994,245,1029,245.3C1062.9,245,1097,267,1131,277.3C1165.7,288,1200,288,1234,277.3C1268.6,267,1303,245,1337,234.7C1371.4,224,1406,224,1423,224L1440,224L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
          ></path>
        </svg>
        <svg
          data-speedx="0.15"
          data-speedy="0.1"
          height="30em"
          className="svg4 parallax"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="130 0 1440 240"
        >
          <path
            className="path4"
            d="M0,288L80,250.7C160,213,320,139,480,122.7C640,107,800,149,960,181.3C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <svg
          data-speedx="0.1"
          data-speedy="0.08"
          height="30em"
          className="svg5 parallax"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="130 0 1440 260"
        >
          <path
            className="path5"
            d="M0,160L80,170.7C160,181,320,203,480,213.3C640,224,800,224,960,218.7C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Home;
