import React from 'react';

import classes from './TabBarNav.css';

const tabBarNav = ({label, changeActiveTab}) => {

  return (
    <button type="button"
            className={classes.TabBarItem}
            onClick={() => changeActiveTab(label)}>
      { label }
    </button>
  )
};

export default tabBarNav;
