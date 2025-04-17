import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "../../../../../../../../molecules/IconButton/index.jsx";
import RequiredToggle from "../../../../../../molecules/RequiredToggle/index.jsx";
import './QuestionCardFooter.css';

const QuestionCardFooter = ({isPreviewMode = false, checked}) => {
    return (
        <>
            {!isPreviewMode && (
                <div className="question-actions">
                    <IconButton
                        icon="content_copy"
                        label="Copy question"
                        className="copy-question-button"
                    />

                    <IconButton
                        icon="delete"
                        label="Delete question"
                        className="delete-question-button"
                    />

                    <div className="hor-line"></div>

                    <RequiredToggle
                        checked={checked}
                    />
                </div>
            )}
        </>
    )
}

QuestionCardFooter.propTypes = {
    isPreviewMode: PropTypes.bool,
    checked: PropTypes.bool,
}

export default QuestionCardFooter;