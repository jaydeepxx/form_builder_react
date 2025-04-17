import React from 'react';
import PropTypes from 'prop-types';
import './RightHeader.css';
import Button from "../../../../atoms/Button/index.jsx";
import IconButton from "../../../../molecules/IconButton/index.jsx";
import ThemeSelector from "./molecules/ThemeSelector/ThemeSelector.jsx";

const RightHeader = ({isPreviewMode = false}) => {
    return(
        <>
            <ul className="form-header-right">
                <li>
                    <Button
                        className="preview-button"
                    >
                        {isPreviewMode ? 'Edit' : 'Preview'}
                    </Button>
                </li>
                <li className="theme-switcher">
                    <ThemeSelector />
                </li>
                <li>
                    <IconButton
                        icon="undo"
                        label="Undo"
                        disabled={true}
                    />
                </li>
                <li>
                    <IconButton
                        icon="redo"
                        label="Redo"
                        disabled={true}
                    />
                </li>
                <li>
                    <Button
                        className="clear-button"
                    >
                        Clear form
                    </Button>
                </li>
                <li>
                    <Button
                        className="publish-button"
                    >
                        Publish
                    </Button>
                </li>
            </ul>
        </>
    )
}

RightHeader.propTypes = {
    isPreviewMode: PropTypes.bool,
}

export default RightHeader;