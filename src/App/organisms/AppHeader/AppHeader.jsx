import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';
import LeftHeader from './molecules/LeftHeader';
import RightHeader from './organisms/RightHeader';

const AppHeader = ({
                       formHeadline,
                       theme,
                       isPreviewMode,
                       canUndo,
                       canRedo,
                       setTheme,
                       setIsPreviewMode,
                       setFormData,
                       history,
                       setHistory
                   }) => {

    return (<header className="form-header">
        <LeftHeader
            formHeadline={formHeadline}
            isPreviewMode={isPreviewMode}
            setFormData={setFormData}
            setHistory={setHistory}
            history={history}
        />
        <RightHeader
            theme={theme}
            canUndo={canUndo}
            canRedo={canRedo}
            setTheme={setTheme}
            setFormData={setFormData}
            isPreviewMode={isPreviewMode}
            setIsPreviewMode={setIsPreviewMode}
            setHistory={setHistory}
            history={history}
        />
    </header>);
};

AppHeader.propTypes = {
    formTitle: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    isPreviewMode: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    canRedo: PropTypes.bool.isRequired,
    setTheme: PropTypes.func.isRequired,
    setIsPreviewMode: PropTypes.func.isRequired,
    setFormData: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    setHistory: PropTypes.func.isRequired
}

export default AppHeader;