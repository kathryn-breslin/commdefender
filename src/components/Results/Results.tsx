import React from "react";
import "./Results.css";

interface IProps {
  children: React.ReactNode;
//   addBody: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Results = ({ children }: IProps) => (
  <ul className="list-group" id="itemGroup">
    <li className="list-group-item" id="item">
      {children}
      {/* <button
        onClick={addBody}
        type="button"
        className="btn btn-outline-secondary"
      >
        Add Message
      </button> */}
    </li>
  </ul>
);

export default Results;
