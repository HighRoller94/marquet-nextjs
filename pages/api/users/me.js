import dbConnect from '../../../util/mongo'
import User from '../../../models/Product'

export default async function handler(req, res) {
    const { method } = req;

    dbConnect()

    if (method === "GET") {
        try {
          const user = await User.findById(id);
          res.status(200).json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      }
  }
  