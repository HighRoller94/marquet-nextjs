import ProductList from "@/components/ProductList";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getSearchedProducts } from "@/lib/prisma/products";

export default async function Search({ searchParams }) {
  const searchParam = Object.values(searchParams)[0];
  const data = await getSearchedProducts(searchParam);
  const products = data.products;
console.log(searchParam)
  return (
    <div className="mx-auto w-full flex flex-col max-w-[1250px] px-4 lg:px-10 xl:px-0 mt-8">
      <div className="flex items-center justify-center flex-col my-[20px]">
        <p className="text-base">Your search results for:</p>
        <h1 className="text-4xl my-[10px] font-bold">"{searchParam}"</h1>
        <span className="text-xs text-neutral-600 font-sembold uppercase tracking-widest">{products.length} results found</span>
      </div>
      <div>
        {products ? (
          <ProductList paramQuery={searchParam} products={products} />
        ) : (
          <div>
            <p>You have no items saved.</p>
          </div>
        )}
      </div>
    </div>
  );
}
