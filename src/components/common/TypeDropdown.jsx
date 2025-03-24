import React, { useState } from 'react';
import './TypeDropdown.css'

const questionTypes = [
  { value: 'multipleChoice', icon: 'radio_button_checked', label: 'Multiple choice' },
  { value: 'checkBoxes', icon: 'check_box', label: 'Checkboxes' },
  { value: 'dropDown', icon: 'arrow_drop_down_circle', label: 'Dropdown' },
  { value: 'multipleChoiceGrid', icon: 'apps', label: 'Multiple choice grid' },
  { value: 'linearScale', icon: 'linear_scale', label: 'Linear scale' },
  { value: 'date', icon: 'event', label: 'Date' },
  { value: 'time', icon: 'access_time', label: 'Time' },
  { value: 'rating', icon: 'star', label: 'Rating' }
];

const TypeDropdown = ({ selectedType, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedTypeData = questionTypes.find(type => type.value === selectedType);
  
  return (
    <div className="custom-select">
      <div 
        className="select-button" 
        onClick={() => setIsOpen(!isOpen)}
        id={`question-type-button-${index}`}
        data-question-index={index}
      >
        <span className="selected-option">
          <i className="material-symbols-outlined">{selectedTypeData?.icon}</i>
          <span>{selectedTypeData?.label}</span>
        </span>
        <i className="material-symbols-outlined">arrow_drop_down</i>
      </div>
      
      <div 
        className="options-type" 
        id={`question-type-options-${index}`}
        data-question-index={index}
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        {questionTypes.map((type) => (
          <div 
            key={type.value}
            className={`option-type ${type.value === selectedType ? 'selected' : ''}`}
            data-value={type.value}
            id={`question-type-option-${index}-${type.value}`}
            data-question-index={index}
          >
            <i className="material-symbols-outlined">{type.icon}</i>
            <span>{type.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeDropdown;