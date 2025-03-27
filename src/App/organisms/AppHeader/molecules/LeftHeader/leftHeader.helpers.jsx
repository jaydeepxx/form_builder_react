export const headlineChange = (e,setFormData) => {
    setFormData(prev => ({
        ...prev,
        formHeadline: e.target.value
    }));
}