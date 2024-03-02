import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getConversations = async () => {
      try {
        const res = await axios.get("/api/users");
        if (res.data.error) {
          throw new Error(res.data.error);
        }
        setConversations(res.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, [conversations]);

  return { loading, conversations };
};

export default useGetConversations;
