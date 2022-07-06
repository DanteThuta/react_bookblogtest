import React, { useState, useEffect, useRef } from "react";
import "./AddBook.css";

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
  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  return (
    <div>
      <form className="form-type" onSubmit={handleSubmit}>
        <input
          className="input-type"
          type="text"
          value={newTitle}
          placeholder="Enter Value"
          // ref={inputRef}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        
        <input
        className="input-textarea"
          type="text"
          value={newBody}
          placeholder="Enter Value"
          onChange={(e) => setNewBody(e.target.value)}
        />

        <button className="btn-type">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
