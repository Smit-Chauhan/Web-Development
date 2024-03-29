import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            power: 100
        }
    }

    clickHandle = () => {
        if (this.state.power < 10) return;
        this.setState({
            power: this.state.power - 10
        });
    }

    render() {
        return (
            <div>
                <img src=
                    "https://mimo.app/i/car.png"
                    alt="Car" />
                <h1> My Car </h1>
                <p>
                    It 's currently at {this.state.power}% power.</p> 
                    <button onClick={
                            this.clickHandle
                        } > Drive further 
                    </button>
            </div>
        );
    }
}

ReactDOM.render(<
    App />,
    document.getElementById("root")
);