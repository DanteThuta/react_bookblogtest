import React from "react";
import { useState } from "react";
import "./Pagination.css";

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
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

  const changePage = (event) => {
    const newPage = Number(event.target.textContent);
    setCurrentPage(newPage);

    console.log("context", event.target.textContent);
  };

  const PaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((d, idx) => start + idx + 1);
  };

  const test = getPaginationGroup();

  return (
    //showing Post
    <div>
      <div className="">
        {/* {data.map((item) => (
          <p>{item.title}</p>
        ))} */}
        {PaginatedData().map((bookData, idx) => (
          <RenderComponent key={idx} data={bookData} />
        ))}
      </div>
      {/* Pagination List */}
      <div className="pagination">
        <button
          onClick={gotoPrevPage}
          className={`side-btn ${currentPage < 0 ? "disabled" : ""}`}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button key={index} onClick={changePage} className="pagination-btn">
            {item}
          </button>
        ))}
        <button
          onClick={gotoNextPage}
          className="side-btn"
          disabled={currentPage === pages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
