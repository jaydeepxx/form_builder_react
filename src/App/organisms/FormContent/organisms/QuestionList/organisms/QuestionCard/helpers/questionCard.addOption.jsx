// import { saveToHistory} from '../../../../../formContent.helpers.jsx'

const addOption = (
  questionId,
  setFormData,
  isRow = false,
  isColumn = false,
  formData,
) => {
  // console.log(formData)
  // console.log(isColumn)
  setFormData((prev) => ({
    ...prev,
    questions: prev.questions.map((q) => {
      if (q.id !== questionId) return q;

      if (q.type === "multipleChoiceGrid") {
        if (isRow) {
          const rowCount = q.options.rows.length + 1;
          return {
            ...q,
            options: {
              ...q.options,
              rows: [...q.options.rows, { value: `Row ${rowCount}` }],
            },
          };
        } else if (isColumn) {
          const colCount = q.options.columns.length + 1;
          return {
            ...q,
            options: {
              ...q.options,
              columns: [...q.options.columns, { value: `Column ${colCount}` }],
            },
          };
        }
      } else {
        const optionCount = q.options.length + 1;
        return {
          ...q,
          options: [...q.options, { value: `Option ${optionCount}` }],
        };
      }

      // return q;
    }),
  }));
  // console.log(formData);

  // saveToHistory();
};

export default addOption;
