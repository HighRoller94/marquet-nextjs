"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import { useSearchParams } from "next/navigation";
import ProductPageSkel from "@/components/Skeletons/ProductPageSkel";

export default function loading() {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get("q");

  return (
    <div className="px-4 mx-auto w-full flex flex-col max-w-[1250px] lg:px-6 xl:px-0">
      <Breadcrumbs />
      <ProductPageSkel />
    </div>
  );
}
