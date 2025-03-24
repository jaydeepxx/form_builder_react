import React from 'react';
import QuestionCard from './QuestionCard';

// Sample questions data
const sampleQuestions = [
  {
    id: 'q1',
    type: 'multipleChoice',
    title: 'What is your favorite color?',
    required: false,
    options: [
      { value: 'Red' },
      { value: 'Blue' },
      { value: 'Green' }
    ]
  },
  {
    id: 'q2',
    type: 'checkBoxes',
    title: 'Select all that apply',
    required: true,
    options: [
      { value: 'Option 1' },
      { value: 'Option 2' }
    ]
  },
  {
    id: 'q3',
    type: 'multipleChoiceGrid',
    title: 'What is your favorite color?',
    required: false,
    // options: []
  },
  {
    id: 'q4',
    type: 'date',
    title: 'What is your favorite color?',
    required: false,
    // options: []
  },
  {
    id: 'q5',
    type: 'linearScale',
    title: 'What is your favorite color?',
    required: false,
    options: {min: 1, max: 5}
  },
];

const QuestionList = () => {
  return (
    <>
      {sampleQuestions.map((question, index) => (
        <QuestionCard 
          key={question.id} 
          question={question} 
          index={index} 
        />
      ))}
    </>
  );
};

export default QuestionList;