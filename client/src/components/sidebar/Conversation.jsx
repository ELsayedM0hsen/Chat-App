import React from "react";
import useConversation from "../../hooks/useConversation";

const Conversation = ({conversation,lastIndex,emoji}) => {
 const {selectedConversaion,setSelectedConversaion} = useConversation()
 const isSelected = selectedConversaion?._id === conversation._id
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-blue-300 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-green-500" : ""}`}
      onClick={()=>{setSelectedConversaion(conversation)}}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-black">{conversation.username}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider divider-accent my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
