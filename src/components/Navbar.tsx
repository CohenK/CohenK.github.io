import React from "react";
import "../styles/Navbar.css"

interface sidebarProps {
    sections: string[];
    activeComponent: string;
    onNavigate: (section: string) => void;
    switchTheme: ()=> void;
    theme: string;
}

const SideBar:React.FC<sidebarProps> = ({sections, activeComponent, onNavigate, switchTheme, theme}) => {
    return(
        <div className="navbar">
            <button className="themeButton" onClick={switchTheme}>
                {theme === "light" ? "Dark" : "Light"}
            </button>
            <div className="sections">
                {sections.map(section => (
                    <div 
                    key={section} 
                    className={`section ${section===activeComponent ? "show" : ""}`} 
                    onClick={()=>onNavigate(section)}>
                        {section}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;