import Breadcrumbs from "@/components/Breadcrumbs";

export default async function loading({ searchParams }) {
  console.log(searchParams)
  return (
    <>
      <div className="flex items-center justify-center flex-col my-[20px]">
        <p className="text-base">Your search results for:</p>
        <h1 className="text-4xl my-[10px]  bg-neutral-300 animate-pulse h-[40px] w-[150px]"></h1>
        <span className="text-xs text-neutral-600 font-sembold uppercase tracking-widest"> # results found</span>
      </div>
    </>
  );
}

