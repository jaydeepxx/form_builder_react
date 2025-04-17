import React from 'react';
import './Toggle.css';

const Toggle = ({
                    checked = false,
                    onChange,
                    className = '',
                    ...props
                }) => {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={`toggle ${className}`}
            {...props}
        />
    );
};

export default Toggle;