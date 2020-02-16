import React from 'react';

import classes from './RowItem.css';

const rowItem = ({text, children}) => {
  return (
    <div className={classes.RowItem}>
      <p>{text}</p>
      { children }
    </div>
  )
};

export default rowItem;
