import Navbar from "./components/Navbar.tsx";
import { createContext } from "react";
import useLocalStorage from "use-local-storage";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Resources from "./components/Resources.tsx";
import Contact from "./components/Contact.tsx";

export const ThemeContext = createContext("light");

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/about":
      Component = <About />;
      break;
    case "/skillsandprojects":
      Component = <Skills />;
      break;
    case "/resources":
      Component = <Resources />;
      break;
    case "/contact":
      Component = <Contact />;
      break;
  }

  return (
    <div className="app" data-theme={theme}>
      <div className="top-container">
        <Navbar theme={theme} handleClick={switchTheme} />
      </div>
      <div className="main">
        {window.location.pathname === "/resources" ? (
          <>
            <div className="AltLeft"></div>
            <div className="Middle"> {Component}</div>
            <div className="AltRight"></div>
            <div className="bottomEdge layer"></div>
          </>
        ) : (
          <>
            {window.location.pathname === "/" ? (
              <>
                {" "}
                <div className="AltLeft"></div>
                <div className="Middle"> {Component}</div>
                <div className="AltRight"></div>
              </>
            ) : (
              <>
                {" "}
                <div className="Left"></div>
                <div className="Middle"> {Component}</div>
                <div className="Right"></div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
