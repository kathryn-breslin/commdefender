import React from "react";

const InputField = props => 
    <div className="container">
        <form id="inputForm">
            <label htmlFor="inputField">Subject: </label>
                <input 
                name="inputField" 
                placeholder="Hello" 
                onChange={props.handleInput} 
                type="text" 
                className="form-control"/>
                <button onClick={props.handleInputSubmit} type="text" className="btn btn-primary btn-lg btn-block">Add</button>
        </form>
    </div>


export default InputField;