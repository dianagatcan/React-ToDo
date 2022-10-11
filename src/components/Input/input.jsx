import React, {useState} from "react";
import './styles.css';

export default function Input(props){
    const [todo, setTodo] = useState("");

    function handleChange(event){
        setTodo(event.target.value)
    }

    function handleKeyPress(event){
        if(event.key === "Enter"){
            props.receivedFunction(todo)
            setTodo("")
        }
    }

    return(
        <div className="form">
             <input value={todo} onChange={handleChange} onKeyPress={(e)=>handleKeyPress(e)} type="text" placeholder="What needs to be done?"></input>
        </div>
    )
}
