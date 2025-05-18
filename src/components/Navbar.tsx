import React from "react";
import "../styles/Navbar.css";

interface sidebarProps {
  sections: string[];
  activeComponent: string;
  onNavigate: (section: string) => void;
}

const SideBar: React.FC<sidebarProps> = ({
  sections,
  activeComponent,
  onNavigate,
}) => {
  return (
    <div className="navbar">
      <div className="sections">
        {sections.map((section) => (
          <div
            key={section}
            className={`section ${section === activeComponent ? "show" : ""}`}
            onClick={() => onNavigate(section)}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
