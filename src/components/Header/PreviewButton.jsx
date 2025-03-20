import React from 'react';
import './PreviewButton.css'

const PreviewButton = () => {
  return (
    <li>
      <button 
        className="preview-button"
        id="preview-button"
        aria-label="Preview Form"
      >
        Preview
      </button>
    </li>
  );
};

export default PreviewButton;