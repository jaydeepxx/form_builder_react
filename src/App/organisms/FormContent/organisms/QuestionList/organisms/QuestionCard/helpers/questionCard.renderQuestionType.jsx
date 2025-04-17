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

export const renderQuestionType = (question, isPreviewMode) => {
    switch (question.type) {
        case QUESTION_TYPES.MULTIPLE_CHOICE:
            return <MultipleChoice options={question.options} isPreviewMode={isPreviewMode} />;
        case QUESTION_TYPES.CHECKBOXES:
            return <Checkboxes options={question.options} isPreviewMode={isPreviewMode} />;
        case QUESTION_TYPES.DROPDOWN:
            return <Dropdown options={question.options} isPreviewMode={isPreviewMode} />;
        case QUESTION_TYPES.MULTIPLE_CHOICE_GRID:
            return <Grid options={question.options} isPreviewMode={isPreviewMode} />;
        case QUESTION_TYPES.LINEAR_SCALE:
            return <LinearScale min={question.options?.min} max={question.options?.max} isPreviewMode={isPreviewMode} />;
        case QUESTION_TYPES.DATE:
            return <DateQuestion isPreviewMode={isPreviewMode} />;
        case QUESTION_TYPES.TIME:
            return <TimeQuestion isPreviewMode={isPreviewMode} />;
        case QUESTION_TYPES.RATING:
            return <Rating scale={question.options?.scale} isPreviewMode={isPreviewMode} />;
        default:
            return <MultipleChoice options={[{ value: "Option 1" }]} isPreviewMode={isPreviewMode} />;
    }
};

renderQuestionType.propTypes = {
    question: PropTypes.object.isRequired,
    isPreviewMode: PropTypes.bool.isRequired,
};
