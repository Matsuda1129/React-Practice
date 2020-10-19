import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <table>
      <tr>
        <td>ID</td>
        <td>コメント</td>
        <td>状態</td>
      </tr>
      {props.todos.map((todo, index) => (
  <TodoItem 
    index={index} 
    todo={todo}
    deleteTodo={props.deleteTodo}
    />
))}
    </table>
  )
}

export default TodoList;
