import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ checked, onChange, label }) => {
  return (
    <label className="toggle-switch-label">
      {label && <span className="toggle-label">{label}</span>}
      <input
        type="checkbox"
        className="required-toggle"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

export default ToggleSwitch;