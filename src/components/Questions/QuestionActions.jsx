import React from 'react';
import './QuestionActions.css'

const QuestionActions = ({ required = false, questionIndex }) => {
  return (
    <div 
      className="question-actions"
      id={`question-actions-${questionIndex}`}
      data-question-index={questionIndex}
    >
      <button 
        className="material-symbols-outlined icon-button copy-question-button"
        id={`copy-question-${questionIndex}`}
        data-question-index={questionIndex}
        aria-label="Copy question"
        type="button"
      >
        content_copy
      </button>
      
      <button 
        className="material-symbols-outlined icon-button delete-question-button"
        id={`delete-question-${questionIndex}`}
        data-question-index={questionIndex}
        aria-label="Delete question"
        type="button"
      >
        delete
      </button>
      
      <div className="hor-line"></div>
      
      <label 
        className="required-option"
        aria-label="Required option"
        id={`required-toggle-label-${questionIndex}`}
        data-question-index={questionIndex}
      >
        <span className="required">Required</span>
        <input
          type="checkbox"
          className="required-toggle"
          id={`required-toggle-${questionIndex}`}
          data-question-index={questionIndex}
          checked={required}
        />
      </label>
    </div>
  );
};

export default QuestionActions;