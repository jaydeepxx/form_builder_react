import React from 'react';
import './FormTitle.css'

const FormTitle = ({ title = 'Untitled form' }) => {
  return (
    <input
      type="text"
      className="form-title-input label-title"
      id="form-title"
      value={title}
      placeholder="Form title"
    />
  );
};

export default FormTitle;