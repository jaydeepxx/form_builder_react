import React from 'react';
import OptionItem from '../common/OptionItem';
import './Grid.css'

const Grid = ({ 
  options = {
    rows: [{ value: 'Row 1' }],
    columns: [{ value: 'Column 1' }]
  },
  questionIndex
}) => {
  return (
    <div 
      className="grid-container"
      id={`grid-container-${questionIndex}`}
      data-question-index={questionIndex}
    >
      {/* Rows */}
      <ul 
        className="grid-rows"
        id={`grid-rows-${questionIndex}`}
        data-question-index={questionIndex}
      >
        <span className="row-heading">Rows</span>
        {options.rows.map((row, rowIndex) => (
          <OptionItem
            key={rowIndex}
            type="number"
            index={rowIndex}
            value={row.value}
            questionIndex={questionIndex}
            optionIndex={rowIndex}
            isRow={true}
          />
        ))}
        <li className="option add-option-button">
          <span className="option-label">{options.rows.length + 1}.</span>
          <button 
            type="button" 
            className="add-option-button"
            id={`add-row-${questionIndex}`}
            data-question-index={questionIndex}
            data-is-row="true"
          >
            Add row
          </button>
        </li>
      </ul>
      
      {/* Columns */}
      <ul 
        className="grid-columns"
        id={`grid-columns-${questionIndex}`}
        data-question-index={questionIndex}
      >
        <span className="column-heading">Columns</span>
        {options.columns.map((column, columnIndex) => (
          <OptionItem
            key={columnIndex}
            type="radio"
            index={columnIndex}
            value={column.value}
            questionIndex={questionIndex}
            optionIndex={columnIndex}
            isColumn={true}
          />
        ))}
        <li className="option add-option-button">
          <input type="radio" name={`multipleChoiceGrid-${questionIndex}`} disabled />
          <button 
            type="button" 
            className="add-option-button"
            id={`add-column-${questionIndex}`}
            data-question-index={questionIndex}
            data-is-column="true"
          >
            Add column
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Grid;