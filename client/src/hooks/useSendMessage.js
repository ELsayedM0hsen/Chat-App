import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import useConversation from "./useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversaion } = useConversation();

  setLoading(true);
  const sendMessage = async (message) => {
    try {
      const res = await axios.post(
        `/api/messages/send/${selectedConversaion._id}`,
        message
      );
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      setMessages([...messages, res.data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
