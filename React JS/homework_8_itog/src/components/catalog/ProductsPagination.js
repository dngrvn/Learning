import React from "react";
import { Link } from "react-router-dom";

const ProductsPagination = ({
  productsData,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  const maxPagesToShow = 3; // Максимальное количество отображаемых номеров страниц

  // Подготовка данных о продуктах и пагинации
  const totalProducts = productsData.length;
  const totalPages = Math.ceil(totalProducts / pageSize);

  // Вычисляем, какие страницы показывать в пагинации
  let startPage, endPage;
  if (totalPages <= maxPagesToShow) {
    // Если общее количество страниц меньше или равно максимальному числу страниц для отображения,
    // показываем все страницы
    startPage = 1;
    endPage = totalPages;
  } else {
    // Иначе, вычисляем, какие страницы показывать с учетом текущей страницы
    const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
    const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrent) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrent;
      endPage = currentPage + maxPagesAfterCurrent;
    }
  }

  // Формируем массив страниц для отображения
  const pages = [];
  for (let page = startPage; page <= endPage; page++) {
    pages.push(
      <Link
        key={page}
        to={`/catalog/page/${page}`}
        className={`products__pagination__number ${
          page === currentPage ? "products__pagination__number-active" : ""
        }`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Link>
    );
  }

  return (
    <div className="products__pagination">
      {/* Стрелка предыдущей страницы */}
      {currentPage > 1 && (
        <Link
          to={`/catalog/page/${currentPage - 1}`}
          className="products__pagination__number"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg
            width="8px"
            height="14px"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99512 2L2.99512 7L7.99512 12L6.99512 14L-0.00488281 7L6.99512 0L7.99512 2Z"
              fill="black"
            />
          </svg>
        </Link>
      )}

      {/* Многоточие в начале */}
      {startPage > 1 && (
        <>
          <Link
            to="/catalog/page/1"
            className="products__pagination__number"
            onClick={() => onPageChange(1)}
          >
            {1}
          </Link>
          {startPage > 2 && (
            <span className="products__pagination__number">...</span>
          )}
        </>
      )}

      {/* Отображаемые страницы */}
      {pages}

      {/* Многоточие в конце */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="products__pagination__number">...</span>
          )}
          <Link
            to={`/catalog/page/${totalPages}`}
            className="products__pagination__number"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </Link>
        </>
      )}

      {/* Стрелка следующей страницы */}
      {currentPage < totalPages && (
        <Link
          to={`/catalog/page/${currentPage + 1}`}
          className="products__pagination__number"
          onClick={() => onPageChange(currentPage + 1)}
        >
          <svg
            width="8px"
            height="14px"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.00500488 12L4.995 7L-0.00500488 2L0.994995 0L7.995 7L0.994995 14L-0.00500488 12Z"
              fill="black"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default ProductsPagination;
