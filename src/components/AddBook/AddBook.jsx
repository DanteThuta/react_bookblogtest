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
    <div className="add-container">
      <form className="form-type" onSubmit={handleSubmit}>
        <div className="form-headingsection">
          <h3>
            Add Your Posts here:<span className="cursor">|</span>
          </h3>
        </div>
        <input
          className="input-type"
          type="text"
          value={newTitle}
          placeholder="Enter Value"
          // ref={inputRef}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <input
          className="input-type"
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
