import React from "react";
import "./Booklist.css";

import BookItem from "../BookItem/BookItem";

const Booklist = ({ bookDatas, deletePost }) => {
  return (
    <>
      {bookDatas.map((bookData) => (
        <div className="book__list" key={bookData.id}>
          <BookItem bookData={bookData} deletePost={deletePost} />
        </div>
      ))}
    </>
  );
};

export default Booklist;
