import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";


const MessagesInput = () => {
  const [message, setMessage] = useState("");
  const {loading,sendMessage} = useSendMessage()
  const handleSending =async (e) => {
    e.preventDefault();
    if(!message)return;
    await sendMessage(message)
    setMessage("")
  };
  return (
    <form className="px-4 my-3">
      <div className="relative">
        <input
          type="text"
          className=" w-full border text-sm p-2 rounded-lg block text-white border-gray-600 bg-slate-900"
          placeholder="Write a Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          onClick={handleSending}
        >
          {loading ? <div className='loading loading-spinner'></div> : <BsFillSendFill />}
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;
