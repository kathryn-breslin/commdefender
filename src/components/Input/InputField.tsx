import React from "react";
import "./InputField.css";

const InputField = (props: { inputField: string | number | string[] | undefined; handleInput: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined; handleInputSubmit: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; }) =>
        <form className="input-group mb-3" id="inputForm">
            <input
                id="input"
                type="text"
                placeholder="Hello"
                name="inputField"
                value={props.inputField}
                onChange={props.handleInput}
                className="form-control" />
            <div className="input-group-append">
                <button onClick={props.handleInputSubmit} type="button" className="btn btn-outline-secondary">Add</button>
            </div>
        </form>


export default InputField;