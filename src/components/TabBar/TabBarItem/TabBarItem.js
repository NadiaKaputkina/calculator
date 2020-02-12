import React from 'react';

import classes from './TabBarItem.css';

const tabBarItem = ({label, children}) => {

  return (
    <div className={classes.TabBarItem}>
      { children }
    </div>
  )
};

export default tabBarItem;
