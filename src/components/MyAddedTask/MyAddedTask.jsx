import React, { useState, useEffect } from "react";
import "./MyAddedTask.css";

const MyAddedTask = ({ addedTask, setAddedTask, toggleToDo }) => {
  const [status, setStatus] = useState("all");
  const [filteredTask, setFilteredTask] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState("");
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

  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  const filterChange = (e) => {
    switch (status) {
      case "complete":
        setFilteredTask(addedTask.filter((task) => task.complete === true));
        break;
      case "incomplete":
        setFilteredTask(addedTask.filter((task) => task.complete === false));
        break;

      default:
        setFilteredTask(addedTask);
        break;
    }
  };

  const changeName = (userId) => {
    // setEditData(e.target.value);
    filteredTask.filter((item) => {
      return item.userId === userId ? setEditData(item.title) : "";
    });
    // console.log(editData);
  };

  useEffect(() => {
    filterChange();
  }, [addedTask, status]);
  return (
    <>
      <div className="select-box">
        <select onChange={statusHandler} className="select-type" name="" id="">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      {isEdit ? <input type="text" value={editData} /> : ""}
      {filteredTask.map((item) => (
        <div key={item.userId} className="user-container">
          <div className="user-task">
            <p
              className={
                item.complete
                  ? "user-singletask-title complete"
                  : "user-singletask-title"
              }
            >
              {item.title}
            </p>
            <p>{item.body}</p>
          </div>

          <button onClick={() => toggleToDo(item.userId)}>Toggle</button>
          <button onClick={() => changeName(item.userId)}>Edit</button>
        </div>
      ))}
    </>
  );
};

export default MyAddedTask;
