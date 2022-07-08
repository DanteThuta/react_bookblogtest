// import React from "react";

// import "./BookItem.css";

// const BookItem = ({ bookData, deletePost }) => {
//   return (
//     <div className="book__item">
//       <div className="book__info">
//         <h3>{title}</h3>
//         <p>{body}</p>
//       </div>
//       <div className="book__button">
//         <button onClick={() => deletePost(id)}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default BookItem;

import React, { useState } from "react";
import "./BookItem.css";

function BookItem(props) {
  const { id, title, body } = props.data;
  const [readMore, setReadMore] = useState(true);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="book-container">
      <h2>Post ID: {id}</h2>
      <h3>{title}</h3>
      <p>
        {readMore ? body.slice(0, 50) : body}
        <span onClick={toggleReadMore} className="toggle-readmore">
          {readMore ? "...See More" : "...See Less"}
        </span>
      </p>
      <div className="item-btn">
        <button className="btn-type">Toggle</button>
        <button className="btn-type">Delete</button>
      </div>
    </div>
  );
}

export default BookItem;
