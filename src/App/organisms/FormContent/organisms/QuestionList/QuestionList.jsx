import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './QuestionList.css';
import QuestionCard from './organisms/QuestionCard/index.jsx';

const QuestionList = ({ formData , setFormData , history, setHistory, isPreviewMode = false ,saveToHistory}) => {

    const moveQuestion = useCallback((dragIndex, hoverIndex) => {
        setFormData((prevFormData) => {
            const newQuestions = [...prevFormData.questions];

            const draggedQuestion = newQuestions.splice(dragIndex, 1)[0];

            newQuestions.splice(hoverIndex, 0, draggedQuestion);
            return {
                ...prevFormData,
                questions: newQuestions,
            };
        });
    }, [setFormData]);

    return (
        <div className="question-list">
            {formData.questions.map((question, index) => (
                <QuestionCard
                    key={question.id}
                    question={question}
                    formData={formData}
                    setFormData={setFormData}
                    history={history}
                    setHistory={setHistory}
                    index={index}
                    isPreviewMode={isPreviewMode}
                    moveQuestion={moveQuestion}
                    saveToHistory={saveToHistory}
                />
            ))}
        </div>
    );
};

QuestionList.propTypes = {
    formData: PropTypes.object,
    setFormData: PropTypes.func,
    history: PropTypes.object,
    setHistory: PropTypes.func,
    isPreviewMode: PropTypes.bool,
    saveToHistory: PropTypes.func,
}

export default QuestionList;