import React from 'react';
import './LinearScaleRating.css'

const LinearScale = ({ min = 1, max = 5, questionIndex }) => {
  return (
    <div 
      className="scale-question-option"
      id={`linear-scale-${questionIndex}`}
      data-question-index={questionIndex}
    >
      <select 
        className="range-dropdown"
        id={`linear-scale-min-${questionIndex}`}
        data-question-index={questionIndex}
      >
        {[0, 1].map(value => (
          <option key={value} value={value} selected={value === min}>
            {value}
          </option>
        ))}
      </select>
      <span>to</span>
      <select 
        className="range-dropdown"
        id={`linear-scale-max-${questionIndex}`}
        data-question-index={questionIndex}
      >
        {Array.from({ length: max }, (_, i) => i + 2).map(value => (
          <option key={value} value={value} selected={value === max}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LinearScale;