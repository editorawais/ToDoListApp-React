import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './todo.css';

const List = (props) => {
    return (
        <>
        <div className="todo">
            <button className="btn btn-danger" onClick={()=>{
                props.onSelect(props.id)
            }}>X</button>
            <li> {props.text} </li> 
        </div>
    </>
    )
}

export default List;
