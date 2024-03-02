import React from "react";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = false
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-900 px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-500 font-bold">Elsayed</span>
          </div>
          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-slate-900 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 ELSAYED ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};