import React from "react";
import "./Results.css";

const Results = props => (
    <ul className="list-group" id="itemGroup">
        <li className="list-group-item" id="item">
            {props.children}
        </li>
    </ul>
);

export default Results;