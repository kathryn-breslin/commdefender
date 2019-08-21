import React, { Component } from "react";
import { InputField, Results, Message } from "components";
import "./Main.css";

// I can see you're inclined to map over what you're calling a "subject list". Let's go back to the basics and think about what an email application actually does.
// It's good to go back to the basics and think about the practical parts of what you're working on because how you name things can have an impact on your thinking,
// and I suspect that's what's happening here.I may not have done a good job at communicating what to do, and that'll be mine to learn and get better at!

// An email client, whether it be on the Inbox, Drafts, or Trash page, displays a list of messages.
// Generally speaking, the list only shows the subject rather than the entire email body, as well as maybe the date created and who sent it.
// The subject, recipient, and body are all properties of a message, and to show any or all of those properties, we'll need a list of messages.

// Generally speaking, a list of messages and the form to a compose a message are on separate pages but for what we're doing, we're going to keep them on the same page.
// You can keep the form above or below the message list, it makes no difference.

// The way I'd envision this to look is for an empty form to be on the page when it loads.
// It has 3 inputs: recipient, subject and body.
// It also has a button or buttons to submit the inputs.
// After submitting, I'd be able to see my messsage--potentially just the subject--rendered on the page under "Messages List".

// To translate that vision into code, I would know that I'd need an array to act as my list.
// I would also know that once my subject, recipient and body were submitted, they'd be stored together as properties on an object since they're all just parts of one whole--a message.
// Then, in rendering the list, I'd just pick and choose which properties on the message object I wanted to show.

// My message object would like this:
interface IMessage {
  subject: string;
  recipient: string;
  body: string;
}

// And because my message list is going to be a list of messages, my state would look like this:
interface IState {
  messageList: IMessage[]; // an array of message objects
  subject: string;
  recipient: string;
  body: string;
}

class Main extends Component {
  state: IState = {
    messageList: [],
    subject: "",
    recipient: "",
    body: ""
  };

  handleInput = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleTextInput = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Upon submitting the values, I would then group the values from the inputs and set them as properties on a message object.
  // I would then push the full message object onto the message list array.
  handleInputSubmit = (event: { preventDefault: () => void }) => {
    const { subject, recipient, body, messageList } = this.state;
    event.preventDefault();

    const message = {
      subject,
      recipient,
      body
    };

    // If the above message variable looks confusing, see that it's the same as what's below:
    // const message: {
    //  subject: subject,
    //  recipient: recipient,
    //  body: body,
    // }

    // Push the new message object onto the array of messages
    messageList.push(message);

    console.log("messageList :", messageList);

    this.setState({
      subject: "",
      recipient: "",
      body: "",
      messageList // same here as const message --> messageList: messageList,
    });
  };

  // To render the list, I would map over all the messages and for each one, I'd wrap it in a list item tag
  // and only show the subject.

  // I would then render the result of all those list items in an unordered list tag.
  renderInfo() {
    const { messageList } = this.state;

    console.log("messageList :", messageList);

    const messages = messageList.map((item, index) => {
      return (
        <li key={index}>
          <p>{item.subject}</p>
        </li>
      );
    });

    return <ul>{messages}</ul>;
  }

  render() {
    const { subject, recipient, body } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8" />
            <div className="col-4">
              <form>
                <div className="form-group">
                  <label>Send To:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="recEmail"
                    placeholder="example@gmail.com"
                    name="recipient"
                    value={recipient}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="form-group">
                  <label>Subject:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject here"
                    name="subject"
                    value={subject}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="form-group">
                  <label>Message Here:</label>
                  <textarea
                    className="form-control"
                    id="recBody"
                    name="body"
                    value={body}
                    onChange={this.handleTextInput}
                  />
                </div>
                <button
                  onClick={this.handleInputSubmit}
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  Add Message
                </button>
              </form>
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
