import React, { Component } from "react";
import { InputField, Results } from "components";
import "./Main.css";

// Interfaces are a way for us to define the shape of our data. I use them a lot to define my state and props.
// It's good practice to start your interface name with a capital I, then name it something descriptive of what it's defining the shape of.
interface IState {
  inputField: string; // the value of a subject is a string, so we can simply put "string" for the type of inputField
  inputFieldList: string[]; // the value of this list is going to be an array of strings, so we can define it like: string[] OR Array<string>. I like the first syntax.
}

class Main extends Component {
  // We can then apply the expected shape here, right after 'state', as seen below. You can then leave out any individual types in the individual properties.
  state: IState = {
    inputField: "",
    inputFieldList: []
  };

  handleInput = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputSubmit = (event: { preventDefault: () => void }) => {
    const { inputFieldList, inputField } = this.state;

    event.preventDefault();
    this.setState({
      inputField: "",
      inputFieldList: inputFieldList.concat(inputField)
    });
  };

  renderInfo() {
    const { inputFieldList } = this.state;
    return (
      <ul>
        {inputFieldList.map(
          (item: React.ReactNode, index: string | number | undefined) => (
            <Results key={index}>
              {/* // id={item.id}> */}
              Title: {item}
            </Results>
          )
        )}
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
