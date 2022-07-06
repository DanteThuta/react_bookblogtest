import React from "react";
import "./Booklist.css";
import Pagination from "../Pagination/Pagination";

import BookItem from "../BookItem/BookItem";

const Booklist = ({ bookDatas, deletePost }) => {
  return (
    <>
      {bookDatas.length > 0 ? (
        <Pagination
          RenderComponent={BookItem}
          data={bookDatas}
          title="Posts"
          pageLimit={5}
          dataLimit={10}
        />
      ) : (
        <h1> No Posts</h1>
      )}
      {/* {bookDatas.map((bookData) => (
        <div className="book__list" key={bookData.id}>
          <BookItem bookData={bookData} deletePost={deletePost} />
        </div>
      ))} */}
    </>
  );
};

export default Booklist;
