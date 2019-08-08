import React, { Component } from "react";
import { InputField, Results } from "components";
import "./Main.css";

class Main extends Component {
  state = {
    inputField: "",
    inputFieldList: []
  };

  handleInput = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputSubmit = ( event: { preventDefault: () => void; }) => {
    const { inputFieldList, inputField } = this.state;

    event.preventDefault();
    this.setState({
      inputField: "",
      inputFieldList: inputFieldList.concat(inputField)
      ///Argument of type 'string' is not assignable to parameter of type 'ConcatArray<never>'.ts(2345)
    });
  };

  renderInfo() {
    const { inputFieldList } = this.state;
    return (
      <ul>
        {inputFieldList.map((item, index) => (
          <Results key={index}>
            {/* // id={item.id}> */}
            Title: {item}
          </Results>
        ))}
      </ul>
    );
  }
  render() {
    const { inputField } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8" />
            <div className="col-4">
              <InputField
                inputField={inputField}
                handleInput={this.handleInput}
                handleInputSubmit={this.handleInputSubmit}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="group">
                <h1>Subject List</h1>
                <div id="renderGroup">{this.renderInfo()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
