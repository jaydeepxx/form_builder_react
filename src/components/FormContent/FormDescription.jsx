import React from 'react';
import './FormDescription.css'

const FormDescription = ({ description = '' }) => {
  return (
    <textarea
      className="form-description label-description"
      id="form-description"
      name="form-description"
      placeholder="Form description"
      value={description}
    />
  );
};

export default FormDescription;