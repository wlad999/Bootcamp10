import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodosForm from '../components/TodosForm/TodosForm';
import TodosList from '../components/TodosList/TodosList';
import { addTodo, removeTodo, toggleComplete } from './todosAction';

class TodosPage extends Component {
  state = {
    title: '',
    description: '',
  };

  onHandleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onHandleSubmit = () => {
    const { add } = this.props;
    const id = new Date().getTime();
    const { title, description } = this.state;
    add({ id, title, description });
  };

  onHandleDelete = id => {
    const { remove } = this.props;
    remove(id);
  };

  onHandleChecked = id => {
    const { toggleComplete } = this.props;
    toggleComplete(id);
    console.log('checked', id);
  };

  render() {
    const { todos } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          justtifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column wrap',
        }}
      >
        <h1>Todos</h1>
        <TodosForm
          onHandleSubmit={this.onHandleSubmit}
          onHandleInput={this.onHandleInput}
        />
        <TodosList
          onHandleChecked={this.onHandleChecked}
          onHandleDelete={this.onHandleDelete}
          data={todos}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  add: todo => dispatch(addTodo(todo)),
  remove: id => dispatch(removeTodo(id)),
  onToggleComplete: id => dispatch(toggleComplete(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosPage);
