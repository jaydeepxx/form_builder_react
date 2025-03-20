import React from 'react';
import './ActionButtons.css'

const ActionButtons = () => {
  return (
    <>
      <li>
        <button 
          className="clear-button"
          id="clear-form-button"
          aria-label="Clear Form"
        >
          Clear form
        </button>
      </li>
      <li>
        <button 
          className="publish-button"
          id="publish-button"
          aria-label="Publish Form"
        >
          Publish
        </button>
      </li>
    </>
  );
};

export default ActionButtons;