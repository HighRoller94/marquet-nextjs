import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Pagination({
  products,
  totalPosts,
  setCurrentPage,
  currentPage,
  postsPerPage,
}) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const [activePage, setActivePage] = useState(1);

  let pages = [];

  for (let i = 0; i < totalPages + 1; i++) {
    if (i > 0) {
      pages.push(i);
    }
  }

  const setActive = (currentPage) => {
    setActivePage(currentPage);
  };

  const getFirstPageIndex = (currentPage) => {
    if (currentPage - 2 >= totalPages - 2) {
      if (currentPage - 2 === 0) {
        return 1;
      }
      return totalPages - 2;
    } else {
      if (currentPage - 1 <= 0) {
        return 1;
      } else {
        return currentPage - 1;
      }
    }
  };

  const getMiddlePageIndex = (currentPage) => {
    if (currentPage - 1 >= totalPages - 1) {
      if (currentPage - 2 === 0) {
        return 2;
      } else {
        return totalPages - 1;
      }
    } else {
      if (currentPage <= 1) {
        return 2;
      } else {
        return currentPage;
      }
    }
  };

  const getLastPageIndex = (currentPage) => {
    if (currentPage + 1 >= totalPages) {
      return totalPages;
    } else {
      if (currentPage + 1 === 2 || Math.ceil(totalPosts / postsPerPage) < 3) {
        return 3;
      } else {
        return currentPage + 1;
      }
    }
  };

  console.log(activePage);
  console.log(getMiddlePageIndex(currentPage));

  return (
    <div className="flex items-center justify-between py-12 pb-16">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="flex gap-1 text-sm text-gray-700">
            Showing
            <span className="font-medium">
              {postsPerPage * currentPage - postsPerPage === 0
                ? "1"
                : postsPerPage * currentPage - postsPerPage}
            </span>
            to
            <span className="font-medium">
              {postsPerPage * currentPage < products.length
                ? postsPerPage * currentPage
                : products.length}
            </span>
            of
            <span className="font-medium">{products.length}</span>
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md"
            aria-label="Pagination"
          >
            {currentPage == 1 ? (
              ""
            ) : (
              <div
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  setActivePage(activePage - 1);
                }}
                className="items-center justify-center cursor-pointer flex"
              >
                <BiChevronLeft size={20} />
              </div>
            )}
            {totalPages == 1 ? (
              ""
            ) : (
              <button
                className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20  ${
                  activePage === getFirstPageIndex(currentPage)
                    ? "text-neutral-50 bg-neutral-600"
                    : "bg-neutral-50 text-neutral-600"
                } `}
                onClick={() => {
                  setCurrentPage(getFirstPageIndex(currentPage));
                  setActive(getFirstPageIndex(currentPage));
                }}
              >
                {getFirstPageIndex(currentPage)}
              </button>
            )}
            {totalPages >= 2 ? (
              <button
                className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${
                  activePage === getMiddlePageIndex(currentPage)
                    ? "text-neutral-50 bg-neutral-600"
                    : "bg-neutral-50 text-neutral-600"
                } `}
                onClick={() => {
                  setCurrentPage((currentPage) => {
                    if (totalPages > 3) {
                      return 2;
                    } else {
                      return getMiddlePageIndex(currentPage);
                    }
                  });
                  setActive(getMiddlePageIndex(currentPage));
                }}
              >
                {totalPages > 3 ? getMiddlePageIndex(currentPage) : 2}
              </button>
            ) : (
              ""
            )}

            {totalPages >= 3 ? (
              <button
                className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${
                  activePage === getLastPageIndex(currentPage)
                    ? "text-neutral-50 bg-neutral-600"
                    : "bg-neutral-50 text-neutral-600"
                } `}
                onClick={() => {
                  setCurrentPage(getLastPageIndex(currentPage));
                  setActive(getLastPageIndex(currentPage));
                }}
              >
                {getLastPageIndex(currentPage)}
              </button>
            ) : (
              ""
            )}
            {currentPage == totalPages ? (
              ""
            ) : (
              <div
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  setActivePage(activePage + 1);
                }}
                className="items-center cursor-pointer justify-center flex pl-1"
              >
                <BiChevronRight size={20} />
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
