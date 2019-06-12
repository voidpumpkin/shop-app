import React from "react";
import "./Pagination.css";

function Pagination({ pageCount, currentPage }) {
  return (
    <div id="pagination" className="pagination">
      <a
        id="previuos-page-button"
        className={`pagination-page-button ${
          currentPage - 1 <= 0 ? "isDisabled" : ""
        }`}
        href={`?page=${currentPage - 1}`}
      >
        &lt;
      </a>
      <a
        id="current-page-button"
        className="pagination-page-button pagination-current-page-button "
        href={`?page=${currentPage}`}
      >
        {currentPage}
      </a>
      <a
        id="next-page-button"
        className={`pagination-page-button ${
          currentPage >= pageCount ? "isDisabled" : ""
        }`}
        href={`?page=${Number(currentPage) + 1}`}
      >
        &gt;
      </a>
    </div>
  );
}

export default Pagination;
