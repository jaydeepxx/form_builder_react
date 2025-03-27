import React, { useState} from 'react';
import './App.css';
import AppHeader from './organisms/AppHeader';
import FormContent from './organisms/FormContent';

const App = () => {
    // Main UI state (theme and preview mode)
    const [theme, setTheme] = useState('purple-theme');
    const [isPreviewMode, setIsPreviewMode] = useState(false);

    // Form data state
    const [formData, setFormData] = useState({
        formHeadline: "Untitled form",
        formTitle: "Untitled form",
        formDescription: "",
        questions: [
            {
                id: `q${Date.now()}`,
                type: 'multipleChoice',
                title: '',
                required: false,
                options: [{ value: 'Option 1' }]
            }
        ]
    });

    // console.log(formData);

    // History state
    const [history, setHistory] = useState({
        past: [formData],
        currentIndex: 0
    });
    // console.log(history);

    // Computed values for undo/redo availability
    const canUndo = history.currentIndex > 0;
    const canRedo = history.currentIndex < history.past.length - 1;

    return (
        <div className={`${theme}`}>
            <AppHeader
                formHeadline={formData.formHeadline}
                theme={theme}
                isPreviewMode={isPreviewMode}
                canUndo={canUndo}
                canRedo={canRedo}
                setTheme={setTheme}
                setIsPreviewMode={setIsPreviewMode}
                setFormData={setFormData}
                history={history}
                setHistory={setHistory}
             />
            <FormContent
                formData={formData}
                theme={theme}
                isPreviewMode={isPreviewMode}
                setFormData={setFormData}
                history={history}
                setHistory={setHistory}
            />
        </div>
    );
};

export default App;