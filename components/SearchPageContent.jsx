"use client";

import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

function SearchPageContent({ products, searchParam }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <ProductList paramQuery={searchParam} products={currentPosts} />
      <Pagination
        products={products}
        totalPosts={products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
      />
    </>
  );
}

export default SearchPageContent;
