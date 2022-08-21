import React from "react";
   import ReactDOM from "react-dom";
   import messageStyles from "./styles.jsx";
   
   const MessageBox = (props) => {
   
    const messagesToPrint = props
     .messages.map(message => {
      const styleType = (message
        .sender != "Me") ?
       "onLeft" :
       "onRight";
      return ( <
       div key = {
        message.id
       }
       style = {
        messageStyles[styleType]
       } > {
        message.content
       } <
       /div>
      );
     });
   
    return ( <
     div >
     <
     h2 > Recent Conversations < /h2> <
     div style = {
      messageStyles.container
     } > {
      messagesToPrint
     } <
     /div> <
     /div>
    );
   }
   
   const messages = [{
     id: "081819-11.12",
     sender: "Dad",
     content: "When will you be back?"
    },
    {
     id: "081819-11.13",
     sender: "Me",
     content: "Maybe around 1?"
    },
    {
     id: "081819-14.25",
     sender: "Dad",
     content: "Where are you?!"
    },
   ]
   
   ReactDOM.render( <
    MessageBox messages = {
     messages
    }
    />,
    document.getElementById("root")
   )