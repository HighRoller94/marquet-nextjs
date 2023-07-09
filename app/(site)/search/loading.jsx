"use client"

import Breadcrumbs from "@/components/Breadcrumbs";
import { useSearchParams } from 'next/navigation'

export default function loading() {
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('q')
  
  return (
    <div className="mx-auto w-full flex flex-col max-w-[1250px] px-4 lg:px-6 xl:px-0 mt-0">
      <Breadcrumbs />
      <div className="flex items-center justify-center flex-col my-[20px]">
        <p className="text-base">Your search results for:</p>
        <h1 className="text-4xl my-[10px] font-bold">"{searchParam}"</h1>
        <span className="text-xs text-neutral-600 font-sembold uppercase tracking-widest"> # results found</span>
      </div>
    </div>
  );
}

