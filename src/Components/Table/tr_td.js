import React from "react";

function TD(props) {
  return <td>{props.data}</td>;
}

function TR(props) {
  return <tr>{props.TD}</tr>;
}
export default TD;
export { TR };