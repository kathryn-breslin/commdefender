import React from "react";
import "./InputField.css";

interface IProps {
  inputField: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputSubmit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

// This might look confusing, let's take it one step at a time.
// Instead of using the full object of props, we pulled out the 3 individual properties we want so we can use them directly.
// const InputField = (props) => (
// is the same as
// const InputField = ({ inputField, handleInput, handleInputSubmit }) => (
// So instead of `props` we destructure with curlies like `{ inputField, handleInput, handleInputSubmit }`.

// We can then apply our interface as seen below, which would also be the same thing as (props: Props).
const InputField = ({ inputField, handleInput, handleInputSubmit }: IProps) => (
  <form className="input-group mb-3" id="inputForm">
    <input
      id="input"
      type="text"
      placeholder="Hello"
      name="inputField"
      value={inputField}
      onChange={handleInput}
      className="form-control"
    />
    <div className="input-group-append">
      <button
        onClick={handleInputSubmit}
        type="button"
        className="btn btn-outline-secondary"
      >
        Add
      </button>
    </div>
  </form>
);

export default InputField;
