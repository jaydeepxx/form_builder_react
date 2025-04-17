import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';
import LeftHeader from './molecules/LeftHeader';
import RightHeader from './organisms/RightHeader';

const AppHeader = ({ title = 'Untitled form', isPreviewMode = false }) => {
    return (
        <header className="form-header">
            <LeftHeader title={title} />
            <RightHeader isPreviewMode={isPreviewMode} />
        </header>
    );
};

AppHeader.propTypes = {
    title: PropTypes.string,
    isPreviewMode: PropTypes.bool,
}

export default AppHeader;