import React, {useState} from 'react';
import PropTypes from "prop-types";
import IconButton from "../../../../../../molecules/IconButton/index.jsx";

const ThemeSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                <div id="dark-theme-button"></div>
                <div id="purple-theme-button"></div>
                <div id="red-theme-button"></div>
            </div>
        </>
    )
}


export default ThemeSelector;