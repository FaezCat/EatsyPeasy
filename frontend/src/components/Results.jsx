import { Fragment } from "react";
import SingleResult from "./SingleResult";

export default function Results(props) {
  return (
    <Fragment>
      <div className="page-number-display">
        4 of 4
      </div>
      <h1>Your Customized Selections</h1>
      <div>
        <SingleResult/>
        <SingleResult/>
        <SingleResult/>
      </div>
      <h3>Need some input? Generate a poll to share with your friends!</h3>
    </Fragment>
 )
}

