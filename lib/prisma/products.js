import prisma from './index'

export async function getProducts() {
  try {
    const products = await prisma.product.findMany()
    return { products }
  } catch (error) {
    return { error }
  }
}

export async function createProduct(product) {
  try {
    const productFromDb = await prisma.product.create({ data: product })
    return { product: productFromDb }
  } catch (error) {
    return { error }
  }
}

export async function getProductById(id) {
  try {
    const product = await prisma.product.findUnique({
      where: { id }
    })
    return { product }
  } catch (error) {
    return { error }
  }
}