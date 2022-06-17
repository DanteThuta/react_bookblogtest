import React from "react";
import "./Booklist.css";

import BookItem from "../BookItem/BookItem";

const Booklist = ({bookData}) => {
  return (
    <>
      <div>
        <BookItem bookData={bookData} />
      </div>
    </>
  );
};

export default Booklist;
