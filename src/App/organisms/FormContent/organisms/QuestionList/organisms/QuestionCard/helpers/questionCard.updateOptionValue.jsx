const updateOptionValue = (questionId, setFormData ,optionIndex, newValue, isRow = false, isColumn = false) => {
    console.log(newValue)
    setFormData(prev => ({
        ...prev,
        questions: prev.questions.map(q => {
            if (q.id !== questionId) return q;

            if (q.type === 'multipleChoiceGrid') {
                if (isRow) {
                    return {
                        ...q,
                        options: {
                            ...q.options,
                            rows: q.options.rows.map((row, i) =>
                                i === optionIndex ? { value: newValue } : row
                            )
                        }
                    };
                } else if (isColumn) {
                    return {
                        ...q,
                        options: {
                            ...q.options,
                            columns: q.options.columns.map((col, i) =>
                                i === optionIndex ? { value: newValue } : col
                            )
                        }
                    };
                }
            } else {
                return {
                    ...q,
                    options: q.options.map((option, i) =>
                        i === optionIndex ? { value: newValue } : option
                    )
                };
            }

            return q;
        })
    }));
};

export default updateOptionValue;