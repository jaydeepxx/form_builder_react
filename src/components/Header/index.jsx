import React from 'react';
import PreviewButton from './PreviewButton';
import ThemeButton from './ThemeButton';
import UndoRedoButtons from './UndoRedoButtons';
import ActionButtons from './ActionButtons';
import formlogo from '../../assets/form-icon.svg';
import './Header.css'

const Header = () => {
  return (
    <header className="form-header">
      <div className="form-header-left">
        <img 
          src={formlogo} 
          alt="form-icon" 
          className="form-icon"
        />
        <input 
          type="text" 
          className="form-headline"
          id="form-headline"
          value="Untitled form" 
        />
      </div>
      <ul className="form-header-right">
        <PreviewButton />
        <ThemeButton />
        <UndoRedoButtons />
        <ActionButtons />
      </ul>
    </header>
  );
};

export default Header;