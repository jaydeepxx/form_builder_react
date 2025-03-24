import React from 'react';
import FormTitle from './FormTitle';
import FormDescription from './FormDescription';
import QuestionList from '../Questions/QuestionList';
import AddQuestionButton from './AddQuestionButton';
import './FormContent.css'

const FormContent = () => {
  return (
    <main className="form-content">
      <form className="form-container" id="form-container">
        <section className="form-content-header">
          <FormTitle />
          
          <ul className="toolbar">
            {['format_bold', 'format_italic', 'format_underlined', 'format_clear'].map((icon) => (
              <li key={icon}>
                <button type="button" className="material-symbols-outlined">
                  {icon}
                </button>
              </li>
            ))}
          </ul>
          
          <FormDescription />
        </section>
        
        <QuestionList />
        <AddQuestionButton />
      </form>
    </main>
  );
};

export default FormContent;