import React from 'react';
import PropTypes from 'prop-types';
import './FormDescription.css';
import Textarea from '../../../../atoms/Textarea/index.jsx';
import descriptionChange from "./formDescription.helpers.jsx";

const FormDescription = ({ formDescription, isPreviewMode = false, setFormData }) => {
    const handleDescriptionChange = (e) => {
        descriptionChange(e, setFormData);
    }
    return (
        <Textarea
            value={formDescription}
            placeholder="Form description"
            className="form-description label-description"
            onChange={handleDescriptionChange}
            disabled={isPreviewMode}
            readOnly={isPreviewMode}
        />
    );
};

FormDescription.propTypes = {
    description: PropTypes.string,
    isPreviewMode: PropTypes.bool,
}

export default FormDescription;