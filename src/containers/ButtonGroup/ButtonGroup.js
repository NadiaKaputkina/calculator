import React from 'react';

import Button from '../../components/Button/Button';
import classes from './ButtonGroup.css';

const buttonGroup = ({listOfValue, selectedValue, changeSelectedValue}) => {

    const btnGroup = listOfValue.map(value =>
      <Button key={value}
              selectedBtn={(value === selectedValue) ? classes.Active : null}>
        { value }
      </Button>
    );

    return (
      <div className={classes.ButtonGroup} onClick={changeSelectedValue}>
        { btnGroup }
      </div>
    )
}

export default buttonGroup;
