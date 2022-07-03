import React from "react";
import "./MyAddedTask.css";

const MyAddedTask = ({ addedTask, setAddedTask }) => {
  //   const handleCheck = (userId) => {
  //     let checkedTask = addedTask.map((item) => {
  //       if ((item.userId = userId)) {
  //         item.complete = !item.complete;
  //       }
  //       return item;
  //     });
  //   };
  return (
    <>
      {addedTask.map((item) => (
        <div key={item.userId} className="">
          <div>
            <p className={item.complete ? "" : "complete"}>{item.title}</p>
            <p>{item.body}</p>
          </div>
          <div>
            <button>Mark</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyAddedTask;
