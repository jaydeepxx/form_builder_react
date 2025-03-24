import React from 'react';
import DragHandle from './DragHandle';
import QuestionHeader from './QuestionHeader';
import QuestionActions from './QuestionActions';
import MultipleChoice from '../QuestionTypes/MultipleChoice';
import Checkboxes from '../QuestionTypes/Checkboxes';
import Dropdown from '../QuestionTypes/Dropdown';
import Grid from '../QuestionTypes/Grid';
import LinearScale from '../QuestionTypes/LinearScale';
import DateQuestion from '../QuestionTypes/DateQuestion';
import TimeQuestion from '../QuestionTypes/TimeQuestion';
import Rating from '../QuestionTypes/Rating';
import './QuestionCard.css'

const QuestionCard = ({ 
  question = {
    id: 'q1',
    type: 'multipleChoice',
    title: '',
    required: false,
    options: [{ value: 'Option 1' }]
  },
  index = 0
}) => {
  const renderQuestionType = () => {
    switch (question.type) {
      case 'multipleChoice':
        return <MultipleChoice options={question.options} questionIndex={index} />;
      case 'checkBoxes':
        return <Checkboxes options={question.options} questionIndex={index} />;
      case 'dropDown':
        return <Dropdown options={question.options} questionIndex={index} />;
      case 'multipleChoiceGrid':
        return <Grid options={question.options} questionIndex={index} />;
      case 'linearScale':
        return <LinearScale min={question.options.min} max={question.options.max} questionIndex={index} />;
      case 'date':
        return <DateQuestion questionIndex={index} />;
      case 'time':
        return <TimeQuestion questionIndex={index} />;
      case 'rating':
        return <Rating scale={question.options.scale} questionIndex={index} />;
      default:
        return <MultipleChoice options={question.options} questionIndex={index} />;
    }
  };

  return (
    <div 
      className="questions-card" 
      aria-label={question.type}
      role="group"
      data-question-id={question.id}
      data-question-index={index}
      data-required={question.required}
    >
      <DragHandle />
      <QuestionHeader 
        title={question.title} 
        type={question.type} 
        questionIndex={index} 
      />
      {renderQuestionType()}
      <QuestionActions 
        required={question.required} 
        questionIndex={index} 
      />
    </div>
  );
};

export default QuestionCard;