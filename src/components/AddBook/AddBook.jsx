import React, { useState } from "react";

const AddBook = ({ takeData }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    takeData(title, body);

    setTitle("");
    // console.log(newData);
  };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button>Add</button>
      </form>
    </div>
  );
};

export default AddBook;
