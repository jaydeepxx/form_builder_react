import React from 'react';
import PropTypes from 'prop-types';
import {BUTTON_TYPES} from './button.constants.js'
import './Button.css';

const Button = ({
                    children,
                    variant = 'default',
                    onClick,
                    className = '',
                    disabled = false,
                    ...props
                }) => {
    return (
        <button
            className={`button-${variant} ${className} `}
            onClick={onClick}
            disabled={disabled}
            type="button"
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(BUTTON_TYPES),
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};


export default Button;