import React, { Component } from "react";
import { InputField, Results, Message } from "components";
import "./Main.css";

// I can see you're inclined to map over what you're calling a "subject list". Let's go back to the basics and think about what an email application actually does.
// It's good to go back to the basics and think about the practical parts of what you're working on because how you name things can have an impact on your thinking,
// and I suspect that's what's happening here.I may not have done a good job at communicating what to do, and that'll be mine to learn and get better at!

// An email client, whether it be on the Inbox, Drafts, or Trash page, displays a list of emails.
// Generally speaking, the list only shows the subject rather than the entire email body, as well as maybe the date created and who sent it.
// The subject, recipient, and body are all properties of an email, and to show any or all of those properties, we'll need a list of emails.

// Generally speaking, a list of emails and the form to a compose an email are on separate pages but for what we're doing, we're going to keep them on the same page.
// You can keep the form above or below the email list, up to you.

// The way I'd envision this to look is for an empty form to be on the page when it loads.
// It has 3 inputs: recipient, subject and body.
// It also has a button to submit the form, or, in real application terms, send the email.
// After submitting, I'd be able to see my email--potentially just the subject--rendered on the page under "Email List".

// To translate that vision into code, I would know that I'd need an array to act as my list.
// I would also know that once my subject, recipient and body were submitted, they'd be stored together as properties on an object since they're all just parts of one whole--an email.
// Then, in rendering the list, I'd just pick and choose which properties on the email object I wanted to show.

// My email object would like this:
interface IEmail {
  subject: string;
  recipient: string;
  body: string;
}

// And because my email list is going to be a list of emails, my state would look like this:
interface IState {
  emailList: IEmail[]; // an array of email objects with the shape of IEmail
  subjectValue: string; // I'm going to suffix the input value properties with "-Value" to avoid confusion between them and the email property
  recipientValue: string;
  bodyValue: string;
}

class Main extends Component {
  state: IState = {
    emailList: [],
    subjectValue: "",
    recipientValue: "",
    bodyValue: ""
  };

  handleInput = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [`${name}Value`]: value // I had to update this key like so to support the new naming convention with -Value
    });
  };

  // Upon submitting the values, I would then group the values from the inputs and set them as properties on an email object.
  // I would then push the full email object onto the email list array.
  handleSubmit = (event: { preventDefault: () => void }) => {
    const { subjectValue, recipientValue, bodyValue, emailList } = this.state;
    event.preventDefault();

    const email = {
      subject: subjectValue,
      recipient: recipientValue,
      body: bodyValue
    };

    // Push the new email object onto the array of emails
    emailList.push(email);

    console.log("email :", email);

    console.log("emailList :", emailList);

    this.setState({
      subjectValue: "",
      recipientValue: "",
      bodyValue: "",
      emailList: emailList
    });
  };

  // To render the list, I would map over all the emails and for each one, I'd wrap it in a list item tag
  // and only show the subject.

  // I would then render the result of all those list items in an unordered list tag.
  renderInfo() {
    const { emailList } = this.state;

    const emails = emailList.map((item, index) => {
      return (
        <li key={index}>
          <p>{item.subject}</p>
        </li>
      );
    });

    return <ul>{emails}</ul>;
  }

  render() {
    const { subjectValue, recipientValue, bodyValue } = this.state;

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
                    value={recipientValue}
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
                    value={subjectValue}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="form-group">
                  <label>Body:</label>
                  <textarea
                    className="form-control"
                    id="recBody"
                    name="body"
                    value={bodyValue}
                    onChange={this.handleInput}
                  />
                </div>
                <button
                  onClick={this.handleSubmit}
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="group">
                <h1>Email List</h1>
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
