import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const todos = props.todos.map((todo, index)=> {
    return (
      <TodoItem
      index={index}
      todo={todo}
      />
    )
  });
  return (
    <table>
      <tr>
        <td>ID</td>
        <td>コメント</td>
        <td>状態</td>
      </tr>
      {todos}
    </table>
  )
}

export default TodoList;