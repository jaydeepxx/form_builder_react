import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "../../../../../../../../molecules/IconButton/index.jsx";
import RequiredToggle from "../../../../../../molecules/RequiredToggle/index.jsx";
import './QuestionCardFooter.css';

const QuestionCardFooter = ({question,formData,setFormData,isPreviewMode = false, saveToHistory, history}) => {

    const checked = question.required;
    const handleCopyQuestion = (questionId) => {
        const questionToCopy = formData.questions.find(q => q.id === questionId);
        if (!questionToCopy) return;

        const newQuestion = {
            ...JSON.parse(JSON.stringify(questionToCopy)),
            id: `q${Date.now()}${Math.floor(Math.random() * 1000)}`
        };

        // Find the index of the original question
        const index = formData.questions.findIndex(q => q.id === questionId);

        setFormData(prev => {
            const newQuestions = [...prev.questions];
            newQuestions.splice(index + 1, 0, newQuestion);
            return {
                ...prev,
                questions: newQuestions
            };
        });

        saveToHistory();
    };

    const handleToggleRequired = (questionId) => {
        setFormData(prev => ({
            ...prev,
            questions: prev.questions.map(q =>
                q.id === questionId ? { ...q, required: !q.required } : q
            )
        }));

        saveToHistory();
    };

    const handleDeleteQuestion = (questionId) => {
        setFormData(prev => ({
            ...prev,
            questions: prev.questions.filter(q => q.id !== questionId)
        }));

        saveToHistory();
        // console.log(history);
    };

    return (
        <>
            {!isPreviewMode && (
                <div className="question-actions">
                    <IconButton
                        icon="content_copy"
                        label="Copy question"
                        className="copy-question-button"
                        onClick={() => {handleCopyQuestion(question.id)}}
                    />

                    <IconButton
                        icon="delete"
                        label="Delete question"
                        className="delete-question-button"
                        onClick={() => {handleDeleteQuestion(question.id)}}
                    />

                    <div className="hor-line"></div>

                    <RequiredToggle
                        checked={checked}
                        onChecked={() => {handleToggleRequired(question.id)}}
                    />
                </div>
            )}
        </>
    )
}

QuestionCardFooter.propTypes = {
    isPreviewMode: PropTypes.bool,
    checked: PropTypes.bool,
}

export default QuestionCardFooter;