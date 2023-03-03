import React, { useState, useEffect } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

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
                <h1>Register</h1>
                <p>Join Marquet</p>
            </div>

            <div>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={name}
                        placeholder="Enter your name"
                        onChange={onChange}
                    />
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
                    <input 
                        type="text" 
                        id="password2" 
                        name="password2" 
                        value={password2}
                        placeholder="Re-enter your password"
                        onChange={onChange}
                    />
                    <button type="submit" className="btn">
                        Join Marquet
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register