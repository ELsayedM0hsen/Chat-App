import React from "react";
import { BsFillSendFill } from "react-icons/bs";

const MessagesInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="relative">
        <input
          type="text"
          className=" w-full border text-sm p-2 rounded-lg block text-white border-gray-600 bg-slate-900"
          placeholder="Write a Message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsFillSendFill />
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;
