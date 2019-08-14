import React, { Component } from "react";
import { InputField, Results, Message } from "components";
import "./Main.css";

// Interfaces are a way for us to define the shape of our data. I use them a lot to define my state and props.
// It's good practice to start your interface name with a capital I, then name it something descriptive of what it's defining the shape of.
// the value of a subject is a string, so we can simply put "string" for the type of inputField
// the value of this list is going to be an array of strings, so we can define it like: string[] OR Array<string>. I like the first syntax.

interface IState {
      subject: string;
      subjectList: string[];
      recipient: string;
      body: string;
}

class Main extends Component {
  // We can then apply the expected shape here, right after 'state', as seen below. You can then leave out any individual types in the individual properties.

  state: IState = {
      subject: "",
      subjectList: [],
      recipient: "",
      body: ""
  };

  handleInput = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleInputSubmit = (event: { preventDefault: () => void }) => {
    const { subject, subjectList } = this.state;
    event.preventDefault();
    this.setState({
      subject: "",
      subjectList: subjectList.concat(subject)
    });
  };

  addBody = (event: { preventDefault: () => void; }) => {
    //   const { recipient, body } = this.state;
    event.preventDefault();
    console.log("This button has been clicked");
  }

  renderInfo() {
    const { subjectList } = this.state;
    return (
      <ul>
        {subjectList.map(
          (item: React.ReactNode, index: string | number | undefined) => (
            <Results
            key={index}>
              Title: {item}
              <Message
              addBody={this.addBody}
              />
            </Results>
          )
        )}
      </ul>
    );
  }
  render() {
    const { subject } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8" />
            <div className="col-4">
              <InputField
                subject={subject}
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
                <h1>Messages List</h1>
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
