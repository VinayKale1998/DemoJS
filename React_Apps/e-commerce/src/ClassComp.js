 
 import React from "react"
 import "../src/App.css"

 export default class ClassComp extends React.Component{
   
    render(){
        
       
        return (
            <>
            <h1>{console.log(this.props.name)}</h1>
            <h1 className="clcomp"> This is my class component  {this.props.name}</h1>
            </>
        )
    }

     

 }