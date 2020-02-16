import React from 'react';

import classes from './TabBarItem.css';

const tabBarItem = ({label, children, activeTab}) => {
  console.log('[tabBarItem]');
  const currentClasses = [classes.TabBarItem, (activeTab === label) ? classes.Active : null];

  return (
    <div className={currentClasses.join(' ')}>
      { children }
    </div>
  )
};

export default tabBarItem;
