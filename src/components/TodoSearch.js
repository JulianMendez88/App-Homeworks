import React from "react";
import './TodoSearch.css'

function TodoSearch(props){
    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
    }


    return(<input className="TodoSearch" 
    placeholder="Write Your Taks"
    onChange={onSearchValueChange}
    ></input>)
};

export {TodoSearch};