import React, { Component } from 'react';
import Header from './Header/Header';
import Counter from './Counter/Counter';
import Form from './Form/Form';
import UserCard from './UserCard/UserCard';
import HomeWork1 from './HomeWork/HomeWork1';
import Stats from './HomeWork/HW2';
import items from './Item.HW3.json';
import ite from './HW4transactions.json';
import PricingPlan from './HomeWork/HW3';
import TransactionHistory from './HomeWork/HW4';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      logoTitle: 'ReactApp',
      count: 0,
      users: [],
    };
  }

  onIncrement = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    /* второй вариатн записи */
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  onDecrement = () => {
    if (this.state.count > 0)
      this.setState({
        count: this.state.count - 1,
      });
  };

  onSubmit = data => {
    const { users } = this.state;
    const newUsers = [...users];
    const userData = data;
    userData.id = new Date().getTime();
    newUsers.push(data);

    this.setState({ users: newUsers });
  };

  render() {
    const {
      logoTitle,
      count,
      users,
    } = this.state; /* деструктуризируем весь обїект */

    return (
      <>
        <Header logotitle={logoTitle} logged />
        <Form onSubmit={this.onSubmit} />
        <Counter
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
          count={count}
        />
        <ul>
          {users.length > 0 &&
            users.map(el => <UserCard key={el.id} {...el} />)}
        </ul>
        <HomeWork1 {...user} />
        <Stats stats={stats} />
        <PricingPlan items={items} />,
        <TransactionHistory ite={ite} />,
      </>
    );
  }
}

export default App;
