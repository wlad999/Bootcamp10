import React, { Component } from 'react';
import ControlsH3 from '../ControlsH3/ControlsH3.js';
import Balance from '../Balance/Balance.js';
import HistoryTa from '../HistoryTa/HistoryTa';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      history: [],
      balance: 0,
      inputData: 0,
      income: 0,
      outcome: 0,
      operation: '',
    };
  }

  onChange = e => {
    console.log('onChange;');
    this.setState({ inputData: +e.target.value });
  };

  onClick = e => {
    console.log('onClick');
    if (e.target.textContent === 'Deposit') {
      this.setState({
        balance: this.state.balance + this.state.inputData,
        income: this.state.inputData,
        operation: 'Deposit',
      });
    } else if (e.target.textContent === 'Withdraw') {
      this.setState(prevState => ({
        balance: prevState.balance - prevState.inputData,
        outcome: this.state.inputData,
        operation: 'Withdraw',
      }));
    }
    this.createHistorty();
  };

  createHistorty = () => {
    if (this.state.operation === 'Deposit') {
      this.state.history.push({
        type: 'Deposit',
        amount: this.state.inputData,
        date: new Date(new Date().toISOString()).toLocaleString(),
      });
    } else {
      this.state.history.push({
        type: 'Withdraw',
        amount: this.state.inputData,
        date: new Date(new Date().toISOString()).toLocaleString(),
      });
    }
  };

  render() {
    const {
      history,
      balance,
      income,
      outcome,
    } = this.state; /* деструктуризируем весь обїект */
    // const item = items[count];
    return (
      <>
        <div className="dashboard">
          <ControlsH3 onChange={this.onChange} onClick={this.onClick} />
          <Balance balance={balance} income={income} outcome={outcome} />
          <HistoryTa history={history} />
        </div>
      </>
    );
  }
}

export default Dashboard;
