import React from 'react';
import PropTypes from 'prop-types';
import './RequiredToggle.css';
import Toggle from './atom/Toggle/index.jsx';

const RequiredToggle = ({ checked = false }) => {
    return (
        <label className="required-option">
            <span className="required">Required</span>
            <Toggle
                checked={checked}
                className="required-toggle"
            />
        </label>
    );
};

RequiredToggle.propTypes = {
    checked: PropTypes.bool,
}

export default RequiredToggle;