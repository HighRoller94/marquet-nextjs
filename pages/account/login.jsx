import React, { useState, useEffect } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div>
                <h1>Login</h1>
            </div>

            <div>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={email}
                        placeholder="Enter your email"
                        onChange={onChange}
                    />
                    <input 
                        type="text" 
                        id="password" 
                        name="password" 
                        value={password}
                        placeholder="Enter your password"
                        onChange={onChange}
                    />
                    <button type="submit" className="btn">
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login