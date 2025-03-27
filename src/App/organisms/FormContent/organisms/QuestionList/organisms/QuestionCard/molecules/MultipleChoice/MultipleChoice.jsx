import React from "react";
import PropTypes from "prop-types";
// import './MultipleChoice.css';
import OptionItem from "../OptionItem/index.jsx";
import Button from "../../../../../../../../atoms/Button/index.jsx";
import Input from "../../../../../../../../atoms/Input/Input.jsx";
import addOption from "../../helpers/questionCard.addOption.jsx";
import removeOption from "../../helpers/questionCard.removeOption.jsx";
import updateOptionValue from "../../helpers/questionCard.updateOptionValue.jsx";

const MultipleChoice = ({
  formData,
  setFormData,
  question,
  isPreviewMode = false,
  saveToHistory,
}) => {
  // console.log(formData)
  const handleAddOption = (questionId, isRow = false, isColumn = false) => {
    addOption(questionId, setFormData, isRow, isColumn, formData);
    saveToHistory();
  };

  const handleRemoveOption = (
    questionId,
    optionIndex,
    isRow = false,
    isColumn = false,
  ) => {
    removeOption(questionId, setFormData, optionIndex, isRow, isColumn);
    saveToHistory();
  };

  const handleUpdateOptionValue = (
    questionId,
    optionIndex,
    newValue,
    isRow = false,
    isColumn = false,
  ) => {
    // console.log(questionId, optionIndex, newValue, isRow, isColumn)
    updateOptionValue(
      questionId,
      setFormData,
      optionIndex,
      newValue,
      isRow,
      isColumn,
    );
  };

  return (
    <ul className="question-options">
      {question.options.map((option, index) => (
        <OptionItem
          key={index}
          type="radio"
          index={index}
          value={option.value}
          isPreviewMode={isPreviewMode}
          onRemoveOption={(e) =>
            handleRemoveOption(question.id, index, false, false, e)
          }
          onUpdateOptionValue={(newValue) =>
            handleUpdateOptionValue(question.id, index, newValue, false, false)
          }
        />
      ))}

      {!isPreviewMode && (
        <li className="option add-option-button">
          <Input type="radio" disabled />
          <Button
            className="add-option-button"
            onClick={(e) => handleAddOption(question.id, false, false, e)}
          >
            Add option
          </Button>
        </li>
      )}
    </ul>
  );
};

MultipleChoice.propTypes = {
  options: PropTypes.array,
  isPreviewMode: PropTypes.bool,
};

export default MultipleChoice;
