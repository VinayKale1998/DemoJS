import React from "react";

export  default class Toggle extends React.Component
{
 green ='aqua'
 Blue='green'

 constructor(props)
 {
    super(props);
    this.state={
        color:this.Blue,
        color1:this.green
        
    }
 }

 changeColor()
 {
   this.setState({color:this.state.color1})
 }

 render()
 {
    return (
    <div>
        <div style={{background:this.state.color}}> This is green</div>
        <button onClick={this.changeColor.bind(this)}> Button</button>


    </div>
 )
 }
}