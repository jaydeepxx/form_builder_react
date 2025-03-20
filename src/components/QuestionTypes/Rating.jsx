import React from 'react';
import './LinearScaleRating.css'

const Rating = ({ scale = 5, questionIndex }) => {
  return (
    <div id={`rating-container-wrapper-${questionIndex}`} data-question-index={questionIndex}>
      <div 
        className="scale-question-option"
        id={`rating-scale-${questionIndex}`}
        data-question-index={questionIndex}
      >
        <select 
          className="range-dropdown"
          id={`rating-range-${questionIndex}`}
          data-question-index={questionIndex}
        >
          {[1, 2, 3, 4, 5].map(value => (
            <option key={value} value={value} selected={value === scale}>
              {value}
            </option>
          ))}
        </select>
      </div>
      
      <div 
        className="rating-container"
        id={`rating-stars-${questionIndex}`}
        data-question-index={questionIndex}
      >
        {Array.from({ length: scale }, (_, i) => i + 1).map(value => (
          <div 
            key={value} 
            className="rating-item"
            id={`rating-item-${questionIndex}-${value}`}
            data-question-index={questionIndex}
            data-rating-value={value}
          >
            <span>{value}</span>
            <label className="material-symbols-outlined star-icon">
              star
              <input 
                type="radio" 
                name={`rating-${questionIndex}`} 
                value={value} 
                id={`rating-input-${questionIndex}-${value}`}
                data-question-index={questionIndex}
                disabled 
                hidden 
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;