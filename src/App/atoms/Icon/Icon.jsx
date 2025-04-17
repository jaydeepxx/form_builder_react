import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = ({ name, className = '' }) => {
    return (
        <span className={`material-symbols-outlined icon ${className}`}>
            {name}
        </span>
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Icon;