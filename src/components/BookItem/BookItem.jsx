import React from "react";

import "./BookItem.css";

const BookItem = ({ bookData, props, deletePost }) => {
  const { id, title, body } = props.data;

  return (
    <div className="book__item">
      <div className="book__info">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="book__button">
        <button onClick={() => deletePost(id)}>Delete</button>
      </div>
    </div>
  );
};

export default BookItem;

// import React from "react";

// function BookItem(props) {
//   const { id, title, body } = props.data;
//   return (
//     <div className="">
//       <p>w</p>
//     </div>
//   );
// }

// export default BookItem;
