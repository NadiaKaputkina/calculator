import React, {Component} from 'react';
import './App.css';

import TabBar from './components/TabBar/TabBar';
import TabBarItem from './components/TabBar/TabBarItem/TabBarItem';
import LoanContainer from './containers/Loan';
import LeaseContainer from './containers/Lease';
import Spinner from './components/Spinner/Spinner';
import InfoCard from './containers/InfoCard/InfoCard';
import {DEFAULT_DOWN_PAYMENT, DEFAULT_TRADE_IN, DEFAULT_CREDIT_SCORE} from "./constants/constants";
import classes from './App.css';
import mockData from './constants/mockData';

class App extends Component {
  state = {
    tradeIn: DEFAULT_TRADE_IN,
    downPayment: DEFAULT_DOWN_PAYMENT,
    creditScore: DEFAULT_CREDIT_SCORE,
    postCode: null,
    info: null,
    lease: null,
    loan: null
  };

  calculate = () => {
    console.log('calculate')
  };

  onChangeHandler = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    },
      this.calculate()
    )
  };

  getLocalPostCode = () => {
    const LOCATION_API_TOKEN = 'b6d69c0ea5d585';

    return fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`)
    .then(res => res.json())
  };

  componentDidMount() {
    console.log('[App] componentDidMount');

    this.getLocalPostCode()
      .then(res => this.setState({ postCode: res.postal }));

    Promise.resolve(mockData)
      .then(res => this.setState({ info: res }));
  }

  render() {
    console.log('[App] render');
    const spinner = (!this.state.postCode && !this.state.info) ? <Spinner/> : null;

    return (
      <div className={classes.App}>
        <TabBar>
          <TabBarItem label="Loan" value={this.state.loan}>
            { spinner || <LoanContainer {...this.state}
                                        onChangeHandler={this.onChangeHandler}/>
            }
          </TabBarItem>
          <TabBarItem label="Lease" value={this.state.lease}>
            {spinner || <LeaseContainer {...this.state}
                                        onChangeHandler={this.onChangeHandler}/>
            }
          </TabBarItem>
        </TabBar>

        {spinner || <InfoCard info={this.state.info} postCode={this.state.postCode}/>}
      </div>
    );
  }
}

export default App;
