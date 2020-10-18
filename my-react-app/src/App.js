import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import RadioButton from './components/RadioButton';

const todos = [];
const radio = [
  {id: 0, name: "select", value: "すべて", checked: true },
  {id: 1, name: "select", value: "作業中", checked: false },
  {id: 2, name: "select", value: "完了", checked: false },
];

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: todos,
      radio: radio,
      item: ''
    };
    this.updateItem = this.updateItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeButton = this.changeButton.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
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

  handleRadioClick(r) {
    const radio = this.state.radio.slice();
    radio.forEach(function (radio, index) {
      radio.checked = false;
      console.log(radio.checked); 
    })
    r.checked = true 
    console.log(radio);

    this.setState({
      radio: radio
    });
  }

  render() {
    return (
      <div className="container">
        <h1>ToDo リスト</h1>
        <RadioButton
         radio={this.state.radio}
         handleRadioClick={this.handleRadioClick}
        />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          changeButton={this.changeButton}
          radio={this.state.radio}
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
