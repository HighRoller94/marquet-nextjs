import React from "react";
import Image from "next/image";

const Collection = () => {
  return (
    <section>
      <div className="max-w-[1250px] md:px-0  py-0 lg:py-8 mx-auto  lg:px-0 lg:pt-0 lg:pb-4">

        <ul className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
          <li>
            <a href="#" className="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-lg"
              />
              {/* <Image 
              src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              fill
              className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              /> */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-2xl font-medium text-white">Casual Trainers</h3>

                <span className="mt-1.5 inline-block bg-black px-6 py-3 text-xs lg:text-xs font-bold uppercase tracking-widest text-white rounded-md">
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="relative block group">
              <img
                src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-lg"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-2xl font-medium text-white">Winter Jumpers</h3>

                <span className="mt-1.5 inline-block bg-black px-6 py-3 text-xs lg:text-xs font-bold uppercase tracking-widest text-white rounded-md">
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="relative block group">
              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90 rounded-lg"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-2xl font-medium text-white">
                  Skinny Jeans Blue
                </h3>

                <span className="mt-1.5 inline-block bg-black px-6 py-3 text-xs lg:text-xs font-bold uppercase tracking-widest text-white rounded-md">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Collection;
