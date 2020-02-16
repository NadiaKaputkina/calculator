import React, {Component} from 'react';

import Aux from '../hoc/Aux/Aux';
import Input from '../components/Input/Input';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import RowItem from './RowItem/RowItem';
import {CREDIT_SCORE, TERMS_LOAN, DEFAULT_TERMS_LOAN, DEFAULT_APR} from "../constants/constants";

class Loan extends Component {
  state = {
    term: DEFAULT_TERMS_LOAN,
    apr: DEFAULT_APR
  };

  onChangeValue = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: +value
    })
  };

  render() {
    console.log('[Loan] render');
    const {downPayment, tradeIn, postCode, creditScore, onChangeHandler} = this.props;

    return (
      <Aux>
        <RowItem text="Home Post Code">
          <Input type="number" name="postCode"
                 value={postCode}
                 handleChange={onChangeHandler}/>
        </RowItem>

        <hr/>

        <RowItem text="Term (Months)">
          <ButtonGroup name="term"
                       listOfValue={TERMS_LOAN}
                       selectedValue={this.state.term}
                       changeSelectedValue={this.onChangeValue}/>
        </RowItem>

        <RowItem text="Down Payment">
          <Input type="number" name="downPayment" prefix
                 value={downPayment}
                 handleChange={onChangeHandler}/>
        </RowItem>

        <RowItem text="Trade-In Value">
          <Input type="number" name="tradeIn" prefix
                 value={tradeIn}
                 handleChange={onChangeHandler}/>
        </RowItem>

        <RowItem text="Approx. Credit Score">
          <ButtonGroup name="creditScore" listOfValue={CREDIT_SCORE}
                       selectedValue={creditScore}
                       changeSelectedValue={onChangeHandler}/>
        </RowItem>

        <RowItem text="Estimated APR">
          <Input type="number" name="apr" postfix
                 value={this.state.apr}
                 handleChange={this.onChangeValue}/>
        </RowItem>
      </Aux>
    )
  }
};

export default Loan;
