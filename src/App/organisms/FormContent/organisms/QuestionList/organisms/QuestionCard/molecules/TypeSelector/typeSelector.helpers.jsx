import { getDefaultOptionsForType } from "../../helpers/questionCard.defaultType.jsx";

const typeSelector = (questionId, newType, setFormData, formData) => {
  setFormData((prev) => ({
    ...prev,
    questions: prev.questions.map((q) => {
      if (q.id !== questionId) return q;

      return {
        ...q,
        type: newType,
        options: getDefaultOptionsForType(newType),
      };
    }),
  }));
};

export default typeSelector;
