import prisma from "./index";

export async function createOrder(order) {
  try {
    const createOrder = await prisma.order.create({ data: order });
    return { order: createOrder };
  } catch (error) {
    return { error };
  }
}

export async function getOrders() {
  try {
    const orders = await prisma.order.findMany();

    return { orders };
  } catch (error) {
    return { error };
  }
}

export async function getOrdersByEmail(email) {
  try {
    const orders = await prisma.order.findMany({
      where: {
        email: {
          contains: email,
          mode: "insensitive",
        },
      },
    });
    return { orders };
  } catch (error) {
    return { error };
  }
}
