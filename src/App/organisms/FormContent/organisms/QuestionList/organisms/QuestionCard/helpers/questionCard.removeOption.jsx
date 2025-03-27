
const removeOption = (questionId, setFormData, optionIndex, isRow = false, isColumn = false) => {
    setFormData(prev => ({
        ...prev,
        questions: prev.questions.map(q => {
            if (q.id !== questionId) return q;

            if (q.type === 'multipleChoiceGrid') {
                if (isRow && q.options.rows.length > 1) {
                    return {
                        ...q,
                        options: {
                            ...q.options,
                            rows: q.options.rows.filter((_, i) => i !== optionIndex)
                        }
                    };
                } else if (isColumn && q.options.columns.length > 1) {
                    return {
                        ...q,
                        options: {
                            ...q.options,
                            columns: q.options.columns.filter((_, i) => i !== optionIndex)
                        }
                    };
                }
            }
            else if (q.options.length) {
                return {
                    ...q,
                    options: q.options.filter((_, i) => i !== optionIndex)
                };
            }

            return q;
        })
    }));

    // saveToHistory();
};

export default removeOption;