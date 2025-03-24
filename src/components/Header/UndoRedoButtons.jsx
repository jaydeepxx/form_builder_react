import React from 'react';

const UndoRedoButtons = () => {
  return (
    <>
      <li>
        <button 
          className="material-symbols-outlined icon-button"
          id="undo-button"
          aria-label="Undo"
        >
          undo
        </button>
      </li>
      <li>
        <button 
          className="material-symbols-outlined icon-button"
          id="redo-button"
          aria-label="Redo"
        >
          redo
        </button>
      </li>
    </>
  );
};

export default UndoRedoButtons;