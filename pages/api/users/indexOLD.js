import dbConnect from '../../../util/mongo'
import User from '../../../models/User'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs/dist/bcrypt';

export default async function handler(req, res) {
    const { method } = req;

    dbConnect()

    if (method === "GET"){
        try {
            const users = await User.find();
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if (method === "POST"){
        try {
            const { name, email, password } = req.body  
            
            if (!name || !email || !password) {
                res.status(400).json({message: 'Please add all fields'})
            }

            // Check if user exists
            const userExists = await User.findOne({ email })
            
            if (userExists) {
                res.status(400).json({message: 'User already exists'})
            }

            // Hash password
            const salt = await bcrypt.genSalt(10)
            const hashedPass = await bcrypt.hash(password, salt)

            // Create user 
            const user = await User.create({
                name,
                email,
                password: hashedPass
            })

            if (user) {
                res.status(201).json({
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    })
            } else {
                res.status(400).json({message: 'Register User'})
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }
  }

    // Generate Token

    const generateToken = (id) => {
        return jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: '1d',
        })
    }