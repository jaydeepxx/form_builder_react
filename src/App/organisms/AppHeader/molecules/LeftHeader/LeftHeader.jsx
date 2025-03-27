import React from 'react';
import PropTypes from 'prop-types';
import './LeftHeader.css';
import formIcon from '../../../../../assets/form-icon.svg';
import Input from "../../../../atoms/Input/Input.jsx";
import {headlineChange} from "./leftHeader.helpers.jsx";

const LeftHeader = ({ formHeadline,
                        isPreviewMode,
                        setFormData,
                        }) => {
    const handleHeadlineChange = (e) => {
        headlineChange(e, setFormData);
    };
    return (<div className="form-header-left">
            <img
                src={formIcon}
                alt="form-icon"
                className="form-icon"
            />
            <Input
                value={formHeadline}
                className="form-headline"
                onChange={handleHeadlineChange}
                disabled={isPreviewMode}
                readOnly={isPreviewMode}
            />
        </div>)
}

LeftHeader.propTypes = {
    formHeadline: PropTypes.string,
    isPreviewMode: PropTypes.bool,
    setFormData: PropTypes.func,
}

export default LeftHeader;