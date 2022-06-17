import React, { useState, useEffect } from "react";
import axios from "axios";

//components
import Booklist from "./components/Booklist/Booklist";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  const [bookData, setBookData] = useState({});

  const fetchBookurl = () => {
    axios.get(url).then((response) => {
      const fetchData = response.data;
      console.log(fetchData);
      setBookData(fetchData);
    });
  };

  useEffect(() => {
    fetchBookurl();
  });

  return (
    <>
      <Booklist bookData={bookData} />
    </>
  );
};

export default App;
