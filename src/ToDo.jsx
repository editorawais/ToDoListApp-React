import React, { useState } from "react";
import './todo.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from "./List";



const Todo = () =>{
 const[valcur, setvalcur] = useState("");
 const[lval, setlval] = useState([]);


const btnClick = (event) =>{
    event.preventDefault();
    setlval((pre) =>  
        [...pre, valcur]);
        setvalcur("");
};
const delitem = (id) =>{
    
    setlval((oldval)=>{
       return oldval.filter((arrElem, index)=>{
            return index !== id; 
        });
    });
    };


    return (
    <>
    <div className="main_div">
    <div className="center_div">
        <br />
        <h1 className="heading">To Do List</h1>
        <br />
        <input value={valcur} className="input" onChange={(e)=>setvalcur(e.target.value)} type="text"/>
        <button className="btn btn-success" onClick={btnClick}>Add</button>
        <br />
        {/* <button className="btn btn-success">Hello</button> */}
        <ol className="list">
        {/* <li>{lval}</li> */}
        {lval.map( (val, index) => {
            return <List 
            text={val} key={index} id={index} onSelect={delitem}
            /> 
        })}
        </ol>

    </div>
    </div>
    </>
    );
};
export default Todo;