import Navbar from "./Navbar.js";
import { createContext } from "react";
import useLocalStorage from "use-local-storage";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "../components/Home.tsx";
import About from "../components/About.tsx";
import Skills from "../components/Skills.tsx";
import Resources from "../components/Resources.tsx";

export const ThemeContext = createContext("light");

interface Props {
  page: string;
}

function App({ page }: Props) {
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
  switch (page) {
    case "home":
      Component = <Home />;
      break;
    case "about":
      Component = <About />;
      break;
    case "skills":
      Component = <Skills />;
      break;
    case "contact":
      Component = <Resources />;
      break;
  }

  return (
    <div className="app" data-theme={theme}>
      <div className="top-container">
        <Navbar theme={theme} handleClick={switchTheme} />
      </div>
      <div className="main">
        {page === "contact" ? (
          <div className="AltLeft"></div>
        ) : page === "home" ? (
          <div className="HomeLeft"></div>
        ) : (
          <div className="Left"></div>
        )}
        <div className="Middle">{Component}</div>
        {page === "contact" ? (
          <div className="AltRight"></div>
        ) : page === "home" ? (
          <div className="HomeRight"></div>
        ) : (
          <div className="Right"></div>
        )}
      </div>
    </div>
  );
}

export default App;
