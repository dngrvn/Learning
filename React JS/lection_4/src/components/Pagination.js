import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalProducts, productsPerPage, currentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <Link key={i} to={`/page/${i + 1}`}>
          {i + 1}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
