import React from "react";

interface IProps {
//   recipient: string;
//   body: string;
  addBody: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

const Message = ({ addBody }: IProps) => (
  <form>
    <div className="form-group">
      <label>Send To:</label>
      <input
        type="email"
        className="form-control"
        id="recEmail"
        placeholder="example@gmail.com"
      />
    </div>
    <div className="form-group">
      <label>Message Here:</label>
      <textarea className="form-control" id="recBody" />
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
