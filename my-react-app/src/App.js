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
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeButton = this.changeButton.bind(this);
  }

  addTodo(e) {
    e.preventDefault();

    if (this.state.item.trim() === '') {
      return;
    }

    const item = {
      title: this.state.item,
      status: "作業中"
    };

    const todos = this.state.todos.slice();
    todos.push(item);
    this.setState({
      todos: todos,
      item: ''
    });

  }

  updateItem(e) {
    this.setState({
      item: e.target.value
    });
  }

  deleteTodo(todo) {
    const todos = this.state.todos.slice();
    const pos = this.state.todos.indexOf(todo);

    todos.splice(pos, 1);
    this.setState({
      todos: todos
    });
  }

  changeButton(todo) {
    const todos = this.state.todos.slice();
    const pos = this.state.todos.indexOf(todo);
    if (todos[pos].status == "作業中") {
      todos[pos].status = "完了";
      console.log('完了です')
    } else {
      todos[pos].status = "作業中";
      console.log('作業中です')
    }
   console.log(todos)
    this.setState({
      todos: todos
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
          deleteTodo={this.deleteTodo}
          changeButton={this.changeButton}
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
