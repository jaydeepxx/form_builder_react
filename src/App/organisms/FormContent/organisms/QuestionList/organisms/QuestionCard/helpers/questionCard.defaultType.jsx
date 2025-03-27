// Get default options for a question type
export const getDefaultOptionsForType = (type) => {
    switch(type) {
        case 'multipleChoice':
        case 'checkBoxes':
        case 'dropDown':
            return [{ value: 'Option 1' }];
        case 'multipleChoiceGrid':
            return {
                rows: [{ value: 'Row 1' }],
                columns: [{ value: 'Column 1' }]
            };
        case 'linearScale':
            return { min: 1, max: 5 };
        case 'rating':
            return { scale: 5 };
        case 'date':
        case 'time':
        default:
            return [];
    }
};