import React from 'react';

import classes from './TabBarNav.css';

const tabBarNav = ({label, activeTab, changeActiveTab}) => {
  console.log('[tabBarNav]');
  const currentClasses = [classes.TabBarNav, (activeTab === label) ? classes.Active : null];

  return (
    <button type="button"
            className={currentClasses.join(' ')}
            onClick={() => changeActiveTab(label)}>
      { label }
    </button>
  )
};

export default tabBarNav;
