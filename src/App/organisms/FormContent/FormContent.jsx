// src/components/molecules/FormContent/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './FormContent.css';
import FormTitle from './molecules/FormTitle';
import FormDescription from './molecules/FormDescription';
import FormTitleDecorator from "./molecules/FormTitleDecorator";
import FormActionButton from "./molecules/FormActionButton";
import QuestionList from './organisms/QuestionList/index.jsx';
import { saveToHistory } from './formContent.helpers.jsx';

const FormContent = ({   formData,
                         isPreviewMode,
                         setFormData,
                         history,
                         setHistory }) => {

   const handleSaveToHistory = () => {
       saveToHistory(setHistory, formData);
       // console.log(history);
   }

    return (
        <main className="form-content">
            <form className={`form-container ${isPreviewMode ? 'preview-mode' : ''}`}>
                <section className="form-content-header">
                    <FormTitle
                        formTitle={formData.formTitle}
                        setFormData={setFormData}
                        history={history}
                        setHistory={setHistory}
                        isPreviewMode={isPreviewMode}
                    />
                    <FormTitleDecorator isPreviewMode={isPreviewMode}/>
                    <FormDescription
                        formDescription={formData.formDescription}
                        setFormData={setFormData}
                        history={history}
                        setHistory={setHistory}
                        isPreviewMode={isPreviewMode}
                    />
                </section>
                <DndProvider backend={HTML5Backend}>
                    <QuestionList
                        formData={formData}
                        setFormData={setFormData}
                        history={history}
                        setHistory={setHistory}
                        isPreviewMode={isPreviewMode}
                        saveToHistory={handleSaveToHistory}
                    />
                </DndProvider>

                <FormActionButton setFormData={setFormData} isPreviewMode={isPreviewMode} saveToHistory={handleSaveToHistory} setHistory={setHistory} />
            </form>
        </main>
    );
};

FormContent.propTypes = {
    formData: PropTypes.object,
    isPreviewMode: PropTypes.bool,
    setFormData: PropTypes.func,
    history: PropTypes.object,
    setHistory: PropTypes.func,
}

export default FormContent;