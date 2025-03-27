const titleChange = (e, setFormData) => {
    setFormData(prev => ({
        ...prev,
        formTitle: e.target.value
    }));
}

export default titleChange;