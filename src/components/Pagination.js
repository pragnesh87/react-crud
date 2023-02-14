import React from "react";
import { NavLink } from "react-router-dom";

function Pagination(props) {
  const currentPage = props.current;
  const lastPage = props.last;
  let pageItems = [];
  for (let i = 1; i <= lastPage; i++) {
    pageItems.push(
      <NavLink
        to={`/${i}`}
        key={i}
        type="button"
        className={`btn btn-primary ${currentPage === i ? "active" : ""}`}
      >
        {i}
      </NavLink>
    );
  }
  return (
    <>
      <div className="btn-group" role="group" aria-label="Pagination">
        {currentPage === 1 ? (
          <button
            type="button"
            className={`btn btn-primary`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        ) : (
          <NavLink
            to={`/${currentPage - 1}`}
            type="button"
            className={`btn btn-primary`}
          >
            Prev
          </NavLink>
        )}

        {pageItems}

        {currentPage === lastPage ? (
          <button
            type="button"
            className={`btn btn-primary`}
            disabled={currentPage === lastPage}
          >
            Next
          </button>
        ) : (
          <NavLink
            to={`/${currentPage + 1}`}
            type="button"
            className={`btn btn-primary`}
          >
            Next
          </NavLink>
        )}
      </div>
    </>
  );
}

export default Pagination;
