import React from 'react'

export const TodoItem = ({todo1,onDelete}) => {
  return (
    <>

    <p>Title:  {todo1.title}</p>
    <p>Description: {todo1.desc}</p>
    <button className="btn btn-sm btn-danger my-3" onClick={ ()=>{onDelete(todo1)}}>Delete</button>
    
    </>
  )
}
