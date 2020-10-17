import React from 'react'

const TodoItem = (props) => {
  return (
      <tr>
        <td>{props.index}</td>
        <td>{props.todo.title}</td>
        <td>
          <button value="作業中">作業中</button>
          <button value="削除">削除</button>
        </td>
      </tr>
  )
}
export default TodoItem
