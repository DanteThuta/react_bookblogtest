import React, { useState, useEffect } from "react";
import "./MyAddedTask.css";

const MyAddedTask = ({ addedTask, setAddedTask, toggleToDo }) => {
  const [status, setStatus] = useState("all");
  //   const handleCheck = (userId) => {
  //     let checkedTask = addedTask.map((item) => {
  //       if ((item.userId = userId)) {
  //         item.complete = !item.complete;
  //       }
  //       return item;
  //     });
  //   };

  // const completeToggle = () => {
  //   let completeTask = addedTask.map((task) => {
  //     if (task.complete) return task;
  //   });
  //   setAddedTask({ ...addedTask, completeTask });
  //   // console.log(completeTask);
  // };

  // const incompleteToggle = () => {
  //   let incompleteTask = addedTask.map((task) => {
  //     if (!task.complete) return task;
  //   });
  //   setAddedTask(incompleteTask);
  //   console.log(incompleteTask);
  // };

  const filterChange = (e) => {
    // console.log(e.target.value);
    switch (status) {
      case "completed":
        addedTask.filter((task) => {
          if (task.complete === true) return task;
        });
        console.log("work");
        break;

      default:
        break;
    }
  };

  useEffect(() => {}, [status]);
  return (
    <>
      <div>
        <select onChange={filterChange} name="" id="">
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
          <option value="all">All</option>
        </select>
      </div>
      {addedTask.map((item) => (
        <div key={item.userId} className="">
          <div>
            <p className={item.complete ? "complete" : ""}>{item.title}</p>
            <p>{item.body}</p>
          </div>
          <div>
            <button onClick={() => toggleToDo(item.userId)}>Mark</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyAddedTask;
