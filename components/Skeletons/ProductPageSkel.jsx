"use client";

export default function ProductPageSkel() {
  return (
    <div className="pb-16 mb-5 flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-between md:flex-row  max-w-[1050px] gap-4 mt-4 md:mt-8 w-full md:gap-4 lg:gap-8 lg:h-[1000px]">
        <div className="flex flex-col items-start md:md:sticky md:top-40 w-full lg:h-[650px]">
          <div className="flex flex-col-reverse w-full lg:flex-row md:gap-8 md:min-w-[360px]">
            <div
              id="imageGallery"
              className="grid mt-2 md:mt-0 grid-cols-4 sm:grid-cols-4 w-full lg:grid-cols-1 h-full lg:h-40 md:w-auto gap-2 md:gap-4"
            >
              {[...Array(5).keys()].map((i) => (
                <div
                  className="relative  bg-neutral-200  group w-full min-h-[70px] max-h-[70px] sm:min-h-[120px] cursor-pointer md:min-h-[70px] md:min-w-[70px] md:h-fit-content animate-pulse"
                  key={i}
                >

                </div>
              ))}
            </div>
            <div className="relative  bg-neutral-200  w-full h-full min-h-[300px] md:min-h-[500px] lg:min-h-[620px] md:max-w-[450px] animate-pulse"></div>
          </div>
        </div>
        <div className="mt-2 md:mt-5 max-w-[400px] md:max-w-[475px]">
          <span className="block mt-2 min-h-4 bg-neutral-200 animate-pulse min-w-10"></span>
          <h1 className="mt-3 text-4xl font-bold h-10 bg-neutral-200 animate-pulse w-10/12"></h1>
          <h1 className="text-xl my-2 font-bold h-7 bg-neutral-200 animate-pulse text-neutral-400 uppercase tracking-widest w-2/12"></h1>
          <div className="mt-8 flex items-center h-24 w-full bg-neutral-200 animate-pulse"></div>
          <button className="h-11 bg-neutral-200 animate-pulse w-full text-base uppercase font-medium my-9"></button>
          <div className="flex flex-col h-20 w-full  bg-neutral-200 animate-pulse"></div>
          <div className="flex flex-col w-full mt-6">
            <div className="flex gap-2 items-center h-8 bg-neutral-200 animate-pulse w-6/12">
              <h2 className="font-bold text-2xl"></h2>
            </div>
            <p className="mt-6 text-base  h-[400px] w-full bg-neutral-200 text-neutral-200 animate-pulse">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
