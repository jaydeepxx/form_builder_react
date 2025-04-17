import React from 'react';
import PropTypes from 'prop-types';
import './LeftHeader.css';
import formIcon from '../../../../../assets/form-icon.svg';
import Input from "../../../../atoms/Input/Input.jsx";

const LeftHeader = ({title='Untitled form'}) => {
    return(
        <div className="form-header-left">
            <img
                src={formIcon}
                alt="form-icon"
                className="form-icon"
            />
            <Input
                value={title}
                className="form-headline"
            />
        </div>
    )
}

LeftHeader.propTypes = {
    title: PropTypes.string,
}

export default LeftHeader;