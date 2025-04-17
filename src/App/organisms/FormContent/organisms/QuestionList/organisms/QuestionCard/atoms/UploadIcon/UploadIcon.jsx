import React from 'react';
import './UploadIcon.css';

const UploadIcon = () => {
    return (
        <label className="material-symbols-outlined upload-icon">
            image
            <input type="file" className="image-upload" hidden />
        </label>
    )
}

export default UploadIcon;