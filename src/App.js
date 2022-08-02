import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/header';
import {Todos} from "./MyComponents/Todos"
import {Footer} from "./MyComponents/Footer"
import {AddItem} from "./MyComponents/AddItem"
import React,{useState,useEffect} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
 const onDelete = (todo1)=>{
  console.log("I am ondelete of todo",todo1);

  setTodos(todos.filter((e)=>{
    return e!==todo1;
  }));
  localStorage.setItem("todos",JSON.stringify(todos));

 }

const addTodo = (title,desc)=>{
  console.log("Adding",title,desc);
  let sno;
  if(todos.length==0)
  {
  sno=1;
  }
  else {

    sno = todos[todos.length-1].sno + 1;
  }
  
  const myTodo ={
    sno:sno,
    title:title,
    desc:desc,
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);

  localStorage.setItem("todos",JSON.stringify(todos));
}
const [todos,setTodos] = useState(initTodo)
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos])


  return (
    <>
      <Header searchBar={true} /> 
      <AddItem addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>   
      <Footer/> 
    </>
    
    );
}

export default App;
