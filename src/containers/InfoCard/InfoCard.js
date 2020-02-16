import React from 'react';

import RowItem from '../RowItem/RowItem';
import classes from './InfoCard.css';

const infoCard = ({info, postCode}) => {

  return (
    <div className={classes.InfoCard}>
      <RowItem text="MSRP">
        <p>{info.msrp}</p>
      </RowItem>

      <RowItem text="Vehicle name">
        <p>{info.vehicleName}</p>
      </RowItem>

      <RowItem text="Monthly payment">
        <p></p>
      </RowItem>

      <RowItem text="Taxes">
        <p></p>
      </RowItem>

      <RowItem>
        <p>{info.dealerName}</p>
      </RowItem>

      <RowItem>
        <p>{info.dealerPhone}</p>
      </RowItem>

      <RowItem>
        <p>{info.dealerRating}</p>
      </RowItem>
    </div>
  )
};

export default infoCard;
