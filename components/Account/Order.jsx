import React from "react";
import Image from "next/image";
import Link from "next/link";

function Order({ order, index }) {
  const dayjs = require("dayjs-with-plugins");
  const orderDate = dayjs(order.orderDate, "DD/MM/YYYY").format("YYYY-MM-DD");
  const deliveryDate = dayjs(order.deliveryDate, "DD/MM/YYYY").format(
    "YYYY-MM-DD"
  );

  const startDate = dayjs(orderDate);
  const endDate = dayjs(deliveryDate);

  function calculateTimeProgress(startDate, endDate) {
    const now = dayjs();
    const startDateTime = dayjs(startDate);
    const endDateTime = dayjs(endDate);

    const elapsedTime = now.diff(startDateTime); // Difference between now and start date
    const totalTimeSpan = endDateTime.diff(startDateTime); // Difference between end date and start date

    const progressPercentage = (elapsedTime / totalTimeSpan) * 100;

    if (progressPercentage.toFixed(2) > 100) {
      return 100;
    }
    return progressPercentage.toFixed(2); // Return the progress with two decimal places
  }

  const progress = calculateTimeProgress(startDate, endDate);

  const divStyle = {
    width: `${Math.round(progress)}%`,
  };

  return (
    <div key={index} className="w-full bg-white p-8 mb-6">
      <div className="w-12/12 h-3.5  bg-neutral-200 rounded-full mb-2">
        <div
          className={`h-full rounded-full transtion-all duration-500 ease-in-out bg-green-400`}
          style={divStyle}
        ></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between b-2 border-b py-4">
        <div className="w-full flex flex-col md:flex-row gap-x-2 md:items-center text-neutral-700 tracking-wide">
          <h1 className="text-neutral-400 font-bold text-sm py-2 uppercase ">
            Order Status:
          </h1>
          {progress === 100 ? (
            <p className="font-bold -mt-0.5">Delivered!</p>
          ) : progress < 33 ? (
            <p className="font-bold -mt-0.5">We've received your order</p>
          ) : (
            <p className="font-bold -mt-0.5">Out for delivery</p>
          )}
        </div>
        <div className="flex w-fit flex-col md:flex-row gap-x-2 md:items-center  text-neutral-700 uppercase tracking-wide">
          <h1 className="flex flex-nowrap whitespace-nowrap py-2 text-neutral-400 text-sm font-bold">
            Estimated Delivery:
          </h1>
          <p className="font-bold -mt-0.5">{order.deliveryDate}</p>
        </div>
      </div>
      <div className="flex b-2 border-b pb-4 flex-col  text-neutral-500 uppercase tracking-wide font-bold">
        <h1 className="pt-4">
          {order.products.length} Item{order.products.length > 1 ? "s" : ""}
        </h1>{" "}
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
          <div className="flex gap-2 flex-col md:flex-row  items-center uppercase tracking-wide font-bold">
            <p className="py-1 text-sm  text-neutral-500">Order Reference:</p>
            <p className="text-neutral-700">{order.orderReference}</p>
          </div>
          <div className="flex gap-2 flex-col md:flex-row items-center   uppercase tracking-wide font-bold">
            <p className="py-1 text-sm text-neutral-500">Order date:</p>
            <p className="text-neutral-700">{order.orderDate}</p>
          </div>
        </div>
        <button className="hidden lg:flex px-6 py-3 items-center h-fit justify-center bg-neutral-400 uppercase tracking-widest font-semibold text-white hover:bg-neutral-600 transition rounded">
          View Order
        </button>
      </div>
    </div>
  );
}

export default Order;
