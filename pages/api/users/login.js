import dbConnect from '../../../util/mongo'
import User from '../../../models/User'

import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    const { method } = req;

    dbConnect()

    if (method ==="POST"){
        try {
            const { email, password } = req.body

            // Check user email
            const user = await User.findOne({ email })

            if (user && (await bcrypt.compare(password, user.password))) {
                res.status(201).json({
                    _id: user.id,
                    nmame: user.name,
                    email: user.email,
                })
            } else {
                res.status(400).json({message: "Invalid credentials"})
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }
  }
