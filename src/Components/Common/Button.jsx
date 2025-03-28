import React from 'react';
import '../../Styles/Components/button.css';

const Button = ({ text, link, variant = 'primary', type = 'button', onClick }) => {
  const className = `button ${variant}`;
  
  if (type === 'submit') {
    return (
      <button type="submit" className={className} onClick={onClick}>
        {text}
      </button>
    );
  }
  
  return (
    <a href={link} className={className}>
      {text}
    </a>
  );
};

export default Button;