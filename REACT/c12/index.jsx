import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
 constructor() {
  super();
  this.state = {
   interested: false,
   updates: false
  }
 }

 userInteraction = (e) => {
  const setTo = e.target.value ==
   "yes";
  this.setState({
   [e.target.name]: setTo
  });
 }

 render() {
  const interestedString = (this
   .state.interested) ? "yes" : "no";
  const updatesString = (this.state
   .updates) ? "yes" : "no";
  return ( <
   div >
   <
   h1 > Boogle Forms(pt .3) < /h1> <
   p > Would you be interested in
   participating in
   another experiemnt with the prototype in
   the future ? < /p> <
   select name = "interested"
   value = {
    interestedString
   }
   onChange = {
    this.userInteraction
   } >
   <
   option value = "yes" > Yes <
   /option> <
   option value = "no" > No <
   /option> <
   /select> <
   p >
   Would you like to receive updates on our team 's progress through email?</p> <
   select name = "updates"
   value = {
    updatesString
   }
   onChange = {
    this.userInteraction
   } >
   <
   option value = "yes" > Yes <
   /option> <
   option value = "no" > No <
   /option> <
   /select> <
   /div>
  );
 }
}

ReactDOM.render( <
 App / > ,
 document.getElementById("root")
)