import React, { useState, useEffect } from "react";
import "./MyAddedTask.css";

const MyAddedTask = ({ addedTask, setAddedTask, toggleToDo }) => {
  const [status, setStatus] = useState("all");
  const [filteredTask, setFilteredTask] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState("");

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
    let newEditItem = filteredTask.find((item) => {
      return item.userId === userId;
    });
    setEditData(newEditItem.title);
    setIsEdit(true);
  };

  useEffect(() => {
    filterChange();
  }, [addedTask, status]);
  return (
    <>
      <div className="post-container">
        <div className="select-box">
          <select
            onChange={statusHandler}
            className="select-type"
            name=""
            id=""
          >
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        {isEdit ? (
          <input type="text" value={editData} onChange={replaceName()} />
        ) : (
          ""
        )}
        {filteredTask.map((item) => (
          <div key={item.userId} className="user-container">
            <div className="user-task">
              <p
                className={
                  item.complete
                    ? "user-taskheading complete"
                    : "user-taskheading"
                }
              >
                {item.title}
              </p>
              <p className="user-taskinfo">
                <span className="user-taskinfo-label">Notes:</span> {item.body}
              </p>
            </div>
            <div className="btn-section">
              <button className="btn" onClick={() => toggleToDo(item.userId)}>
                Toggle
              </button>
              <button className="btn" onClick={() => changeName(item.userId)}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyAddedTask;
