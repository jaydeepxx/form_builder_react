import React from 'react';
import PropTypes from 'prop-types';
import './FormTitleDecorator.css';
import {TEXT_DECORATORS} from './formTitleDecorator.constants.js'
import Button from "../../../../atoms/Button/index.jsx";

const FormTitleDecorator = ({isPreviewMode = false}) => {

    return(
        <>
            {!isPreviewMode && (
                <ul className="toolbar">
                    {TEXT_DECORATORS.map((icon) => (
                        <li key={icon}>
                            <Button className="material-symbols-outlined">
                                {icon}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </>

    )
}

FormTitleDecorator.propTypes = {
    isPreviewMode: PropTypes.bool,
}

export default FormTitleDecorator;