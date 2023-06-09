import React from "react";
import "../styles/About.css";
import CascadeWaves from "./cascadeWaves";

function observe(before: string, after: string) {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add(after);
        } else {
          entry.target.classList.remove(after);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(before);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

function About() {
  let hobbies: [string, string][] = [
    [
      "table tennis",
      "A great sport that works out all parts of the body with dynamic movements, and more importantly, a sport that you can add your style to!",
    ],
    [
      "origami",
      "I love to create things, and origami is the perfect mix of complex geometry and problem-solving. Along with its multitude of applications in technology, such as NASA's probes, it's also a beautiful art form.",
    ],
    [
      "cycling",
      "The breeze against my face feels great, I get to skip traffic, and it's a great exercise for the body, what's there not to like?",
    ],
    [
      "Gundam plastic models",
      "I love the aesthetics of Gundam and the rich stories they tell. On top of the genius designs of the model kits, they are just fantastic pieces of art to display to guests.",
    ],
    [
      "camping",
      "It's great to leave the city behind once in a while to relax outdoors, observe nature and reset the mind.",
    ],
    [
      "3D modelling",
      "Not only do I love playing games, but I also enjoy designing in-game assets.",
    ],
  ];

  let imagesc1 = [
    "/assets/tree.jpg",
    "/assets/blade2.png",
    "/assets/camping2.png",
  ];
  let imagesc2: string[] = [
    "/assets/OrigamiSwan.jpg",
    "/assets/meSitting2.jpg",
    "/assets/camping1.png",
  ];
  let imagesc3: string[] = [
    "/assets/me on bike.jpg",
    "/assets/lake.jpg",
    "/assets/yosemite.JPG",
  ];
  let imagesc4: string[] = [
    "/assets/unicorn.jpg",
    "/assets/bladeAlt.png",
    "/assets/flowers.png",
  ];

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //       } else {
  //         entry.target.classList.remove("show");
  //       }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll(".hidden");
  //   hiddenElements.forEach((el) => observer.observe(el));

  //   return () => {
  //     hiddenElements.forEach((el) => observer.unobserve(el));
  //   };
  // }, []);
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("after");
  //       } else {
  //         entry.target.classList.remove("after");
  //       }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll(".before");
  //   hiddenElements.forEach((el2) => observer.observe(el2));

  //   const observer2 = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry);
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("after2");
  //       } else {
  //         entry.target.classList.remove("after2");
  //       }
  //     });
  //   });

  //   const hiddenElements2 = document.querySelectorAll(".before2");
  //   hiddenElements2.forEach((el2) => observer2.observe(el2));

  //   return () => {
  //     hiddenElements.forEach((el2) => observer.unobserve(el2));
  //     hiddenElements2.forEach((el2) => observer2.unobserve(el2));
  //   };
  // }, []);

  observe(".hidden", "show");
  observe(".before", "after");
  observe(".before2", "after2");
  observe(".before3", "after3");

  return (
    <section className="AboutPage">
      <p className="aboutTitle">about me</p>
      <p className="intro">
        Hi, my name is Haoxian(Cohen) Kang, and I hold a Bachelor's degree in
        Mathematics of Computation from UCLA. Although my background is in the
        field of Analytical Mathematics, I am very much interested in all fields
        Computer Science.
      </p>
      <img className="myPicture" src="\assets\me.jpg" />
      {/*hobby pics section */}

      <div className="before transitionTop layerTop">
        <CascadeWaves />
      </div>
      <section className="pics before3">
        <div className="column">
          {imagesc1.map((item) => {
            return (
              <ul className="hidden">
                <img className="myPictures" src={item} />
              </ul>
            );
          })}
        </div>
        <div className="column">
          {imagesc2.map((item) => {
            return (
              <ul className="hidden">
                <img className="myPictures" src={item} />
              </ul>
            );
          })}
        </div>
        <div className="column">
          {imagesc3.map((item) => {
            return (
              <ul className="hidden">
                <img className="myPictures" src={item} />
              </ul>
            );
          })}
        </div>
        <div className="column">
          {imagesc4.map((item) => {
            return (
              <ul className="hidden">
                <img className="myPictures" src={item} />
              </ul>
            );
          })}
        </div>
      </section>
      <div className="before2 transitionBot layerBot">
        <CascadeWaves />
      </div>
      <p className="hobbies">
        Whenever I'm not working on projects you can find me pursuing a mix of:
      </p>
      <ul className="list" id="list">
        {hobbies.map((item) => {
          return (
            <div>
              <li className="hobby" key={item[0]}>
                <p className="more">"{item[1]}"</p>
                <u className="hobbyName">{item[0]}</u>
              </li>
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default About;
