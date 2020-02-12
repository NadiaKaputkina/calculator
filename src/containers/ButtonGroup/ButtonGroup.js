import React, {Component} from 'react';

import Button from '../../components/Button/Button';
import classes from './ButtonGroup.css';

class ButtonGroup extends Component {
  state = {

  };

  changeActiveBtn = () => {

  };

  render() {
    const { listOfValue, defaultValue } = this.props;

    const btnGroup = listOfValue.map(value => {
      return <Button key={value}
                     classes={(value === defaultValue) ? classes.Active : null}
                     handleClick={this.changeActiveBtn}>{value}
      </Button>
    });

    console.log(btnGroup);

    return btnGroup;
  }
}

export default ButtonGroup;
