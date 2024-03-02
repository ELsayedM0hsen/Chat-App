import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import useConversation from "./useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversaion } = useConversation();
  useEffect(() => {
    setLoading(true);
    const getMessages = async () => {
      try {
        const res = await axios.get(`/api/messages/${selectedConversaion._id}`);
        if (res.data.error) {
          throw new Error(res.data.error);
        }
        setMessages(res.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversaion?._id) getMessages();
  }, [selectedConversaion?._id,setMessages]);

  return { loading, messages };
};

export default useGetMessages;
