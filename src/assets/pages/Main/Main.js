import React, { Component } from "react";
import InputField from "../../components/Input";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputField: "",
            inputFieldList: [],
        }
    }

    handleInput = event => {
        this.setState({
            inputField: event.target.value,
        })
        // console.log(event.target.value)
    }

    handleInputSubmit = event => {
        event.preventDefault();
        // console.log("Input Field: ", this.state.inputField);
        this.setState({
            inputFieldList: this.state.inputFieldList.concat(this.state.inputField)
        })
        // console.log("Input array test in submit handler: ", this.state.inputFieldList)
    }

    renderInfo() {
        return (
            // console.log("Array test in render function: " + this.state.inputFieldList);
            <div>
                <ul>
                    {this.state.inputFieldList.map(item => (
                        <ul key={item}>{item}</ul>
                    ))}
                </ul>
            </div>
        )
    }
    render() {
        return (
            <div>
                <InputField
                handleInput={this.handleInput}
                handleInputSubmit={this.handleInputSubmit}
                />

                {this.renderInfo()}

            </div>
        )
    }
}

export default Main;