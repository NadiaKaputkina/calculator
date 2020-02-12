import React from 'react';

const input = ({handleChange, defaultValue}) => {
  return (
    <input type="text" onChange={handleChange}>{defaultValue}</input>
  )
};

export default input;
