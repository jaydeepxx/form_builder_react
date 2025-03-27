import React, { forwardRef } from 'react';
import './DragHandle.css';

const DragHandle = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            className="drag-handle"
            aria-label="Drag to reorder"
        >
            <span className="material-symbols-outlined drag-icon">drag_indicator</span>
        </div>
    );
});

DragHandle.displayName = 'DragHandle';

export default DragHandle;