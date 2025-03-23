import React from 'react';
import './App.css';
import AppHeader from './organisms/AppHeader';
import FormContent from './organisms/FormContent';

const App = () => {
    return (
        <div className="purple-theme">
            <AppHeader
                title="Untitled form"
                isPreviewMode={false}
            />
            <FormContent
                formTitle="Untitled form"
                formDescription=""
                isPreviewMode={false}
            />
        </div>
    );
};

export default App;