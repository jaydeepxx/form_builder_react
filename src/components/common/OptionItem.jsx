import React from 'react';
import './OptionItem.css'

const OptionItem = ({ 
  type = 'radio', 
  index, 
  value = '', 
  questionIndex,
  optionIndex,
  isRow = false,
  isColumn = false
}) => {
  const renderInputElement = () => {
    switch (type) {
      case 'radio':
        return <input 
          type="radio" 
          name={`mcq-${questionIndex}`} 
          id={`radio-${questionIndex}-${optionIndex}`}
          disabled 
        />;
      case 'checkbox':
        return <input 
          type="checkbox" 
          name={`checkbox-${questionIndex}`} 
          id={`checkbox-${questionIndex}-${optionIndex}`}
          disabled 
        />;
      default:
        return <span className="option-label">{optionIndex + 1}.</span>;
    }
  };

  const inputId = isRow
    ? `row-input-${questionIndex}-${optionIndex}`
    : isColumn
      ? `column-input-${questionIndex}-${optionIndex}`
      : `option-input-${questionIndex}-${optionIndex}`;

  const optionId = isRow
    ? `row-option-${questionIndex}-${optionIndex}`
    : isColumn
      ? `column-option-${questionIndex}-${optionIndex}`
      : `option-${questionIndex}-${optionIndex}`;

  return (
    <li 
      className="option"
      id={optionId}
      data-question-index={questionIndex}
      data-option-index={optionIndex}
      data-is-row={isRow.toString()}
      data-is-column={isColumn.toString()}
    >
      {renderInputElement()}
      <input
        type="text"
        className="option-input label-medium"
        id={inputId}
        value={value}
        data-question-index={questionIndex}
        data-option-index={optionIndex}
        data-is-row={isRow.toString()}
        data-is-column={isColumn.toString()}
      />
      <button
        className="material-symbols-outlined icon-button"
        aria-label="remove-option"
        id={isRow
          ? `remove-row-${questionIndex}-${optionIndex}`
          : isColumn
            ? `remove-column-${questionIndex}-${optionIndex}`
            : `remove-option-${questionIndex}-${optionIndex}`}
        data-question-index={questionIndex}
        data-option-index={optionIndex}
        data-is-row={isRow.toString()}
        data-is-column={isColumn.toString()}
      >
        close
        {/* <span className="material-symbols-outlined">close</span> */}
      </button>
    </li>
  );
};

export default OptionItem;