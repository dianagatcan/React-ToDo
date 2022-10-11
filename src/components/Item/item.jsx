import React from "react";
import './styles.css';

export default function Item(props){

    function handleDelete(){
        props.deleteItem(props.id)
    }

    return(
        <ul className="list">
            <li className="item" title={props.text}>{props.text}<span className="delete" onClick={handleDelete}>x</span></li>
        </ul>
        
    )
}