import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getProductById } from "@/lib/prisma/products";
import Product from "@/components/ProductPage/Product";
import { getOrdersByEmail } from "@/lib/prisma/orders";
import MoreProducts from "@/components/MoreProducts/MoreProducts";

async function getProduct(productId) {
  const { product } = await getProductById(productId);
  if (!product) {
    throw new Error("Failed to fetch data");
  }
  return product;
}

export default async function Page({ params }) {
  const session = await getServerSession(authOptions);
  const product = await getProduct(params.productId);
  const pastOrders = await getOrdersByEmail(session?.user.email);

  return (
    <div className="px-4 mx-auto w-full flex flex-col max-w-[1250px] lg:px-6 xl:px-0">
      <Breadcrumbs name={product?.name} />
      <Product product={product} pastOrders={pastOrders.orders} />
      <MoreProducts product={product} />
    </div>
  );
}
