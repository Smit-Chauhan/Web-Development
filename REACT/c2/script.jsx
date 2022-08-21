import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<
            div>
            <
            h2>
            Where can I learn how to code ? <
   /h2> <
   p >
            Looking
        for a way to learn how to code easily ?
            <
            br / >
   Have no fear:
   MIMO is here to help!
            <
            /p> <
   a href = {
            this.props.url
        } > MIMO Website < /a> <
            / div >
  );
    }
}

ReactDOM.render(<
    App url = "https://getmimo.com/" /
 > ,
    document.getElementById("root")
);