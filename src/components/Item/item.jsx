import React from "react";
import './styles.css';

export default function Item(props){
    const {text, id, deleteItem} = props;

    function handleDelete(){
        deleteItem(id)
    }

    return(
        <ul className="list">
            <li className="item" title={text}>{text}<span className="delete" onClick={handleDelete}>x</span></li>
        </ul>
        
    )
}