import React from "react";
import PropTypes from "prop-types";
// import './Checkboxes.css';
import OptionItem from "../OptionItem/index.jsx";
import Button from "../../../../../../../../atoms/Button/index.jsx";
import Input from "../../../../../../../../atoms/Input/Input.jsx";
import addOption from "../../helpers/questionCard.addOption.jsx";
import removeOption from "../../helpers/questionCard.removeOption.jsx";
import updateOptionValue from "../../helpers/questionCard.updateOptionValue.jsx";

const Checkboxes = ({
  formData,
  setFormData,
  question,
  isPreviewMode = false,
}) => {
  const handleAddOption = (questionId, isRow = false, isColumn = false) => {
    addOption(questionId, setFormData, isRow, isColumn);
  };

  const handleRemoveOption = (
    questionId,
    optionIndex,
    isRow = false,
    isColumn = false,
  ) => {
    removeOption(questionId, setFormData, optionIndex, isRow, isColumn);
  };

  const handleUpdateOptionValue = (
    questionId,
    optionIndex,
    newValue,
    isRow = false,
    isColumn = false,
  ) => {
    console.log(questionId, optionIndex, newValue, isRow, isColumn);
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
          questionId={question.id}
          type="checkbox"
          index={index}
          value={option.value}
          isPreviewMode={isPreviewMode}
          onRemoveOption={() =>
            handleRemoveOption(question.id, index, false, false)
          }
          onUpdateOptionValue={(newValue) =>
            handleUpdateOptionValue(question.id, index, newValue, false, false)
          }
        />
      ))}

      {!isPreviewMode && (
        <li className="option add-option-button">
          <Input type="checkbox" disabled />
          <Button
            className="add-option-button"
            onClick={() => handleAddOption(question.id, false, false)}
          >
            Add option
          </Button>
        </li>
      )}
    </ul>
  );
};

Checkboxes.propTypes = {
  options: PropTypes.array,
  isPreviewMode: PropTypes.bool,
};

export default Checkboxes;
