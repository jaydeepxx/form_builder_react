import React from 'react';
import PropTypes from 'prop-types';
import './OptionItem.css';
import Input from '../../../../../../../../atoms/Input/index.jsx';
import IconButton from '../../../../../../../../molecules/IconButton/index.jsx';
import {renderInputElement} from "./optionItem.helpers.jsx";

const OptionItem = ({
                        type = 'radio',
                        index,
                        value = '',
                        isPreviewMode = false
                    }) => {
    return (
        <>
            <li className="option">
                {renderInputElement(type,index)}
                <Input
                    value={value}
                    className="option-input label-medium"
                    disabled={isPreviewMode}
                    readOnly={isPreviewMode}
                />
                {!isPreviewMode && (
                    <IconButton
                        icon="close"
                        label="Remove option"
                        className="remove-option-button"
                    />
                )}
            </li>
        </>

    );
};

OptionItem.propTypes = {
    type: PropTypes.string,
    index: PropTypes.number,
    value: PropTypes.string,
    isPreviewMode: PropTypes.bool,
}

export default OptionItem;