import React from "react";
import "./Results.css";

interface IProps {
    children: React.ReactNode;
}

const Results = ({ children }: IProps) => (
    <ul className="list-group" id="itemGroup">
        <li className="list-group-item" id="item">
            {children}
        </li>
    </ul>
);

export default Results;