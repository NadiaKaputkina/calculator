import React from 'react';

const select = ({listOfValue, defaultValue}) => {
  const options = listOfValue.map((value) => {
    const idSelected = (value === defaultValue) ? true : null;
    return <option value={value} selected={idSelected}>{value}</option>
  });

  return (
    <select>
      {options}
    </select>
  )
};

export default select;
