import React from "react";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

function Order({ order, index }) {
  const orderDate = dayjs(order.orderDate, "DD/MM/YYYY").format("YYYY-MM-DD");
  const deliveryDate = dayjs(order.deliveryDate, "DD/MM/YYYY").format(
    "YYYY-MM-DD"
  );

  function calculateProgress(startDate, endDate) {
    const totalDuration = endDate.diff(startDate);
  
    const currentDate = dayjs();
    const currentDuration = currentDate.diff(startDate);
    let progressPercentage = Math.round(
      (currentDuration / totalDuration) * 100
    );
  
    console.log(progressPercentage)
    if (progressPercentage < 33) {
      return `w-[30%]`;
    } else if (progressPercentage >= 33 && progressPercentage < 66) {
      return `w-[60%]`;
    } else {
      return `w-[${progressPercentage}%]`;
    }
  }
  

  const startDate = dayjs(orderDate);
  const endDate = dayjs(deliveryDate);
  
  const progress = calculateProgress(startDate, endDate);
  return (
    <div key={index} className="w-full bg-white p-8 mb-6">
      <div className="w-12/12 h-4 bg-neutral-200 rounded mb-2">
        <div
          className={`h-full rounded-md transtion-all duration-500 ease-in-out bg-neutral-800 ${progress}`}
        ></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between b-2 border-b py-4">
        <div className="w-full flex flex-col md:flex-row gap-x-2  text-neutral-700 uppercase tracking-wide font-medium">
          <h1 className="text-neutral-400 font-bold">Order Status:</h1>
          {progress === 100 ? <p>Delivered</p> : (progress < 33 ? <p>We've received your order</p> : <p>Out for delivery</p>)}
        </div>
        <div className="flex w-fit flex-col md:flex-row gap-x-2  text-neutral-700 uppercase tracking-wide font-medium">
          <h1 className="flex flex-nowrap whitespace-nowrap text-neutral-400 font-bold">
            ESTIMATED DELIVERY:
          </h1>
          <p>{order.deliveryDate}</p>
        </div>
      </div>
      <div className="flex b-2 border-b pb-4 flex-col  text-neutral-500 uppercase tracking-wide font-bold">
        <h1 className="pt-4">{order.products.length} Item{order.products.length > 1 ? "s" : ""}</h1>{" "}
        <div className="flex gap-x-4 my-4">
          {order.products.map((product, i) => (
            <div key={i} className="relative w-40 h-40">
              <Link
                href={{
                  pathname: `/products/${product.id}`,
                }}
              >
                <Image src={product.gallery[0]} alt={product.name} fill />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full pt-4 ">
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-2  text-neutral-500 uppercase tracking-wide font-bold">
            <p>Order Reference:</p>
            <p>{order.orderReference}</p>
          </div>
          <div className="flex gap-2  text-neutral-500 uppercase tracking-wide font-bold">
            <p>Order date:</p>
            <p>{order.orderDate}</p>
          </div>
        </div>
        <button className=" px-6 py-4 bg-neutral-400 uppercase tracking-widest font-semibold text-white hover:bg-neutral-600 transition rounded">
          View Order
        </button>
      </div>
    </div>
  );
}

export default Order;
