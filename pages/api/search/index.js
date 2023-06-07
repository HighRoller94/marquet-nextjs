import { getSearchedProducts } from "@/lib/prisma/products";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const searchParam = req.query.q;
      const results = await getSearchedProducts(searchParam);
      res.status(200).json(results);
      
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
