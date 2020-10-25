import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const todos = props.todos.map((todo, index) => {
     if(props.radio[0].checked === true){
     } else if(props.radio[1].checked === true){
      if(todo.status === '完了'){return}
     }else if(props.radio[2].checked === true){
      if(todo.status === '作業中'){return}
     }
    return (
      <TodoItem
        index={index}
        todo={todo}
        deleteTodo={props.deleteTodo}
        changeButton={props.changeButton}
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