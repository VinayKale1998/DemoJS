import React from "react"
import Todos from "./Todos"

export default class AddTodo extends React.Component{

    state={
        value:""
    }
  
constructor(props)
{
    super(props)
}

    onSubmit=(event)=>
    
    {  
        
        event.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({value:""})

       
      

    }


    onChange=(event)=>
    {
        this.setState({value:event.target.value})
    }
    render()
    {
        // console.log(this.state.value)

        return (
        <div className="conatiner">
            <form onSubmit={this.onSubmit}>
                <div className="mb-4">
                    

                    <input id="input" name="input" type="text" className=
                    "form-control" style={{width:"60px"}}  onChange={this.onChange}
                    value={this.state.value}
                    
                    ></input>
                </div>


                <button type="submit"  className="btn btn-success">AddTodo</button>
            </form>





        </div>
        
        )
    }
}