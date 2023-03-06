import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import ClassComp from './ClassComp';
import Toggle from './Toggle';
import Clock from "./Clock"
import "bootsrap/dist/css/bootsrap.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <App name="vinay" value="100" ></App>
<ClassComp name="Niranjan" value="200"> </ClassComp>
<Toggle></Toggle>
<Clock></Clock>

  </>
);
