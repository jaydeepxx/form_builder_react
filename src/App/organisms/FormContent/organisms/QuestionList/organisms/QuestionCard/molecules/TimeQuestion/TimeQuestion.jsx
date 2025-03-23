import React from 'react';
import Input from "../../../../../../../../atoms/Input/Input.jsx";
// import './DateTime.css'

const TimeQuestion = () => {
    return (
        <div
            className="question-options"
        >
            <label className="input-time">
                Time
                <span className="material-symbols-outlined">access_time</span>
                <Input
                    type="time"
                    disabled
                    hidden
                />
            </label>
        </div>
    );
};


export default TimeQuestion;