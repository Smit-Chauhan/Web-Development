import React, {
    useState,
    useEffect
   } from "react";
   import ReactDOM from "react-dom";
   
   const App = () => {
    const [mp, setMP] = useState(0);
   
    useEffect(() => {
     const repeating = setInterval(
     () => {
       setMP((m) => {
        let newM = (m < 100) ? m +
         1 : m;
        return newM;
       });
      }, 100);
     return () => {
      clearInterval(repeating);
     }
    }, []);
   
    return ( <
     div >
     <
     h1 > Magic System < /h1> <
     p > < strong > MP: < /strong> {mp}/
     100 < /p> <
     button onClick = {
      () => {
       if (mp >= 0) setMP(mp - 20)
      }
     } >
     Cast Spell <
     /button> <
     /div>
    );
   }
   
   ReactDOM.render( <
    App / > ,
    document.getElementById("root")
   );