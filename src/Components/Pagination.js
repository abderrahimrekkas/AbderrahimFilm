import React from "react";

const Pagination = ({ page, setPage }) => {
  const Previous = () => {
    if (page !== 1) {
      setPage(page - 1);
    } else {
      setPage(page);
    }
  };

  const Next = () => {
    if (page < 10) {
      setPage(page + 1);
    }
  };

  return (
    <div className="my-3 flex justify-between items-center">
      <button
        className="px-3 py-1 m-1 text-center bg-blue-500  rounded hover:bg-blue-600"
        onClick={Previous}
      >
        Previous
      </button>
      <button
        className="px-3 py-1 m-1 text-center bg-blue-500  rounded hover:bg-blue-600"
        onClick={Next}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;