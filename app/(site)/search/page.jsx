import ProductList from "@/components/ProductList";
import Breadcrumbs from "@/components/Breadcrumbs";
import Newsletter from "@/components/Newsletter";
import { getSearchedProducts } from "@/lib/prisma/products";

export default async function Search({ searchParams }) {
  const searchParam = Object.values(searchParams)[0];
  const data = await getSearchedProducts(searchParam);
  const products = data.products;

  return (
    <div>
      <Breadcrumbs />
      <div className="flex items-center justify-center flex-col my-[20px]">
        <p className="text-base">Your search results for:</p>
        <h1 className="text-4xl my-[10px] font-bold">"{searchParam}"</h1>
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
      <Newsletter />
    </div>
  );
}
