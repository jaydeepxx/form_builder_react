import React from 'react';
import PropTypes from 'prop-types';
// import './Checkboxes.css';
import OptionItem from '../OptionItem/index.jsx';
import Button from '../../../../../../../../atoms/Button/index.jsx';
import Input from "../../../../../../../../atoms/Input/Input.jsx";

const Checkboxes = ({
                        options = [{ value: 'Option 1' }],
                        isPreviewMode = false
                    }) => {
    return (
        <ul className="question-options">
            {options.map((option, index) => (
                <OptionItem
                    key={index}
                    type="checkbox"
                    index={index}
                    value={option.value}
                    isPreviewMode={isPreviewMode}
                />
            ))}

            {!isPreviewMode && (
                <li className="option add-option-button">
                    <Input type="checkbox" disabled />
                    <Button className="add-option-button">
                        Add option
                    </Button>
                </li>
            )}
        </ul>
    );
};

Checkboxes.propTypes = {
    options: PropTypes.array,
    isPreviewMode: PropTypes.bool
};

export default Checkboxes;