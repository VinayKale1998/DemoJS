import React from "react"

export default class Clock extends React.Component{

  constructor(props)
  {

    super(props)
    console.log("constructor called");
    this.state={

        date:new Date()
       }

  }

  render()
  { console.log("Render function called")
    return(
       
        <div >{this.state.date.toLocaleTimeString()} </div>
    )
  }
  componentDidMount()
  {

    console.log("component did mount")
    setInterval(()=>{
        this.setState({date:new Date()});
        console.log("setInterval called")

        }
,1000)




  }

 
 
   




}