import axios from "axios";

const register = async (userData) => { 
    const res = await axios.post('http://localhost:3000/api/users/', userData)
    return res.data
}

const authService = {
    register,
}

export default authService