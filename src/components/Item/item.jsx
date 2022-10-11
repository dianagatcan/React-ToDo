import React, { useState } from "react";
import './styles.css';
// import ClearIcon from '@mui/icons-material/Clear';
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import cs

export default function Item(props){
    // const submit = () => {
    //     confirmAlert({
    //       title: 'Are you sure?',
    //       message: 'You want to delete this file?',
    //       buttons: [
    //         {
    //           label: 'Yes',
    //           onClick: () => props.deleteItem(props.id)
    //         },
    //         {
    //           label: 'No',
    //         }
    //       ]
    //     });
    //   };
   
    const [done, setDone] = useState(false);
   
    function toggleDone(event){
        if(done){
            event.target.style.textDecoration='none'
        setDone(false)} else{
            event.target.style.textDecoration='line-through'
            setDone(true)
        }
    }

    function handleClick(){
        props.deleteItem(props.id)
    }

    return(
        <div className="item">
        <li title={props.text} onClick={toggleDone}>{props.text}</li>
        {/* <ClearIcon onClick={submit} className="delete" /> */}
        </div>
        
    )
}