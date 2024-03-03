import React, { useContext } from "react";
import useConversation from "../../hooks/useConversation";
import { AuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { userAuth } = useContext(AuthContext);
  const { selectedConversaion } = useConversation();
  const fromMe = message.senderId === userAuth._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? userAuth.profilePic
    : selectedConversaion?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";


  function extractTime(dateString) {
    function padZero(number) {
      return number.toString().padStart(2, "0");
    }
    const date = new Date(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
  }
  const formattedTime = extractTime(message.createdAt);
  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble ${bubbleBgColor} `}>{message.message}</div>
        <div className="chat-footer text-orange-900 opacity-50">{formattedTime}</div>
      </div>
    </div>
  );
};

export default Message;
