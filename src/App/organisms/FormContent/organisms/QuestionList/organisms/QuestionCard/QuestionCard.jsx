import React from 'react';
import PropTypes from 'prop-types';
import './QuestionCard.css';
import DragHandle from './atoms/DragHandle';
import Input from '../../../../../../atoms/Input/index.jsx';
import TypeSelector from './molecules/TypeSelector/index.jsx';
import {renderQuestionType} from './helpers/questionCard.renderQuestionType.jsx'
import {QuestionCardFooter} from "./molecules/QuestionCardFooter/index.jsx";
import UploadIcon from "./atoms/UploadIcon/UploadIcon.jsx";

const QuestionCard = ({
                          question = {
                              id: 'q1',
                              type: 'multipleChoice',
                              title: '',
                              required: false,
                              options: [{ value: 'Option 1' }]
                          },
                          isPreviewMode = false
                      }) => {
    return (
        <div
            className="questions-card"
            aria-label={question.type}
            role="group"
            data-required={question.required}
        >
            {!isPreviewMode && <DragHandle />}

            <div className="question-header">
                <Input
                    value={question.title}
                    placeholder="Question"
                    className="question-input label-large"
                    disabled={isPreviewMode}
                    readOnly={isPreviewMode}
                />

                {!isPreviewMode && (
                    <>
                        <UploadIcon />

                        <TypeSelector
                            selectedType={question.type}
                        />
                    </>
                )}
            </div>

            {/* Render question type component */}
            {renderQuestionType(question, isPreviewMode)}

            <QuestionCardFooter checked={question.required} isPreviewMode={isPreviewMode} />
        </div>
    );
};

QuestionCard.propTypes = {
    question: PropTypes.object,
    isPreviewMode: PropTypes.bool,
}

export default QuestionCard;