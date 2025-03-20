import React from 'react';
import './DateTime.css'

const TimeQuestion = ({ questionIndex }) => {
  return (
    <div 
      className="question-options"
      id={`time-options-${questionIndex}`}
      data-question-index={questionIndex}
    >
      <label className="input-time">
        Time
        <span className="material-symbols-outlined">access_time</span>
        <input 
          type="time" 
          id={`time-input-${questionIndex}`}
          data-question-index={questionIndex}
          disabled 
          hidden 
        />
      </label>
    </div>
  );
};

export default TimeQuestion;