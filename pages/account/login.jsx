import React, { useState } from 'react'
import Head from 'next/head';
import { signIn, useSession, signOut } from 'next-auth/react'
import Link from 'next/link';
import { motion } from "framer-motion";

import LoginStyles from '../../styles/components/Login.module.scss'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useDispatch } from "react-redux";

import LayoutStyles from '../../styles/layout/Layout.module.scss'
import { loginUser } from "@/redux/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const { data } = useSession();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData
    const [hidden, setHidden] = useState(false)
    const [passState, setPassState] = useState('Password')
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handlePass = () => {
        setHidden(!hidden)
        if (passState === 'Text') {
            setPassState('Password')
        } else {
            setPassState('Text')
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            dispatch(loginUser({ ...formData }))
            const data = await signIn('credentials', {
                redirect: false,
                email,
                password
            })

            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Head>
                <title>Marquet | Login</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/MarquetLogo.ico" />
            </Head>
            <motion.div 
                className={LayoutStyles.page}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                {!data?.user ? (
                    <div className={LoginStyles.container}>
                        <div className={LoginStyles.loginHeader}>
                            <h1>Sign In</h1>
                        </div>
                        <form className={LoginStyles.form} onSubmit={onSubmit}>
                            <div className={LoginStyles.field}>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={onChange}
                                    required
                                />

                            </div>
                            <div className={LoginStyles.field}>
                                <input
                                    autoComplete="off"
                                    type={passState}
                                    id="password"
                                    name="password"
                                    value={password}
                                    placeholder="******"
                                    onChange={onChange}
                                    required
                                />
                                {hidden ? (
                                    <div className={LoginStyles.iconContainer} onClick={handlePass}>
                                        <AiFillEyeInvisible className={LoginStyles.icon} />
                                    </div>
                                ) : (
                                    <div className={LoginStyles.iconContainer} onClick={handlePass}>
                                        <AiFillEye className={LoginStyles.icon} />
                                    </div>
                                )}
                            </div>
                            <button className={LoginStyles.signInBtn} type="submit" >
                                Sign In
                            </button>
                        </form>
                        <Link href="/account/register">
                            <p className={LoginStyles.createAcc}>Don't have an account?</p>
                        </Link>
                    </div>
                ) : (
                    <div className={LoginStyles.container}>
                        <div className={LoginStyles.header}>
                            <h1>Hey, {data?.user?.name.replace(/ .*/, '')}</h1>
                        </div>
                        <button className={LoginStyles.signOutBtn} onClick={() => signOut()}>
                            Logout
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    )
}

export default Login
