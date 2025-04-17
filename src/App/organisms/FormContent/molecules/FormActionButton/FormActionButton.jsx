import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../../../atoms/Button/index.jsx";

const FormActionButton = ({ isPreviewMode = false }) => {
    return (
        <>
            {isPreviewMode ? (
                <Button
                    variant="primary"
                    className="preview-submit-button"
                >
                    Submit
                </Button>
            ): (
                <Button
                    variant="primary"
                    className="add-question-button"
                >
                    Add Question
                </Button>
            )}
        </>
    );
};

FormActionButton.propTypes = {
    isPreviewMode: PropTypes.bool,
}

export default FormActionButton;