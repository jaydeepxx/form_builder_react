import React from 'react';
import PropTypes from 'prop-types';
import OptionItem from '../OptionItem/index.jsx';
import './Grid.css'
import Input from "../../../../../../../../atoms/Input/Input.jsx";
import Button from "../../../../../../../../atoms/Button/index.jsx";
import addOption from "../../helpers/questionCard.addOption.jsx";
import removeOption from "../../helpers/questionCard.removeOption.jsx";
import updateOptionValue from "../../helpers/questionCard.updateOptionValue.jsx";

const Grid = ({
                  formData,
                  setFormData,
                  question,
                  isPreviewMode = false,
              }) => {
    const handleRemoveOption = (questionId, optionIndex, isRow = false, isColumn = false) => {
        removeOption(questionId, setFormData, optionIndex, isRow, isColumn)
    }

    const handleUpdateOptionValue = (questionId, optionIndex, newValue, isRow = false, isColumn = false) => {
        console.log(questionId, optionIndex, newValue, isRow, isColumn)
        updateOptionValue(questionId,  setFormData, optionIndex, newValue, isRow, isColumn)
    }

    const handleAddOption = (questionId, isRow = false, isColumn = false) => {
        addOption(question.id, setFormData, isRow, isColumn);
    }

    return (
        <div
            className="grid-container"
        >
            {/* Rows */}
            <ul
                className="grid-rows"
            >
                <span className="row-heading">Rows</span>
                {question.options.rows.map((row, rowIndex) => (
                    <OptionItem
                        key={rowIndex}
                        type="number"
                        index={rowIndex}
                        value={row.value}
                        isRow={true}
                        isPreviewMode={isPreviewMode}
                        onRemoveOption={() => handleRemoveOption(question.id, rowIndex, true, false)}
                        onUpdateOptionValue={(newValue) => handleUpdateOptionValue(question.id, rowIndex, newValue,true, false)}
                    />
                ))}
                {!isPreviewMode && (
                <li className="option add-option-button">
                    <span className="option-label">{question.options.rows.length + 1}.</span>
                    <Button
                        type="button"
                        className="add-option-button"
                        data-is-row="true"
                        onClick={() => handleAddOption(question.id, true, false)}
                    >
                        Add row
                    </Button>
                </li>
                )}
            </ul>

            {/* Columns */}
            <ul
                className="grid-columns"
            >
                <span className="column-heading">Columns</span>
                {question.options.columns.map((column, columnIndex) => (
                    <OptionItem
                        key={columnIndex}
                        type="radio"
                        value={column.value}
                        isColumn={true}
                        onRemoveOption={() => handleRemoveOption(question.id, columnIndex, false, true)}
                        onUpdateOptionValue={(newValue) => handleUpdateOptionValue(question.id, columnIndex, newValue,false, true)}
                    />
                ))}
                {!isPreviewMode && (
                <li className="option add-option-button">
                    <Input type="radio" disabled />
                    <Button
                        type="button"
                        className="add-option-button"
                        data-is-column="true"
                        onClick={() => handleAddOption(question.id, false, true)}
                    >
                        Add column
                    </Button>
                </li>
                )}
            </ul>
        </div>
    );
};

Grid.propTypes = {
    options: PropTypes.object,
    questionIndex: PropTypes.number
};

export default Grid;