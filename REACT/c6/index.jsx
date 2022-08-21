import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const App = () => {
 const styling = {
  width: "100%"
 }
 return ( <
  div >
  <
  img src =
  "https://mimo.app/i/flatiron.png"
  alt = "Flatiron" / >
  <
  p >
  "[One] of the world's most iconic skyscrapers and a quintessential symbol of New York City" -
  WLIW21 company. < /p> <
  /div>
 );
}

ReactDOM.render( <
 App / > ,
 document.getElementById("root")
);
