"use client";

import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useSearchParams } from 'next/navigation'

export default function Breadcrumbs({ name, searchQuery }) {
  const searchParams = useSearchParams()
  const searchParam = searchParams.get('q')

  function getCurrentURLParams() {
    const path = window.location.pathname;
    const params = path.split("/").filter((param) => param !== "");

    const breadcrumbs = params.map((path, index) => ({
      path: `/${params.slice(0, index + 1).join("/")}`,
      name: path.charAt(0).toUpperCase() + path.slice(1),
    }));

    return breadcrumbs;
  }

  const urlParams = getCurrentURLParams();

  return (
    <nav aria-label="Breadcrumb" className="flex flex-start max-w-[1440px] mx-auto mt-8 w-full">
      <ol className="flex items-center h-5 list-none">
        <li className="flex items-center text-sm opacity-60 hover:opacity-80 font-bold tracking-wide neutral-600">
          <Link href="/">Home</Link>
          <BsChevronRight className="mx-2 text-xs" />
        </li>
        <li className="flex items-center text-sm opacity-100 font-bold tracking-wide neutral-600">
          <Link href="/">Vans Shoes</Link>
        </li>
        {/* {name ? (
          <>
            <Link href={`${urlParams[1].path}`}>
              <li className={BreadCrumbsStyles.wrapper}>
                <BsChevronRight className={BreadCrumbsStyles.icon} />
                <span>Search results for "{searchParamValue}"</span>
              </li>
            </Link>
            <li className={BreadCrumbsStyles.wrapper}>
              <BsChevronRight className={BreadCrumbsStyles.icon} />
              <span>{name}</span>
            </li>
          </>
        ) : (
          <>
            {urlParams.map((breadcrumb, index) => (
              <li key={index} className={BreadCrumbsStyles.wrapper}>
                <BsChevronRight className={BreadCrumbsStyles.icon} />
                {currentPath.includes("search") ? (
                  <span>Search results for "{searchParamValue}"</span>
                ) : (
                  <Link href={urlParams.path}>{urlParams.name}</Link>
                )}
              </li>
            ))}
          </>
        )} */}
      </ol>
    </nav>
  );
}
