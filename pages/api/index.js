import dbConnect from '../../../util/mongo'
import User from '../../../models/Product'

export default async function handler(req, res) {
    const { method } = req;

    dbConnect()

    if (method ==="GET"){
        try {
            const products = await Product.find();
            res.status(200).json(products)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if (method ==="POST"){
        try {
            res.json({message: 'Register User'})
        } catch (err) {
            res.status(500).json(err)
        }
    }
  }
  