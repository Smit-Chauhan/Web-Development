import React from "react";

export const Panel = (props) => {
 return ( <
  div >
  <
  img src = {
   props.url
  }
  /> <
  h4 > {
   props.description
  } < /h4> <
  p > Price: {
   props.price
  } < /p> <
  /div>
 );
}