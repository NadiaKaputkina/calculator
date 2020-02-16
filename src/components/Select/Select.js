import React from 'react';

const select = ({listOfValue, selectedValue, changeSelectedValue}) => {

  const options = listOfValue.map((value) => {
      return <option key={value} value={value}>{value}</option>
    }
  );

  return (
    <select value={selectedValue} onChange={changeSelectedValue}>
      { options }
    </select>
  )
};

export default select;
