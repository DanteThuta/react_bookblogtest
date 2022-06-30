import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import Booklist from "./components/Booklist/Booklist";
import AddBook from "./components/AddBook/AddBook";
import Test from "./components/Test";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [bookDatas, setBookDatas] = useState([]);
  const [test, setTest] = useState([]);
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
  const takeData = ({ title, body }) => {
    const newData = {
      userId: 1,
      title: title,
      body: body,
    };
    // setBookDatas({ ...bookDatas, newData });
    setTest(newData);
    console.log(test);
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
          <Test test={test} />
          <Booklist bookDatas={bookDatas} deletePost={deletePost} />
        </>
      )}
    </>
  );
};

export default App;
