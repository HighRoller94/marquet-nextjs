import ProductList from "@/components/ProductList";
import Breadcrumbs from "@/components/Breadcrumbs";
import SearchStyles from "../../../styles/pages/Search.module.scss";
import Newsletter from "@/components/Newsletter";
import Options from "@/components/Options";
import { getSearchedProducts } from "@/lib/prisma/products";
import LayoutStyles from "../../../styles/layout/Layout.module.scss";

export default async function Search({ searchParams }) {
  const searchParam = Object.values(searchParams)[0];
  const data = await getSearchedProducts(searchParam);
  const products = data.products

  return (
    <div>
      <div className={LayoutStyles.page}>
        {/* <Breadcrumbs /> */}
        <div className={SearchStyles.header}>
          <p>Your search results for:</p>
          <h1>"{searchParam}"</h1>
          <span>{products.length} results found</span>
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
        <Options />
        <Newsletter />
      </div>
    </div>
  );
}
