import React from "react"
import {Outlet} from "react-router-dom"

export default function Home1()
{
    return(
        <div> 
            <h1> This is your home-page</h1>
            <Outlet/>
        </div>
    )
}