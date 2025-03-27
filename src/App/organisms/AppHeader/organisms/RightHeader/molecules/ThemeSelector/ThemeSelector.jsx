import React, {useState} from 'react';
import PropTypes from "prop-types";
import IconButton from "../../../../../../molecules/IconButton/index.jsx";

const ThemeSelector = ({setTheme}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        document.body.setAttribute("class", "")
        document.body.classList.add(newTheme);
        setIsOpen(false);
    };
    return (
        <>
            <IconButton
                icon="palette"
                label="Change theme"
                id="theme-icon-button"
                onClick={() => setIsOpen(!isOpen)}
            />
            <div
                className="theme-toggle"
                id="theme-toggle"
                style={{ display: isOpen ? "flex" : "none" }}
            >
                <div
                    id="dark-theme-button"
                    onClick={() => handleThemeChange('dark-theme')}
                ></div>
                <div
                    id="purple-theme-button"
                    onClick={() => handleThemeChange('purple-theme')}
                ></div>
                <div
                    id="red-theme-button"
                    onClick={() => handleThemeChange('red-theme')}
                ></div>
            </div>
        </>
    )
}


export default ThemeSelector;