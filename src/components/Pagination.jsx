import React from "react";

const Pagination = ({
  residentPerPage,
  totalResidents,
  pageChange,
  actualPage,
}) => {
  const numberPage = [];

  for (let i = 1; i <= Math.ceil(totalResidents / residentPerPage); i++) {
    numberPage.push(i);
  }

  return (
    <div className="text-center">
      <div className="pagination">
        {numberPage.map((number) => (
          <button
            key={number}
            onClick={() => pageChange(number)}
            className={number === actualPage ? "actualPage" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;