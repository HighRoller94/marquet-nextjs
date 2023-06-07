import { getProductById } from "@/lib/prisma/products"

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { productId } = req.query
      const { product, error } = await getProductById(productId)
      if (error) throw new Error(error)
      return res.status(200).json({ product })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler