import React from "react";
// import About from "./Components/About"
// import Contact from "./Components/Contact"
// import Home from "./Components/Home"
import {Routes,Route} from "react-router-dom"
import Home1 from "./NestedComponents/Home1";
import Delete from "./NestedComponents/Delete"
import Compose from "./NestedComponents/Compose"


export default function App()
{
  // return(
  //   <Routes>
  //     <Route path="/" element={<Home></Home>}></Route>
  //     <Route path="/Contact" element={<Contact></Contact>}></Route>
  //     <Route  path="/About" element={<About></About>}></Route>


  //   </Routes>
  // )

  return(
    <div className="App">
    <Routes>
      <Route path="Home" element={<Home1></Home1>}>
          <Route index element ={<Compose></Compose>}></Route>
          <Route path="Delete" element={<Delete></Delete>}> </Route>
      </Route>
    </Routes>
    </div>


    
  )
}


