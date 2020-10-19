import React from 'react'

const TodoForm = (props) => {
  return (
    <div className="titleSection">
     <h2>新規タスクの追加</h2>
     <form onSubmit={props.addTodo}>
            <input type="text" value={props.item} onChange={props.updateItem}/>
            <input type="submit" value="Add"/>
          
            </form>
  </div>
  );
}

export default TodoForm