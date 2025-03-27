import React from 'react';
import './FormTitle.css';
import Input from '../../../../atoms/Input/index.jsx';
import titleChange from "./formTitle.helpers.jsx";
import PropTypes from "prop-types";

const FormTitle = ({ formTitle = "Untitled Form", isPreviewMode = false, setFormData }) => {
    const handleTitleChange = (e) => {
        titleChange(e, setFormData);
    }
    return (
        <Input
            value={formTitle}
            placeholder="Form title"
            className="form-title-input label-title"
            onChange={handleTitleChange}
            disabled={isPreviewMode}
            readOnly={isPreviewMode}
        />
    );
};

FormTitle.propTypes = {
    formTitle: PropTypes.string,
    isPreviewMode: PropTypes.bool,
    setFormData: PropTypes.func,
}

export default FormTitle;