import React from 'react';
import PropTypes from 'prop-types';
import './QuestionList.css';
import QuestionCard from './organisms/QuestionCard/index.jsx';

const QuestionList = ({ questions = [], isPreviewMode = false }) => {
    return (
        <div className="question-list">
            {questions.map((question, index) => (
                <QuestionCard
                    key={question.id}
                    question={question}
                    isPreviewMode={isPreviewMode}
                />
            ))}
        </div>
    );
};

QuestionList.propTypes = {
    questions: PropTypes.array,
    isPreviewMode: PropTypes.bool,
}

export default QuestionList;