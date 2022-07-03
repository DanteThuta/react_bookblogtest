import React from "react";

const Test = ({ test }) => {
  return (
    <>
      {test.map((item) => (
        <div key={item.userId}>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
};

export default Test;
