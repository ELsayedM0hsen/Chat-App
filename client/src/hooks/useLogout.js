import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setUserAuth } = useContext(AuthContext);
  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/logout");
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      localStorage.removeItem("chat-user");
      setUserAuth(null);
      toast.success("See you later my Friend");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
};
export default useLogout;
