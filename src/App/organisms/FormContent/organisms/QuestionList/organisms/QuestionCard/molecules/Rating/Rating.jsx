import React from 'react';
import PropTypes from "prop-types";
import Input from "../../../../../../../../atoms/Input/Input.jsx";
import {rangeArray} from "../../helpers/questionCard.rangeArray.jsx";
// import './LinearScaleRating.css'

const Rating = ({ scale = 5, questionIndex,isPreviewMode }) => {
    const [size,setSize] = React.useState(scale);

    return (
        <div data-question-index={questionIndex}>
            {!isPreviewMode && (
                <div
                    className="scale-question-option"
                >
                    <select
                        className="range-dropdown"
                        onChange = {(event) => setSize(event.target.value)}
                    >
                        {rangeArray(1,scale).map(value => (
                            <option key={value} value={value} selected={value === size}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <div
                className="rating-container"
            >
                {rangeArray(1,size).map(value => (
                    <div
                        key={value}
                        className="rating-item"
                        data-rating-value={value}
                    >
                        <span>{value}</span>
                        <label className="material-symbols-outlined star-icon">
                            star
                            <Input
                                type="radio"
                                name={`rating-${questionIndex}`}
                                value={value}
                                disabled
                                hidden
                            />
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

Rating.propTypes = {
    scale: PropTypes.number,
    questionIndex: PropTypes.number,
}

export default Rating;