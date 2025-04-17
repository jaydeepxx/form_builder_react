import React from 'react';
import PropTypes from 'prop-types';
// import './MultipleChoice.css';
import OptionItem from '../OptionItem/index.jsx';
import Button from '../../../../../../../../atoms/Button/index.jsx';
import Input from "../../../../../../../../atoms/Input/Input.jsx";

const MultipleChoice = ({
                            options = [{ value: 'Option 1' }],
                            isPreviewMode = false
                        }) => {
    return (
        <ul className="question-options">
            {options.map((option, index) => (
                <OptionItem
                    key={index}
                    type="radio"
                    index={index}
                    value={option.value}
                    isPreviewMode={isPreviewMode}
                />
            ))}

            {!isPreviewMode && (
                <li className="option add-option-button">
                    <Input type="radio" disabled />
                    <Button className="add-option-button">
                        Add option
                    </Button>
                </li>
            )}
        </ul>
    );
};

MultipleChoice.propTypes = {
    options: PropTypes.array,
    isPreviewMode: PropTypes.bool
};

export default MultipleChoice;