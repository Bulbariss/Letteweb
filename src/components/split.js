/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Splitting from "./splitting";
class Split extends React.Component {
  componentDidMount() {
    const target = document.querySelector("#mooving-letters");

    Splitting({
      target: target,
      by: "chars",
      whitespace: true
    });
  }

  render() {
    return (
      <div data-splitting className="mr-auto">
        {this.props.children}
      </div>
    );
  }
}

export default Split;
