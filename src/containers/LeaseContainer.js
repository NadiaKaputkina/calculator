import React from 'react';

import Aux from '../hoc/Aux/Aux';
import Input from "./LoanContainer";
import Select from '../components/Select/Select';

import {CREDIT_SCORE, DEFAULT_CREDIT_SCORE, DEFAULT_TERMS_LOAN, TERMS_LOAN} from "../constants/constants";

const leaseContainer = ({zipCode, tradeIn, downPayment, creditScore}) => {
  return (
    <Aux>
      <p>Down Payment</p>
      <Input>{downPayment}</Input>
      <p>Trade-In Value</p>
      <Input>{tradeIn}</Input>
      <p>Estimated APR</p>
      <Input></Input>
      <p>Home ZIP Code</p>
      <Input>{zipCode}</Input>
      <p>Terms (Months)</p>
      <Select listOfValue={TERMS_LOAN} defaultValue={DEFAULT_TERMS_LOAN}/>
      <p>Approx. Credit Score</p>
      <Select listOfValue={CREDIT_SCORE} defaultValue={DEFAULT_CREDIT_SCORE}/>
    </Aux>
  )
};

export default leaseContainer;
