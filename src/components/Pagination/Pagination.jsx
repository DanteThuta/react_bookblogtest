import React from "react";
import { useState } from "react";

const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const gotoNextPage = () => {
    setCurrentPage((page) => page + 1);
    console.log(currentPage);
  };

  const gotoPrevPage = () => {
    // const page = currentPage;
    // if (page < 0) return 1;
    setCurrentPage((page) => page - 1);
    console.log(currentPage);
  };

  const changePage = (e) => {
    const newPage = Number(e.target.textContext);
    setCurrentPage(newPage);
  };

  const PaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const test = PaginatedData();

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    //showing Post
    <div>
      <h1>{title}</h1>
      <div className="">
        {/* {data.map((item) => (
          <p>{item.title}</p>
        ))} */}
        {PaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>
      {/* Pagination List */}
      <div className="pagination">
        <button onClick={gotoPrevPage}>Prev</button>
        {getPaginationGroup().map((item, index) => {
          <button key={index} onClick={changePage}>
            {item}
          </button>;
        })}
        <button onClick={gotoNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
