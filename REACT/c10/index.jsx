import React from "react";
import ReactDOM from "react-dom";

class Store extends React.Component {
 constructor() {
  super();
  this.state = {
   open: true,
   itemCount: 22
  }
 }
 render() {

  var sign;
  if (!this.state.open) {
   sign = < p > Sorry, we are closed
   for the day. < /p>;
  } else if (this.state.itemCount ==
   0) {
   sign = < p > Sorry, we are out of
    stock on that item. < /p>;
  } else {
   sign = < p > We have {
    this.state.itemCount
   } of that item. < /p>;
  }

  return ( <
   div >
   <
   h3 > The Mom - n - Pop store <
   /h3> <
   p > < i > < u > Item: <
   /u> Choco-Cookies</i > < /p> {
    sign
   } <
   /div>
  )
 }

}

ReactDOM.render( <
 Store / > ,
 document.getElementById("root")
);