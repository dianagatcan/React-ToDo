import React, { useState } from "react";
import './styles.css';

export default function Item(props){
    const [done, setDone] = useState(false);

    function deleteItem(){
        props.deleteItem(props.id)
    }
   
    function toggleDone(event){
        if(done){
            event.target.style.textDecoration='none'
        setDone(false)} else{
            event.target.style.textDecoration='line-through'
            setDone(true)
        }
    }

    return(
        <ul className="list">
            <li className="item" title={props.text} onClick={toggleDone}>{props.text}<span className="delete" onClick={deleteItem}>x</span></li>
        </ul>
        
    )
}