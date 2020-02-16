import React from 'react';

import classes from './Button.css';

const button = ({selectedBtn, children}) => {
  const currentClasses = [classes.Button, selectedBtn];

  return (
    <button className={currentClasses.join(' ')} value={children} >
      { children }
    </button>
  )
};

export default button;
