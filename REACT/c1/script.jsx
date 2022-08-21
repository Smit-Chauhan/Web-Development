import React from "react";
import ReactDOM from "react-dom";

const CustomButton = (props) => {

 return ( <
  button > {
   props.value
  } <
  /button>
 );
}

ReactDOM.render( <
 CustomButton value = "Click me!" / >
 ,
 document.getElementById("button")
);