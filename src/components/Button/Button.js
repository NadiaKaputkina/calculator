import React from 'react';

const button = ({classes, handleClick, children}) => {
  return (
    <button type="button"
            className={classes}
            onClick={handleClick}
    >
      {children}
    </button>
  )
};

export default button;
