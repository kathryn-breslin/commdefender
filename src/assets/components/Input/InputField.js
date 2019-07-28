import React from "react";
import "./InputField.css";

const InputField = props =>
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
                <button onClick={props.handleInputSubmit} type="text" className="btn btn-outline-secondary">Add</button>
            </div>
        </form>


export default InputField;