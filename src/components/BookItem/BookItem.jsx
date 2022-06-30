import React from "react";
import "./BookItem.css";

const BookItem = ({ bookData, deletePost }) => {
  return (
    <div className="book__item">
      <div className="book__info">
        <h3>{bookData.title}</h3>
        <p>{bookData.body}</p>
      </div>
      <div className="book__button">
        <button onClick={() => deletePost(bookData.id)}>Delete</button>
      </div>
    </div>
  );
};

export default BookItem;
