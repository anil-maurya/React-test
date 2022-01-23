import React from "react";

const style = {
  backgroundColor: "#C3C3C0C0",
  display: "flex",
  justifyContent: "space-around",
  alignItem: "center",
  width: "200px",
  height: "50px",
  borderRadius: "10px",
  border: "1px solid gray",
  padding: "10px"
};

const WithContainer = (Children) => (props) => {
  // const { children } = props;

  return (
    <div style={style}>
      <Children {...props} />
    </div>
  );
};

export default WithContainer;
