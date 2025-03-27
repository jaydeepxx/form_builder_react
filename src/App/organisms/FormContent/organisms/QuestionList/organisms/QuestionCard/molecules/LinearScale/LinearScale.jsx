import React from 'react';
import PropTypes from "prop-types";
import {rangeArray} from '../../helpers/questionCard.rangeArray.jsx'
import './LinearScale.css'

const LinearScale = ({ min = 2, max = 5 }) => {
    return (
        <div
            className="scale-question-option"
        >
            <select
                className="range-dropdown"
            >
                {rangeArray(0,1).map(value => (
                    <option key={value} value={value} selected={value === min}>
                        {value}
                    </option>
                ))}
            </select>
            <span>to</span>
            <select
                className="range-dropdown"
            >
                {rangeArray(min, max).map(value => (
                    <option key={value} value={value} selected={value === max}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
};

LinearScale.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    questionIndex: PropTypes.number,
}

export default LinearScale;