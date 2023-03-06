import React from "react"
import {Link} from "react-router-dom"

export default class Home extends React.Component{
    render(){
        return(
            <div>
            <div> This is your Home Page</div>
            <Link to="/About"> Click here to view About</Link><br />
            <Link to="/Contact"> Click here to view the Contact page</Link>
            
            
            </div>
        )
    }
}