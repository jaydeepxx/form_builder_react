import React from 'react';
import PropTypes from 'prop-types';
import OptionItem from '../OptionItem/index.jsx';
import Button from "../../../../../../../../atoms/Button/index.jsx";

const Dropdown = ({ options = [{ value: 'Option 1' }], questionIndex }) => {
    return (
        <ol
            className="question-options"
        >
            {options.map((option, optionIndex) => (
                <OptionItem
                    key={optionIndex}
                    type="number"
                    index={optionIndex}
                    value={option.value}
                    questionIndex={questionIndex}
                    optionIndex={optionIndex}
                />
            ))}
            <li className="option add-option-button">
                <span className="option-label">{options.length + 1}.</span>
                <Button
                    type="button"
                    className="add-option-button"
                >
                    Add option
                </Button>
            </li>
        </ol>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array,
    questionIndex: PropTypes.number
};

export default Dropdown;