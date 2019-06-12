import React from "react";

function Pagination({ currentPage }) {
  return (
    <div id="pagination">
      <a id="previuos-page-button" href={`?page=${currentPage - 1}`}>
        &lt;
      </a>
      <a id="current-page-button" href={`?page=${currentPage}`}>
        {currentPage}
      </a>
      <a id="next-page-button" href={`?page=${Number(currentPage) + 1}`}>
        &gt;
      </a>
    </div>
  );
}

export default Pagination;
