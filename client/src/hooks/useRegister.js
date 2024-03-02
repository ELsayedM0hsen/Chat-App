import {  useContext, useState } from "react"

import axios from "axios"
import toast from "react-hot-toast"
import { AuthContext } from "../context/AuthContext"


const useRegister = ()=>{
    const [loading,setLoading] = useState(false)
    const {setUserAuth} = useContext(AuthContext)

    const register = async({username, email, gender, password, confirmPassword})=>{
        const success = handleInputErrors({email, username, password, confirmPassword, gender})
        if (!success) {return;}
        setLoading(true)
        try {
            const res = await axios.post("/api/auth/register",{email, username, password, confirmPassword, gender})
            if (res.data.error) {
                throw new Error(res.data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(res.data))
            setUserAuth(res.data)
            toast.success("Starting Chating To Your Best Friend")
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading,register}
}
export default useRegister


function handleInputErrors({ email, username, password, confirmPassword, gender }) {

    if (!email || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return false;
    }
    if (password.length < 8) {
        toast.error("Password must be at least 8 characters long");
        return false;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        toast.error("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    return true;
}