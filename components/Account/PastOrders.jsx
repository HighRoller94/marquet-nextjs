import React from "react";
import Order from "./Order";
import dayjs from "dayjs";

function PastOrders({ pastOrders }) {
  const dateComparator = (object1, object2) => {
    const timestamp1 = dayjs(object1.orderDate, "DD/MM/YYYY").unix();
    const timestamp2 = dayjs(object2.orderDate, "DD/MM/YYYY").unix();

    return timestamp1 - timestamp2;
  };

  const sortedArray = pastOrders.orders?.sort(dateComparator);

  console.log(sortedArray)
  return (
    <div className="flex flex-col w-full">
      <p className="pb-4 text-sm text-neutral-500 tracking-wide font-medium ">Displaying {sortedArray.length} orders</p>
      <div className="w-full gap-6">
        {sortedArray.reverse().map((order, i) => (
          <Order key={i} order={order} index={i} />
        ))}
      </div>
    </div>
  );
}

export default PastOrders;
