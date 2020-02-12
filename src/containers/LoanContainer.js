import React from 'react';

import Aux from '../hoc/Aux/Aux';
import Input from '../components/Input/Input';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import {TERMS_LOAN, DEFAULT_TERMS_LOAN, CREDIT_SCORE, DEFAULT_CREDIT_SCORE} from "../constants/constants";

const loanContainer = ({zipCode, tradeIn, downPayment, creditScore}) => {
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
      <ButtonGroup listOfValue={TERMS_LOAN} defaultValue={DEFAULT_TERMS_LOAN}/>
      <p>Approx. Credit Score</p>
      <ButtonGroup listOfValue={CREDIT_SCORE} defaultValue={DEFAULT_CREDIT_SCORE}/>
    </Aux>
  )
};

export default loanContainer;
