import SearchPageContent from "@/components/SearchPageContent";

import { getSearchedProducts } from "@/lib/prisma/products";

export const generateMetadata = ({ searchParams }) => {
  const searchParam = searchParams.q;
  return {
    title: `Search for '${searchParam}'`,
  };
};

export default async function Search({ searchParams }) {
  const searchParam = searchParams.q;
  const data = await getSearchedProducts(searchParam);
  const products = data.products;

  return (
    <div className="mx-auto w-full flex flex-col max-w-[1250px] px-4 lg:px-6 xl:px-0 mt-0">
      <div className="flex items-center justify-center flex-col my-7 mb-10 lg:mb-3 lg:mt-5 ">
        <p className="text-base">Your search results for:</p>
        <h1 className="text-3xl my-3 text-neutral-900 font-extrabold">
          "{searchParam}"
        </h1>
        <span className="text-xs text-neutral-600 font-sembold uppercase tracking-widest">
          {products.length} results found
        </span>
      </div>
      <SearchPageContent products={products} searchParam={searchParam} />
    </div>
  );
}
