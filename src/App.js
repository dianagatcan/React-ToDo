import React, {useEffect, useState} from "react";
import './App.css';
import Input from './components/Input/input';
import Item from "./components/Item/item";

function App() {
  const[todos, setTodos] = useState([]);

  useEffect(()=>{
    if(todos.length>0){
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
     setTodos(todos);
    }
  }, []);

  function sendToInput(todo){
    setTodos(prevValue => {
        return [...prevValue, todo]
    })
  }

  function removeItem(id){
    setTodos(todos.filter((todo, index) =>{
        return id !== index
    }))
  }

  return (
    <div className="container">
      <h1 className='heading'>Todo List</h1>
      <Input receivedFunction={sendToInput} />
      <ul>
        {todos.map((todo, index)=>{
            return <Item deleteItem={removeItem} key={index} id={index} text={todo}/>
        })}
        </ul>
    </div>
  );
}

export default App;
