import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'

import dbConnect from '../../../util/mongo'
import bcrypt from 'bcryptjs';
import User from '../../../models/User'

export default NextAuth({
    session: { 
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req) {

                dbConnect();
                const { email, password } = credentials

                const user = await User.findOne({ email })
                if (!user) {
                    throw new Error('No user found with the email provided')
                }
                const checkPassword = await bcrypt.compare(password, user.password)

                if (!checkPassword) {
                    throw new Error('Password is incorrect')
                }
                return user;
            },
        })
    ],
    pages: {
        signIn: "/account/login"
    }
});
