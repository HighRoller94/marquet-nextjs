"use client";
import Spinner from "@/components/spinner";

export default function loading() {
  return (
    <div className="mx-auto w-full flex flex-col max-w-[1250px] px-4 lg:px-6 xl:px-0  h-screen justify-center items-center mt-12 lg:mt-20">
      <Spinner />
    </div>
  );
}
