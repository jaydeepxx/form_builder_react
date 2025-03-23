import React from 'react';
import PropTypes from 'prop-types';
import './Textarea.css';

const Textarea = ({
                      value,
                      onChange,
                      placeholder,
                      className = '',
                      ...props
                  }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`textarea ${className}`}
            {...props}
        />
    );
};

Textarea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
};

export default Textarea;