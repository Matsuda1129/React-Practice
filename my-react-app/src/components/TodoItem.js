import React from 'react'

const TodoItem = (props) => {
  return (
      <tr>
        <td>{props.index}</td>
        <td>{props.todo.title}</td>
        <td>
          <input type="button" value={props.todo.status} onClick={() => props.changeButton(props.todo)} ></input>
          <input type="button" value="削除" onClick={() => props.deleteTodo(props.todo)}></input>
        </td>
      </tr>
  )
}
export default TodoItem
