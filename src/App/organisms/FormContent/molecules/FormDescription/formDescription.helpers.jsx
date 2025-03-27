const descriptionChange = (e, setFormData) => {
    setFormData(prev => ({
        ...prev,
        formDescription: e.target.value
    }));
}

export default descriptionChange;