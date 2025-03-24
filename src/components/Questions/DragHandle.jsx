import React from 'react';
import './DragHandle.css'

const DragHandle = () => {
  return (
    <div className="drag-handle" aria-label="Drag to reorder">
      <span className="material-symbols-outlined drag-icon">drag_indicator</span>
    </div>
  );
};

export default DragHandle;