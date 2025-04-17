import React from 'react';
import PropTypes from 'prop-types';
import './FormDescription.css';
import Textarea from '../../../../atoms/Textarea/index.jsx';

const FormDescription = ({ description, isPreviewMode = false }) => {
    return (
        <Textarea
            value={description}
            placeholder="Form description"
            className="form-description label-description"
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