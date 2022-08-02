import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem"
export const Todos = ({todos,onDelete}) => {
  let myStyle = {
    minHeight:"70vh",
    margin:"40px auto"
   }
  return (
    <div className='container' style={myStyle}>
      <h5>Todos List</h5>
     {todos.length==0? "No todos to display":
     todos.map((todo) =>{
       return (
        <>
         <TodoItem todo1={todo} key={todo.sno} onDelete={onDelete}/>     <hr/>
        </>
       )
     })
     
     }

    </div>
  )
}

