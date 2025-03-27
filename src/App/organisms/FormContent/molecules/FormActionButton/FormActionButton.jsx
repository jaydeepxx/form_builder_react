import React from 'react';
import PropTypes from 'prop-types';
import Button from "../../../../atoms/Button/index.jsx";
// import {saveToHistory} from "../../formContent.helpers.jsx";

const FormActionButton = ({ setFormData, isPreviewMode = false, saveToHistory }) => {
    const handleAddQuestion = () => {
        const newQuestion = {
            id: `q${Date.now()}${Math.floor(Math.random() * 1000)}`,
            type: 'multipleChoice',
            title: '',
            required: false,
            options: [{ value: 'Option 1' }]
        };

        setFormData(prev => ({
            ...prev,
            questions: [...prev.questions, newQuestion]
        }));

        saveToHistory();
    };
    return (
        <>
            {isPreviewMode ? (
                <Button
                    variant="primary"
                    // className={}
                >
                    Submit
                </Button>
            ): (
                <Button
                    variant="primary"
                    className={'add-question-button'}
                    onClick={handleAddQuestion}
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