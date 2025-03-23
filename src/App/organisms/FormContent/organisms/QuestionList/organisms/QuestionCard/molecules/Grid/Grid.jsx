import React from 'react';
import PropTypes from 'prop-types';
import OptionItem from '../OptionItem/index.jsx';
import './Grid.css'
import Input from "../../../../../../../../atoms/Input/Input.jsx";
import Button from "../../../../../../../../atoms/Button/index.jsx";

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
        >
            {/* Rows */}
            <ul
                className="grid-rows"
            >
                <span className="row-heading">Rows</span>
                {options.rows.map((row, rowIndex) => (
                    <OptionItem
                        key={rowIndex}
                        type="number"
                        index={rowIndex}
                        value={row.value}
                        isRow={true}
                    />
                ))}
                <li className="option add-option-button">
                    <span className="option-label">{options.rows.length + 1}.</span>
                    <Button
                        type="button"
                        className="add-option-button"
                        data-is-row="true"
                    >
                        Add row
                    </Button>
                </li>
            </ul>

            {/* Columns */}
            <ul
                className="grid-columns"
            >
                <span className="column-heading">Columns</span>
                {options.columns.map((column, columnIndex) => (
                    <OptionItem
                        key={columnIndex}
                        type="radio"
                        value={column.value}
                        isColumn={true}
                    />
                ))}
                <li className="option add-option-button">
                    <Input type="radio" name={`multipleChoiceGrid-${questionIndex}`} disabled />
                    <Button
                        type="button"
                        className="add-option-button"
                        data-is-column="true"
                    >
                        Add column
                    </Button>
                </li>
            </ul>
        </div>
    );
};

Grid.propTypes = {
    options: PropTypes.object,
    questionIndex: PropTypes.number
};

export default Grid;