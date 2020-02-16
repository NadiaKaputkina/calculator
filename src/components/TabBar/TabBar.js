import React, { Component } from 'react';

import classes from './TabBar.css';
import TabBarNav from './TabBarNav/TabBarNav';
import Aux from '../../hoc/Aux/Aux';

class TabBar extends Component {
  state = {
    activeTab: null
  };

  componentDidMount() {
    console.log('[TabBar] componentDidMount');
    const {children = []} = this.props;
    const activeTab = this.getChildrenLabels(children)[0];

    this.setActiveTab(activeTab);
  }

  getChildrenLabels = children => children.map( ({props}) => {console.log(props); return props.label});
 // getChilrenValue = children => children.map( ({props}) => props.value);

  setActiveTab = activeTab => {
    const {activeTab: currentTab} = this.state;

    if (currentTab !== activeTab) {
      this.setState({activeTab: activeTab})
    }
  };

  renderTabs = () => {
    const {children = []} = this.props;
    const {activeTab} = this.state;

    return this.getChildrenLabels(children).map(label => (
      <TabBarNav
        key={label}
        label={label}
        activeTab={activeTab}
        changeActiveTab={this.setActiveTab}
      />
    ))
  };

  render() {
    console.log('[TabBar] render');

    const { children = [] } = this.props;
    const { activeTab } = this.state;

    return (
      <div>
        <div className={classes.TabBarNav}>
          { this.renderTabs() }
        </div>
        <div className={classes.TabContainer}>
          { React.Children.map(children, child => React.cloneElement(child, { activeTab })) }
        </div>
      </div>
    )
  }
}

export default TabBar;
