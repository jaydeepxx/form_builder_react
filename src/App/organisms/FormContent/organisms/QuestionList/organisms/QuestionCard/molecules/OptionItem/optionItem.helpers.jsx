import React from 'react';
import PropTypes from 'prop-types';
import Input from "../../../../../../../../atoms/Input/Input.jsx";

export const renderInputElement = (type,index,isPreviewMode = false) => {
    switch (type) {
        case 'radio':
            return <Input type="radio" disabled={!isPreviewMode} />;
        case 'checkbox':
            return <Input type="checkbox" disabled={!isPreviewMode} />;
        default:
            return <span className="option-label">{index + 1}.</span>;
    }
};

renderInputElement.propTypes = {
    type: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    isPreviewMode: PropTypes.bool,
}