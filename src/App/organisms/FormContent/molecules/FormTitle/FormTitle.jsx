import React from 'react';
import './FormTitle.css';
import Input from '../../../../atoms/Input/index.jsx';
import PropTypes from "prop-types";

const FormTitle = ({ title = "Untitled Form", isPreviewMode = false }) => {
    return (
        <Input
            value={title}
            placeholder="Form title"
            className="form-title-input label-title"
            disabled={isPreviewMode}
            readOnly={isPreviewMode}
        />
    );
};

FormTitle.propTypes = {
    title: PropTypes.string,
    isPreviewMode: PropTypes.bool,
}

export default FormTitle;