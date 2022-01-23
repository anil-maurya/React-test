import React from "react";
import WithContainer from "./WithContainer";

function Button(props) {
  const { label } = props;
  const handleClick = () => {
    window.location = "https://www.google.com";
  };

  return <button onClick={handleClick}>{label} </button>;
}

export default WithContainer(Button);
