import React from 'react';
import OptionItem from '../common/OptionItem';

const Dropdown = ({ options = [{ value: 'Option 1' }], questionIndex }) => {
  return (
    <ol 
      className="question-options"
      id={`question-options-${questionIndex}`}
      data-question-index={questionIndex}
    >
      {options.map((option, optionIndex) => (
        <OptionItem
          key={optionIndex}
          type="number"
          index={optionIndex}
          value={option.value}
          questionIndex={questionIndex}
          optionIndex={optionIndex}
        />
      ))}
      <li className="option add-option-button">
        <span className="option-label">{options.length + 1}.</span>
        <button 
          type="button" 
          className="add-option-button"
          id={`add-option-${questionIndex}`}
          data-question-index={questionIndex}
        >
          Add option
        </button>
      </li>
    </ol>
  );
};

export default Dropdown;