const clearForm = (setFormData,setHistory) => {
    if (window.confirm('Are you sure you want to clear the form? This action cannot be undone.')) {
        const newFormData = {
            formTitle: "Untitled form",
            formHeadline: "Untitled form",
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
        };

        setFormData(newFormData);
        setHistory({
            past: [newFormData],
            currentIndex: 0
        });
    }
};

export default clearForm;