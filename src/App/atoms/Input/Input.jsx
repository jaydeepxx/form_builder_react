import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
                   value,
                   type = 'text',
                   onChange,
                   placeholder,
                   className = '',
                   ...props
               }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`input ${className}`}
            {...props}
        />
    );
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
};

export default Input;