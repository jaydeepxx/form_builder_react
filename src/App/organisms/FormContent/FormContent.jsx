// src/components/molecules/FormContent/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './FormContent.css';
import FormTitle from './molecules/FormTitle';
import FormDescription from './molecules/FormDescription';
import FormTitleDecorator from "./molecules/FormTitleDecorator";
import FormActionButton from "./molecules/FormActionButton";
import QuestionList from './organisms/QuestionList/index.jsx';

const sampleQuestions = [
    {
        id: "q1",
        type: "multipleChoice",
        title: "What is your favorite color?",
        required: false,
        options: [
            { value: "Red" },
            { value: "Blue" },
            { value: "Green" }
        ]
    },
    {
        id: "q2",
        type: "checkBoxes",
        title: "Select all that apply",
        required: true,
        options: [
            { value: "Option 1" },
            { value: "Option 2" }
        ]
    },
    {
        id: "q3",
        type: "date",
        title: "Select all that apply",
        required: true,
        // options: [
        //   // { value: "Option 1" },
        //   // { value: "Option 2" }
        // ]
    },
    {
        id: "q4",
        type: "multipleChoiceGrid",
        title: "Select all that apply",
        required: true,
        // options: [
        //   { value: "Option 1" },
        //   { value: "Option 2" }
        // ]
    },
    {
        id: "q5",
        type: "rating",
        title: "Select all that apply",
        required: true,
        // options: [
        //   { value: "Option 1" },
        //   { value: "Option 2" }
        // ]
    },
    {
        id: "q6",
        type: "linearScale",
        title: "Select all that apply",
        required: true,
        // options: [
        //   { value: "Option 1" },
        //   { value: "Option 2" }
        // ]
    }
];

const FormContent = ({ formTitle = 'Untitled form',
                         formDescription = '',
                         isPreviewMode = false }) => {
    return (
        <main className="form-content">
            <form className={`form-container ${isPreviewMode ? 'preview-mode' : ''}`}>
                <section className="form-content-header">
                    <FormTitle
                        title={formTitle}
                        isPreviewMode={isPreviewMode}
                    />
                    <FormTitleDecorator isPreviewMode={isPreviewMode}/>
                    <FormDescription
                        description={formDescription}
                        isPreviewMode={isPreviewMode}
                    />
                </section>

                <QuestionList
                    questions={sampleQuestions}
                    isPreviewMode={isPreviewMode}
                />

                <FormActionButton isPreviewMode={isPreviewMode}/>
            </form>
        </main>
    );
};

FormContent.propTypes = {
    formTitle: PropTypes.string,
    formDescription: PropTypes.string,
    isPreviewMode: PropTypes.bool,
}

export default FormContent;