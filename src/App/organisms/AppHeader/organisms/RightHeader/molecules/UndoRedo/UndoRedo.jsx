import React from 'react';
import IconButton from "../../../../../../molecules/IconButton/index.jsx";
import {redo, undo} from "../../helpers/rightHeader.undoRedo.jsx";

const UndoRedo = ({canUndo, canRedo, setFormData, setHistory, history}) => {
    const handleUndo = () => {
        if (canUndo) {
            undo(setFormData, setHistory, history);
        }
    };

    const handleRedo = () => {
        if (canRedo) {
            redo(setFormData, setHistory, history);
        }
    };
    return (
        <>
            <li>
                <IconButton
                    icon="undo"
                    label="Undo"
                    disabled={!canUndo}
                    onClick={handleUndo}
                />
            </li>
            <li>
                <IconButton
                    icon="redo"
                    label="Redo"
                    disabled={!canRedo}
                    onClick={handleRedo}
                />
            </li>
        </>
    )
}

export default UndoRedo;