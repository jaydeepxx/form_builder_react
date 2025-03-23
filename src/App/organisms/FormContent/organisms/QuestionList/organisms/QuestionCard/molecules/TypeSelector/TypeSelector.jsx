import React, { useState } from 'react';
import PropTypes from "prop-types";
import './TypeSelector.css';
import Icon from '../../../../../../../../atoms/Icon/index.jsx';
import { QUESTION_TYPES_SELECTOR} from './typeSelector.constants.jsx';

const TypeSelector = ({ selectedType = 'multipleChoice' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedTypeData = QUESTION_TYPES_SELECTOR.find(type => type.value === selectedType);

    return (
        <div className="custom-select">
            <div
                className="select-button"
                onClick={() => setIsOpen(!isOpen)}
            >
        <span className="selected-option">
          <Icon name={selectedTypeData.icon} />
          <span>{selectedTypeData.label}</span>
        </span>
                <Icon name="arrow_drop_down" />
            </div>

            <div
                className="options-type"
                style={{ display: isOpen ? 'flex' : 'none' }}
            >
                {QUESTION_TYPES_SELECTOR.map((type) => (
                    <div
                        key={type.value}
                        className={`option-type ${type.value === selectedType ? 'selected' : ''}`}
                    >
                        <Icon name={type.icon} />
                        <span>{type.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

TypeSelector.propTypes = {
    selectedType: PropTypes.string,
}

export default TypeSelector;