import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TypeSelector.css";
import Icon from "../../../../../../../../atoms/Icon/index.jsx";
import { QUESTION_TYPES_SELECTOR } from "./typeSelector.constants.jsx";
import typeSelector from "./typeSelector.helpers.jsx";
import { saveToHistory } from "../../../../../../formContent.helpers.jsx";

const TypeSelector = ({
  question,
  setFormData,
  selectedType = "multipleChoice",
  setHistory,
  formData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedTypeData = QUESTION_TYPES_SELECTOR.find(
    (type) => type.value === selectedType,
  );

  const handleChangeQuestionType = (questionId, newType) => {
    // console.log(newType)
    typeSelector(questionId, newType, setFormData, formData);
    setIsOpen(false);

    saveToHistory(setHistory, formData);
  };

  return (
    <div className="custom-select">
      <div className="select-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="selected-option">
          <Icon name={selectedTypeData.icon} />
          <span>{selectedTypeData.label}</span>
        </span>
        <Icon name="arrow_drop_down" />
      </div>

      <div
        className="options-type"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        {QUESTION_TYPES_SELECTOR.map((type) => (
          <div
            key={type.value}
            className={`option-type ${type.value === selectedType ? "selected" : ""}`}
            onClick={() => {
              handleChangeQuestionType(question.id, type.value);
            }}
          >
            <Icon name={type.icon} />
            <span>{type.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

TypeSelector.propTypes = {
  selectedType: PropTypes.string,
};

export default TypeSelector;
