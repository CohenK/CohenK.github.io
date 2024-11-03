import { createContext, useState, useRef, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar.tsx";
import Introduction from "./Introduction.tsx";
import Skills from "./Skills.tsx";
import Projects from "./Projects.tsx";
import About from "./About.tsx";
import Resources from "./Resources.tsx";

export const ThemeContext = createContext("light");

const App:React.FC = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //needed to declare typing so that event listener can be attached
  const appRef = useRef<HTMLDivElement|null>(null);
  const introRef = useRef<HTMLElement|null>(null);
  const skillRef = useRef<HTMLElement|null>(null);
  const projectRef = useRef<HTMLElement|null>(null);
  const aboutRef = useRef<HTMLElement|null>(null);
  const sections = ['Intro','Skills','Apps','About'];
  const [activeComponent, setActiveComponent] = useState('');

  useEffect(()=>{
    const sectionRefs = [introRef, skillRef, projectRef, aboutRef]
    const observer = new IntersectionObserver(
      (sections)=>{
        sections.forEach((section) => {
          if (section.isIntersecting){
            setActiveComponent(section.target.id)
          }
        })
      },
      {threshold: 0.2})

    sectionRefs.forEach((section) =>{
      if (section.current){
        observer.observe(section.current);
      }
    });

    return () => {
      sectionRefs.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  },[])

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const onNavigate = (component:string) => {
    document.getElementById(component)!.scrollIntoView({block: 'start'});
  }

  const switchTheme = () => {
    const newTheme = (theme === "light") ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      {/* <EnterScreen enterClicked={enterClicked} handleClick={handleClick}/> */}
      <div className="app" ref={appRef} data-theme={theme}>
        <div className="nav">
          <Navbar sections={sections} activeComponent={activeComponent} onNavigate={onNavigate} switchTheme={switchTheme} theme={theme}/>
        </div>
        <div className="content">
          <Introduction ref={introRef} id='Intro'/>
          <Skills ref={skillRef} activeComponent={activeComponent} id='Skills'/>
          <Projects ref={projectRef} id="Apps"/>
          <About ref={aboutRef} id='About'/>
        </div>
        <div className="links">
          <Resources id='Links'/>
        </div>
      </div>
    </>

  );
}

export default App;
