import PropTypes from "prop-types";
import MultipleChoice from "../molecules/MultipleChoice/index.jsx";
import Checkboxes from "../molecules/Checkboxes/index.jsx";
import Dropdown from "../molecules/Dropdown/index.jsx";
import Grid from "../molecules/Grid/index.jsx";
import LinearScale from "../molecules/LinearScale/index.jsx";
import DateQuestion from "../molecules/DateQuestion/index.jsx";
import TimeQuestion from "../molecules/TimeQuestion/index.jsx";
import Rating from "../molecules/Rating/index.jsx";
import { QUESTION_TYPES } from "../questionCard.constants.jsx";

export const renderQuestionType = (
  formData,
  setFormData,
  question,
  isPreviewMode,
  saveToHistory,
) => {
  switch (question.type) {
    case QUESTION_TYPES.MULTIPLE_CHOICE:
      return (
        <MultipleChoice
          formData={formData}
          setFormData={setFormData}
          question={question}
          saveToHistory={saveToHistory}
          isPreviewMode={isPreviewMode}
        />
      );
    case QUESTION_TYPES.CHECKBOXES:
      return (
        <Checkboxes
          formData={formData}
          setFormData={setFormData}
          question={question}
          isPreviewMode={isPreviewMode}
        />
      );
    case QUESTION_TYPES.DROPDOWN:
      return (
        <Dropdown
          formData={formData}
          setFormData={setFormData}
          question={question}
          isPreviewMode={isPreviewMode}
        />
      );
    case QUESTION_TYPES.MULTIPLE_CHOICE_GRID:
      return (
        <Grid
          formData={formData}
          setFormData={setFormData}
          question={question}
          isPreviewMode={isPreviewMode}
        />
      );
    case QUESTION_TYPES.LINEAR_SCALE:
      return (
        <LinearScale
          formData={formData}
          setFormData={setFormData}
          question={question}
          min={question.options?.min}
          max={question.options?.max}
          isPreviewMode={isPreviewMode}
        />
      );
    case QUESTION_TYPES.DATE:
      return (
        <DateQuestion
          formData={formData}
          setFormData={setFormData}
          question={question}
          isPreviewMode={isPreviewMode}
        />
      );
    case QUESTION_TYPES.TIME:
      return (
        <TimeQuestion
          formData={formData}
          setFormData={setFormData}
          question={question}
          isPreviewMode={isPreviewMode}
        />
      );
    case QUESTION_TYPES.RATING:
      return (
        <Rating
          formData={formData}
          setFormData={setFormData}
          question={question}
          scale={question.options?.scale}
          isPreviewMode={isPreviewMode}
        />
      );
    default:
      return (
        <MultipleChoice
          formData={formData}
          setFormData={setFormData}
          question={question}
          options={[{ value: "Option 1" }]}
          isPreviewMode={isPreviewMode}
        />
      );
  }
};

renderQuestionType.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  question: PropTypes.object,
  isPreviewMode: PropTypes.bool,
  saveToHistory: PropTypes.func,
};
