import React from "react"

import Todo from "./Todo"
import AddTodo from "./AddTodo"



export default class Todos extends React.Component{

state={
        todos:localStorage.getItem("todos")?
        JSON.parse(localStorage.getItem("todos")):
        [],

        
    }

    addNewTodo=(todoValue)=>{

        if(todoValue)
        {
        const todos =[...this.state.todos]  //     "[{sf},{}]"

            todos.push({
                id:new Date().getTime(),
                value:todoValue,
                isDone:false

             })

        this.setState({todos})
        localStorage.setItem("todos",JSON.stringify(todos));
           
        }
        console.log(this.state.todos)
       // console.log("AddTodo function has been called and the todo item added is: "+todoValue)
       
        


    }

    delete=(todo)=>{

    }

    done=()=>{



    }


    render()
    {
        console.log(this.state.todos)

       
        return(
            
            <div>
                 
                {
                    

                this.state.todos?.length==0?
                <h1> No todo is present </h1>
                :
                this.state.todos.map((todo, index)=>{
                    return <Todo key={index} index ={index+1} item={todo} > </Todo>

                })
            }
            <AddTodo addTodo={this.addNewTodo}></AddTodo>
            </div>
           
        )
    }
}