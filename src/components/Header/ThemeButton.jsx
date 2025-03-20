import React, { useState } from "react";
import './ThemeButton.css'

const ThemeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li className="theme-switcher">
        <button
          className="material-symbols-outlined icon-button"
          id="theme-icon-button"
          aria-label="Change theme"
          onClick={() => setIsOpen(!isOpen)}
        >
          palette
        </button>

        <div
          className="theme-toggle"
          id="theme-toggle"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <div id="dark-theme-button"></div>
          <div id="purple-theme-button"></div>
          <div id="red-theme-button"></div>
        </div>
      </li>
    </>
  );
};

export default ThemeButton;