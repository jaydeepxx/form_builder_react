import React from 'react';
import PropTypes from 'prop-types';
import './RightHeader.css';
import Button from "../../../../atoms/Button/index.jsx";
import UndoRedo from "./molecules/UndoRedo";
import ThemeSelector from "./molecules/ThemeSelector/ThemeSelector.jsx";
import clearForm from "./helpers/rightHeader.clearForm.jsx";

const RightHeader = ({
                         canUndo,
                         canRedo,
                         setTheme,
                         isPreviewMode,
                         setIsPreviewMode,
                         setFormData,
                         setHistory,
    history,
                     }) => {

    const handlePreviewToggle = () => {
        setIsPreviewMode(!isPreviewMode);
    };

    const handleClearForm = () => {
        clearForm(setFormData, setHistory);
    };

    const handlePublish = () => {
        alert('Form published! (This is a placeholder for actual publishing functionality)');
    };

    return(
        <>
            <ul className="form-header-right">
                <li>
                    <Button
                        variant="primary"
                        onClick={handlePreviewToggle}
                    >
                        {isPreviewMode ? 'Edit' : 'Preview'}
                    </Button>
                </li>
                <li className="theme-switcher">
                    <ThemeSelector setTheme={setTheme} />
                </li>
                {!isPreviewMode && <UndoRedo
                                        canUndo={canUndo}
                                        canRedo={canRedo}
                                        setFormData={setFormData}
                                        setHistory={setHistory}
                                        history={history}
                />}
                <li>
                    <Button
                        className="clear-button"
                        onClick={handleClearForm}
                    >
                        Clear form
                    </Button>
                </li>
                <li>
                    <Button
                        variant="primary"
                        onClick={handlePublish}
                    >
                        Publish
                    </Button>
                </li>
            </ul>
        </>
    )
}

RightHeader.propTypes = {
    canUndo: PropTypes.bool,
    canRedo: PropTypes.bool,
    setTheme: PropTypes.func,
    isPreviewMode: PropTypes.bool,
    setIsPreviewMode: PropTypes.func,
    setFormData: PropTypes.func,
    setHistory: PropTypes.func,
    history: PropTypes.object,
}

export default RightHeader;