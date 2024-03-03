import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../hooks/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversaion } = useConversation();
  const { conversations } = useGetConversations();

  const handleSearch = (e) => {
    e.preventDefault();
    if(!search)return;
    if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}
    const conversation = conversations.find((c)=>c.username.toLowerCase().includes(search.toLowerCase()))
    if (conversation) {
			setSelectedConversaion(conversation);
			setSearch("");
		} else toast.error("No such user found!");
  };
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle text-black hover:bg-cyan-200 border-none bg-yellow-200"
        onClick={handleSearch}
      >
        <CiSearch className="w-4 h-4" />
      </button>
    </form>
  );
};

export default Search;
