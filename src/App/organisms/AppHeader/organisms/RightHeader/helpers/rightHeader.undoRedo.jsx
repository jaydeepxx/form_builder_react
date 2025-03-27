const undo = (setFormData, setHistory,history) => {
        const newIndex = history.currentIndex - 1;
        setFormData(history.past[newIndex]);
        setHistory(prev => ({
            ...prev,
            currentIndex: newIndex
        }));


};

const redo = (setFormData,setHistory,history) => {

        const newIndex = history.currentIndex + 1;
        setFormData(history.past[newIndex]);
        setHistory(prev => ({
            ...prev,
            currentIndex: newIndex
        }));

};

export { undo, redo };