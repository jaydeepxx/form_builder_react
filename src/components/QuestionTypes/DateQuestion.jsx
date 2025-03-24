import React from 'react';
import './DateTime.css'

const DateQuestion = ({ questionIndex }) => {
  return (
    <div 
      className="question-options"
      id={`date-options-${questionIndex}`}
      data-question-index={questionIndex}
    >
      <label className="input-date">
        Month, day, year
        <span className="material-symbols-outlined">event</span>
        <input 
          type="date" 
          id={`date-input-${questionIndex}`}
          data-question-index={questionIndex}
          disabled 
          hidden 
        />
      </label>
    </div>
  );
};

export default DateQuestion;