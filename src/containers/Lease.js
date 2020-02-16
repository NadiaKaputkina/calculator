import React, {Component} from 'react';

import Aux from '../hoc/Aux/Aux';
import Input from '../components/Input/Input';
import Select from '../components/Select/Select';

import {CREDIT_SCORE, TERMS_LEASE, DEFAULT_TERMS_LEASE, MILEAGES, DEFAULT_MILEAGES} from "../constants/constants";

class Lease extends Component {
  state = {
    term: DEFAULT_TERMS_LEASE,
    mileages: DEFAULT_MILEAGES
  };

  onChangeValue = (event) => {
    console.log('---')
    const {name, value} = event.target;

    this.setState({
      [name]: +value
    })
  };

  render() {
    console.log('[Lease] render');
    const {downPayment, tradeIn, postCode, creditScore, onChangeHandler} = this.props;

    return (
      <Aux>
        <div>
          <label>Home Post Code
            <Input type="number" name="postCode" value={postCode} handleChange={onChangeHandler}/>
          </label>
        </div>

        <hr/>

        <div>
          <label>Term (Months)
            <Select name="term" listOfValue={TERMS_LEASE}
                    selectedValue={this.state.term}
                    changeSelectedValue={this.onChangeValue}/>
          </label>
        </div>

        <div>
          <label>Down Payment
            <Input type="number" name="downPayment" prefix value={downPayment} handleChange={onChangeHandler}/>
          </label>
        </div>

        <div>
          <label>Trade-In Value
            <Input type="number" name="tradeIn" prefix value={tradeIn} handleChange={onChangeHandler}/>
          </label>
        </div>

        <div>
          <label>Mileages
            <Select name="mileages" listOfValue={MILEAGES}
                    selectedValue={this.state.mileages}
                    changeSelectedValue={this.onChangeValue}/>
          </label>
        </div>

        <div>
          <label>Approx. Credit Score
            <Select name="creditScore" listOfValue={CREDIT_SCORE}
                    selectedValue={creditScore}
                    changeSelectedValue={onChangeHandler}/>
          </label>
        </div>
      </Aux>
    )
  }
};

export default Lease;
