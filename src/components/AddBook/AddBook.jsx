import React, { useState } from "react";

const AddBook = ({ takeData }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    takeData({ newTitle, newBody });

    setNewTitle("");
    setNewBody("");
  };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
        />

        <button>Add</button>
      </form>
    </div>
  );
};

export default AddBook;
