import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="btn btn-circle text-black hover:bg-cyan-200 border-none bg-yellow-200"
      >
        <CiSearch className="w-4 h-4" />
      </button>
    </form>
  );
};

export default Search;
