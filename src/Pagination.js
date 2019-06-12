import React from "react";

function Pagination({ currentPage }) {
  return (
    <ul>
      <a href={`?page=${currentPage - 1}`} key={currentPage - 1}>
        &lt;
      </a>
      <a href={`?page=${currentPage}`} key={currentPage}>
        {currentPage}
      </a>
      <a
        href={`?page=${Number(currentPage) + 1}`}
        key={Number(currentPage) + 1}
        disabled
      >
        &gt;
      </a>
    </ul>
  );
}

export default Pagination;
