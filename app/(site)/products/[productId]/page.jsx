// import { useSelector, useDispatch } from "react-redux";
// import { addProduct } from "@/redux/cartSlice";
import Newsletter from "@/components/Newsletter";
import Breadcrumbs from "@/components/Breadcrumbs";
import Options from "@/components/Options";
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
  const brand = product.brand
  return (
    <>
      <Breadcrumbs name={product?.name} />
      <Product product={product} />
      <MoreProducts brand={brand} />
      <Newsletter />
    </>
  );
}
