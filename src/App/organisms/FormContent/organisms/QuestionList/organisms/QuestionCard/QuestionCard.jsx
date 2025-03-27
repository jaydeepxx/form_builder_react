import React from "react";
import PropTypes from "prop-types";
import "./QuestionCard.css";
import DragHandle from "./atoms/DragHandle";
import Input from "../../../../../../atoms/Input/index.jsx";
import TypeSelector from "./molecules/TypeSelector/index.jsx";
import { renderQuestionType } from "./helpers/questionCard.renderQuestionType.jsx";
import { QuestionCardFooter } from "./molecules/QuestionCardFooter/index.jsx";
import UploadIcon from "./atoms/UploadIcon/UploadIcon.jsx";
import useDragAndDrop from "./hooks/questionCard.dragDrop.js"; // Import the custom hook

const ItemType = "QUESTION_CARD";

const QuestionCard = ({
  question = {
    id: "q1",
    type: "multipleChoice",
    title: "",
    required: false,
    options: [{ value: "Option 1" }],
  },
  formData,
  setFormData,
  history,
  setHistory,
  isPreviewMode = false,
  index,
  moveQuestion,
  saveToHistory,
}) => {
  const handleUpdateQuestionTitle = (questionId, title) => {
    setFormData((prev) => ({
      ...prev,
      questions: prev.questions.map((q) =>
        q.id === questionId ? { ...q, title } : q,
      ),
    }));
  };

  // Use the custom hook instead of inline drag and drop logic
  const { ref, dragRef, isDragging } = useDragAndDrop(
    ItemType,
    question.id,
    index,
    moveQuestion,
    !isPreviewMode,
  );

  return (
    <div
      ref={ref}
      className={`questions-card ${isDragging ? "is-dragging" : ""}`}
      aria-label={question.type}
      role="group"
      data-required={question.required}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {!isPreviewMode && <DragHandle ref={dragRef} />}

      <div className="question-header">
        <Input
          value={question.title}
          placeholder="Question"
          className="question-input label-large"
          onChange={(newTitle) => {
            handleUpdateQuestionTitle(question.id, newTitle.target.value);
          }}
          disabled={isPreviewMode}
          readOnly={isPreviewMode}
        />

        {!isPreviewMode && (
          <>
            <UploadIcon />

            <TypeSelector
              selectedType={question.type}
              question={question}
              setFormData={setFormData}
              setHistory={setHistory}
              formData={formData}
            />
          </>
        )}
      </div>

      {/* Render question type component */}
      {renderQuestionType(
        formData,
        setFormData,
        question,
        isPreviewMode,
        saveToHistory,
      )}

      <QuestionCardFooter
        question={question}
        formData={formData}
        setFormData={setFormData}
        checked={question.required}
        isPreviewMode={isPreviewMode}
        saveToHistory={saveToHistory}
        history={history}
      />
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.object,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  isPreviewMode: PropTypes.bool,
  index: PropTypes.number,
  moveQuestion: PropTypes.func,
  saveToHistory: PropTypes.func,
  history: PropTypes.object,
  setHistory: PropTypes.func,
};

export default QuestionCard;
