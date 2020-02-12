import React, { Component } from 'react';

import classes from './TabBar.css';

class TabBar extends Component {
  state = {
    activeTab: null
  };

  getChildrenLabels = (children) => children.map( ({props}) => props.label );

  getGrandchildrens = (children) => children.map( ({props}) => props.children );

  changeActiveTab = (activeTab) => {
    const {activeTab: currentTab} = this.state;

    if (activeTab !== currentTab) {
      this.setState({activeTab: activeTab})
    }
  };

  render() {
    const { children = [] } = this.props;

    const tabLabels = this.getChildrenLabels(children);
    const tabContainers = this.getGrandchildrens(children);

    return (
      <>
        <div className={classes.TabContainer}>{tabContainers[0]}</div>
      </>
    )
  }
};

export default TabBar;
