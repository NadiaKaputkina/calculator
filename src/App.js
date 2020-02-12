import React, {Component} from 'react';
import './App.css';

import TabBar from './components/TabBar/TabBar';
import TabBarItem from './components/TabBar/TabBarItem/TabBarItem';
import LoanContainer from './containers/LoanContainer';
import LeaseContainer from './containers/LeaseContainer';

class App extends Component {
  state = {
    tradeIn: 0,
    downPayment: 0,
    creditScore: 750,
    zipCode: null,
  };

  handleChange = () => {
    this.setState({})
  };

  componentDidMount() {
    const LOCATION_API_TOKEN = 'b6d69c0ea5d585';

    fetch(`https://ipinfo.io/json?token=${LOCATION_API_TOKEN}`)
      .then(res => res.json())
      .then(res => this.setState());
  }

  render() {
    const spinner = <div>Spinner</div>;

    return (
        <TabBar>
          <TabBarItem label="Loan">
            <LoanContainer props={this.state} />
          </TabBarItem>
          <TabBarItem label="Lease">
            <LeaseContainer props={this.state} />
          </TabBarItem>
        </TabBar>
    );
  }
}

export default App;
