import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [];

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: todos,
      item: ''
    };
    this.updateItem = this.updateItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();

    const item = {
      title: this.state.item,
    };

    const todos = this.state.todos.slice();
    todos.push(item);
    this.setState({
      todos: todos
    });

  }

  updateItem(e) {
    this.setState({
      item: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <h1>ToDo リスト</h1>
        <input type="radio" />すべて
        <input type="radio" />作業中
        <input type="radio" />削除
        <TodoList
          todos={this.state.todos}
        />
        <TodoForm
          todos={this.state.todos}
          addTodo={this.addTodo}
          item={this.state.item}
          updateItem={this.updateItem}
        />
      </div>

    );
  }

}

export default App;
