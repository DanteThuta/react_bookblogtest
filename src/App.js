import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

//components
import Navbar from "./components/Navbar/Navbar";
import Booklist from "./components/Booklist/Booklist";
import AddBook from "./components/AddBook/AddBook";
import Footer from "./components/Footer/Footer";
import MyAddedTask from "./components/MyAddedTask/MyAddedTask";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  // limit command : ?_limit=5

  const [bookDatas, setBookDatas] = useState([]);
  const [addedTask, setAddedTask] = useState(() => {
    const localData = localStorage.getItem("addedTask");
    return localData ? JSON.parse(localData) : [];
  });
  const [loading, setLoading] = useState(false);

  const fetchBookurl = async () => {
    setLoading(true);
    await axios.get(url).then((response) => {
      const fetchData = response.data;

      setBookDatas(fetchData);

      setLoading(false);
    });
  };

  //test
  const takeData = ({ newTitle, newBody }) => {
    let newInput = [
      ...addedTask,
      {
        userId: addedTask.length + 1,
        title: newTitle,
        body: newBody,
        complete: false,
      },
    ];
    console.log(newInput);
    setAddedTask(newInput);
  };

  //Delete Task
  const deleteTask = (id) => {
    const newTask = addedTask.filter((task) => {
      return task.userId != id;
    });
    setAddedTask(newTask);
    console.log("delete task work");
  };

  const deletePost = (id) => {
    const newBookDatas = bookDatas.filter((bookData) => {
      return id != bookData.id;
    });
    console.log("delete worked");
    setBookDatas(newBookDatas);

    // setBookDatas(
    //   bookDatas.filter((bookData) => {
    //     return id != bookData.id;
    //   })
    // );
  };

  const toggleToDo = (userId) => {
    let updatedTodos = addedTask.map((item) => {
      if (item.userId === userId) {
        item.complete = !item.complete;
      }
      return item;
    });
    setAddedTask(updatedTodos);
  };

  useEffect(() => {
    fetchBookurl();
  }, []);

  useEffect(() => {
    localStorage.setItem("addedTask", JSON.stringify(addedTask));
  }, [addedTask]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Navbar />
          <AddBook takeData={takeData} />
          <MyAddedTask
            toggleToDo={toggleToDo}
            addedTask={addedTask}
            setAddedTask={setAddedTask}
            deleteTask={deleteTask}
          />
          <Booklist bookDatas={bookDatas} deletePost={deletePost} />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
