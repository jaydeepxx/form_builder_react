import React from 'react';
import PropTypes from 'prop-types';
import OptionItem from '../OptionItem/index.jsx';
import Button from "../../../../../../../../atoms/Button/index.jsx";
import addOption from "../../helpers/questionCard.addOption.jsx";
import removeOption from "../../helpers/questionCard.removeOption.jsx";
import updateOptionValue from "../../helpers/questionCard.updateOptionValue.jsx";

const Dropdown = ({   formData,
                      setFormData,
                      question,
                      isPreviewMode = false }) => {
    const handleAddOption = (questionId , isRow = false, isColumn = false) => {
        addOption(questionId, setFormData, isRow, isColumn);
    };

    const handleRemoveOption = (questionId, optionIndex, isRow = false, isColumn = false) => {
        removeOption(questionId, setFormData, optionIndex, isRow, isColumn)
    };

    const handleUpdateOptionValue = (questionId, optionIndex, newValue, isRow = false, isColumn = false) => {
        console.log(questionId, optionIndex, newValue, isRow, isColumn)
        updateOptionValue(questionId,  setFormData, optionIndex, newValue, isRow, isColumn)
    }
    return (
        <ol
            className="question-options"
        >
            {question.options.map((option, index) => (
                <OptionItem
                    key={index}
                    questionId={question.id}
                    type="number"
                    index={index}
                    value={option.value}
                    isPreviewMode={isPreviewMode}
                    onRemoveOption={() => handleRemoveOption(question.id, index, false, false)}
                    onUpdateOptionValue={(newValue) => handleUpdateOptionValue(question.id, index, newValue, false, false)}
                />
            ))}
            {!isPreviewMode && (
                <li className="option add-option-button">
                    <span className="option-label">{question.options.length + 1}.</span>
                    <Button
                        type="button"
                        className="add-option-button"
                        onClick={() => handleAddOption(question.id, false, false)}
                    >
                        Add option
                    </Button>
                </li>
            )}

        </ol>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array,
    questionIndex: PropTypes.number
};

export default Dropdown;