import React from "react";

interface IProps {
  recipient: string;
  body: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;  
  handleTextInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  addBody: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Message = ({ recipient, body, handleInput, handleTextInput, addBody }: IProps) => (
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
        onChange={handleInput}
      />
    </div>
    <div className="form-group">
      <label>Message Here:</label>
      <textarea
        className="form-control"
        id="recBody"
        name="body"
        value={body}
        onChange={handleTextInput}
      />
    </div>
    <button
      onClick={addBody}
      type="button"
      className="btn btn-outline-secondary"
    >
      Add Message
    </button>
  </form>
);

export default Message;
