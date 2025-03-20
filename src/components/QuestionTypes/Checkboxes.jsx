import React from 'react';
import OptionItem from '../common/OptionItem';

const Checkboxes = ({ options = [{ value: 'Option 1' }], questionIndex }) => {
  return (
    <ul 
      className="question-options"
      id={`question-options-${questionIndex}`}
      data-question-index={questionIndex}
    >
      {options.map((option, optionIndex) => (
        <OptionItem
          key={optionIndex}
          type="checkbox"
          index={optionIndex}
          value={option.value}
          questionIndex={questionIndex}
          optionIndex={optionIndex}
        />
      ))}
      <li className="option add-option-button">
        <input type="checkbox" disabled />
        <button 
          type="button" 
          className="add-option-button"
          id={`add-option-${questionIndex}`}
          data-question-index={questionIndex}
        >
          Add option
        </button>
      </li>
    </ul>
  );
};

export default Checkboxes;