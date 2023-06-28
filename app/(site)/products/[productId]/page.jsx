import Breadcrumbs from "@/components/Breadcrumbs";
import { getProductById } from "@/lib/prisma/products";
import Product from "@/components/ProductPage/Product";
import MoreProducts from "@/components/MoreProducts/MoreProducts";
async function getProduct(productId) {
  const { product } = await getProductById(productId);
  if (!product) {
    throw new Error("Failed to fetch data");
  }
  return product;
}

export default async function Page({ params }) {
  const product = await getProduct(params.productId);

  return (
    <div className="px-0 mx-auto w-11/12 sm:w-full flex flex-col max-w-[1250px] lg:px-10 xl:px-0">
      <Breadcrumbs name={product?.name} />
      <Product product={product} />
      <MoreProducts product={product} />
    </div>
  );
}
