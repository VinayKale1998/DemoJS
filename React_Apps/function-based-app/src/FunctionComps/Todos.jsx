import { useState } from "react";
import AddTodo from "./AddTodo.jsx";

import Todo from "./Todo"


const  Todos=()=>
{


    const [todos,setTodos]= useState(localStorage.getItem("Todos")?JSON.parse(localStorage.getItem("todos")):[]);

    const onDelete=(todo)=>{


    }

    const addNewTodo=(todo)=>{

    }

    const edit=(todo)=>{

    }

    const isDone=(todo)=>
    {
    }

    return(
        
        <div className="container">
             <h1 style={{color:"aqua",backgroundColor:"blue"}}>Todos React Function Based App</h1>
             
             <div>

                {

                    todos?.length==0?
                  <h1> No todos present</h1>:
                  Todos.map(item=>{

                    return<Todo></Todo>
                  })

                    
                }
             </div>
             {/* <AddTodo/> */}
             </div>
    )

}

export default Todos;