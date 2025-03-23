import React from 'react';
import './DateTime.css'
import Input from "../../../../../../../../atoms/Input/Input.jsx";

const DateQuestion = () => {
    return (
        <div
            className="question-options"
        >
            <label className="input-date">
                Month, day, year
                <span className="material-symbols-outlined">event</span>
                <Input type="date"
                    disabled
                    hidden
                />
            </label>
        </div>
    );
};

export default DateQuestion;