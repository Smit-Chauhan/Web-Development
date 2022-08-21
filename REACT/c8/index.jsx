import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
 const [ width, setWidth] = useState(100);
 const [ height, setHeight ] = useState(100);
 const [ radius, setRadius ] = useState(50);

 useEffect(()=>{
  let r = (height <= width) 
   ? height * 0.5
   : width * 0.5
  setRadius(r);
 },[width,height])
 
 return (
  <div>
   <h1>Circle Creator</h1>
   <label for="width">Width:</label>
   <input id="width" type="range" value={width} onChange={(e)=>{setWidth(e.target.value)}} min="10" max="100" />
   <label for="height">Height:</label>
   <input id="height" type="range" value={height} onChange={(e)=>{setHeight(e.target.value)}} min="10" max="100" />
   <div className="container">
    <div className="box" style={{
     width:`${width}px`,
     height:`${height}px`,
     borderRadius:`${radius}px`
    }}></div>
   </div>
  </div>
 );
}

ReactDOM.render(
 <App />,
 document.getElementById("root")
);