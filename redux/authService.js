import axios from "axios";

const register = async (userData) => { 
    const res = await axios.post('https://marquet-nextjs.vercel.app/api/users/', userData)
    return res.data
}

const authService = {
    register,
}

export default authService