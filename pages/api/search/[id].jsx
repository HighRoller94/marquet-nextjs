import dbConnect from "@/util/mongo";
import Product from "@/models/Product";

export default async function handler(req, res) {
  dbConnect();

  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      const regex = new RegExp(id, "i");
      const results = await performSearch(regex);
      res.status(200).json(results);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

async function performSearch(regex) {
  // Add your search logic here, e.g. query a database or call an external API
  // and return the results as an array or object
  // For this example, we'll just return a static list of results
  const results = await Product.find({
    "$or":[
        {name:regex}
    ]
  })

  return results;
}