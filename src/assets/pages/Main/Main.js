import React, { Component } from "react";
import InputField from "../../components/Input";

class Main extends Component {
    state = {
        inputField: "",
        submitted: false
    }

    handleInput = event => {
        this.setState({
            inputField: event.target.value
        })
    }

    handleInputSubmit = event => {
        event.preventDefault();
        console.log("Input Field: ", this.state.inputField);
        this.setState({
            submitted: true
        })
    }

    renderInfo() {
        return (
            <p>{this.state.inputField}</p>
        )
    }
    render() {
        return (
            <div>
                <InputField
                handleInput={this.handleInput}
                handleInputSubmit={this.handleInputSubmit}
                />

                {this.state.submitted && this.renderInfo()}

            </div>
        )
    }
}

export default Main;