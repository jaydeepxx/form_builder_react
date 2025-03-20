import React from 'react';
import TypeDropdown from '../common/TypeDropdown';
import './QuestionHeader.css'

const QuestionHeader = ({ title = '', type = 'multipleChoice', questionIndex }) => {
  return (
    <div className="question-header">
      <input
        type="text"
        className="question-input label-large"
        placeholder="Question"
        aria-label="Question Heading"
        id={`question-title-${questionIndex}`}
        data-question-index={questionIndex}
        value={title}
      />
      
      <label className="material-symbols-outlined upload-icon">
        image
        <input 
          type="file" 
          className="image-upload" 
          id={`question-image-${questionIndex}`}
          data-question-index={questionIndex}
          hidden 
        />
      </label>
      
      <TypeDropdown 
        selectedType={type} 
        index={questionIndex} 
      />
    </div>
  );
};

export default QuestionHeader;