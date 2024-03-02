import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUserAuth } = useContext(AuthContext);
  const login = async ({ email, password }) => {
    
    const seccess = handleInputErrors({ email, password });
    if (!seccess) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(res.data));
      setUserAuth(res.data);
      toast.success("Welcome Back");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
export default useLogin;

function handleInputErrors({ email, password }) {
  if (!email || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address");
    return false;
  }
  return true;
}
