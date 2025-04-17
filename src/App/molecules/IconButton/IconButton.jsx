import React from 'react';
import './IconButton.css';
import PropTypes from 'prop-types';
import Button from "../../atoms/Button/index.jsx";

const IconButton = ({
                        icon,
                        label,
                        onClick,
                        className = '',
                        ...props
                    }) => {
    return (
        <Button
            className={`material-symbols-outlined icon icon-button ${className}`}
            onClick={onClick}
            aria-label={label}
            type="button"
            {...props}
        >
            {icon}
        </Button>
    );
};


IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
}

export default IconButton;