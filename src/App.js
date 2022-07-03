import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import Booklist from "./components/Booklist/Booklist";
import AddBook from "./components/AddBook/AddBook";
import Test from "./components/Test";
import MyAddedTask from "./components/MyAddedTask/MyAddedTask";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [bookDatas, setBookDatas] = useState([]);
  const [addedTask, setAddedTask] = useState([]);
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
    // const newData = [
    //   {
    //     userId: 1,
    //     title: newTitle,
    //     body: newBody,
    //   },
    // ];
    // console.log(typeof newData);
    // // setBookDatas({ ...bookDatas, newData });
    // setTest({ newData, ...test });

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

  useEffect(() => {
    fetchBookurl();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <AddBook takeData={takeData} />
          <MyAddedTask addedTask={addedTask} setAddedTask={setAddedTask} />
          <Booklist bookDatas={bookDatas} deletePost={deletePost} />
        </>
      )}
    </>
  );
};

export default App;
