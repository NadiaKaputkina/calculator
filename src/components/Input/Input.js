import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from './Input.css';

const input = ({type, name, value, handleChange, ...attrs}) => {
  return (
    <Aux>
      { attrs.prefix && <span>$</span>  }
      <input type={type}
             name={name}
             className={classes.Input}
             value={value}
             onChange={handleChange} />
      { attrs.postfix && <span>%</span> }
    </Aux>
  )
};

export default input;
